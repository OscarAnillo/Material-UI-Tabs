import {useState} from 'react';
import { Typography, AppBar, Toolbar, Tabs, Tab  } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

/* Components */
import Home from '../Pages/home'
import About from '../Pages/about';
import Contact from '../Pages/contact';


const useStyles = makeStyles(theme => ({
  appBarStyle: {
    background: '#000',
    zIndex: 100
  },
  toolBarStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')] : {
      justifyContent: 'space-between',
    }
  },
  typoStyle: {
    display: 'none',
    [theme.breakpoints.up('md')] : {
      display: 'flex',
      fontSize: '3rem'
    }
  }
}))

export default function TabsComp(){
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const clickHandler = (e, val) => {
    //console.log(val)
    setValue(val)
  }

  return(
    <div>
      <AppBar position="static" className={classes.appBarStyle}>
        <Toolbar className={classes.toolBarStyle}>
          <Typography className={classes.typoStyle}>OscarAnillo</Typography>
          <Tabs value={value} onChange={clickHandler}>
            <Tab label="Home"/>
            <Tab label="About"/>
            <Tab label="Contact"/>
          </Tabs>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}><Home /></TabPanel>
      <TabPanel value={value} index={1}><About /></TabPanel>
      <TabPanel value={value} index={2}><Contact /></TabPanel>
    </div>
  )
}

function TabPanel(props){
  const {children, value, index} = props;
  return (
    <div>
      {value === index && (<div>{children}</div>)}
    </div>
  )
}
