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
import PrimerSlika from "./screenshot1.jpg";
import PrimerSlika2 from "./screenshot2.png";
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

export default function Big5({ next, osnovniPodatki, userId }) {
    const classes = useStyles();
    const [e, setE] = useState(0);
    const [v, setV] = useState(0);
    const [o, setO] = useState(0);
    const [s, setS] = useState(0);
    const [n, setN] = useState(0); 
    const [emptyError, setEmptyError] = useState(false);
    const [errorUploading, setErrorUploading] = useState(false);

    const handleSUbmit = () => {
        if ((e || v || o || s || n) === 0) {
            setEmptyError(true);
        }
        else {
            var podatki = osnovniPodatki;
            osnovniPodatki.big5 = {
                ekstravertiranost: e,
                vestnost: v,
                odprtost: o,
                sprejemljivost: s,
                nevroticizem: n
            }
            console.log(podatki);
            axios.post(process.env.REACT_APP_UPORABNIKI + "/osnovniPodatki", podatki)
                .then((res) => {
                    console.log(res);
                    next();
                })
                .catch((err) => {
                    console.log(err);
                    setErrorUploading(true);
                })
        }
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Vprašalnik o osebnostnih značilnostih
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
            <Snackbar 
            open={emptyError} 
            autoHideDuration={6000} 
            onClose={() => setEmptyError(false)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            TransitionComponent={Fade}
            >
                <Alert onClose={() => setEmptyError(false)} severity="error" sx={{ width: '100%' }}>
                    Vnesti morate vse vrednosti.
                </Alert>
            </Snackbar>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography>
                            Rešite spodnji vprašalnik ter <b>rezultate</b> za vseh 5 osebnostnih značilnosti <b>vpišite v polja pod vprašalnikom</b>.
                        </Typography>
                        <br/>
                        <Typography>
                            Vrednost <b>(številko)</b>, ki jo dobite za vsako osebnostno značilnost (ekstravertiranost, vestnost, odprtost, sprejemljivost, nevroticizem), zapišite v ustrezno polje.
                        </Typography>
                        <br/>
                        <div style={{padding: "15px", outline: "1px solid gray", borderRadius: "10px"}}>
                        <Typography>
                            Primer (slika):
                        </Typography>
                        <img src={PrimerSlika}  style={{width: "100%"}}/>
                        <hr/>
                        <img src={PrimerSlika2}  style={{width: "100%"}}/>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h4">
                            Vprašalnik
                        </Typography>
                        <iframe src="https://www.1ka.si/a/4800" style={{width: "100%", height: "500px"}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="filled-number"
                            label="Ekstravertiranost"
                            type="number"
                            name="Ekstravertiranost"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={e}
                            variant="outlined"
                            onChange={(e) => { setE(e.target.value) }}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="filled-number"
                            label="Vestnost"
                            type="number"
                            name="vestnost"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={v}
                            variant="outlined"
                            onChange={(e) => { setV(e.target.value) }}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="filled-number"
                            label="Odprtost"
                            type="number"
                            name="odprtost"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={o}
                            variant="outlined"
                            onChange={(e) => { setO(e.target.value) }}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="filled-number"
                            label="Sprejemljivost"
                            type="number"
                            name="sprejemljivost"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={s}
                            variant="outlined"
                            onChange={(e) => { setS(e.target.value) }}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="filled-number"
                            label="Nevroticizem"
                            type="number"
                            name="nevroticizem"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={n}
                            variant="outlined"
                            onChange={(e) => { setN(e.target.value) }}

                        />
                    </Grid>
                </Grid>
            <Button
                variant="contained"
                onClick={handleSUbmit}
                sx={{ mt: 3, ml: 1 }}
            >
                Naprej
            </Button>
        </React.Fragment >
    );
}
