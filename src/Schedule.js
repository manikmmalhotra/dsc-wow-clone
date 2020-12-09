import React from 'react'
import "./Schedule.css"
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { AppBar } from '@material-ui/core';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import EventCard from './EventCard';
const Schedule = () => {
    return (
      <section className="schedule__wrapper" id="#schedule">
        <div className="row section__header justify-content-center"> 
        <div className="col-md-10 section__headertext">Schedule</div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-12 col-xs-12 scrollable__row__content">
          <ScrollableTabsButtonAuto />
        </div>
      </div>
  
      </section>
    );
  };
  
  export default Schedule;
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <Typography>{children}</Typography>}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  
    return (
      <div className={`${classes.root} col-md-12 col-lg-12 col-xs-12`}>
        <AppBar position="static" color="ffffff" elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
              label="Day 1"
              {...a11yProps(0)}
            />
            <Tab
              style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
              label="Day 2"
              {...a11yProps(1)}
            />
            <Tab
              style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
              label="Day 3"
              {...a11yProps(2)}
            />
            <Tab
              style={{ outline: "none", maxWidth: "8rem", minWidth: "7rem" }}
              label="Day 4"
              {...a11yProps(3)}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className="scrollarrows_wrapper">
            <div
              className="row scrollable__row tab-0"
            >
              <EventCard time="5:00 PM - 5:30 PM" name="Keynote" logo="https://dscwow.tech/images/events/day1/1.png" />
              <EventCard time="5:30 PM - 6:30 PM" name="Your first ML Project" logo="https://dscwow.tech/images/events/day1/3.png" />
              <EventCard time="6:30 PM - 6:45 PM" name="Quiz Time!" logo="https://dscwow.tech/images/events/day1/4.jpg"/>
              <EventCard time="6:45 PM - 7:25 PM" name="Lightning Talk" logo="https://dscwow.tech/images/events/day1/5.jpg"/>
              <EventCard time="7:30 PM - 8:00 PM" name="Panel Discussion" logo="https://dscwow.tech/images/events/day1/6.png"/>

            </div>
            <button className="left-paddle paddle"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              className="right-paddle paddle"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row scrollable__row">
              <EventCard time="5:00 PM - 5:50 PM" name="Introduction to Blockchain" logo="https://dscwow.tech/images/events/day2/1.jpg" />
              <EventCard time="6:00 PM - 6:30 PM" name="Design Thinking" logo="https://dscwow.tech/images/events/day2/2.jpg" />
              <EventCard time="6:30 PM - 6:45 PM" name="Quiz Time!" logo="https://dscwow.tech/images/events/day1/4.jpg"/>
              <EventCard time="6:50 PM - 7:25 PM" name="Community Building" logo="https://dscwow.tech/images/events/day2/4.png"/>
              <EventCard time="7:30 PM - 8:00 PM" name="Building your personal brand" logo="https://dscwow.tech/images/events/day2/5.png"/>
            <button className="left-paddle paddle"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              className="right-paddle paddle"
            >
              <i className="fas fa-arrow-right"></i>
            </button>          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="row scrollable__row">
          <EventCard time="5:00 PM - 5:50 PM" name="Workshop on Flutter" logo="https://dscwow.tech/images/events/day3/1.png" />
              <EventCard time="6:00 PM - 6:40 PM" name="Web Development / Designing" logo="https://dscwow.tech/images/events/day3/2.png" />
              <EventCard time="6:30 PM - 6:45 PM" name="Quiz Time!" logo="https://dscwow.tech/images/events/day1/4.jpg"/>
              <EventCard time="7:00 PM - 7:50 PM" name="Building Chat App with Flutter & Firebase" logo="https://dscwow.tech/images/events/day3/4.png"/>
  
            <button className="left-paddle paddle"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              className="right-paddle paddle"
            >
              <i className="fas fa-arrow-right"></i>
            </button>          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="row scrollable__row">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
          <button className="left-paddle paddle"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button
              className="right-paddle paddle"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
        </TabPanel>
      </div>
    );
  }
  