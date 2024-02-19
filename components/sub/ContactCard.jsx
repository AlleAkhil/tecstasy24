import React from 'react';

const ContactCard = ({ name, phoneNumber, imageSrc, iconSize }) => {
  return (
    <div style={{ textAlign: 'center', color: 'rgb(229 231 235 )', margin: '10px', }}>
      <img
        src={imageSrc}
        alt=""
        style={{
          width: '100%',
          maxWidth: '150px', // Define maximum width if needed
          height: 'auto',
          borderRadius: '50%',
          borderColor: '#2A0E61',
          borderWidth: '4px'
        }}
      />
      <div style={{fontWeight: 'bolder', fontSize: '1rem', marginTop: '10px'}}>{name}</div>
      <div style={{fontWeight: 'bolder', fontSize: '0.9rem'}}>{phoneNumber}</div>
    </div>
  );
};

export default ContactCard;
