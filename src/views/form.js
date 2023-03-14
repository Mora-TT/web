import { Box } from '@mui/system';
import * as React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Link,
  Button,
  Select
} from '@chakra-ui/react';
import { useState, useEffect } from "react";
import { Input, Heading } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import WithSubnavigation from '../components/Navbar';
import SubmitButton from './Agreement';

function Forms() {
  const [input, setInput] = useState('');

  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => setInput(e.target.value)
  function handleAcceptance() {
    setAccepted(true);
  }
  function handleSubmit() {
    if (accepted) {
      setSubmitted(true);
    } else {
      alert("I agree to the guidelines");
    }
  }
  const isError = input === ''
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   console.log('name', event.target.name.value)
  //   console.log('tournamentName', event.target.tournamentName.value)
  //   localStorage.setItem('name', event.target.name.value);
  // }
  // const fileUploadInput = document.querySelector('.file-upload-input');
  // fileUploadInput.addEventListener('change', (event) => {
  //   const file = event.target.files[0];
  //   console.log(file);
  //   // You can perform any operation on the uploaded file here
  // });
//   <FormControl paddingBottom={5} >
//   <Checkbox >Novices - Under 19 Singles</Checkbox>
// </FormControl>
// <FormControl paddingBottom={5} >
//   <Checkbox >Novices - Under 17 Singles</Checkbox>
// </FormControl>
// <FormControl paddingBottom={5} >
//   <Checkbox >Novices - Under 15 Singles</Checkbox>
// </FormControl>
// <FormControl paddingBottom={5} >
//   <Checkbox >Novices - Under 13 Singles</Checkbox>
// </FormControl>
// <FormControl paddingBottom={5} >
//   <Checkbox >Novices - Under 11 Singles</Checkbox>
// </FormControl>
// <FormControl paddingBottom={5} >
//   <Checkbox >Novices - Under 09 Singles</Checkbox>
// </FormControl>
// <FormControl paddingBottom={5} >
//   <Checkbox >Novices - Under 07 Singles</Checkbox>
// </FormControl>

  const [totalCount, setTotalCount] = useState(0);
  const [eventsList, setEventList] = useState([]);

  function ChangeCount(count) {
    console.log(count);
    // console.log(eventsList);
    if ((count.checked) && (eventsList.includes(count.name) == false)) {
      eventsList.push(count.name);
      setEventList(eventsList)
      let newCount = eventsList.length * 100;
      setTotalCount(newCount);
      console.log(newCount);
    } else if((eventsList.includes(count.name) == true)) {
      eventsList.splice(eventsList.indexOf(count.name))
      let newCount = eventsList.length * 100;
      setTotalCount(newCount);
      setEventList(eventsList)
    }
    useEffect(() => {
      // This function will be called whenever the `value` state changes
      // and will update the value display accordingly.
      console.log(`Value changed to ${totalCount}`);
    }, [totalCount]);
  }

  const NovicesEvents = () => {
    const options = [
      {
        value: 'under19',
        label: 'Novices - Under 19 Singles',
        price: 100
      },
      {
        value: 'under17',
        label: 'Novices - Under 17 Singles',
        price: 100
      },
      {
        value: 'under15',
        label: 'Novices - Under 15 Singles',
        price: 100
      },
      {
        value: 'under13',
        label: 'Novices - Under 13 Singles',
        price: 100
      },
      {
        value: 'under11',
        label: 'Novices - Under 11 Singles',
        price: 100
      },
      {
        value: 'under9',
        label: 'Novices - Under 09 Singles',
        price: 100
      },
      {
        value: 'under7',
        label: 'Novices - Under 07 Singles',
        price: 100
      },
    ]
    return (
      <div >
      {options.map(o => (
        <FormControl paddingBottom={5} key={o.value} name={o.value} >
          <Checkbox  key={o.value} id = {o.value} name={o.value} > {o.label} </Checkbox>         
          {/* <input type="checkbox" key={o.value} id = {o.value} name={o.value} onChange={e => ChangeCount(e.target)} /> */}
        </FormControl>
      ))}
      </div>
    );
  }
  const Dropdown = ({}) => {
    const options = [
      {
        name: 'Male',
        value: 'Male',
        label: 'Male'
      },
      {
        name: 'Female',
        value: 'Female',
        label: 'Female'
      }
    ]
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    return (
      <Select variant='outline' defaultValue={" "}
      onChange={e => console.log(e.target.value)}>
        <option  value={" "} disabled></option>
      {options.map(o => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
       
      </Select>
    );
  };

  return (
    <div>

      <Box borderRadius='md' bg='tomato' px={5} h={8} paddingTop={5}>

        <p >*** Read the <Link color='teal.500' href='/guidelines'>guidelines</Link> carefully before submitting the form.</p>
        
        <Heading as='h1' size='0.5xl' paddingBottom={5} paddingTop={10} noOfLines={1} >
          Registration Form
        </Heading>

        {/* <FormControl isInvalid={isError}>
          <FormLabel>Email</FormLabel>
          <Input type='email' value={input} onChange={handleInputChange} />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl> */}
        <form onSubmit={handleSubmit}>
        <FormControl isRequired paddingBottom={5}>
          <FormLabel>Name in Full</FormLabel>
          <Input type="text" id="name" name="name"  />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>Name to be used in the Tournament</FormLabel>
          <Input type="text" id="name-tournament" name="tournamentName"  />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>School/ Club</FormLabel>
          <Input type="text" id="school-club" name="school-club" />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>Address</FormLabel>
          <Input type="text" id="address" name="address" />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>Contact Number</FormLabel>
          <Input type="tel" id="contact-no" name="contact-no" />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>WhatsApp Number</FormLabel>
          <Input type="tel" id="whatsapp" name="whatsapp" />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" id="email" name="email" />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>TTASL Registration Number</FormLabel>
          <Input type="text" id="ttasl-reg-no" name="ttasl-reg-no" />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>Gender</FormLabel>
          <Dropdown />
        </FormControl>

        <FormControl isRequired paddingBottom={5} >
          <FormLabel>Payment Slip</FormLabel>
          <input id="file-upload" type="file" name="file-upload-input" />
        </FormControl>

        <Heading as='h4' size='1xl' paddingBottom={5} paddingTop={5} noOfLines={1} >
          EVENTS I WISH TO PARTICIPATE ARE GIVEN BELOW
        </Heading>

        <FormControl  paddingBottom={5}>
          <Checkbox >Intermediate Singles</Checkbox>
        </FormControl>
        <FormControl  paddingBottom={5}>
          <Checkbox >Novices Singles</Checkbox>
        </FormControl>

        <Heading as='h4' size='0.25xl' paddingBottom={5} paddingTop={5} noOfLines={1} >
          * Age Group
        </Heading>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>Date of Birth</FormLabel>
          <Input type="date" id="dob" name="dob"  />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>Age as at 01/01/2023</FormLabel>
          <Input type="number" id="age-years" name="age-years"  />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>Years</FormLabel>
          <Input type="number" id="age-months" name="age-months"  />
        </FormControl>

        <FormControl isRequired paddingBottom={5}>
          <FormLabel>Month</FormLabel>
          <Input type="number" id="age-days" name="age-days"  />
        </FormControl>

        <Heading as='h4' size='0.25xl' paddingBottom={5} paddingTop={5} noOfLines={1} >
          * Novices Events
        </Heading>

        <NovicesEvents />

        <p> Total Price - {totalCount}</p>
        <Button type="submit" marginTop={5} marginLeft={30} marginBottom={100} style={{justifyContent: 'center'}}>Submit</Button>
        </form>
      </Box>
    </div>
  )
}

export default Forms;
