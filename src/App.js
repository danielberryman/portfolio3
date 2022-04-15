import './App.css';
import Square from './components/Square';
import Nav from './components/Nav';

const activeSquareClasses = [
  "Active-Square-Home",
  "Active-Square-Work",
  "Active-Square-About",
  "Active-Square-Contact"
];

function App() {
  function turn(sqr) {
    const c = document.getElementById("big-square").classList;

    let squareClassToAdd = "";
    const activeSquareClass = getActiveSquareClass(c);

    switch (sqr) {
      case 0:
        squareClassToAdd = "Active-Square-Home";
        break;
      case 1:
        squareClassToAdd = "Active-Square-Work";
        break;
      case 2:
        squareClassToAdd = "Active-Square-About";
        break;
      case 3:
        squareClassToAdd = "Active-Square-Contact";
        break;
      default:
        break;
    }

    const sqrClassToAddName = squareClassToAdd.slice(14).toLowerCase();
    const navLinkToActivate = document.getElementById(`nav-${sqrClassToAddName}`).classList;

    if (!activeSquareClass) {
      c.add(squareClassToAdd);
      navLinkToActivate.add(`nav-${sqrClassToAddName}-active`);
    } else if (activeSquareClass !== squareClassToAdd) {
      const activeSqrName = activeSquareClass.slice(14).toLowerCase();
      const activeNavLink = document.getElementById(`nav-${activeSqrName}`).classList;
      c.remove(activeSquareClass);
      activeNavLink.remove(`nav-${activeSqrName}-active`);
      c.add(squareClassToAdd);
      navLinkToActivate.add(`nav-${sqrClassToAddName}-active`);
    }
  }

  function getActiveSquareClass(el) {
    for (let c of activeSquareClasses) {
      if (el.contains(c)) {
        return c;
      }
    }
    return "";
  }

  return (
    <main className="App">
      <Nav handleNavLink={turn} />
      <header className="Root-Header">
        <h1>DANIEL BERRYMAN</h1>
        <h2>Full Stack Developer</h2>
      </header>
      <Square turn={turn} />
    </main>
  );
}

export default App;
