import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

function MapEpisodes({episodes}){

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'episode', headerName: 'Episode', width: 200 },
        { field: 'air_date', headerName: 'Air Date', width: 200 },
    ];

    return(
        <div style={{ height: '88vh', width: '100%' }}>
            <DataGrid rows={episodes} columns={columns} pageSize={25} />
        </div>
    )
}

export default MapEpisodes;
