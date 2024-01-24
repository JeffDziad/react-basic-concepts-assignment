import { Grid } from "@mui/material";
import "./Country.css";

export default function Country(props) {
    return (
        <div className="country">
            <Grid container spacing={2}>
                <Grid item>
                    {props.name}
                </Grid>
                <Grid item>
                    Medals
                </Grid>
                <Grid item>
                    Add
                </Grid>
            </Grid>
        </div>
    );
}