import '../App.css';
import '../css/Components/Welcome.css';
import logo from '../assets/test2.webp';
// import { useNavigate } from 'react-router-dom';

function Welcome(props) {
  // const history = useNavigate();
  const opacity = props.timeOfDay === 'day' ? 'dayO' : 'dayO';

  function handleMouseDown() {
    document.getElementById("welcome").classList.add('mouseDown');
  }

  function handleMouseUp() {
    let el = document.getElementById("welcome")
    el.classList.remove('mouseDown');
    const css = `.welcome-container:hover {
            height: 280px;
            width: 280px;
            margin-top: -140px;
            margin-left: -140px;
        }`;
    const style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    el.appendChild(style);
    el.classList.add('fadeout');
    setTimeout(() => {
      // history.push('/work');
    }, 1000);
  }

  return (
    <div id="welcome" className="Welcome-Container">
      {/* onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} */}
      {/* <div className={`child Square ${opacity}`}></div> */}
      {/* <img className={`child img ${props.timeOfDay}`} src={logo} alt="headshot" /> */}
      <img className="Welcome-Container__img" src={logo} alt="headshot" />
    </div>
  )
}

export default Welcome;