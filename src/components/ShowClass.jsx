import React from 'react';

const ShowClass = ({ langs, unkLangs, setLangs, setUnknownLangs }) => {
  
  const handleKnownLangsChange = (event) => {
    const newLangs = event.target.value.split(',').map(lang => lang.trim());
    setLangs(newLangs); 
  };

  const handleUnknownLangsChange = (event) => {
    const newLangs = event.target.value.split(',').map(lang => lang.trim());
    setUnknownLangs(newLangs); 
  };

  return (
    <>
      <h2>You know: {langs.join(', ')}</h2>
      <input 
        type="text" 
        value={langs.join(', ')} 
        onChange={handleKnownLangsChange} 
      />
      
      <h2>You dont know: {unkLangs.join(', ')}</h2>
      <input 
        type="text" 
        value={unkLangs.join(', ')} 
        onChange={handleUnknownLangsChange} 
      />
    </>
  );
};

export default ShowClass;