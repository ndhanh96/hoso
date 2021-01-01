import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


class ContentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div></div>
    );
  }
}

class HandleSwitchPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // alert(this.props.page);
    switch (this.props.page) {
      case 'home':
        e.target.value = 'Home';
        break;
    }
    this.props.info(e.target.value);
  }

  render() {
    return (
      // <li><input type="button" value={this.props.name} onClick={(e) => this.handleClick(e)} /></li>
      <li><input type="button" value={this.props.page} onClick={this.handleClick} /></li>
    );
  }
}
 
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      page: 'home',
    }
  }

  handleChange(value){
    alert(value);
    this.setState({
      page: value,
    });
  }

  render() {
    return (
      <div className="innerBox">
        <div id="navBar">
          <img id="logo" src="logo.png" alt="portfolio" />
          <ul className="menuNavBar">
            <HandleSwitchPage page={this.state.page} info={this.handleChange} />
            <li><a href="">About</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className="contentBox">
          <ContentBox switchpage={this.state.page} />
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
