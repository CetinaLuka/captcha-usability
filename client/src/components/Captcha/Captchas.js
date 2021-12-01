import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserContext from '../../context/UserContext';
import { useContext } from 'react';
import Introduction from './Introduction';
import SlideCaptcha from './SlideCaptcha';
import TextCaptcha from './TextCaptcha';
import AdCaptcha from './AdCaptcha';
import { makeStyles } from '@mui/styles';
import EmojiCaptcha from './EmojiCaptcha';
import { Hidden } from '@mui/material';

const steps = ['Captcha 1', 'Captcha 2', 'Captcha 3', 'Captcha 4'];

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

export default function Captchas() {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    console.log("next step");
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 1:
        return <SlideCaptcha next={handleNext} userId={user.userId} />;
      case 2:
        return <TextCaptcha next={handleNext} userId={user.userId} />;
      case 3:
        return <AdCaptcha next={handleNext} userId={user.userId} />;
      case 0:
        return <EmojiCaptcha next={handleNext} userId={user.userId} />;
      default:
        throw new Error('Unknown step');
    }
  }

  var content = (
    <>
      <Typography component="h1" variant="h4" align="center">
        Reševanje captcha testov
      </Typography>
      <Hidden smDown>
        <Stepper id="captcha-stepper" activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Hidden>
      <React.Fragment>
        {activeStep === steps.length ? (
          <React.Fragment>
            <div style={{ textAlign: "center"}} >
              <Typography variant="h5" gutterBottom>
                Uspešno ste rešili vse captcha teste.
              </Typography>
              <Typography variant="subtitle1">
                Zahvaljujemo se vam za sodelovanje v tej raziskavi.
              </Typography>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
          </React.Fragment>
        )}
      </React.Fragment>
    </>
  );

  var intro = (
    <>
      <Typography component="h1" variant="h4" align="center">
        Reševanje captcha testov
      </Typography>
      <Typography component="p" variant="p" align="center">
        V tem sklopu boste reševali captcha teste 4 različnih vrst. Vsako vrsto captche boste morali rešiti 2x. Ko boste 2. uspešno rešili test, vas bo poneslo do naslednjega tipa captche.
      </Typography>
      <div style={{ textAlign: "center", marginTop: "25px" }} >
        <Button className={classes.button} onClick={() => setStarted(true)}>
          Začni z reševanjem
        </Button>
      </div>
    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          {started ? content : intro}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
