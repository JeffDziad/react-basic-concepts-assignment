import { Grid } from '@mui/material';
import './App.css';
import CountryList from './components/country_list/CountryList';

function App() {
  return (
    <div className="App">
      <header>
        Gold Medal Tracker
      </header>
      <Grid container alignItems='center' justifyContent="center">
        <CountryList></CountryList>
      </Grid>
    </div>
  );
}

export default App;
