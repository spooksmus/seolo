import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button, Drawer } from "@material-ui/core";
import SidebarItemComponent from "../sidebarItem/sidebarItem";
import Profile from "../mainPage/profile/Profile";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import DashboardIcon from '@material-ui/icons/Dashboard';


class sidebarComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      addingNote: false,
      title: null,
      open: false,
    };
  }

  toggleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    if (notes) {
      return (
        <div className="JournalContainer">
          {/* <Profile /> */}
          <Drawer
            anchor={"right"}
            open={this.state.open}
            onClose={this.toggleDrawerClose}
          >
            <div className={classes.sidebarContainer}>
              <Button onClick={this.newNote} className={classes.newNoteBtn}>
                {this.state.addingNote ? "Cancel" : "New note"}
              </Button>
              <div className= {classes.sidebarDashBoardButton}>
                <Link exact to={ROUTES.MAIN_DASH}>
                  Go to Dashboard
                </Link>
              </div>
              {this.state.addingNote ? ( // If adding new note is true then we will add the option to type in a new note
                <div>
                  <input
                    type="text"
                    className={classes.newNoteInput}
                    placeholder="Add a new note"
                    onKeyUp={(e) => this.updateTitle(e.target.value)}
                    onKeyPress={this.newNote}
                    maxLength="40"
                    autoFocus
                  />
                </div>
              ) : null}
              <List>
                {notes.map((_note, _index) => {
                  return (
                    <div key={_index}>
                      <SidebarItemComponent
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={this.selectNote}
                        deleteNote={this.deleteNote}
                      ></SidebarItemComponent>
                      <Divider></Divider>
                    </div>
                  );
                })}
              </List>
            </div>
          </Drawer>
            <div className = {classes.drawerButton}>
                <div className = {classes.buttonDrawer}>

            <DashboardIcon onClick={() => this.setState({ open: true })} />
                </div>
            </div>

        </div>
      );
    } else {
      return (
        <div>
          <div className={classes.noNote}> Loading...</div>
        </div>
      );
    }
  }

  newNoteBtnClick = () => {
    this.setState({
      title: null,
      addingNote: !this.state.addingNote,
    });
  };

  updateTitle = (txt) => {
    this.setState({ title: txt });
  };

  newNote = (event) => {
    // if (event.key === "Enter") {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
    // }
  };

  selectNote = (n, i) => {
    this.props.selectNote(n, i);
  };

  deleteNote = (note) => {
    this.props.deleteNote(note);
  };
}

export default withStyles(styles)(sidebarComponent);
