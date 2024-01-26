import {FormControl, Grid, IconButton, InputLabel, MenuItem, Select} from "@mui/material";
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

            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={10}>
                    <FormControl fullWidth>
                        <InputLabel id="country-select-label">Add Country</InputLabel>
                        <Select
                            disabled={loading}
                            placeholder={(loading)?"Loading, please wait...":""}
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
                    <IconButton onClick={addCountry} sx={{marginLeft: 1}}><AddIcon/></IconButton>
                </Grid>
            </Grid>
    );
}