import { useState } from 'react';
import './App.css';
import Inputs from './components/inputs/Inputs';
import Results from './components/results/Results';
import { Grid } from '@mui/material';
import { ColorPicker, useColor } from "react-color-palette";


function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [color, setColor] = useColor("#fff8f8");
  const [logo, setLogo] = useState(null);


  const handleFullName = (newName) => {
    setFullName(newName)
  }

  const handleEmail = (newEmail) => {
    setEmail(newEmail)
  }

  const handlePosition = (newPosition) => {
    setPosition(newPosition)
  }

  const handlePhoneNumber = (newNumber) => {
    setPhoneNumber(newNumber)
  }

  const handleColor = (newColor) => {
    setColor(newColor);
  }

  const handleLogo = (newLogo) => {
    setLogo(newLogo)
  }

  return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Inputs 
            fullName={fullName}
            updateFullName={handleFullName}
            email={email}
            updateEmail={handleEmail}
            position={position}
            updatePosition={handlePosition}
            phoneNumber={phoneNumber}
            updatePhoneNumber={handlePhoneNumber}
            color={color}
            updateColor={handleColor}
            logo={logo}
            updateLogo={handleLogo}
          />
        </Grid>
        <Grid item xs={6}>
          <Results 
            fullName={fullName}
            email={email}
            position={position}
            phoneNumber={phoneNumber}
            color={color}
            logo={logo}
          />
        </Grid>
      </Grid>
  );
}

export default App;
