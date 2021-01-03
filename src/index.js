import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import reportWebVitals from "./reportWebVitals";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  icantbreath: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

let backgroundpagecolor = "rgba(245, 194, 87, 1)";

class HandleSwitchPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(prop) {
    this.props.info(prop.name);
    backgroundpagecolor = prop.pageColor;
  }

  render() {
    const ColorButton = withStyles(() => ({
      root: {
        fontFamily: "Quicksand , sans-serif",
        paddingTop: "3px",
        paddingBottom: "3px",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginLeft: "20px",
        borderRadius: "20px",
        color: "black",
        backgroundColor: this.props.color,
        textShadow: "0 0 3px rgb(245, 206, 87)",
        border: "none",
        "&:hover": {
          backgroundColor: "rgb(245, 206, 87)",
          border: "none",
        },
      },
    }))(Button);

    return (
      <li>
        <ColorButton
          onClick={() => this.handleClick(this.props)}
          variant="outlined"
          color="secondary"
        >
          {" "}
          {this.props.name}{" "}
        </ColorButton>
      </li>
    );
  }
}

function ContentBox(props) {
  let imgPage;
  function GenerateHeader() {
    let value = "";
    switch (props.page) {
      case "home":
        value = "welcome to my newly created portfolio";
        imgPage = "car.png";
        break;
      case "about":
        value = "your friendly candidate . still waiting my shot";
        imgPage = "car.png";
        break;
      case "project":
        value = (
          <p>
            behold my latest <del>useful</del> creation
          </p>
        );
        imgPage = "car.png";
        break;
      case "contact":
        value = "hit me by email so we can talk properly";
        imgPage = "contact.png";
        break;
    }
    return <h1>{value}</h1>;
  }

  function GenerateContentByHeader() {
    switch (props.page) {
      case "home":
        return (
          <div className="contentByHeader">
            <p>
              Hi, i'm Hạnh, 25 years old, this is my portfolio page, i'm
              currently looking for an internship job, and learning to reactJS,
              so this site was originally made in plain html and css, so i
              decided to write it in react, it's not looking good by any mean,
              but i really took the time to make it, so please consider.
            </p>
            <p>
              <del>I don't know what to write here so i'll leave you be.</del>{" "}
              Ah yes, i know photoshop, my english speaking is good too. My
              toeic score is 680, it was a long time ago, now i definitely get
              higher than that.
            </p>
          </div>
        );
      case "about":
        return (
          <div className="contentByHeader">
            <p>
              About my self ? well then i'm 25 years old, know basic about html,
              css, js and currently learning to ReactJS. Have some side projects
              you can look in project tab, it was made in vanilla html , css and
              javascript, really old project but still works.
            </p>
            <p>
              i'm fat, in case you want to know, but i always give my best to
              learn new things, trying to be a good front-end developer. I have
              some knowledge about mechanic but haven't touch it for a very long
              time.
            </p>
          </div>
        );
      case "project":
        return (
          <div className="contentByHeader">
            <p>
              The link to my project is down there in case you still wondering
              about the car, thought it looks cool tho.
            </p>
            <p>
              My first ever project was my portfolio (not this one), but it was
              deleted, so there is that, so this is my{" "}
              <a
                target="_blank"
                href="https://ndhanh96.github.io/JavaScript-Calculator/"
              >
                Calculator
              </a>{" "}
              project, plain and simple: calculating. Second is my 2 games, one
              is{" "}
              <a
                target="_blank"
                href="https://ndhanh96.github.io/Tic-Tac-Toe-Game/"
              >
                Tic-Tac-Toe
              </a>
              , basicly "Cờ ca rô", the last is{" "}
              <a target="_blank" href="https://ndhanh96.github.io/Simon-Game/">
                Simon game
              </a>
              , you just need to follow the sound. That's it. Thank you.{" "}
            </p>
          </div>
        );
      case "contact":
        return (
          <div className="contentByHeader">
            <p>
              If you interested please email me at{" "}
              <a href="mailto:webmaster@example.com">ndhanh96@gmail.com</a>. Or
              you can chat with me on my{" "}
              <a target="_blank" href="https://www.facebook.com/ndhanh96">
                Facebook
              </a>
              .
            </p>
            <p>
              Looking forward to hear from you, really appreciate to have you
              here reading my portfolio. Thank you once again and hopefully we
              can see each other in the next one.
              <br />
              <strong>Your candidate.</strong>
            </p>
          </div>
        );
    }
  }

  function ChangeImageContent() {
    const avatarAboutPage = useStyles();
    switch (props.page) {
      case "home":
        imgPage = "home.png";
        break;
      case "about":
        imgPage = "aboutme.png";
        return (
          <Avatar
            id="myAvatarImage"
            className={avatarAboutPage.icantbreath}
            src={imgPage}
            alt=""
          />
        );
      case "project":
        imgPage = "car.png";
        break;
      case "contact":
        imgPage = "contact.png";
        break;
    }
    return <img src={imgPage} alt="" />;
  }

  return (
    <div className="contentBoxOuter">
      <div className="contentBox">
        <GenerateHeader />
        <GenerateContentByHeader />
      </div>
      <div
        style={{ backgroundColor: backgroundpagecolor }}
        className="imgAvatarBox"
      >
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
      page: "home",
    };
  }

  handleChange(value) {
    this.setState({
      page: value,
    });
  }

  render() {
    let colorhome = "";
    let colorabout = "";
    let colorproject = "";
    let colorcontact = "";
    switch (this.state.page) {
      case "home":
        colorhome = "#F5C257";
        break;
      case "about":
        colorabout = "#F5C257";
        break;
      case "contact":
        colorcontact = "#F5C257";
        break;
      case "project":
        colorproject = "#F5C257";
        break;
    }
    return (
      <div className="innerBox">
        <div id="navBar">
          <img id="logo" src="logo.png" alt="portfolio" />
          <ul className="menuNavBar">
            <HandleSwitchPage
              buttonColor={"yellow"}
              name={"home"}
              pageColor={"rgba(245, 194, 87, 1)"}
              color={colorhome}
              info={this.handleChange}
            />
            <HandleSwitchPage
              buttonColor={"yellow"}
              name={"about"}
              pageColor={"rgb(255, 174, 45)"}
              color={colorabout}
              info={this.handleChange}
            />
            <HandleSwitchPage
              buttonColor={"yellow"}
              name={"project"}
              pageColor={"#00e8ff"}
              color={colorproject}
              info={this.handleChange}
            />
            <HandleSwitchPage
              buttonColor={"yellow"}
              name={"contact"}
              pageColor={"rgb(252, 194, 108)"}
              color={colorcontact}
              info={this.handleChange}
            />
          </ul>
        </div>
        <ContentBox page={this.state.page} />
      </div>
    );
  }
}

ReactDOM.render(
  <HomePage />,

  document.getElementById("bigbox")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
