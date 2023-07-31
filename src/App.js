import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import TodoList from './TodoList.js'
import unsplash from './unsplash.jpg';
import './styles.css';


function lpp() {
  return (
    <div className="lpp">
      <Header />
      <header className="lpp-header">
        <img src={unsplash} className="lpp-logo" alt="logo" />
      
        <TodoList />
      </header>
       <p><Footer/></p>
    </div>

    
  );
}

export default lpp;





