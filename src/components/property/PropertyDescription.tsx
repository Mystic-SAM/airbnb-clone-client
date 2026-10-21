import { useState } from 'react';
import { ChevronRightIcon } from '../common/Icons';
import './PropertyDescription.css';

interface PropertyDescriptionProps {
  description: string;
}

export function PropertyDescription({ description }: PropertyDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="_YidPyi">
      {/* Translation notice banner _yWMtoE */}
      <div className="_yWMtoE">
        <span>
          Some info has been automatically translated.{' '}
          <a href="#original" onClick={(e) => e.preventDefault()}>Show original</a>
        </span>
      </div>

      {/* Description text */}
      <p id="descText" className={`property-desc-text ${isExpanded ? 'expanded' : '_kfKUOt'}`}>
        {description}
      </p>

      {/* Show more toggle */}
      <button
        type="button"
        className="_yWwrkC"
        id="descMore"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? 'Show less' : 'Show more'}</span>
        <span className="_VUbbfz">
          <ChevronRightIcon />
        </span>
      </button>
    </div>
  );
}
