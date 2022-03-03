import  React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, FormLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 40   },
  { field: 'fullname', headerName: 'Fullname', width: 100 },
  { field: 'email', headerName: 'Email Address', width: 130 },
  { field: 'gender', headerName: 'Gender',width: 60, },
  { field: 'address', headerName: 'Address',width: 150, },
  { field: 'phone', headerName: 'Phone',width: 70, },
  { field: 'persionalinfo', headerName: 'Persional Information',width: 290, },
  
];

export type UserData = {
  fullname: string,
  email : string,
  address: string,
  gender: string,
  phone : string,
  persionalinfo: string,
}


export default function RenderDataUserTable(props:any) {

  const [dataUsers , setDataUsers] = useState([]);
  const [itemdata , setItemdata] = useState('');
  useEffect (() => {
    const url = 'https://621d98a1806a09850a5d7028.mockapi.io/Users';
    fetch(url)
      .then((reponse => reponse.json()))  
      .then((data) => setDataUsers(data))
      .catch(error => console.log(error))
  },[])

  const handleRemove = (itemId: any) => async () => {
    console.log(itemId)
    async function deletePost() {
      try {
        await fetch('https://621d98a1806a09850a5d7028.mockapi.io/Users' + `${itemId}`, { method: 'DELETE' });
       
      } catch (error) {
        console.log(error);
      }

    }
    await deletePost();
  };
  console.log(props.dataUsers)
  const handleOnCellClick = (params:any) => {
    console.log(params.row.id)
  };

  return (
    <div style={{ height: 400, width: '100%' , fontSize: 150}}>
        <FormLabel 
            component="legend" 
            sx = {{fontSize: 20  , color : '#64b5f6' , margin: 2}}
        >
           Information about all the users in the api <br /> <hr />
           
        </FormLabel>
          <DataGrid
            rows={dataUsers}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onCellClick={handleOnCellClick}
            
          />
          

        
    </div>
  );
}
