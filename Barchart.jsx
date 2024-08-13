import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

// Example data
const data = [
  {
    country: "AD",
    "hot dog": 142,
    "hot dogColor": "hsl(267, 70%, 50%)",
    burger: 84,
    burgerColor: "hsl(76, 70%, 50%)",
    sandwich: 24,
    sandwichColor: "hsl(313, 70%, 50%)",
    kebab: 157,
    kebabColor: "hsl(326, 70%, 50%)",
    fries: 61,
    friesColor: "hsl(215, 70%, 50%)",
    donut: 185,
    donutColor: "hsl(116, 70%, 50%)"
  },
  
];

function Barchart() {
  return (
    <div style={{ height: 500 , width: '65%' }}>
      <ResponsiveBar
        data={data}
        keys={[
          'hot dog',
          'burger',
          'sandwich',
          'kebab',
          'fries',
          'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 40, bottom: 50, left: 2 }}
        padding={0.5}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'oranges' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'fries'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'event1'
            },
            id: 'lines'
          }
        ]}
        borderColor={{
          from: 'color',
          modifiers: [
            ['darker', 1.6]
          ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [
            ['darker', 1.6]
          ]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
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
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
      />
    </div>
  );
}

export default Barchart;