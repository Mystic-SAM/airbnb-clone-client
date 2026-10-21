export const KEY_CODES = {
  ESCAPE: 'Escape',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ENTER: 'Enter',
  SPACE: ' ',
  TAB: 'Tab'
} as const;

export function isEscapeKey(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === KEY_CODES.ESCAPE;
}

export function isArrowLeftKey(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === KEY_CODES.ARROW_LEFT;
}

export function isArrowRightKey(e: KeyboardEvent | React.KeyboardEvent): boolean {
  return e.key === KEY_CODES.ARROW_RIGHT;
}
