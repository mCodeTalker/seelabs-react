import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {Theme} from './Theme';
import { data1, data2 } from './Data/Peminjaman';
import DataTable from './DataTable';
import { FaCentercode } from 'react-icons/fa';
// import './PeminjamanSection.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // flexGrow: 1,
    backgroundColor: Theme.palette.primary.dark,
    padding: '100px 250px',
  },
  '@media screen and (max-width: 960px)':{
    container:{
      padding: '20px 60px'
    }
  }
}));
function PeminjamanSection() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    
    return (
      <div className={classes.container}>
        <h1 className='section__heading'>Peminjaman</h1>
        <DataTable header='Alat' data={data1}/>
        <DataTable header='Ruangan' data={data2}/>
        
      </div>
      // <div className='Peminjaman__section darkBg'>
      //   <div className='Peminjaman__wrapper'>
      //     <h1 className='heading'>Berita</h1>
      //     <div className='container'>
      //         <div className='col'>
      //           <div className='row'>
      //             asdfa
      //           </div>
      //           <div className='row'>
      //             asfafaf
      //           </div>
      //         </div>
      //     </div>
      //   </div>
      // </div>
    )
}

export default PeminjamanSection
