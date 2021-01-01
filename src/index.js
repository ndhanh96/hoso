import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

let backgroundpagecolor = 'rgba(245, 194, 87, 1)';

class HandleSwitchPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // alert(this.props.page);
    switch (e.target.value) {
      case 'Home':
        e.target.value = 'home';
        backgroundpagecolor = 'rgba(245, 194, 87, 1)';
        break;
      case 'About':
        e.target.value = 'about';
        backgroundpagecolor = 'red';
        break;
      case 'Project':
        e.target.value = 'project';
        backgroundpagecolor = 'grey';
        break;
      case 'Contact':
        e.target.value = 'contact';
        backgroundpagecolor = 'cyan';
        break;
      default :
        e.target.value = 'testing';
    }
    this.props.info(e.target.value);
  }

  render() {
    let colorhome = '';  let colorabout = ''; let colorproject = ''; let colorcontact = '';
    switch (this.props.page) { 
      case 'home':
        colorhome = '#F5C257';
        break;
      case 'about':
        colorabout = '#F5C257';
        break;
      case 'contact':
        colorcontact = '#F5C257';
        break;
      case 'project':
        colorproject = '#F5C257';
        break;
        
    }
     
    return (
      <ul className="menuNavBar">
        <li><input style={{backgroundColor:colorhome}} type="button" value={'Home'} onClick={this.handleClick} /></li>
        <li><input style={{backgroundColor:colorabout}} type="button" value={'About'} onClick={this.handleClick} /></li>
        <li><input style={{backgroundColor:colorproject}} type="button" value={'Project'} onClick={this.handleClick} /></li>
        <li><input style={{backgroundColor:colorcontact}} type="button" value={'Contact'} onClick={this.handleClick} /></li>
      </ul>
    );
  }
}

function ContentBox(props) {

  let value = '';
  let imgPage = 'car.png';

  function GenerateContent() {
    switch(props.page) {
      case 'home':
        value = 'welcome to my newly created portfolio';
        imgPage = 'car.png';
        break;
      case 'about':
        value = 'your friendly candidate . still waiting my shot';
        imgPage = 'car.png';
        break;
      case 'project':
        value = 'behold my latest stupid creation';
        imgPage = 'car.png';
        break;
      case 'contact':
        value = 'hit me by email so we can talk properly';
        imgPage = 'contact.png';
        break;
    }
    return (
      <h1>{value}</h1>
    );
  }

  function ChangeImageContent() {
    switch(props.page) {
      case 'home':
        imgPage = 'home.png';
        break;
      case 'about':
        imgPage = 'aboutme.png';
        break;
      case 'project':
        imgPage = 'car.png';
        break;
      case 'contact':
        imgPage = 'contact.png';
        break;
    }
    return (
      <img src={imgPage} alt=''/>
    );
  }

  return (  
    <div className="contentBoxOuter">
      <div className="contentBox">
        <GenerateContent />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation.</p>
      </div>
      <div style={{backgroundColor: backgroundpagecolor}} className="imgAvatarBox">
        <ChangeImageContent />
      </div>
    </div>
  );
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
    this.setState({
      page: value,
    });
  }

  render() {
    return (
      <div className="innerBox">
        <div id="navBar">
          <img id="logo" src="logo.png" alt="portfolio" />
          <HandleSwitchPage page={this.state.page} info={this.handleChange} />
        </div>
        <ContentBox page={this.state.page} />
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
