import SliderCaptcha from '@slider-captcha/react';
import { useState, useEffect } from 'react';
import { poskusiAPI } from '../../services/API';
import CustomSliderCaptcha from './SliderCaptcha/src';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Box } from '@mui/system';

const SlideCaptcha = ({ next, userId }) => {

    const [stUspesnihPoskusov, setStUspesnihPoskusov] = useState(0);
    const [stPoskusov, setStPoskusov] = useState(0);
    const [startTime, setStartTime] = useState(0);

    useEffect(() => {
        setStartTime(performance.now());
    }, [])

    const successCallback = () => {
        var time = (performance.now() - startTime) / 1000;
        uploadTry(time);
    }
    const successCallback2 = () => {
        console.log("success2");
        var time = (performance.now() - startTime) / 1000;
        uploadTry(time);
        next();
    }
    const uploadTry = (cas) => {
        var data = {
            userId: userId,
            stPoskusov: stPoskusov,
            cas: cas,
            tip: "slide",
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
    const errorCallback = () => {
        var stevilo = stPoskusov;
        setStPoskusov(stevilo + 1);
    }

    return (
        <div>
            <h2>Drsna Captcha</h2>
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
            <br/>
            <div style={{ display: stUspesnihPoskusov === 0 ? "block" : "none"}}>
                <CustomSliderCaptcha
                    create={process.env.REACT_APP_SLIDE_CAPTCHA_CREATE}
                    verify={process.env.REACT_APP_SLIDE_CAPTCHA_VERIFY}
                    callback={successCallback}
                    errorCallback={errorCallback}
                />
            </div>
            <div style={{ display: stUspesnihPoskusov !== 0 ? "block" : "none"}}>
                <CustomSliderCaptcha
                    create={process.env.REACT_APP_SLIDE_CAPTCHA_CREATE}
                    verify={process.env.REACT_APP_SLIDE_CAPTCHA_VERIFY}
                    callback={successCallback2}
                    errorCallback={errorCallback}
                />
            </div>
        </div>

    );
}
export default SlideCaptcha;