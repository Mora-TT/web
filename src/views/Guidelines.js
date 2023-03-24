import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import './App.css';
import BasicTable from './BasicTable';

function Guidelines() {
  const gmail =<a href="mailto:morattsmashes@gmail.com" style={{color: 'blue', textDecoration: 'underline'}}>morattsmashes@gmail.com</a>
  const uomMail = <a href="mailto:dpe@uom.lk" style={{color: 'blue', textDecoration: 'underline'}}>dpe@uom.lk</a>
  const bCapMobile=<a href="tel:+94763241609">+94763241609</a>
  const gCapMobile=<a href="tel:+94766510422">+94766510422</a>
  const guidelines = [
    {description: 'All matches will be played as far as possible in accordance with the laws of the International Table Tennis federation.', key: 0},
    {description: '	The championship will be run on a knockout basis.', key: 1},
    {description: 	'The championship will be conducted at the New Gymnasium, University of Moratuwa and will commence at 08.00 a.m. on 29th April 2023 and will continue till 30th April 2023.', key: 3},
    {description: 	'The following events will be worked out; Intermediate / Novices , Men’s / Women’s / Boys / Girl’s, Novices under 07 / 09 / 11 / 13 / 15 /17 /19 Singles.', key: 2},
    {description: 	'All entry forms must be signed by the competitor, players who are still schooling must obtain the signature of the principal on the college rubber stamp. The Tournament committee has the right to reject any unsigned entry.', key: 4},
    {description: 	'All matches in the Novices events will be decided on the best of three (03) games.', key: 5},
    {description: 	'All disputes with regard to the interpretation of laws of Table Tennis shall be referred to Hon. Referee for the championship Mr. Pradeep Nishantha and tournament in charge Mr. Chandana Perera.', key: 6},
    {description: 	'The draw and program will be displayed on the notice board at the venue, and it will serve as the only official information of the Championship.', key: 7},
    {description: 	'Entries close on 10th April 2023 at 3.00p.m. and the draw will be held on 21st April 2023 at 06.00pm, at University of Moratuwa.', key: 8},
    {description: 'ENTRY FEES: Rs. 500/= for the Intermediate & Novices events & Rs.400/= for Age Group event/s. Rs. 100/= will be charge as competition fees from each player. ', key: 9},
    {description: <>Entries without the entry fee/s will not be included in the draw. Entries may be forwarded to reach by 03.00p.m. on 10th April 2023 to Mr. Supuna Warusawithana ,C/o Department of Physical Education,University of Moratuwa. Or by email as a PDF document to {gmail}/ {uomMail}</>, key: 10},
    {description: 'Competitors should report to the tournament office 10 minutes before the scheduled time for each Match.', key: 11},  
    {description:   'An individual player cannot participate in more than two age group single events.', key: 12},  
    {description: 'The Tournament committee’s decision in all matters connected with the championship and any other matters not expressly provided herein shall be final and binding.', key: 13},  
    {description: 'NON-ELIGIBILITY TO PLAY', key: 14},  

  ];
  

  const subGuidelines = [
    {description: 'All National junior (under 18 boy’s & girl’s events only) and senior ranked players.', key: 0},
    {description: 'All island finalist of any age group in Boys and Girls events.', key: 1},
    {description: 'Any finalist of the consolation event at the Nationals.', key: 2},
    {description: 'Any finalist / Semifinalist / Quarter finalist of any all island ranking open tournament (Men’s & Women’s Singles Event)', key: 3},
    {description: 'Previous all island novices Men’s & Women’s finalist (Both Singles and Doubles Events)', key: 4},
    {description: 'Previous all island Intermediate Men’s & Women’s finalist (Both Singles and Doubles Events)', key: 5},
    {description: 'Members representing teams at the all-island schools Under 19, 18, 16, & 14 “A” division finals and 1st,2nd,3rd, places of the National Schools Games and All Island Schools Games. However, finalists of the Under 10 & 12', key: 6},
    {description: '“A” division players can play as follows.', key: 7},
  ];
  const data = [
    { cc: "UNDER 10", cp: "UNDER 09", ep: "UNDER 11, 13, and 15 NOVICES" },
    { cc: "UNFDER 12", cp: "UNDER 11", ep: "UNDER 13, 15, 17, and 19 NOVICES" },
  ];

  return (

    <div id = "main">
      <Box   sx={{
    background: 'black',
    opacity: 0.85,
    ...{
      margin: '0 5vw',
    },
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 2
  }} >
      <Typography variant="h5" color={'white'} paddingBottom={3} paddingLeft={10} paddingTop={5} alignContent={'center'} gutterBottom>
        RULES & INSTRUCTIONS TO THE PLAYERS
      </Typography>

      <div className='mainOL'>
      <ol>
        {guidelines.map(guideline => {
          return (
            <div key={guideline.key}>
            <li key={guideline.key}>{guideline.description} </li>
            <br />
            </div>
          );
        })}
          <div className='subUL'>
          <ul>
            {subGuidelines.map(subGuide => {
            return (
              <li  key={subGuide.key}><p>{subGuide.description}</p></li>
            );
            })}
          </ul>
          </div>

      </ol>
      </div>
      
      <div className='tableInfo'>
      <BasicTable  />
    </div>
      <div className="contactInfo" style={{color: 'white'}}>

      Please Contact : <br/><br/>
      <b >Mr. Supuna Warusawithana: </b> <>{bCapMobile}</><br/> <br/>
      <b>Ms. Divya Karunasena: </b>  <>{gCapMobile}</>

      </div>

      </Box>
    </div>

  );
}

export default Guidelines;
