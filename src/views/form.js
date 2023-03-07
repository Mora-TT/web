import { Box } from '@mui/system';
import * as React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Link,
  Button
} from '@chakra-ui/react';
import { useState } from "react";
import { Input, Heading } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import WithSubnavigation from '../components/Navbar';

function Forms() {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('name', event.target.name.value)
    console.log('tournamentName', event.target.tournamentName.value)
    localStorage.setItem('name', event.target.name.value);
  }
  return (
    <div>

      <Box borderRadius='md' bg='tomato' px={30} h={8} paddingTop={5}>

        <p >*** Read the <Link color='teal.500' href='/guidelines'>guidelines</Link> carefully before submitting the form.</p>
        
        <Heading as='h1' size='xl' paddingBottom={5} paddingTop={10} noOfLines={1} >
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

        <Heading as='h4' size='1xl' paddingBottom={5} paddingTop={5} noOfLines={1} >
          EVENTS I WISH TO PARTICIPATE ARE GIVEN BELOW
        </Heading>

        <FormControl  paddingBottom={5}>
          <Checkbox >Intermediate Men's Singles</Checkbox>
        </FormControl>
        <FormControl  paddingBottom={5}>
          <Checkbox >Intermediate Women's Singles</Checkbox>
        </FormControl>
        <FormControl  paddingBottom={5}>
          <Checkbox >Novices Men's Singles</Checkbox>
        </FormControl>
        <FormControl  paddingBottom={5}>
          <Checkbox >Novices Women's Singles</Checkbox>
        </FormControl>

        <Heading as='h4' size='1xl' paddingBottom={5} paddingTop={5} noOfLines={1} >
          AGE GROUP
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

        <FormControl paddingBottom={5} >
          <Checkbox >Novices Girl's under 19 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Boy's under 17 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Girl's under 17 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Boy's under 15 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Girl's under 15 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Boy's under 13 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Girl's under 13 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Boy's under 11 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Girl's under 11 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Boy's under 09 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Girl's under 09 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Boy's under 07 singles</Checkbox>
        </FormControl>
        <FormControl paddingBottom={5} >
          <Checkbox >Novices Girl's under 07 singles</Checkbox>
        </FormControl>

        <Button type="submit" marginTop={5} marginLeft={30} marginBottom={100} style={{justifyContent: 'center'}}>Submit</Button>
        </form>
      </Box>
    </div>
  )
}

export default Forms;
