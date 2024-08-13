// src/pages/dashboard/Row3.jsx
import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Geography from '../geography/Geography';

function Row3() {
  return (
    <Box>
      <Paper
        sx={{ flexGrow: 4, width: "80%", minWidth: "200px", border: "2px solid grey" ,ml:'70px' }}
      >
       <Geography/>
      </Paper>
  
    </Box>
  );
}

export default Row3;

