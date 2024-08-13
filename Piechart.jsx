import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    "id": "rust",
    "label": "rust",
    "value": 146,
    "color": "hsl(44, 70%, 50%)"
  },
  {
    "id": "sass",
    "label": "sass",
    "value": 85,
    "color": "hsl(291, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 286,
    "color": "hsl(33, 70%, 50%)"
  },
  {
    "id": "erlang",
    "label": "erlang",
    "value": 75,
    "color": "hsl(68, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 363,
    "color": "hsl(83, 70%, 50%)"
  }
];

// Define the MyResponsivePie component
const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={{ scheme: 'nivo' }} // Changed to a valid color scheme
    borderWidth={1}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0.2]]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [['darker', 2]]
    }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      }
    ]}
    fill={[
      { match: { id: 'rust' }, id: 'dots' },
      { match: { id: 'sass' }, id: 'dots' },
      { match: { id: 'css' }, id: 'dots' },
      { match: { id: 'erlang' }, id: 'dots' },
      { match: { id: 'scala' }, id: 'lines' }
    ]}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        itemDirection: 'left-to-right',
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: { itemTextColor: '#000' }
          }
        ]
      }
    ]}
  />
);

function Piechart() {
  return (
    <div style={{ height: '400px' }}>
      <MyResponsivePie data={data} />
    </div>
  );
}

export default Piechart;
