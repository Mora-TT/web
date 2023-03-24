import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    intermediate: false,
    novices: false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    if (event.target.checked) {
        console.log("cc");
    }
    
  };

  const { intermediate, novices} = state;
  const error = [intermediate, novices].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={intermediate} onChange={handleChange} name="intermediate" />
            }
            label="Intermediate Singles"
          />
          <FormControlLabel
            control={
              <Checkbox checked={novices} onChange={handleChange} name="novices" />
            }
            label="Novices Singles"
          />
        
        </FormGroup>
      </FormControl>
    </Box>
  );
}