// Dashboard.jsx
import React from 'react';
import { connect } from 'react-redux';
import Row3 from './Row3';
import Row2 from './Row2';
import Row1 from './Row1';
import { DownloadOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

// Ensure the Dashboard component is exported as named export
export const Dashboard = (props) => {

  // Function to handle button click
  const handleDownloadClick = () => {
    // Example logic to handle the download action
    console.log('Download Reports button clicked');

    // Example: Triggering file download (dummy URL here)
    const url = ''; // Replace with your report URL
    const link = document.createElement('a');
    link.href = url;
    link.download = 'report.pdf'; // Filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Box sx={{ textAlign: "right" }}>
        <Button
          sx={{
            padding: "6px 8px",
            textTransform: 'capitalize',
            backgroundColor: 'hsl(22, 40%, 70%)',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: 'hsl(22, 50%, 70%)',
            },
          }}
          variant='contained'
          onClick={handleDownloadClick} // Set the click handler here
        >
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

// You can also use export default if you prefer a default export
// export default Dashboard;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
