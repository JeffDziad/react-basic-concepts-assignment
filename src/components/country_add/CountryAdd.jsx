import {Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';

export default function CountryAdd(props) {
    const URL = "https://countryinfoapi.com/api/countries";
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(URL).then(res => res.json()).then((countries) => {
            setCountries(countries);
            setLoading(false);
            let usa = countries.find((c) => c.name === "United States");
            props.onAddCountry(usa);
        });
    }, [props]);

    const handleChange = (e) => {
        setSelectedCountry(e.target.value);
    }

    const addCountry = () => {
        if(selectedCountry.length > 0 && selectedCountry) {
            let country = countries.find((c) => c.name === selectedCountry);
            setSelectedCountry("");
            props.onAddCountry(country);
        }
    }

    return (

            <Grid direction="column" alignItems="center" justifyContent="center">
                <Grid item xs={10}>
                    <FormControl fullWidth>
                        <InputLabel id="country-select-label">New Country</InputLabel>
                        <Select
                            disabled={loading}
                            placeholder={(loading)?"Loading, please wait...":""}
                            labelId="country-select-label"
                            id="country-select"
                            name="country-select"
                            value={selectedCountry}
                            label="New Country"
                            onChange={handleChange}
                        >
                            {countries.map((c) => <MenuItem key={c.cca2} value={c.name}>{c.name}</MenuItem>)}
                        </Select>
                        <FormHelperText>Choose a country to add!</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item sx={{marginTop: "10px"}}>
                    <Button disabled={(!selectedCountry)} color="success" variant="contained" style={{width: "100%"}} onClick={addCountry}><AddIcon/></Button>
                </Grid>
            </Grid>
    );
}