import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function OutlinedCard(props) {

    const { count } = props;
    const { type } = props;
  return (
    <Box sx={{ minWidth: 150, marginRight: 1, marginBottom: 50 }}>
      <Card variant="outlined" sx={{ height: 150, bgcolor: '#871200e0', paddingBottom: 25 }}>

      <CardHeader
        sx={{ bgcolor: 'red'}}
        title={<Typography variant="h6" fontWeight='bold'>
        <b>{type}</b>
      </Typography>}
      />

      <Divider color={'black'} sx={{ bgcolor: '#871200e0'}}/>
            <CardContent>
            <Typography sx={{fontWeight: 700}} variant="h3" color={"white"} gutterBottom>
                {count} 
            </Typography>
            </CardContent>
        
        
      </Card>
    </Box>
  );
}