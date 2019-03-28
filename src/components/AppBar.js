import React from 'react';
import PropTypes from 'prop-types';
import "font-awesome/css/font-awesome.css";
import classNames from "classnames";
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Icon} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Mail} from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
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
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };
  updateSelected = (selected)=>{
    this.props.updateSelected(selected)
  }
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="primary">
            <Badge badgeContent={4} color="secondary">
              <Mail />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

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
              <a target='_blank' rel="noopener noreferrer" href='https://github.com/mahi1995/'>
                <Icon className={classNames(classes.icon, 'fa fa-github')} /> 
              </a>      
            </IconButton>
            <IconButton color="inherit">
              <a target='_blank' rel="noopener noreferrer" href='https://linkedin.com/in/mahendrahegde9/'><Icon className={classNames(classes.icon, 'fa fa-linkedin')} />  </a>
            </IconButton>
            
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAppBar);