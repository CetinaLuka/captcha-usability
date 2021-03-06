import * as React from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useState, useEffect } from 'react';
import { poskusiAPI } from '../../services/API';
import CustomSliderCaptcha from './SliderCaptcha/src';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Box, width } from '@mui/system';
import { Grid, TextField, Button } from '@mui/material';
import { makeStyles } from "@mui/styles";
import Oglasi from "../../data/Oglasi";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Snackbar, Alert } from "@mui/material";
import Fade from '@mui/material/Fade';

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

const AdCaptcha = ({ next, userId }) => {
    const classes = useStyles();
    const [stUspesnihPoskusov, setStUspesnihPoskusov] = useState(0);
    const [stPoskusov, setStPoskusov] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [success, setSuccess] = useState(false);
    const [captchaError, setCaptchaError] = React.useState(false);
    const [currentAd, setCurrentAd] = React.useState(0);



    useEffect(() => {
        setStartTime(performance.now());
    }, [])

    const nextAd = () => {
        console.log(currentAd + 1);
        console.log(Oglasi.length);
        if (currentAd + 1 >= Oglasi.length) {
            console.log(0);
            setCurrentAd(0);
        }
        else {
            console.log(currentAd + 1);
            setCurrentAd(currentAd + 1);

        }
    }

    const checkCaptcha = (e) => {
        console.log(currentAd);
        console.log(stUspesnihPoskusov);
        console.log(stPoskusov);
        if (e.target.value === Oglasi[currentAd].pravilenOdgovor[0]) {
            console.log("success");
            var time = (performance.now() - startTime) / 1000;
            uploadTry(time);
            setSuccess(true);
            if (stUspesnihPoskusov + 1 == 2) {
                console.log("konec");
                setTimeout(() => next(), 1500);
            }
            else {
                console.log("next");
                setStPoskusov(0);
                setStartTime(performance.now());
                setTimeout(() => nextAd(), 1500);
                setStUspesnihPoskusov(stUspesnihPoskusov + 1);
            }
        }
        else {
            setStPoskusov(stPoskusov + 1);
            setCaptchaError(true);
            setTimeout(() => nextAd(), 1500);
        }


    }
    const uploadTry = (cas) => {
        var data = {
            userId: userId,
            stPoskusov: stPoskusov,
            cas: cas,
            tip: "ad",
            datum: new Date()
        };
        poskusiAPI.post("", data)
            .then((result) => {
                setStUspesnihPoskusov(stUspesnihPoskusov + 1);
                setStPoskusov(0);
                setStartTime(performance.now());
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Oglasna Captcha</h2>
            <h3>Ne pozabite: vsako captcho morate uspe??no re??iti 2x</h3>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={stUspesnihPoskusov} alternativeLabel>
                    <Step key={0}>
                        <StepLabel>1. captcha</StepLabel>
                    </Step>
                    <Step key={1}>
                        <StepLabel>2. captcha</StepLabel>
                    </Step>
                </Stepper>
            </Box>
            <br />
            <div >
                <Grid container alignItems="center" style={{ marginTop: '25px' }}>
                    <Grid item xs={12}>
                        <iframe style={{ width: "100%", height: "350px" }} src={"https://www.youtube-nocookie.com/embed/" + Oglasi[currentAd].url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Kateri izdelek ali storitev se tr??i v oglasu?</FormLabel>
                            <RadioGroup
                                name="radio-buttons-group"
                                onChange={checkCaptcha}
                            >
                                {
                                    Oglasi[currentAd].opcije.map((item) => (
                                        <FormControlLabel value={item} control={<Radio />} label={item} />
                                    ))
                                }
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Snackbar
                    open={captchaError}
                    autoHideDuration={6000}
                    onClose={() => setCaptchaError(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    TransitionComponent={Fade}
                >
                    <Alert onClose={() => setCaptchaError(false)} severity="error" sx={{ width: '100%' }}>
                        Odgovor je napa??en. Prikazujem naslednjo captcho.
                    </Alert>
                </Snackbar>
                <Snackbar
                    open={success}
                    autoHideDuration={6000}
                    onClose={() => setSuccess(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    TransitionComponent={Fade}
                >
                    <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                        Odgovor je pravilen.
                    </Alert>
                </Snackbar>
            </div>
        </div>

    );
}
export default AdCaptcha;