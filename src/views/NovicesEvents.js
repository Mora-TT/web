import {
    FormControlLabel,
    FormControl,
    Checkbox
  } from '@mui/material';

export default function NovicesEvents() {
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
        <div key={o.value} >
        <FormControl key={o.value} name={o.value} >
          <FormControlLabel key={o.value} control={<Checkbox key={o.value} name={o.value} />} label={o.label} />
        </FormControl>
        </div>
      ))}
      </div>
    );
  }