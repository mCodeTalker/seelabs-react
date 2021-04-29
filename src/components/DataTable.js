import React, {useState}  from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { makeStyles } from '@material-ui/core/styles';
import {Theme} from './Theme';
// import {data} from './Data/Peminjaman'
const useStyles = makeStyles((theme) => ({
    datatable: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: Theme.palette.primary.dark,
        backgroundColor: Theme.palette.primary.contrastText,
        
    },
        wrapper:{
        padding: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
        tableHeading:{
        marginBottom: '20px',
        color: Theme.palette.primary.contrastText
    },
    '&.MuiDataGrid-footer':{
        color: 'blue'
    }
}));
function DataTable({header, pageSize , data}) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    console.log(pageSize);
    return (
        <div className={classes.wrapper}>
          <h1 className={classes.tableHeading}>{header}</h1>
          <div style={{ height: 300, display:'flex' }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid 
                page={page}
                onPageChange={(params) => {
                  setPage(params.page);
                }}
                pageSize={pageSize}
                pagination
                rows={data.rows} columns={data.columns} className={classes.datatable} 
              />
            </div>
          </div>
        </div>
    )
}
DataTable.defaultProps={
    header:'',
    pageSize:5,
    data:{
        rows:{},
        columns:{}
    }

}
export default DataTable
