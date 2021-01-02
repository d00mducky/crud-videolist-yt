import React from 'react';

const Header = (props) => {

  const userSearchSubmitHandler = (event) => {
  }


  return (
    <header className='header-container'>
      <nav>
        <a href="">
          <h3 id='header-logo'>notYouTube</h3>
        </a>
        <form onSubmit={(event) => {props.userInputSubmitHandler(event)}} className='header-form'>
          <input type='text' name='queryName'
          onChange={(event) => {props.userInputChangeHandler(event)}}
          className='header-search-input' />
          <input className='header-search-submit' type='submit' value='Search'/>
        </form>
      </nav>
    </header>
  );
};

export default Header;