import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import CircularProgress from '@material-ui/core/CircularProgress'

import DeleteIcon from '@material-ui/icons/Delete';








const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },


    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },


  },
}));


function FormComponent() {

  const [values, setValues] = useState({ email: "", subject: "", message: "" })
  const [stage,setStage]=useState("")
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const sendButtonStatus = () =>{

    console.log('Is Valid',!validateEmail(values.email));

    return values.email.length == 0 || !validateEmail(values.email) || values.subject.length == 0 || values.message.length == 0;
  }

  const reset = () =>{
    setValues({ email: "", subject: "", message: "" })
  }

  const validateEmail = (email) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  const classes = useStyles();

  return (
    <div className="wrap_form">

      <div className={classes.root}>
        <Paper elevation={3}>
          <div className="header">Send New Email</div>
          <form className={classes.root} noValidate autoComplete="off">

            <TextField id="standard-basic" name="email" label="To:" value={values.email} onChange={handleChange} />

            <TextField id="standard-basic" name="subject" label="Subject:" value={values.subject} onChange={handleChange} />

            <TextField id="standard-basic" name="message" label="Message:" value={values.message} onChange={handleChange} />

            <div className="loading">
              <CircularProgress disableShrink style={{display: stage != "sending" ? "none" : "block"}} />
              <img src="./images/loading.gif" style={{display: stage != "sent" ? "none" : "block"}}/>

            </div>

            <Button variant="contained" color="secondary" disabled={sendButtonStatus()} onClick={()=>{
              setStage("sending");
              setTimeout(()=>{
                setStage("sent");
                setTimeout(()=>{
                  setStage("");
                  reset();
                },3000)
              },3000)
            }}>
              Send<Grid item xs={8}>
                <SendIcon />
              </Grid>
            </Button>



            <Button variant="contained" color="secondary" className="resetbutton" onClick={reset}>
              RESET<Grid item xs={8}>
                <DeleteIcon />
              </Grid>
            </Button>



          </form>
        </Paper>
      </div>



    </div>
  )

}
export default FormComponent