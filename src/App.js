import { Grid } from '@mui/material';
import './App.css';
import CountryList from './components/country_list/CountryList';

function App() {
  return (
    <div className="App">
      <header className="title">
          <span style={{color: "brown"}}>Olympic </span>
          <span style={{color: "silver"}}>Medal </span>
          <span style={{color: "gold"}}>Tracker</span>
      </header>
      <Grid container alignItems='center' justifyContent="center">
        <CountryList></CountryList>
      </Grid>
    </div>
  );
}

export default App;
