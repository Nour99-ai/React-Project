import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from './components/JsxComp/headerComp';
import Sidebar from './components/JsxComp/sidebar';
import Card from './components/JsxComp/post';
import "./components/Css/header.css"
import "./components/Css/post.css"
import "./components/Css/sidebar.css"
import React from 'react';



function App() {
  return (
    <div className='app'>
        <HeaderComp/>
        <Sidebar/>
        <Card usrname="Bob" spcltitle="video game project" message="mama is cool!" />
        
    </div>
  );
}

export default App;
