import { Grid } from "@mui/material";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Button } from "@mui/material";
import * as React from "react";

const Introduction = ({next, userId}) => {
    return(
        <Grid container>
            <Grid item xs={12}>
                <h3>Reševanje captcha testov</h3>
            </Grid>
            <Grid item xs={12}>
                <p>V tem sklopu boste reševali captcha teste.</p>
                <p>Sklop je sestavljen iz 4 različnih vrst captch, za nadaljevanje na naslednjo pa boste morali vsako uspešno rešiti 2x</p>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={next}>
                    Začni z reševanjem
                </Button>
            </Grid>
        </Grid>
    );
}
export default Introduction;