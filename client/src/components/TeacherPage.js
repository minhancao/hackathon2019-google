import React, { Component } from "react";
import LiveFeedPage from "./LiveFeedPage";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "blue"
  },
  inline: {
    display: "inline"
  }
});

class TeacherPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }
  render() {
    const classes = useStyles();
    return (
      <div className="App">
        Welcome to Teacher Page!!
        <div>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  img
                  src="https://www.techadvisor.co.uk/cmsdata/features/3655280/how-to-read-facebook-messages-without-them-knowing-main_thumb800.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    ></Typography>
                    <button onclick="myFunction()"> -- Message </button>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Boardcast"
                  img
                  src="https://images.tmcnet.com/tmc/misc/articles/image/2019-jan/0804735085-bigstock-rec-button-Supersize.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    ></Typography>
                    ​
                    <button ondblclick="myFunction()">
                      {" "}
                      -- Boardcast Lives Recording Model Number{" "}
                    </button>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
        <div>
          <LiveFeedPage userId={this.props.location.state}></LiveFeedPage>
        </div>
      </div>
    );
  }
}

export default TeacherPage;
