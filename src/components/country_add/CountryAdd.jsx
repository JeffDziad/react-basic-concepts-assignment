import {FormControl, Grid, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
import {useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';

export default function CountryAdd() {
    const URL = "https://countryinfoapi.com/api/countries";
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        fetch(URL).then(res => res.json()).then(countries => setCountries(countries));
    }, []);

    const handleChange = (e) => {
        setSelectedCountry(e.target.value);
    }

    return (

            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={10}>
                    <FormControl fullWidth>
                        <InputLabel id="country-select-label">Add Country</InputLabel>
                        <Select
                            labelId="country-select-label"
                            id="country-select"
                            name="country-select"
                            value={selectedCountry}
                            label="Add Country"
                            onChange={handleChange}
                        >
                            {countries.map((c) => <MenuItem key={c.cca2} value={c.name}>{c.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <IconButton sx={{marginLeft: 1}}><AddIcon/></IconButton>
                </Grid>
            </Grid>
    );
}