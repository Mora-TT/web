import React, { useState, useEffect } from 'react';
import OutlinedCard from './OutlineCard';
import Box from '@mui/material/Box';
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="countdown-timer">
      {Object.keys(timeLeft).length === 0 ? (
        <span>Countdown ended!</span>
      ) : (
        <>
<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    width: 'min-content',
    border: (theme) => `1px solid transparent`,
    borderRadius: 4,
    bgcolor: 'transparent',
    color: 'text.secondary',
    '& svg': {
      m: 1.5,
    },
    '& hr': {
      mx: 0.5,
    },
    marginBottom: 10,
    // Media query styles for smaller screens
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& svg': {
        m: 1,
      },
      '& hr': {
        mx: 0,
        my: 1,
      },
      marginBottom: 5,
    },
  }}
>

        <OutlinedCard count={days} type={"DAYS"} />
        <OutlinedCard count={hours} type={"HRS."} />
        <OutlinedCard count={minutes} type={"MIN."}/>
        <OutlinedCard count={seconds} type={"SEC."}/>
      </Box>
          {/* {days > 0 &&  <span>{days}d </span>}
          {hours > 0 && <span>{hours}h </span>}
          {minutes > 0 && <span>{minutes}m </span>}
          {seconds > 0 && <span>{seconds}s </span>} */}
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
