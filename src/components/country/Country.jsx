import {
    CardActions,
    CardContent,
    Typography,
    Card,
    Divider,
    Grid,
    IconButton,
    CardHeader,
    ToggleButton, Button, Badge,
} from "@mui/material";
import "./Country.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from "react";

export default function Country(props) {
    const [selectedMedal, setSelectedMedal] = useState("bronze");

    const totalMedals = () => {
        let t = 0;
        for(let key in props.country.medals) {
            t += props.country.medals[key];
        }
        return t;
    }

    const handleIncrement = () => {
        props.onIncrement(props.country.id, selectedMedal);
    };

    const handleDecrement = () => {
        props.onDecrement(props.country.id, selectedMedal);
    };

    return (
        <div>
            <Card sx={{boxShadow: 2, marginTop: '10px'}} className="countryCard">
                <CardHeader
                    action={<IconButton onClick={() => props.onDelete(props.country.id)}><DeleteIcon color="error"/></IconButton>}
                    title={<Typography variant="h5">{props.country.name}</Typography>}
                    avatar={
                    <Badge badgeContent={totalMedals()} color="primary">
                        <img alt={props.country.name + ' flag'} height={40} src={[props.country.flag]}/>
                    </Badge>
                    }
                />
                <CardContent>
                    <Grid spacing={2} container justifyContent="space-between">
                        <Grid item >
                            <ToggleButton value="bronze" selected={(selectedMedal === 'bronze')} onChange={() => {setSelectedMedal('bronze')}}>
                                <Typography sx={{fontSize: 20}} component="span" className="medal bronzeMedal">
                                    {props.country.medals.bronze}
                                </Typography>
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton value="silver" selected={(selectedMedal === 'silver')} onChange={() => {setSelectedMedal('silver')}}>
                                <Typography sx={{fontSize: 20}} component="span" className="medal silverMedal">
                                    {props.country.medals.silver}
                                </Typography>
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton value="gold" selected={(selectedMedal === 'gold')} onChange={() => {setSelectedMedal('gold')}}>
                                <Typography sx={{fontSize: 20}} component="span" className="medal goldMedal">
                                    {props.country.medals.gold}
                                </Typography>
                            </ToggleButton>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider/>
                <CardActions>
                    <Grid spacing={1} container justifyContent="space-around">
                        <Grid item style={{width: "50%"}}>
                            <Button style={{width: "100%"}} variant="outlined" color="error" onClick={handleDecrement}><RemoveIcon/></Button>
                        </Grid>
                        <Grid item style={{width: "50%"}}>
                            <Button style={{width: "100%"}} variant="outlined" color="success" onClick={handleIncrement}><AddIcon/></Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
}