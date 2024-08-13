import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';

function Card({ icon, title, subTitle, data, increase }) {
  const nudePalette = [
   
    '#d0a7a4', // Peach
    '#e3bfbf', // Salmon
    '#cbbfbb', // Beige
  ];

  return (
    <Paper
      sx={{
        minWidth: '333px',
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography variant="h6" sx={{ fontSize: '12px' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '14px' }}>
          {subTitle}
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="body2" sx={{ fontSize: '13px', mb: 1 }}>
          {increase}
        </Typography>
        <div style={{ height: 100, width: 100 }}>
          <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 0.2]],
            }}
            colors={nudePalette} // Apply nude palette here
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            enableArcLabels={false}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    ['darker', 2]
                ]
            }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#f5e1e1', // Nude color for dots pattern
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: 'lines',
                color: '#f0d3d3', // Nude color for lines pattern
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: { id: 'ruby' },
                id: 'dots'
              },
              {
                match: { id: 'c' },
                id: 'dots'
              },
              {
                match: { id: 'go' },
                id: 'dots'
              },
              {
                match: { id: 'python' },
                id: 'dots'
              },
              {
                match: { id: 'scala' },
                id: 'lines'
              },
              {
                match: { id: 'lisp' },
                id: 'lines'
              },
              {
                match: { id: 'elixir' },
                id: 'lines'
              },
              {
                match: { id: 'javascript' },
                id: 'lines'
              }
            ]}
          />
        </div>
      </Stack>
    </Paper>
  );
}

export default Card;
