const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    },
    newNoteBtn: {
      width: '100%',
      height: '59.5px',
      borderBottom: '1px solid black',
      borderRadius: '0px',
      backgroundColor: '#425f90',
      color: 'white',
      '&:hover': {
        backgroundColor: '#88a2ce'
      }
    },
    sidebarContainer: {
      marginTop: '0px',
      width: '300px',
      height: '100%',
      boxSizing: 'border-box',
      float: 'left',
      overflowX: 'hidden',
      position:'sticky',
      top:'0px'
    },
    newNoteInput: {
      width: '100%',
      margin: '0px',
      height: '35px',
      outline: 'none',
      borderBottom: '1px solid black',
      paddingLeft: '5px',
      '&:focus': {
        outline: '2px solid rgba(81, 203, 238, 1)'
      }
    },
    newNoteSubmitBtn: {
      width: '100%',
      backgroundColor: '#28787c',
      borderRadius: '0px',
      color: 'white'
    },
    noNote: {
      width:'100%',
      textAlign:'center',
      fontSize:'20px',
      fontWeight:'600'
    },
    sidebarDashBoardButton: {
      textAlign:'center',
      width:'100%',
      marginTop:'20px'
    },
    drawerButton: {
      width: '100%',
      padding:'20px',
      textAlign:'right',
      cursor:'pointer',
    },
    buttonDrawer: {
      
    width: 'fit-content',
    marginLeft: 'auto',
    padding: '10px',
    borderRadius: '50%',

    }
  });
  
  export default styles;