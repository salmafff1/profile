import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import { data } from './Data';
import { geoFeatures } from './GeoFeatures'; 

const MyResponsiveChoropleth = ({ data, geoFeatures }) => {
    const theme = useTheme();

    return (
        <ResponsiveChoropleth
            data={data}
            features={geoFeatures.features} 
            margin={{ top: 70, right: 0, bottom: 0, left: 60 }}
            colors="nivo" // Use a predefined color scheme
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
              borderColor="#152538"
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            
            enableGraticule={true}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
           
            theme={{
                text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary, // Use theme color
                },
                axis: {
                    domain: {
                        line: {
                            stroke: theme.palette.grey[300], // Use theme color
                            strokeWidth: 1
                        }
                    },
                 
                    legends: {
                        title: {
                            text: {
                                fontSize: 11,
                                fill: theme.palette.text.primary // Use theme color
                            }
                        }
                    }
                },
                annotations: {
                    text: {
                        fontSize: 13,
                        fill: theme.palette.text.primary, // Use theme color
                        outlinedWidth: 2,
                        outlinedColor: theme.palette.background.default, // Use theme color
                        outlinedOpacity: 1
                    }
                },
                tooltip: {
                    container: {
                        background: theme.palette.background.default, // Use theme color
                        color: theme.palette.text.primary, // Use theme color
                        fontSize: 12
                    }
                }
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: theme.palette.primary.main,
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: theme.palette.secondary.main,
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                },
                {
                    id: 'gradient',
                    type: 'linearGradient',
                    colors: [
                        {
                            offset: 0,
                            color: theme.palette.primary.main
                        },
                        
                         
                    ]
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'CAN'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'CHN'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'ATA'
                    },
                    id: 'gradient'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: theme.palette.text.primary,
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: theme.palette.text.primary,
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
};

const Geography = () => {
    return (
        <Box sx={{ height: "75vh" }}>
            <MyResponsiveChoropleth data={data} geoFeatures={geoFeatures} />
        </Box>
    );
};

export default Geography;
