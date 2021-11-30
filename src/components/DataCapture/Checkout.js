import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Review from './Review';
import OsnovniPodatki from "./OsnovniPodatki";
import UserContext from '../../context/UserContext';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Big5 from './Big5';
import { makeStyles } from '@mui/styles';

const steps = ['Osnovni podatki', "Osebnostne značilnosti"];

const theme = createTheme();
const useStyles = makeStyles(theme => ({
  captchaField: {
    marginTop: '7px',
    "& input": {
      padding: '17px 14px',
    }
  },
  button: {
    backgroundColor: "#1976D2",
    color: "white",
    "&:hover": {
      backgroundColor: "#1e8fff"
    }
  }
}));

export default function Checkout() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [osnovniPodatki, setOsnovniPodatki] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    console.log("next step");
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <OsnovniPodatki next={handleNext} setOsnovniPodatki={setOsnovniPodatki} userId={user.userId} />;
      case 1:
        return <Big5 next={handleNext} osnovniPodatki={osnovniPodatki} userId={user.userId} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Zajem podatkov
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <div style={{ textAlign: "center" }} >
                <Typography variant="h5" gutterBottom>
                  Uspešno ste vnesli vse zahtevane podatke.
                </Typography>
                <Typography variant="subtitle1">
                  Ko boste pripravljeni lahko pritisnete spodnji gumb in začnete reševati captche.
                </Typography>
                </div>
                <Link to="/captcha">
                  <div style={{ textAlign: "center", marginTop: "25px" }} >
                    <Button className={classes.button}>
                      Pojdi na reševanje Captch
                    </Button>
                  </div>
                </Link>

              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
