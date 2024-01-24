import { Button, Grid } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Country from "../country/Country";

export default function CountryList() {
    const [countries, setCountries] = useState([]);
    const [cid, setCid] = useState(0);

    function addCountry() {
        setCountries(c => [...c, {name: "country" + cid}]);
        setCid(c => c+1);
    }

    return (
        <Grid>
            {(countries.length <= 0) ? <p style={{textAlign: 'center'}}>Your list is empty!</p> : ""}
            {countries.map((country) => <Country name={country.name}/>)}
            <Button onClick={addCountry} variant="text"><AddIcon/>Add Country</Button>
        </Grid>
    );
}