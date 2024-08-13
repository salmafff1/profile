import React from 'react'
import { connect } from 'react-redux';
import { DataGrid} from '@mui/x-data-grid';
import { columns , rows} from "./Data";



export const Partners = (props) => {
  return (
  
    <div style={{ height: 450, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </div>
  );
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Partners)