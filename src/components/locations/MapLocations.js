import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

function MapLocations({locations}){

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'type', headerName: 'Type', width: 200 },
        { field: 'dimension', headerName: 'Dimension', width: 200 },
    ];

    return (
        <div style={{ height: '88vh', width: '100%' }}>
            <DataGrid rows={locations} columns={columns} pageSize={25} />
        </div>
    )
}

export default MapLocations;
