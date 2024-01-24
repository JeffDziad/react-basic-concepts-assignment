import { CardActions, CardContent, Typography, Card, Divider, Grid, IconButton } from "@mui/material";
import "./Country.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState } from "react";

export default function Country(props) {
    const [medals, setMedals] = useState(props.medals);

    const addMedal = () => {
        setMedals((prev) => prev+1);
    }

    const removeMedal = () => {
        (medals <= 0) ? setMedals(0) : setMedals((prev) => prev-1);
    }

    return (
        <div>
            <Card sx={{boxShadow: 2, marginTop: '10px'}} className="countryCard">
                <CardContent>
                    <Typography sx={{fontSize: 16, marginBottom: 1, textDecoration: "underline"}}>
                        {props.name}
                    </Typography>
                    <Typography sx={{fontSize: 20}} component="span" className="medal">
                        {medals}
                    </Typography>
                </CardContent>
                <Divider/>
                <CardActions>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <IconButton color="error" onClick={removeMedal}><RemoveIcon/></IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={addMedal}><AddIcon/></IconButton>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
}