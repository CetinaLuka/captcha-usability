import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Fade from '@mui/material/Fade';
import { MongoClient } from 'mongodb';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormGroup,
    FormLabel,
    Radio,
    RadioButton,
    RadioGroup,
    Button,
    FormHelperText,
    Snackbar,
    Alert
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import StopnjeIzobrazbe from '../../data/StopnjeIzobrazbe';
import UserContext from '../../context/UserContext';
import MongoDBService from '../../services/MongoDBService';
import { uporabnikiAPI } from '../../services/API';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    menu: {
        width: 200,
    },
    listItem: {
        whiteSpace: "normal",
        whiteSpace: "breakSpaces"
    }
}));

export default function AddressForm({ next, setOsnovniPodatki, userId }) {
    const classes = useStyles();
    const [spol, setSpol] = useState("");
    const [spolError, setSpolError] = useState(false);

    const [starost, setStarost] = useState(null);
    const [starostError, setStarostError] = useState(false);

    const [izobrazba, setIzobrazba] = useState("");
    const [izobrazbaError, setIzobrazbaError] = useState(false);

    const [naprava, setNaprava] = useState("");
    const [napravaError, setNapravaError] = useState(false);

    const [errorUploading, setErrorUploading] = useState(false);

    const [okvare, setOkvare] = useState({
        kratkovidnost: false,
        daljnovidnost: false,
        barvnaSlepota: false,
        disleksija: false
    });
    const [vhodneNaprave, setVhodneNaprave] = useState({
        miska: false,
        tipkovnica: false,
        touchpad: false,
    });

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e);
    }
    const handleNext = () => {
        if ((spolError || starostError || izobrazbaError || izobrazba === "")) {

        }
        else {
            var podatki = {
                _id: userId,
                spol: spol,
                starost: starost,
                izobrazba: izobrazba,
                okvare: okvare,
                naprava: naprava,
                vhodneNaprave: vhodneNaprave
            };
            console.log(podatki);
            setOsnovniPodatki(podatki);
            next();
            /*axios.post(process.env.REACT_APP_UPORABNIKI + "/osnovniPodatki", podatki)
                .then((res) => {
                    console.log(res);
                    next();
                })
                .catch((err) => {
                    console.log(err);
                    setErrorUploading(true);
                })*/
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Osnovni podatki
            </Typography>
            <Snackbar 
            open={errorUploading} 
            autoHideDuration={6000} 
            onClose={() => setErrorUploading(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            TransitionComponent={Fade}
            >
                <Alert onClose={() => setErrorUploading(false)} severity="error" sx={{ width: '100%' }}>
                    Podatkov ni bilo mogoče shraniti.
                </Alert>
            </Snackbar>
            <form onSubmit={submitForm}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth error={spolError}>
                            <InputLabel>Spol</InputLabel>
                            <Select
                                labelId="spol-select-label"
                                id="spol-select"
                                label="Spol"
                                name="spol"
                                value={spol}
                                onChange={(e) => { setSpol(e.target.value) }}
                                onBlur={() => { spol === "" ? setSpolError(true) : setSpolError(false) }}


                            >
                                <MenuItem value={10}>Moški</MenuItem>
                                <MenuItem value={20}>Ženski</MenuItem>
                                <MenuItem value={30}>Drugo</MenuItem>
                            </Select>
                            {spolError ? (<FormHelperText style={{ color: "red" }}>Polje ne sme biti prazno</FormHelperText>) : ""}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            error={starostError}
                            id="filled-number"
                            label="Starost"
                            type="number"
                            name="starost"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={starost}
                            variant="outlined"
                            onChange={(e) => { setStarost(e.target.value) }}
                            onBlur={() => { starost === null ? setStarostError(true) : setStarostError(false) }}

                        />
                        {starostError ? (<FormHelperText style={{ color: "red" }}>Polje ne sme biti prazno</FormHelperText>) : ""}
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth error={izobrazbaError}>
                            <InputLabel>Dosežena izobrazba</InputLabel>
                            <Select
                                label="Dosežena izobrazba"
                                name="izobrazba"
                                value={izobrazba}
                                MenuProps={{ className: classes.menu }}
                                onChange={(e) => { setIzobrazba(e.target.value) }}
                                onBlur={() => { izobrazba === "" ? setIzobrazbaError(true) : setIzobrazbaError(false) }}
                            >

                                {
                                    StopnjeIzobrazbe.map(stopnja => {
                                        return <MenuItem key={stopnja.id} value={stopnja.stopnja}>
                                            <p style={{ lineBreak: "auto", whiteSpace: "break-spaces" }}>
                                                <b>{stopnja.stopnja}</b> - {stopnja.opis}
                                            </p>
                                        </MenuItem>
                                    })
                                }
                            </Select>
                            {izobrazbaError ? (<FormHelperText style={{ color: "red" }}>Polje ne sme biti prazno</FormHelperText>) : ""}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <InputLabel>Okvare vida</InputLabel>
                        <Typography>
                            Izberite vaše okvare vida (če jih imate)
                        </Typography>
                        <FormGroup
                            onChange={(e) => { okvare[e.target.name] = e.target.checked }}
                        >
                            <FormControlLabel name="kratkovidnost" control={<Checkbox />} label="Kratkovidnost" />
                            <FormControlLabel name="daljnovidnost" control={<Checkbox />} label="Daljnovidnost" />
                            <FormControlLabel name="barvnaSlepota" control={<Checkbox />} label="Barvna slepota" />
                            <FormControlLabel name="disleksija" control={<Checkbox />} label="Disleksija" />

                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Na kateri napravi rešujete to anketo</FormLabel>
                            <RadioGroup
                                name="radio-buttons-group"
                                value={naprava}
                                onChange={(e) => { setNaprava(e.target.value) }}
                                defaultValue="PC"
                            >
                                <FormControlLabel defaultChecked={true} value="PC" control={<Radio />} label="Namizni računalnik" />
                                <FormControlLabel value="prenosnik" control={<Radio />} label="Prenosnik" />
                                <FormControlLabel value="tablica" control={<Radio />} label="Tablica" />
                                <FormControlLabel value="telefon" control={<Radio />} label="Mobilni telefon" />
                                <FormControlLabel value="drugo" control={<Radio />} label="Drugo" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Vhodne naprave</InputLabel>
                        <Typography>
                            Katere vhodne naprave uporabljate
                        </Typography>
                        <FormGroup
                            onChange={(e) => { vhodneNaprave[e.target.name] = e.target.checked }}
                        >
                            <FormControlLabel name="miska" control={<Checkbox />} label="Miška" />
                            <FormControlLabel name="tipkovnica" control={<Checkbox />} label="Tipkovnica" />
                            <FormControlLabel name="touchpad" control={<Checkbox />} label="Drsna plošča (touchpad)" />
                        </FormGroup>
                    </Grid>
                </Grid>
            </form>
            <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
            >
                Naprej
            </Button>
        </React.Fragment >
    );
}
