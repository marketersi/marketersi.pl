import React, { useState, useEffect } from 'react';

const Accordion = ({ label, content, activeTab, index, activateTab }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = document.querySelector(`#panel-${index}`);
    const innerHeight = el.querySelector('.panel__inner').scrollHeight;
    setHeight(innerHeight);
  }, [index]);

  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };

  return (
    <div className='panel' role='tabpanel' aria-expanded={isActive}>
      <button className='panel__label' role='tab' onClick={activateTab}>
        {label}
      </button>
      <div className='panel__inner' style={innerStyle} aria-hidden={!isActive}>
        <p className='panel__content'>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
