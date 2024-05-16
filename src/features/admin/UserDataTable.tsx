'use client'
import DataGrid from "@/layouts/DataGrid/DataGrid";
import { GridColDef } from "@mui/x-data-grid";
import { isValidElement, useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Rating, useMediaQuery } from "@mui/material";


const UserDataTable: React.FC = () => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  
    const handleDeleteClick = (id: number) => {
      console.log(`Deleted row with ID: ${id}`);
    };
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 900px)');
    const isLargeScreen = useMediaQuery('(min-width: 901px) and (max-width: 1200px)');
    const isExtraLargeScreen = useMediaQuery('(min-width: 1201px)');
  
    let width = '100%'; 
  
    if (isSmallScreen) {
      width = '50%'; 
    } else if (isMediumScreen) {
      width = '70%'; 
    } else if (isLargeScreen) {
      width = '80%';
    } else if (isExtraLargeScreen) {
      width = '100%'; 
    }
  
    const USER_FIELDS: string[] = ['Image','LastName', 'FirstName', 'Role','Address', 'IsBanned', ];  
    const usersData = [
        {   id : 0 ,
            Image: 'user1.jpg',
            LastName: 'Doe',
            FirstName: 'John',
            Role: 'Admin',
            Address: '123 Main St, Anytown',
            IsBanned: false
        },
        {   id : 1,
            Image: 'user2.jpg',
            LastName: 'Smith',
            FirstName: 'Alice',
            Role: 'Moderator',
            Address: '456 Elm St, Othertown',
            IsBanned: true
        },
        {   id : 2 ,
            Image: 'user3.jpg',
            LastName: 'Johnson',
            FirstName: 'Bob',
            Role: 'User',
            Address: '789 Oak St, Another Town',
            IsBanned: false
        },
    ];
  
    const columns: GridColDef[] = USER_FIELDS.map(field => ({
      field,
      headerName: field.charAt(0).toUpperCase() + field.slice(1),
      width: 150,
    }));
  
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <DataGrid
        
        image={'/user.svg'}
        title="Users"
        rows={usersData}
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        handleDeleteClick={handleDeleteClick}
        loading={false}
        width={width}
        marginTop="40px"
        
      />
    );
  };
  
  export default UserDataTable;