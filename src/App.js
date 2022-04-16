import './App.css';
import Square from './components/Square';
import Nav from './components/Nav';
import React, { useState } from 'react';
import Work from './components/Work';
import About from './components/About';
import Connect from './components/Connect';

const squares = {
  "home": {
    sqrId: "square-home",
    navId: "nav-home",
    name: "home",
    navStyleKlass: "active-nav-home",
    squareStyleKlass: "active-square-home",
  },
  "work": {
    sqrId: "square-work",
    navId: "nav-work",
    name: "work",
    navStyleKlass: "active-nav-work",
    squareStyleKlass: "active-square-work",
  },
  "about": {
    sqrId: "square-about",
    navId: "nav-about",
    name: "about",
    navStyleKlass: "active-nav-about",
    squareStyleKlass: "active-square-about",
  },
  "connect": {
    sqrId: "square-connect",
    navId: "nav-connect",
    name: "connect",
    navStyleKlass: "active-nav-connect",
    squareStyleKlass: "active-square-connect",
  },
};

function App() {
  const [activeSquareName, setActiveSquareName] = useState("home");

  function handleActiveSquare(clickedSquareName) {
    const bigSquareClasses = document.getElementById("square").classList;
    const navLinkToActivate = document.getElementById(squares[clickedSquareName].navId).classList;
    console.log("nav link to activate id: ", squares[clickedSquareName].navId);

    if (squares[activeSquareName] !== squares[clickedSquareName]) {
      console.log("Active nav link id: ", squares[activeSquareName].navId);
      const activeNavLink = document.getElementById(squares[activeSquareName].navId).classList;

      bigSquareClasses.remove(squares[activeSquareName].squareStyleKlass);
      activeNavLink.remove(squares[activeSquareName].navStyleKlass);
      bigSquareClasses.add(squares[clickedSquareName].squareStyleKlass);
      navLinkToActivate.add(squares[clickedSquareName].navStyleKlass);
    }

    setActiveSquareName(clickedSquareName)
  }

  return (
    <main className="App">
      <Nav handleActiveNavLink={handleActiveSquare} />
      <header className="Root-Header">
        <h1>DANIEL BERRYMAN</h1>
        <h3>Full Stack Developer</h3>
      </header>
      <Square handleActiveSquare={handleActiveSquare} />
      {activeSquareName === "work" &&
        <Work />
      }
      {activeSquareName === "about" &&
        <About />
      }
      {activeSquareName === "connect" &&
        <Connect />
      }
    </main>
  );
}

export default App;
