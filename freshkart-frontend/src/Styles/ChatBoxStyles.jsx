// src/styles/ChatBoxStyles.js
const chatStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      maxWidth: 400,
      margin: 'auto',
      height: '80vh',
      border: '1px solid #ccc',
      borderRadius: 2,
      padding: 2,
      backgroundColor: '#fff',
    },
    chatBox: {
      padding: 2,
      flex: 1,
      overflowY: 'auto',
      maxHeight: '70%',
    },
    message: {
      borderRadius: 2,
      padding: 1,
    },
    userMessage: {
      backgroundColor: '#00b894',
      textAlign: 'right',
    },
    botMessage: {
      backgroundColor: '#bbbb',
      textAlign: 'left',
    },
    inputSection: {
      
      display: 'flex',
      marginTop: 2,
    },
    sendButton: {
      backgroundColor:"#00b894",
      marginLeft: 1,
    },
  };
  
  export default chatStyles;
  