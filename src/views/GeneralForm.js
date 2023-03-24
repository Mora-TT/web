import { Box } from '@mui/system';
import * as React from 'react';
import {
  FormControlLabel,
  FormErrorMessage,
  FormHelperText,
  Link,
  Button,
  InputLabel,
  TextField,
  Stepper
} from '@mui/material';
import { useState, useEffect } from "react";
import { Input} from '@mui/material'
// import Checkbox from '@mui/material/Checkbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Checkbox} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Stack from '@mui/material/Stack';
import CheckboxesGroup from './CheckBoxesGroup';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import HorizontalNonLinearStepper from './Stepper';
import NovicesEvents from './NovicesEvents';

function GeneralForm() {
  const [input, setInput] = useState('');

  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const responseBody = {fullName: "", tournamentName: "", school: "", address: "", contactNo: 0, whatsappNo: 0, regNo: "",gender: "",upload:"", dob: "", ageYears: 0, ageMonths: 0, under19: false}
  const handleInputChange = (e) => setInput(e.target.value)
  function handleAcceptance() {
    setAccepted(true);
  }
  const [formData, setFormData] = useState({
    fullName: '',
    tournamentName: '',
    school: '',
    address: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    // responseBody.firstName = firstName
    // responseBody.lastName = lastName
    // responseBody.age = age
    responseBody.fullName = event.target.fullName.value
    responseBody.tournamentName = event.target.tournamentName.value
    responseBody.school = event.target.school.value
    responseBody.address = event.target.address.value
    responseBody.contactNo = event.target.contactNo.value
    responseBody.whatsappNo = event.target.whatsappNo.value
    responseBody.regNo = event.target.regNo.value
    responseBody.gender = event.target.gender.value
    responseBody.upload = event.target.upload.value
    responseBody.dob = event.target.dob.value
    responseBody.under19 = event.target.under19.checked

    console.log(responseBody)
//Form submission happens here
}

  const isError = input === ''

  const [totalCount, setTotalCount] = useState(0);
  const [eventsList, setEventList] = useState([]);
  const [checked19, setChecked19] = useState(false);
  const [checked17, setChecked17] = useState(false);

  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  function ChangeCount(count) {
    console.log(count);

  }
  useEffect(() => {
    // This function will be called whenever the `value` state changes
    // and will update the value display accordingly.
    // console.log(`Value changed to ${totalCount}`);
  }, [totalCount]);

  const UploadButton = () => {
    return (
      <Stack direction="row" alignItems="center" spacing={2} >
        <Button variant="outlined" component="label" sx={{ color: '#616161'}}>
          Upload
          <input hidden name="upload" accept="image/*" multiple type="file" />
        </Button>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <FileUploadIcon sx={{ color: '#616161'}} />
        </IconButton>
      </Stack>
    );
  }

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const Dropdown = ({}) => {
    return(

    <RadioGroup
      required
      name="controlled-radio-buttons-group"
      sx={{ my: 1 }}
    >
      <Radio value="female" label="Female" />
      <Radio value="male" label="Male" />
    </RadioGroup>
  
    )
  };
  function HiddenComponent() {
    return <div>This component was hidden, but now it's shown!</div>;
  }
  const isScreenSmall = useMediaQuery('(max-width:600px)');
  const styles = {
    // your styles here
    width: isScreenSmall ? 'none' : 1000,
    maxWidth: '100%', 
  };


  return (
    <div>

      <Box borderRadius='md' bg='tomato' px={5} h={8} paddingTop={5}>


        <form onSubmit={e => handleSubmit(e)}>

        
        <FormControl >         
        <TextField style={styles} required id="standard" name="fullName" value={formData.fullName} onChange={handleInputChanges} label="Name in Full" variant="standard" fullWidth />
        </FormControl>
       
        <br />
        
        <FormControl >
        <TextField style={styles} required id="standard" name="tournamentName" label="Name for the Tournament" variant="standard" fullWidth />
        </FormControl>

        <br />
        
        <FormControl >
        <TextField style={styles} required id="standard" name="school" label="School/ Club" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles} required id="standard" name="address" label="Address" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles} required id="standard" name="contactNo" type="number" label="Contact Number" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles} required id="standard" name="whatsappNo" type="number" label="WhatsApp Number" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles} required id="standard" name="email" type="email" label="E-mail" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles} required id="standard" name="regNo" label="TTASL Registration Number" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl>
        <FormLabel sx={{paddingBottom: '15px'}}>Gender</FormLabel>
            <Dropdown />
        </FormControl>


        <Button variant="solid" type="submit" id='submit-button' sx={{background: "#ea0020e0", color: "white"}}>Complete Step</Button>
        </form>
      </Box>
    </div>
  )
}

export default GeneralForm;
