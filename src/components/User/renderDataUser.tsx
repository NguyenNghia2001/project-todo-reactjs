import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { FormLabel } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullname', headerName: 'Fullname', width: 130 },
  { field: 'email', headerName: 'Email Address', width: 130 },
  { field: 'gender', headerName: 'Gender',type: 'boolean',width: 90, },
  { field: 'address', headerName: 'Address',width: 90, },
  { field: 'phonenumber', headerName: 'Phone Number',type: 'number',width: 90, },
  { field: 'persionalinfo', headerName: 'Persional Information',width: 220, },
  
];

const rows = [
    { 
        id: 1, 
        fullname: 'Snow nghia',
        email: 'Jon@gmail.com',
        gender : true , 
        address : 'nguyễn thàng 19ja  nghiasd ' ,
        persionalinfo: 'Avatars containing simple characters can be created by passing a string as children.' ,
        phonenumber: '098398876' 
    },  
    { 
        id: 2, 
        fullname: 'Snow nghia',
        email: 'Jon@gmail.com',
        gender : false , 
        address : 'nguyễn thàng 19ja  nghiasd ' ,
        persionalinfo: 'Avatars containing simple characters can be created by passing a string as children.  ' ,
        phonenumber: '098398876' 
    },  
    { 
        id: 3, 
        fullname: 'Snow nghia',
        email: 'Jon@gmail.com',
        gender : true , 
        address : 'nguyễn thàng 19ja  nghiasd ' ,
        persionalinfo: 'Avatars containing simple characters can be created by passing a string as children.' ,
        phonenumber: '098398876' 
    },  
    { 
        id: 4, 
        fullname: 'Snow nghia',
        email: 'Jon@gmail.com',
        gender : false , 
        address : 'nguyễn thàng 19ja  nghiasd ' ,
        persionalinfo: 'Avatars containing simple characters can be created by passing a string as children.' ,
        phonenumber: '098398876' 
    },  
    { 
        id: 5, 
        fullname: 'Snow nghia',
        email: 'Jon@gmail.com',
        gender : true , 
        address : 'nguyễn thàng 19ja  nghiasd ' ,
        persionalinfo: 'Avatars containing simple characters can be created by passing a string as children.' ,
        phonenumber: '098398876' 
    },  
  
];

export default function RenderDataUserTable() {
  return (
    <div style={{ height: 400, width: '100%' , fontSize: 150}}>
        <FormLabel 
            component="legend" 
            sx = {{fontSize: 20 ,textAlign: 'center' , color : '#64b5f6' , margin: 2}}
        >
           Information about all the users in the api
        </FormLabel>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
