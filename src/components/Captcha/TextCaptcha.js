import * as React from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useState, useEffect } from 'react';
import { poskusiAPI } from '../../services/API';
import CustomSliderCaptcha from './SliderCaptcha/src';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Box } from '@mui/system';
import { Grid, TextField, Button } from '@mui/material';
import { makeStyles } from "@mui/styles";

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

const TextCaptcha = ({ next, userId }) => {
    const classes = useStyles();
    const [stUspesnihPoskusov, setStUspesnihPoskusov] = useState(0);
    const [stPoskusov, setStPoskusov] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [captcha, setCaptcha] = useState("");
    const [captchaError, setCaptchaError] = React.useState(false);


    useEffect(() => {
        setStartTime(performance.now());
        loadCaptchaEnginge(6);
    }, [])

    const checkCaptcha = () => {
        if (validateCaptcha(captcha)) {
            var time = (performance.now() - startTime) / 1000;
            uploadTry(time);
            if (stUspesnihPoskusov + 1  == 2) {
                next();

            }
            else {
                setStUspesnihPoskusov(stUspesnihPoskusov + 1);
                setStPoskusov(0);
                loadCaptchaEnginge(6);
                setStartTime(performance.now());
                setCaptcha("");
            }
        }
        else {
            setStPoskusov(stPoskusov + 1);
            setCaptchaError(true);
        }
    }
    const uploadTry = (cas) => {
        var data = {
            userId: userId,
            stPoskusov: stPoskusov,
            cas: cas,
            tip: "text",
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

    const onCaptchaChange = event => {
        setCaptchaError(false);
        setCaptcha(event.target.value);
    }

    return (
        <div>
            <h2>Tekstovna Captcha</h2>
            <h3>Ne pozabite: vsako captcho morate uspešno rešiti 2x</h3>
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
                    <Grid item xs={12} md={4}>
                        <LoadCanvasTemplate />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextField
                            error={captchaError}
                            className={classes.captchaField}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="captcha"
                            label={"Enter captcha value"}
                            name="captcha"
                            value={captcha}
                            onChange={onCaptchaChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={8} onClick={checkCaptcha}>
                        <Button className={classes.button}>
                            Potrdi
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}
export default TextCaptcha;