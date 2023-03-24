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
import KeepMountedModal from './Modal';
import Modal from '@mui/material/Modal';
import { alpha, styled } from '@mui/material/styles';
function Forms() {
  const [input, setInput] = useState('');

  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const handleOpen = (event) => {
   console.log(event.target);
    if (event.target.under19.checked) {
      setCount(count + 100)
    }
    if (event.target.under17.checked) {
      setCount(count + 100)
    }
    if (event.target.under15.checked) {
      setCount(count + 100)
    }
    if (event.target.under13.checked) {
      setCount(count + 100)
    }
    if (event.target.under11.checked) {
      setCount(count + 100)
    }
    if (event.target.under9.checked) {
      setCount(count + 100)
    }
    if (event.target.under7.checked) {
      setCount(count + 100)
    }
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  // const responseBody = {fullName: "", tournamentName: "", school: "", address: "", contactNo: 0, whatsappNo: 0, regNo: "",gender: "",upload:"", dob: "", ageYears: 0, ageMonths: 0, under19: false}
  const responseBody = {name: "", url: ""}
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
  // const url = 'http://127.0.0.1:5000/user/entries';

  // function downloadFile(url) {
  //   axios.get(url)
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }
  
  // downloadFile(url);

  async function handleSubmit(event) {
    event.preventDefault();

  const novicesEvents = {
    under19: false,
    under17: false,
    under15: false,
    under13: false,
    under11: false,
    under9: false,
    under7: false,
  }

  const formData = new FormData();
  formData.append('fullName', event.target.fullName.value);
  formData.append('tournamentName', event.target.tournamentName.value);
  formData.append('school', event.target.school.value);
  formData.append('address', event.target.address.value);
  formData.append('contactNo', event.target.contactNo.value);
  formData.append('whatsappNo', event.target.whatsappNo.value);
  formData.append('regNo', event.target.regNo.value);
  formData.append('gender', event.target.gender.value);
  formData.append('dob', event.target.dob.value);
  formData.append('ageYears', event.target.ageYears.value);
  formData.append('ageMonths', event.target.ageMonths.value);

  if (event.target.intermediate.checked) {
    formData.append('events', 'intermediate')
  } else if (event.target.novices.checked){
    formData.append('events', 'novices')
  }

  novicesEvents.under19 = event.target.under19.checked;
  novicesEvents.under17 = event.target.under17.checked;
  novicesEvents.under15 = event.target.under15.checked;
  novicesEvents.under13 = event.target.under13.checked;
  novicesEvents.under11 = event.target.under11.checked;
  novicesEvents.under9 = event.target.under9.checked;
  novicesEvents.under7 = event.target.under7.checked;

  formData.append('novicesEvent', novicesEvents);
  formData.append('recfile', event.target.upload.files[0]);

  var object = {};
formData.forEach(function(value, key){
    object[key] = value;
});
var json = JSON.stringify(object);
console.log(json);
  // Append other fields to the FormData object as needed
console.log(event.target.upload.files[0]);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  // axios.post('http://127.0.0.1:5000/user/register', formData, config)
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error));
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
      
      name="gender"
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
    color: 'white'
  };
  const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: 'white',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'white',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  });

  return (
    <div style={{color: 'white'}}>

      <Box borderRadius='md' bg='tomato' px={5} h={8} paddingTop={5}>
        
        <p >*** Read the <Link href='/guidelines'>guidelines</Link> carefully before submitting the form.</p>
        
        <Typography variant="h5" gutterBottom>
        Registration Form
        </Typography>
        {/* <HorizontalNonLinearStepper />  */}

        <form onSubmit={e => handleSubmit(e)}>

        
        <FormControl>         
        <TextField variant="filled" color="success" style={styles}  id="standard" name="fullName" value={formData.fullName} onChange={handleInputChanges} label="Name in Full" fullWidth />
        {/* <ValidationTextField
        label="CSS validation style"
        required
        variant="outlined"
        id="validation-outlined-input"
      /> */}
        </FormControl>
       
        <br />
        
        <FormControl >
        <TextField style={styles}  id="standard" name="tournamentName" label="Name for the Tournament" variant="standard" fullWidth />
        </FormControl>

        <br />
        
        <FormControl >
        <TextField style={styles}  id="standard" name="school" label="School/ Club" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles}  id="standard" name="address" label="Address" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles}  id="standard" name="contactNo" type="number" label="Contact Number" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles}  id="standard" name="whatsappNo" type="number" label="WhatsApp Number" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles}  id="standard" name="email" type="email" label="E-mail" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <TextField style={styles}  id="standard" name="regNo" label="TTASL Registration Number" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl>
        <FormLabel sx={{paddingBottom: '15px'}}>Gender</FormLabel>
            <Dropdown />
        </FormControl>


        <br />
        
        <Typography variant="h6" gutterBottom>
          EVENTS I WISH TO PARTICIPATE ARE GIVEN BELOW
        </Typography>

        <CheckboxesGroup />

        <br />

        <Typography variant="h6" gutterBottom>
        * Age Group
        </Typography>

        <br />

        <FormControl >
        <FormLabel>Date of Birth</FormLabel>
        <TextField style={styles}  type="date" id="dob" name="dob" label="" variant="standard" fullWidth />
        </FormControl>

        <br />

        <FormControl >
        <FormLabel>Age as at 01/01/2023</FormLabel>
        <TextField style={styles}  type="number" id="age-years" name="ageYears" label="Years" variant="standard" fullWidth />
        <TextField style={styles}  type="number" id="age-months" name="ageMonths" label="Months" variant="standard" fullWidth />
        </FormControl>

        <br />

        <Typography variant="h6" gutterBottom>
        * Novices Events
        </Typography>

        <NovicesEvents />

        <br />

        {/* <Button type="submit" onSubmit={handleOpen} sx={{color: '#4c4c4c', marginLeft: '-7px', marginBottom: '18px'}} >Check Payment</Button>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Total Payment
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                Required amount is  {count} LKR
              </Typography>
            </Box>
          </Modal> */}
        
        <FormControl >
            <div style={styles} >
            <FormLabel sx={{paddingBottom: '15px'}}>Upload the Payment Slip</FormLabel>
            <UploadButton />
            </div>
        </FormControl>
        <br /> 

        
        <Button variant="solid" type="submit" id='submit-button' name='submitButton' sx={{background: "#ea0020e0", color: "white", marginBottom: '300px'}}>Submit</Button>
        </form>
      </Box>
    </div>
  )
}

export default Forms;
