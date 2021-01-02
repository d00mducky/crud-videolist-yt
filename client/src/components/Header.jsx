import React from 'react';

const Header = () => {
  return (
    <header className='header-container'>
      <nav>
        <a href="">
          <h3 id='header-logo'>notYouTube</h3>
        </a>
        <form className='header-form'>
          <input type='text' name='queryName' className='header-search-input'/>
          <input className='header-search-submit' type='submit' value='Search'/>
        </form>
      </nav>
    </header>
  );
};

export default Header;