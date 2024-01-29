import {
    CardActions,
    CardContent,
    Typography,
    Card,
    Divider,
    Grid,
    IconButton,
    CardHeader,
    ToggleButton, Button,
} from "@mui/material";
import "./Country.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from "react";

export default function Country(props) {
    const [medals, setMedals] = useState({bronze: 0, silver: 0, gold: 0});
    const [selectedMedal, setSelectedMedal] = useState("bronze");

    const handleIncrement = () => {
        setMedals((prevMedals) => ({
            ...prevMedals,
            [selectedMedal]: prevMedals[selectedMedal] + 1,
        }));
    };

    const handleDecrement = () => {
        setMedals((prevMedals) => ({
            ...prevMedals,
            [selectedMedal]: Math.max(0, prevMedals[selectedMedal] - 1),
        }));
    };

    return (
        <div>
            <Card sx={{boxShadow: 2, marginTop: '10px'}} className="countryCard">
                <CardHeader
                    action={<IconButton onClick={() => props.onDelete(props.country.id)}><DeleteIcon color="error"/></IconButton>}
                    title={<Typography variant="h5">{props.country.name}</Typography>}
                    avatar={<img alt={props.country.name + ' flag'} height={40} src={[props.country.flag]}/>}
                />
                <CardContent>
                    <Grid spacing={2} container justifyContent="space-between">
                        <Grid item >
                            <ToggleButton value="bronze" selected={(selectedMedal === 'bronze')} onChange={() => {setSelectedMedal('bronze')}}>
                                <Typography sx={{fontSize: 20}} component="span" className="medal bronzeMedal">
                                    {medals.bronze}
                                </Typography>
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton value="silver" selected={(selectedMedal === 'silver')} onChange={() => {setSelectedMedal('silver')}}>
                                <Typography sx={{fontSize: 20}} component="span" className="medal silverMedal">
                                    {medals.silver}
                                </Typography>
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton value="gold" selected={(selectedMedal === 'gold')} onChange={() => {setSelectedMedal('gold')}}>
                                <Typography sx={{fontSize: 20}} component="span" className="medal goldMedal">
                                    {medals.gold}
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