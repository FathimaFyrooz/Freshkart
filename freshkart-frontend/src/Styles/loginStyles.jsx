
const loginStyles = {
    outerloginBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      minHeight: "98vh",
      bgcolor: "background.default",
    },
    innerloginBox: {
      width: 400,
      p: 3,
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 3,
    },
    logintextField: {
        marginTop:2,
        
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "secondary.main",
        },
        
      },
    },
    loginbutton: {
      marginTop: 2,
      color:"text.primary",
      bgcolor:"secondary.main",
      "&:hover": {
        bgcolor: "text.primary",
        color: "background.paper",
      },
    },
    logintext:{
        marginTop:2,
        color:"text.primary",
    }
  };
  
  export default loginStyles;
  