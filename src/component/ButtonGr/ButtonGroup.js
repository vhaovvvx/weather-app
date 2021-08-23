import React, { useState } from 'react';

const ButtonGroup = ({ buttons, shows }) => {
  const query = 'Today';
  const [clickedId, setClickedId] = useState(-1);
  const [actived, setActived] = useState(0);

  const handleClick = (event, id) => {
    setClickedId(id);
    shows(event);
    if (actived === 0) {
      setActived('');
    }
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          value={query}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={
            i === actived
              ? 'btn actived'
              : 'btn ' && (i === clickedId ? 'btn actived' : 'btn')
          }
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;
