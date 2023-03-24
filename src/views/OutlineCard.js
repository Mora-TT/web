import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
    <Box sx={{ minWidth: 150, marginRight: 1, marginBottom: 5 }}>
      <Card variant="outlined" sx={{ height: 150, bgcolor: '#ff4123e0', paddingBottom: 25 }}>
      <CardHeader
        title={type}
        sx={{ bgcolor: 'red'}}
      />
      <Divider color={'black'} sx={{ bgcolor: 'red'}}/>
            <CardContent>
            <Typography variant="h3" color={"white"} gutterBottom>
                {count} 
            </Typography>
            </CardContent>
        
        
      </Card>
    </Box>
  );
}