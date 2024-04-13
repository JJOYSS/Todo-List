import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={headingStyle}>TODO LIST</h1>
    </header>
  );
};

const headerStyle = {
    backgroundColor: '#3498db', 
    padding: '20px', 
    textAlign: 'center', 
    marginBottom: '70px',
    marginTop: '160px', 
    borderRadius: '20px',
  };

const headingStyle = {
  fontFamily: 'Bebas Neue, sans-serif', 
  fontSize: '3rem', 
  color: '#050606', 
  textTransform: 'uppercase',
};

export default Header;
