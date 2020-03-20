import React from 'react';

const NavButton = ({ open, setOpen }) => {
  return (
    <button className="nav-button" open={open} onClick={() => setOpen(!open)}>
      <i className="stack-menu" />
    </button>
  )
};

export default NavButton;
