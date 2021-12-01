import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Fade from '@mui/material/Fade';
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
    Alert,
    Paper,
    Container
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#1976D2",
        color: "white",
        "&:hover": {
          backgroundColor: "#1e8fff"
        }
      }
}));

export default function Intro() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography align="center" style={{fontSize: "28px", fontFamily: "'Josefin Sans', sans-serif"}}>
                    <b>Raziskava o uporabnosti Captcha testov</b>
                </Typography>
                <br/>
                <Typography align="center" style={{fontSize: "20px"}}>
                    <b>Kaj so Captcha testi?</b>
                    <br/>
                    <br/>
                </Typography>
                <Typography style={{fontSize: "16px"}}>
                    To so testi, ki <b>preverjajo če spletno stran res uporablja človek</b> ali je to le <b>računalniški program, ki posnema človeka</b>. Da uporabnik dokaže da ni robot mora uspešno rešiti enega ali več testov. Ti so lahko slikovni, tekstovni, avditorni ali pa nekaj popolnoma novega.
                </Typography>
                <Typography style={{fontSize: "16px"}}>
                    To raziskavo smo ustvarili z namenom, da bi ugotovili, kako zahtevne za reševanje so Captcghe postale in katere vrste captch uporabniki najlažje/najtežje rešijo. S pomočjo rezultatov bomo razvili algoritem, ki bo na podlagi značilnosti uporabnika predlagal captcha test, ki bo za tega uporabnika najbolj primeren.
                </Typography>
                <br/>
                <hr style={{color: "gainsboro"}}/>
                <br/>
                <Typography align="center" style={{fontSize: "20px"}}>
                    <b>Zajem podatkov</b>
                    <br/>
                    <br/>
                </Typography>
                <Typography style={{fontSize: "16px"}}>
                    Prosili vas bomo da vnesete osnovne podatke o sebi kot so: starost, spol, izobrazba, okvare vida in vrsta naprave. V naslednjem koraku boste izpolnili kratek osebnostni test (10 vprašanj), ki mero 5 osebnostnih značilnosti (ekstravertiranost, vestnost, odprtost, sprejemljivost, nevroticizem).
                    <br/><br/><b>Sodelovanje v raziskavi je anonimno</b>, od vas ne bomo zahtevali nobenih podatkov po katerih bi vas lahko identificirali. O vas ne shranjujemo nobenih podatkov, ki niso del vprašalnika. 
                    <br/>
                    Predviden čas reševanja: <b>5 min</b>
                </Typography>
                <br/>
                <hr style={{color: "gainsboro"}}/>
                <br/> 
                <Typography align="center" style={{fontSize: "20px"}}>
                    <b>Reševanje Captcha testov</b>
                    <br/>
                    <br/>
                </Typography>
                <Typography style={{fontSize: "16px"}}>
                    Reševali boste 4 različne vrste captch:
                    <ol>
                        <li>Tekstovno Captcho - potrebno je prepisati besedilo iz slike. Besedilo je na sliki rahlo popačeno.</li>
                        <li>Emotikon Captcho - captcha vam sporoči ime emotikona (živali) in vi morate klikniti na pravi emotikon. </li>
                        <li>Drsno Captcho - košček sestavljanke morate vstaviti na pravo mesto.</li>
                        <li>Oglasno Captcho - pokazal se bo youtube video oglasa, vi pa morate ugotoviti kateri artikel se v oglasu trži in izbrati ustrezen odgovor</li>
                    </ol>

                    Predviden čas reševanja: <b>2 min</b>
                </Typography>
                <br/>
                <br/>
                <div style={{textAlign: "center"}}>
                <Link to="zajem-podatkov">
                    <Button className={classes.button}>
                        Začni z reševanjem vprašalnika
                    </Button>
                </Link>
                </div>
            </Paper>
        </Container>
    );
}
