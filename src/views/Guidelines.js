import React from 'react';
import { Box } from '@mui/system';
import { Image, Heading, Center,View } from '@chakra-ui/react';
import WithSubnavigation from '../components/Navbar';
import './App.css';

function Guidelines() {
  const guidelines = [
    {description: '1.	All matches will be played as far as possible in accordance with the laws of the International Table Tennis federation.', key: 0},
    {description: '2.	The championship will be run on a knockout basis.', key: 1},
    {description: '3.	The following events will be worked out; Intermediate / Novices , Men’s / Women’s / Boys / Girl’s, Novices under 07 / 09 / 11 / 13 / 15 /17 /19 Singles.', key: 2},
    {description: '4.	The championship will be conducted at the New Gymnasium, University of Moratuwa and will commence at 08.00 a.m. on 29th April 2023 and will continue till 30th April 2023.', key: 3},
    {description: '5.	All entry forms must be signed by the competitor, players who are still schooling must obtain the signature of the principal on the college rubber stamp. The Tournament committee has the right to reject any unsigned entry.', key: 4},
    {description: '6.	All matches in the Novices events will be decided on the best of three (03) games.', key: 5},
    {description: '7.	All disputes with regard to the interpretation of laws of Table Tennis shall be referred to Hon. Referee for the championship Mr. Pradeep Nishantha and tournament in charge Mr. Chandana Perera.', key: 6},
    {description: '8.	The draw and program will be displayed on the notice board at the venue, and it will serve as the only official information of the Championship.', key: 7},
    {description: '9.	Entries close on 10th April 2023 at 3.00p.m. and the draw will be held on 21st April 2023 at 06.00pm, at University of Moratuwa.', key: 8},
    {description: '10.	ENTRY FEES: Rs. 500/= for the Intermediate & Novices events & Rs.400/= for Age Group event/s. Rs. 100/= will be charge as competition fees from each player. ', key: 9},
    {description: '11.	Entries without the entry fee/s will not be included in the draw. Entries may be forwarded to reach by 03.00p.m. on 10th April 2023 to Mr. Supuna Warusawithana ,C/o Department of Physical Education,University of Moratuwa. Or by email as a PDF document to morattsmashes@gmail.com/dpe@uom.lk', key: 10},
    {description: '12.	Competitors should report to the tournament office 10 minutes before the scheduled time for each Match.', key: 11},  
    {description:   '13.	An individual player cannot participate in more than two age group single events.', key: 12},  
    {description: '14.	The Tournament committee’s decision in all matters connected with the championship and any other matters not expressly provided herein shall be final and binding.', key: 13},  
    {description: '15.	NON-ELIGIBILITY TO PLAY', key: 14},  

  ];
  

  const subGuidelines = [
    {description: 'a)	All National junior (under 18 boy’s & girl’s events only) and senior ranked players.', key: 0},
    {description: 'b)	All island finalist of any age group in Boys and Girls events.', key: 1},
    {description: 'c)	Any finalist of the consolation event at the Nationals.', key: 2},
    {description: 'd)	Any finalist / Semifinalist / Quarter finalist of any all island ranking open tournament (Men’s & Women’s Singles Event)', key: 3},
    {description: 'e)	Previous all island novices Men’s & Women’s finalist (Both Singles and Doubles Events)', key: 4},
    {description: 'f)	Previous all island Intermediate Men’s & Women’s finalist (Both Singles and Doubles Events)', key: 5},
    {description: 'g)	Members representing teams at the all-island schools Under 19, 18, 16, & 14 “A” division finals and 1st,2nd,3rd, places of the National Schools Games and All Island Schools Games. However, finalists of the Under 10 & 12 “A” division players can play as follows.', key: 6},
  ];
  const data = [
    { cc: "UNDER 10", cp: "UNDER 09", ep: "UNDER 11, 13, and 15 NOVICES" },
    { cc: "UNFDER 12", cp: "UNDER 11", ep: "UNDER 13, 15, 17, and 19 NOVICES" },
  ]
  return (

    <div id = "main">
      <view>
      <Heading as='h2' size='xl' paddingBottom={10} paddingTop={5} alignContent={'center'} >
        RULES & INSTRUCTIONS TO THE PLAYERS 
      </Heading>
      <ol>
        {guidelines.map(guideline => {
          return (
            <li key={guideline.key}>{guideline.description}</li>
          );
        })}
        <li key={15}>{""}
      
          <ul>
            {subGuidelines.map(subGuide => {
            return (
              <li key={subGuide.key}>{subGuide.description}</li>
            );
            })}
          </ul>
        </li>
      </ol>

      </view>
      
      <div className="App">
      <table >
        <tr>
          <th>CHAMPION CATEGORY</th>
          <th>CANNOT PARTICIPATE</th>
          <th>ELIGIBLE TO PARTICIPATE</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.cc}</td>
              <td>{val.cp}</td>
              <td>{val.ep}</td>
            </tr>
          )
        })}
      </table>
    </div>



    </div>

  );
}

export default Guidelines;
