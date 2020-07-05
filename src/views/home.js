import React, { useState, useEffect } from "react";
import {
  Grid,
  CardMedia,
  IconButton,
  makeStyles,
  createStyles,
  useTheme,
} from "@material-ui/core/";
import { GitHub, LinkedIn, ExpandMore, DoubleArrow } from "@material-ui/icons";
//import PropTypes from 'prop-types';
import ReactTypingEffect from "react-typing-effect";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image2 from "../img/me.jpg";
import MyAppBar from "../components/AppBar";
const useStyles = makeStyles((theme) =>
  createStyles({
    "@global": {
      body: {
        color: "white",
        overflow: "hidden",
      },
      a: {
        color: "inherit",
      },
    },
    root: {
      flexGrow: 1,
    },
    sectionHeading: {
      color: "#ba8003",
      fontFamily: "Impact",
      fontWeight: "bolder",
      fontSize: 20,
      [theme.breakpoints.up("md")]: {
        fontSize: 30,
      },
    },
    corosel: {
      borderRadius: "0 0 80px 0",
      [theme.breakpoints.up("md")]: {
        borderRadius: "0 0 200px 0",
      },
      color: "white",
      zIndex: 0,
    },
    image: {
      height: 350,
      width: 350,
      margin: 20,
      borderRadius: 5,
      [theme.breakpoints.up("md")]: {
        height: 450,
      },
    },
    image2: {
      transform: "scale",
    },
    headerText: {
      fontSize: 30,
      fontWeight: 800,
      paddingLeft: 20,
      [theme.breakpoints.up("md")]: {
        fontSize: 50,
        fontWeight: 900,
      },
    },
    aboutText: {
      fontSize: 20,
      fontWeight: 800,
      marginTop: 200,
      padding: 10,
      [theme.breakpoints.up("md")]: {
        fontSize: 30,
        fontWeight: 900,
      },
    },
    skillsText: {
      fontSize: 18,
      fontWeight: 700,
      textAlign: "left",
      "& ul": {
        listStyleType: "none",
        "& li": {
          paddingTop: 15,
        },
      },
      [theme.breakpoints.up("xs")]: {
        fontSize: 18,
        fontWeight: 500,
        padding: 10,
        "& ul": {
          paddingLeft: 0,
        },
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 20,
        fontWeight: 500,
        padding: 10,
        "& ul": {
          paddingLeft: 5,
        },
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 22,
        fontWeight: 900,
        paddingTop: 90,
      },
    },
    largeIcon: {
      fontSize: 30,
      [theme.breakpoints.up("md")]: {
        fontSize: 50,
      },
    },
    iconSpin: {
      marginTop: 100,
      animation: "$icon-spin 0.9s infinite linear",
      [theme.breakpoints.up("md")]: {
        display: "none",
        animation: "none",
      },
    },
    "@keyframes icon-spin": {
      "0%": {
        transform: "translateY(20px) rotate(90deg)",
      },
      "100%": {
        transform: "translateY(40px) rotate(90deg)",
      },
    },
  })
);

export default function Home() {
  const colors = [
    ["#2C3E50", "#FD746C"],
    ["#0B486B", "#f8435f"],
    ["#1D435f", "#1D1150"],
    ["#403A3E", "#BE5869"],
    ["#430089", "#82ffa1"],
  ];

  const isClient = typeof window === "object";

  const [state, setState] = useState({
    height: window.innerHeight + "px",
    selected: 2,
    selectedGradient: 0,
    coroselClass: "classes.corosel",
  });

  const classes = useStyles(useTheme());

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, selected: 0 });
    }, 500);

    function handleResize() {
      setState({ ...state, height: window.innerHeight + "px" });
    }

    if (!isClient) {
      return false;
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  },[]);

  const updateSelected = (selected) => setState({ ...state, selected });

  return (
    <Grid>
      <MyAppBar updateSelected={updateSelected} />
      <Carousel
        axis="vertical"
        className={classes.corosel}
        showStatus={false}
        useKeyboardArrows={true}
        showArrows={false}
        transitionTime={1000}
        selectedItem={state.selected}
        showThumbs={false}
        stopOnHover={true}
        showIndicators={false}
      >
        <div
          style={{
            paddingTop: 40,
            height: state.height,
            backgroundImage: `linear-gradient(to right bottom, ${colors[0][0]}, ${colors[0][1]})`,
          }}
          className={classes.corosel}
        >
          <Grid container alignItems="center">
            <CardMedia xs={12} className={classes.image} image={image2} />
            <Grid item md={2}></Grid>
            <ReactTypingEffect
              xs={12}
              md={12}
              className={classes.headerText}
              text="Hi, I'm Mahendra"
            />
          </Grid>
          <DoubleArrow className={classes.iconSpin} fontSize="large" />
        </div>
        <div
          style={{
            paddingTop: 40,
            height: state.height,
            backgroundImage: `linear-gradient(to right bottom, ${colors[1][0]}, ${colors[1][1]})`,
          }}
          className={classes.corosel}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6} className={classes.aboutText}>
              I&apos;m an enthusiastic and competitive developer, love to
              convert any complex business requirement to 1&apos;s and 0&apos;s.
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            paddingTop: 40,
            height: state.height,
            backgroundImage: `linear-gradient(to right bottom, ${colors[2][0]}, ${colors[2][1]})`,
          }}
          className={classes.corosel}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid className={classes.skillsText} item xs={12} md={6}>
              <span className={classes.sectionHeading}>
                I can make your <b>life easier,</b>
              </span>
              <ul>
                <li>Take some rest and allow me to develop Rest APIs.</li>
                <li>
                  It doesn&apos;t matter whether SQL or NoSQL, I will CRUD it.
                </li>
                <li>
                  I can consume my REST APIs and can present it beautifully.
                </li>
                <li>Want to runs things on mobiles? I&apos;m here for you.</li>
                <li>
                  Bothered about platform differences? I&apos;m here with Docker
                  for you.
                </li>
                <li>
                  Sailing alone in the ocean of microservices? Let me help you
                  with Kubernetes.
                </li>
                <li>
                  Looking for something else? no worries... let&apos;s tackle it
                  together.
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            paddingTop: 40,
            height: state.height,
            backgroundImage: `linear-gradient(to right bottom, ${colors[3][0]}, ${colors[3][1]})`,
          }}
          className={classes.corosel}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6} className={classes.aboutText}>
              Would like to know more about me? I&apos;m available here{" "}
              <ExpandMore />
            </Grid>
            <Grid container justify="center" alignItems="center">
              <IconButton fontSize="large" color="inherit">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mahendraHegde/"
                >
                  <GitHub fontSize="large" />
                </a>
              </IconButton>
              <IconButton color="inherit">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/mahendrahegde9/"
                >
                  <LinkedIn fontSize="large" />{" "}
                </a>
              </IconButton>
            </Grid>
          </Grid>
        </div>
      </Carousel>
    </Grid>
  );
}
