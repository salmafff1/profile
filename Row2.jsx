import React from 'react';
import { Box, Stack, Paper, Typography } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

// Example data for the line chart
const data = [
  {
    id: 'Events',
   color: 'hsl(22, 60%, 70%)',
    data: [
      { x: '2024-07-01', y: 40 },
      { x: '2024-07-02', y: 50 },
      { x: '2024-07-03', y: 30 },
      { x: '2024-07-04', y: 60 },
      { x: '2024-07-05', y: 70 }
    ]
  }
  
];

// Component to render a line chart
const LineChart = ({ data }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>Error: Invalid data</div>;
  }

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 35, bottom: 50, left: 40 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 18,
        tickRotation: 0,
        legend: 'Date',
        legendOffset: 41,
        legendPosition: 'left'
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
       
      
      }}
      colors={{ scheme: 'nivo' }}
      lineWidth={2}
      pointSize={8}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      enablePoints={true}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 0,
          translateY: -20,
          itemsSpacing: 0,
         
          itemDirection: 'left-to-right',
          itemOpacity: 0.75,
          symbolSize: 0,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
};

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

// Main component
function Row2() {
  return (
    <Stack direction="row" spacing={2} 
      >
      <br /> <br /> <br />
      <Box sx={{ height: 350, width: 850 }}>
        <ErrorBoundary>
          <LineChart data={data} />
        </ErrorBoundary>
      </Box> 

      <Paper
        sx={{
          position:'absolute',
          top:'53%', 
          left:'74%',
          padding: 2,
          width: 230,
          height: 290,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Notes
        </Typography>
        <Typography variant="body2">
          Add your notes here. This section can be used to provide additional context or information related to the data.
        </Typography>
      </Paper>
    </Stack>
    
  );
}

export default Row2;

