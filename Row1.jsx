import React from 'react';
import { Stack } from '@mui/material';
import Card from './Card'; // Ensure the path is correct
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import { data1, data2, data3 } from './data'; // Ensure the path is correct

function Row1() {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      paddingTop={2} // Use the correct spacing unit for MUI
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between"  }}
    >
      <Card
        icon={<EmailIcon sx={{ fontSize: 23, color: 'hsl(22, 60%, 70%)' }} />}
        title="12,699"
        subTitle="Email Sent"
        increase="+18%"
        data={data1}
      />
      
      <Card
        icon={<PersonAddIcon sx={{ fontSize: 23, color: 'hsl(22, 60%, 70%)' }} />}
        title="New Users"
        subTitle="User Registrations"
        increase="+20%"
        data={data2}
      />
      
      <Card
        icon={<TrafficIcon sx={{ fontSize: 23, color: 'hsl(22, 60%, 70%)' }} />}
        title="Traffic"
        subTitle="Website Traffic"
        increase="+8%"
        data={data3}
      />
    </Stack>
  );
}

export default Row1;
