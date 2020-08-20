import React, { Component, useEffect, useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import UserRegistration from './user-registration.component';
import Members from './members.component';
import DomesticViolenceData from './domestic-violence-data.component';
import { fade, makeStyles } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Menu,
  Button,
  MenuItem,
  Popper,
  Fade,
  Paper,
  Grow,
  ClickAwayListener,
  MenuList,
  ListItemText,
  Divider
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    variant: 'h6',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),

    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'primary'
  },
  inputRoot: {
    color: 'primary'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    color: 'primary',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  },
  paper: {
    border: '1px solid #d3d4d5'
  }
});
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: 0,
      anchorEl: null,
      whoWeAre: null,
      whatWeDo: null,
      takeAction: null,
      resources: null,
      open: false,
      selectedIndex: 0,
      anchorRef: false,
      newUser: ''
    };
  }

  handleWhoWeAreClick = event => {
    this.setState({
      whoWeAre: event.target
    });
  };

  handleWhatWeDoClick = event => {
    this.setState({
      whatWeDo: event.target
    });
  };

  handleTakeAction = event => {
    this.setState({
      takeAction: event.target
    });
  };

  handleResources = event => {
    this.setState({
      resources: event.target
    });
  };

  handleClose = () => {
    this.setState({
      whoWeAre: null,
      whatWeDo: null,
      takeAction: null,
      resources: null
    });
  };

  // handleMenuItemClick = (event, index) => {
  //   this.setState({
  //     selectedIndex: index,
  //     open: false
  //   });
  // };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar color="transparent" position="static">
          <Toolbar>
            <Typography className={classes.title} noWrap>
              <Button variant="outlined" color="primary" href="/home">
                Home
              </Button>
            </Typography>

            <Typography className={classes.title} noWrap>
              <Button
                variant="outlined"
                color="primary"
                className={classes.navButton}
                onClick={this.handleWhoWeAreClick}
                aria-controls="split-button-menu"
              >
                Who We Are
              </Button>
              <Menu
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                id="split-button-menu"
                keepMounted
                anchorEl={this.state.whoWeAre}
                open={Boolean(this.state.whoWeAre)}
                onClose={this.handleClose}
              >
                <Paper>
                  <Button color="primary" href="/members">
                    Our People
                  </Button>
                  <Divider />
                  <Button color="primary" onClick={this.handleClose} href="#">
                    Our Mission
                  </Button>
                </Paper>
              </Menu>
            </Typography>

            <Typography className={classes.title} noWrap>
              <Button
                variant="outlined"
                color="primary"
                className={classes.navButton}
                onClick={this.handleWhatWeDoClick}
                aria-controls="what-we-do"
                aria-haspopup="menu"
              >
                What We Do
              </Button>
              <Menu
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                id="what-we-do"
                anchorEl={this.state.whatWeDo}
                keepMounted
                open={Boolean(this.state.whatWeDo)}
                onClose={this.handleClose}
              >
                <Paper>
                  <Button color="primary" href="/domestic-violence-data">
                    Domestic Violence
                  </Button>
                  <Divider />
                  <Button color="primary" onClick={this.handleClose} href="#">
                    Sexual Violence
                  </Button>
                  <Divider />
                  <Button color="primary" onClick={this.handleClose} href="#">
                    Women's Health
                  </Button>
                </Paper>
              </Menu>
            </Typography>
            <Typography className={classes.title} noWrap>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleTakeAction}
              >
                Take Action
              </Button>
              <Menu
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                anchorEl={this.state.takeAction}
                keepMounted
                open={Boolean(this.state.takeAction)}
                onClose={this.handleClose}
              >
                <Paper>
                  <Button color="primary" href="/users">
                    Join Us
                  </Button>
                  <Divider />
                  <Button color="primary" href="#">
                    Our Support
                  </Button>
                </Paper>
              </Menu>
            </Typography>
            <Typography className={classes.title} noWrap>
              <Button
                variant="outlined"
                color="primary"
                className={classes.navButton}
                onClick={this.handleResources}
              >
                Resources
              </Button>
              <Menu
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                anchorEl={this.state.resources}
                keepMounted
                open={Boolean(this.state.resources)}
                onClose={this.handleClose}
              >
                <Paper>
                  <Button color="primary" onClick={this.handleClose} href="#">
                    Crisis Centers
                  </Button>
                  <Divider />
                  <Button color="primary" onClick={this.handleClose} href="#">
                    Jobs
                  </Button>
                  <Divider />
                  <Button color="primary" onClick={this.handleClose} href="#">
                    Donations
                  </Button>
                </Paper>
              </Menu>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon color="primary" />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Navbar);
