import { useState } from 'react';

function ExpandableText(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpansion() {
    setIsExpanded(!isExpanded);
  }


  return (
    <div>
      <p className={`expandable-text ${isExpanded ? '' : 'expandable-text-preview'}`} onClick={toggleExpansion}>
        {isExpanded ? props.text : props.previewText}
      </p>
      {isExpanded && <p>{props.text}</p>}
    </div>
  );
}


export default ExpandableText