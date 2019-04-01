
import React, { Component } from 'react';
import {Grid,CardMedia,IconButton,withStyles,Icon} from '@material-ui/core/';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classNames from "classnames";
import image2 from '../img/me2.jpg'
import MyAppBar from '../components/AppBar'
const styles = theme => ({
  "@global":{
    body:{
      color:'white' ,
      overflow:'hidden'
    },
    a:{
      color:'inherit'
    }
  },
  root: {
    flexGrow: 1,
  },
sectionHeading:{
  color:'#ba8003',
  fontFamily:'Impact',
  fontWeight:'bolder',
  fontSize:20,
  [theme.breakpoints.up('md')]: {
    fontSize:30,
  }
},
corosel:{
  borderRadius:'0 0 80px 0',
  [theme.breakpoints.up('md')]: {
    borderRadius:'0 0 200px 0',
  },
  color:'white',
  zIndex:0,
},
image:{
  height: 350,
  width: 320,
  margin: 20,
  borderRadius:5,
  [theme.breakpoints.up('md')]: {
    height: 450,
  }
},
image2:{
  transform :'scale'
},
headerText:{
  fontSize:30,
  fontWeight:800,
  paddingLeft:20,
  [theme.breakpoints.up('md')]: {
    fontSize:50,
  fontWeight:900,
  },
},
aboutText:{
  fontSize:20,
  fontWeight:800,
  marginTop:200,
  padding:10,
  [theme.breakpoints.up('md')]: {
    fontSize:30,
    fontWeight:900,
  },
},
skillsText:{
  fontSize:18,
  fontWeight:700,
  textAlign:'left',
  '& ul' :{
    listStyleType:'none',
    '& li':{
      paddingTop:15,
     
    }
   },
   [theme.breakpoints.up('xs')]: {
    fontSize:18,
    fontWeight:500,
    padding:10,
    '& ul' :{
      paddingLeft:0
    }
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:20,
    fontWeight:500,
    padding:10,
    '& ul' :{
      paddingLeft:5
    }
  },
   [theme.breakpoints.up('md')]: {
    fontSize:22,
    fontWeight:900,
    paddingTop:90,
  },
  
},
largeIcon:{
   fontSize: 30,
   [theme.breakpoints.up('md')]: {
    fontSize: 50,
  },
},
iconSpin: {
 animation: 'icon-spin 0.9s infinite linear',
 [theme.breakpoints.up('md')]: {
      display: 'none',
      animation:'none'
  },
      
},
'@keyframes icon-spin': {
  '0%': {
      transform: 'translateY(20px)'
  },
  '100%': {
      transform: 'translateY(40px)'
  }
}
});

class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      height : '0px',
      selected:2,
      selectedGradient:0,
      coroselClass:'classes.corosel'
    }
  }
  componentWillMount(){
    this.setState({height: window.innerHeight-17 + 'px'});
  }
  updateSelected = (selected)=>{
    this.setState({selected})
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({selected:0})
    },500)
  }
 
  render(){
    const colors = [['#2C3E50','#FD746C'],['#0B486B','#f8435f'],['#1D435f','#1D1150'],['#403A3E','#BE5869'],['#430089','#82ffa1']]
    const {classes} = this.props

    return(
      <Grid>
        <MyAppBar updateSelected={this.updateSelected}/>
        <Carousel  axis="vertical" className={classes.corosel}  showStatus={false} useKeyboardArrows={true}  showArrows={false} transitionTime={1000} selectedItem={this.state.selected} showThumbs={false} stopOnHover={true} showIndicators={false}>
          <div style={{paddingTop:40,height:this.state.height,backgroundImage:`linear-gradient(to right bottom, ${colors[0][0]}, ${colors[0][1]})`}} className={classes.corosel}>
          <Grid
            container
            alignItems='center'
            >
            <CardMedia xs={12} md={4} className={classes.image}  image={image2}  />
            <Grid item md={2}></Grid>
              <ReactTypingEffect
                  xs={12} md={12}
                  className={classes.headerText}
                  text="Hi, I'm Mahendra"
              />
              
            </Grid>
            <Icon fontSize="large" className={classNames([classes.icon,classes.iconSpin], 'fa fa-sort-down')} /> 
          </div>
          <div style={{paddingTop:40 ,height:this.state.height,backgroundImage:`linear-gradient(to right bottom, ${colors[1][0]}, ${colors[1][1]})`}} className={classes.corosel}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid item  xs={12} md={6} className={classes.aboutText}>
              I'm an enthusiastic and competitive developer, love to convert any complex business requirement to 1's and 0's.
              </Grid>  
            </Grid>      
          </div><div style={{paddingTop:40 ,height:this.state.height,backgroundImage:`linear-gradient(to right bottom, ${colors[2][0]}, ${colors[2][1]})`}} className={classes.corosel}>
          
          <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid className={classes.skillsText} item  xs={12} md={6}>
              <span className={classes.sectionHeading}>I can make your <b>life easier,</b></span>
              <ul >
              <li>Take some rest and allow me to develop Rest APIs.</li>
              <li>It doesn't matter whether  SQL or NoSQL, I will CRUD it.</li>
              <li>I can consume my REST APIs and can present it beautifully.</li>
              <li>Want to runs things on mobiles? I'm here for you.</li>
              <li>Bothered about platform differences? I'm here with Docker for you.</li>
              <li>Sailing alone in the ocean of microservices? Let me help you with Kubernetes.</li>
              <li>Looking for something else? no worries... let's tackle it together.</li>
              </ul>
              </Grid>  
          </Grid>   
          </div><div style={{paddingTop:40 ,height:this.state.height,backgroundImage:`linear-gradient(to right bottom, ${colors[3][0]}, ${colors[3][1]})`}} className={classes.corosel}>
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
              >
                <Grid item  xs={12} md={6} className={classes.aboutText}>
                Would like to know more about me? I'm available here  <Icon  className={classNames([classes.icon], 'fa fa-angle-double-down')} /> 
                
                </Grid>  
                <Grid container justify='center' alignItems='center'>
                <IconButton  fontSize='large' color="inherit">
                  <a target='_blank' rel="noopener noreferrer" href='https://github.com/mahi1995/'>
                    <Icon  className={classNames([classes.icon,classes.largeIcon], 'fa fa-github')} /> 
                  </a>
               </IconButton>
               <IconButton color="inherit">
                <a target='_blank' rel="noopener noreferrer" href='https://linkedin.com/in/mahendrahegde9/'>
                <Icon fontSize="large" className={classNames([classes.icon,classes.largeIcon], 'fa fa-linkedin')} />  </a>
               </IconButton>
                </Grid>
            </Grid>  
          </div>
        </Carousel>
      </Grid>
      
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);