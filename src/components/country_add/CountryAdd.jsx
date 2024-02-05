import {
    Autocomplete,
    Button,
    Grid,
    TextField
} from "@mui/material";
import {useEffect, useState} from "react";
import AddIcon from '@mui/icons-material/Add';

export default function CountryAdd(props) {
    const URL = "https://countryinfoapi.com/api/countries";
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(URL).then(res => res.json()).then((c) => {
            for(let i = 0; i < c.length; i++) {
                let country = c[i];
                country.id = "country-"+country.cca2;
                country.medals = {bronze: 0, silver: 0, gold: 0};
                setCountries(prevState => [...prevState, country]);
            }
            setLoading(false);
        });
    }, []);

    const addCountry = () => {
        if(selectedCountry.length > 0 && selectedCountry) {
            let country = countries.find((c) => c.name === selectedCountry);
            props.onAddCountry(JSON.parse(JSON.stringify(country)));
        }
    }

    return (

            <Grid alignItems="center" justifyContent="center">
                <Grid item>
                    <Autocomplete
                        loading={loading}
                        loadingText="Loading..."
                        onChange={(e) => setSelectedCountry(e.target.innerText)}
                        style={{width: '100%'}}
                        disablePortal
                        id="combo-box-demo"
                        options={countries}
                        getOptionDisabled={(option) => option.disabled}
                        getOptionLabel={(option) => option.name}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Country" />}
                        renderOption={(props, option) => {
                            return (
                                <li {...props} key={option.id}>
                                    {option.name}
                                </li>
                            );
                        }}
                    />
                </Grid>
                <Grid item sx={{marginTop: "10px"}}>
                    <Button disabled={(!selectedCountry)} color="success" variant="contained" style={{width: "100%"}} onClick={addCountry}><AddIcon/></Button>
                </Grid>
            </Grid>
    );
}