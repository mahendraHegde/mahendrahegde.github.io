import React from 'react';
import PropTypes from 'prop-types';
import "font-awesome/css/font-awesome.css";
import classNames from "classnames";
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Icon} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SkillsIcon from '../icons/skills'
import MeIcon from '../icons/me'

const styles = theme => ({
  root: {
    width: '100%',
    position:'absolute',
    top:20,
    zIndex:2
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class MyAppBar extends React.Component {

  updateSelected = (selected)=>{
    this.props.updateSelected(selected)
  }


  render() {
    const { classes } = this.props;
    return (
      <div  className={classes.root}>
        <AppBar style={{ background:'transparent', boxShadow: 'none',zIndex:2}} position="static">
          <Toolbar>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <IconButton color="inherit" onClick={()=>this.updateSelected(0)}>
            <Icon className={classNames(classes.icon, 'fa fa-home')} />   
            </IconButton>

            <IconButton color="inherit" onClick={()=>this.updateSelected(1)}>
              <MeIcon />   
            </IconButton>

            <IconButton color="inherit" onClick={()=>this.updateSelected(2)}>
             <SkillsIcon/>
            </IconButton>
            <IconButton fontSize='small' color="inherit" onClick={()=>this.updateSelected(3)}>
                <Icon className={classNames(classes.icon, 'fa fa-plug')} />
            </IconButton>
            <IconButton fontSize='small' color="inherit">
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/mahendraHegde/'>
                <Icon className={classNames(classes.icon, 'fa fa-github')} /> 
              </a>      
            </IconButton>
            <IconButton color="inherit">
              <a target='_blank' rel="noopener noreferrer" href='https://linkedin.com/in/mahendrahegde9/'><Icon className={classNames(classes.icon, 'fa fa-linkedin')} />  </a>
            </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAppBar);