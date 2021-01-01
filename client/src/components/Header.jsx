import React from 'react';

const Header = () => {
  return (
    <header className='header-container'>
      <h3>notYouTube</h3>
      <form className='header-form'>
        <label className='header-search-label' htmlFor="queryName"></label>
        <input type="text" name="queryName" className="header-search-input"/>
        <input className='header-search-submit' type="submit" value="Search"/>
      </form>
    </header>
  );
};

export default Header;