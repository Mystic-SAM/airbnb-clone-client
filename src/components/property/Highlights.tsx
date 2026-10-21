import { Highlight } from '../../types/listing';
import { PoolIcon, SnowflakeIcon, KeyIcon } from '../common/Icons';
import './Highlights.css';

interface HighlightsProps {
  highlights: Highlight[];
}

export function Highlights({ highlights }: HighlightsProps) {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'pool':
        return <PoolIcon />;
      case 'snowflake':
        return <SnowflakeIcon />;
      case 'key':
        return <KeyIcon />;
      default:
        return <PoolIcon />;
    }
  };

  return (
    <div className="highlights-section">
      {highlights.map((item) => (
        <div key={item.id} className="highlight-item-row">
          <div className="highlight-icon-wrap" aria-hidden="true">
            {getHighlightIcon(item.iconName)}
          </div>
          <div className="highlight-text-stack">
            <h3 className="highlight-item-title">{item.title}</h3>
            <p className="highlight-item-desc">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
