import './SleepingArrangements.css';

interface SleepingCard {
  id: string;
  roomName: string;
  bedType: string;
  imageSrc: string;
}

const SLEEPING_CARDS: SleepingCard[] = [
  {
    id: 'bedroom',
    roomName: 'Bedroom',
    bedType: '1 double bed',
    imageSrc: '/assets/images/listing/photo-04.jpg'
  },
  {
    id: 'living-room',
    roomName: 'Living room',
    bedType: '1 sofa',
    imageSrc: '/assets/images/listing/photo-02.jpg'
  }
];

export function SleepingArrangements() {
  return (
    <section className="sleeping-arrangements-section" aria-labelledby="sleeping-heading">
      <h2 id="sleeping-heading" className="sleeping-section-title">Where you'll sleep</h2>

      <div className="sleeping-cards-grid">
        {SLEEPING_CARDS.map((card) => (
          <div key={card.id} className="sleeping-card">
            <div className="sleeping-img-wrap">
              <img
                src={card.imageSrc}
                alt={card.roomName}
                className="sleeping-thumbnail-img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="sleeping-card-body">
              <h3 className="sleeping-room-name">{card.roomName}</h3>
              <p className="sleeping-bed-type">{card.bedType}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
