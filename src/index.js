import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class HomePage extends React.Component {
  render() {
    return (
      <div className="innerBox">
        <div id="navBar">
          <img id="logo" src="logo.png" alt="portfolio" />
          <ul className="menuNavBar">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <HomePage />,
  
  document.getElementById('bigbox')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
