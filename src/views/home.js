
import React, { Component } from 'react';
import {Grid,CardMedia,Typography,withStyles,Slide,Paper} from '@material-ui/core/';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image from '../img/me.jpeg'
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
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
  height: '30px',
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
},
sectionHeading:{
  color:'#ba8003',
  textDecoration: 'underline',
  fontFamily:'Impact',
  fontWeight:'bolder',
  fontSize:20
},
corosel:{
  backgroundImage:`linear-gradient(to right bottom, #430089, #82ffa1)`,
  borderRadius:'0 0 200px 0',
  color:'white'
},
image:{
  height: 400,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  borderRadius:5
},
headerText:{
  fontSize:50,
  fontWeight:900,
},
aboutText:{
  fontSize:30,
  fontWeight:900,
  marginTop:50,
  [theme.breakpoints.up('sm')]: {
    marginTop:200
  },
},
carousel:{
  zIndex:0,
}
});

class Home extends Component{
  constructor(props){
    super(props)
    this.state={
      height : '0px',
      selected:0,
      selectedGradient:0
    }
  }
  componentWillMount(){
    this.setState({height: window.innerHeight-17 + 'px'});
  }
  updateSelected = (selected)=>{
    this.setState({selected})
  }
  render(){
    const colors = [['#2C3E50','#FD746C'],['#0B486B','#F56217'],['#1D4350','#1D4350'],['#403A3E','#BE5869'],['#430089','#82ffa1']]
    const {classes} = this.props

    return(
      <Grid>
        <MyAppBar updateSelected={this.updateSelected}/>
        <Carousel axis="vertical" className={classes.carousel} showStatus={false} useKeyboardArrows={true}  showArrows={false} transitionTime={1000} selectedItem={this.state.selected} showThumbs={false} stopOnHover={true} showIndicators={false}>
          <div style={{paddingTop:40,height:this.state.height,backgroundImage:`linear-gradient(to right bottom, ${colors[0][0]}, ${colors[0][1]})`}} className={classes.corosel}>
          <Grid
            container
            alignItems='center'
            >
            <CardMedia xs={12} md={4} className={classes.image} image={image}  />
            <Grid item md={2}></Grid>
              <ReactTypingEffect
                  xs={12} md={12}
                  className={classes.headerText}
                  text="Hi, I'm Mahendra"
              />
            </Grid>
          </div>
          <div style={{paddingTop:40 ,height:this.state.height,backgroundImage:`linear-gradient(to right bottom, ${colors[1][0]}, ${colors[1][1]})`}} className={classes.corosel}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid item  xs={12} md={6} className={classes.aboutText}>
                I'm an entusiastic and compentitve developer, love to solve any business challenge with technology.
              </Grid>  
            </Grid>      
          </div><div style={{height:this.state.height}} className={classes.corosel}>
          
        o
          </div><div style={{height:this.state.height}} className={classes.corosel}>
          
        op
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