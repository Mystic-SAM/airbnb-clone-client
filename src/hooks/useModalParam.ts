import { useState, useEffect, useCallback } from 'react';
import { ModalType } from '../types/gallery';

interface ModalState {
  modal: ModalType;
  photoIndex: number;
  photoId?: string | number;
}

function parseUrlParams(): ModalState {
  if (typeof window === 'undefined') return { modal: 'NONE', photoIndex: 0 };
  const params = new URLSearchParams(window.location.search);
  const modalParam = params.get('modal');
  const modalItemParam = params.get('modalItem');

  if (modalParam === 'PHOTO_TOUR_SCROLLABLE' && modalItemParam !== null) {
    const idx = parseInt(modalItemParam, 10);
    return { modal: 'LIGHTBOX', photoIndex: isNaN(idx) ? 0 : Math.max(0, idx - 1000) };
  }
  if (modalParam === 'PHOTO_TOUR_SCROLLABLE') {
    return { modal: 'PHOTO_TOUR', photoIndex: 0 };
  }
  if (modalParam === 'AMENITIES') {
    return { modal: 'AMENITIES', photoIndex: 0 };
  }
  return { modal: 'NONE', photoIndex: 0 };
}

export function useModalParam() {
  const [modalState, setModalState] = useState<ModalState>(parseUrlParams);

  // Sync state changes with URL
  const updateUrl = useCallback((modal: ModalType, photoIndex: number) => {
    const url = new URL(window.location.href);
    if (modal === 'PHOTO_TOUR') {
      url.searchParams.set('modal', 'PHOTO_TOUR_SCROLLABLE');
      url.searchParams.delete('modalItem');
    } else if (modal === 'LIGHTBOX') {
      url.searchParams.set('modal', 'PHOTO_TOUR_SCROLLABLE');
      url.searchParams.set('modalItem', (1000 + photoIndex).toString());
    } else if (modal === 'AMENITIES') {
      url.searchParams.set('modal', 'AMENITIES');
      url.searchParams.delete('modalItem');
    } else {
      url.searchParams.delete('modal');
      url.searchParams.delete('modalItem');
    }
    if (url.toString() !== window.location.href) {
      window.history.pushState({}, '', url.toString());
    }
  }, []);

  const openModal = useCallback((modal: ModalType, photoIndex: number = 0, photoId?: string | number) => {
    setModalState({ modal, photoIndex, photoId });
    updateUrl(modal, photoIndex);
  }, [updateUrl]);

  const closeModal = useCallback(() => {
    setModalState({ modal: 'NONE', photoIndex: 0, photoId: undefined });
    updateUrl('NONE', 0);
  }, [updateUrl]);

  const setPhotoIndex = useCallback((idx: number) => {
    setModalState(prev => ({ ...prev, photoIndex: idx }));
    updateUrl('LIGHTBOX', idx);
  }, [updateUrl]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setModalState(parseUrlParams());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync body scroll locking
  useEffect(() => {
    if (modalState.modal !== 'NONE') {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalState.modal]);

  return {
    modal: modalState.modal,
    photoIndex: modalState.photoIndex,
    photoId: modalState.photoId,
    openModal,
    closeModal,
    setPhotoIndex
  };
}
