import DataGrid from "@/layouts/DataGrid/DataGrid";
import { GridColDef } from "@mui/x-data-grid";
import { isValidElement, useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Rating } from "@mui/material";


const WishListDataTable: React.FC = () => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  
    const handleDeleteClick = (id: number) => {
      console.log(`Deleted row with ID: ${id}`);
    };
  
    const VISIBLE_FIELDS: string[] = ['name', 'genre', 'image', 'author' ];
  
    const rows = [
      { id: 1, name: 'John Doe',  genre: 'Horror', image: '2022-04-30', author: 'author 1' , rating : 2 },
      { id: 2, name: 'Jane Smith',  genre: 'Horror', image: '2022-04-30', author: 'author 1' , rating : 2 },
    ];
  
    const columns: GridColDef[] = VISIBLE_FIELDS.map(field => ({
      field,
      headerName: field.charAt(0).toUpperCase() + field.slice(1),
      width: 150,
    }));
  
    columns.push({
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      sortable: false,
      renderCell: (params) => {
        return (
          <DeleteOutlineOutlinedIcon sx={{ color: 'red' }} onClick={() => handleDeleteClick(params.row.id)} />
        );
      },
    });
    columns.push({
        field: 'rating',
        headerName: 'Rating',
        width: 150,
        sortable: true,
        renderCell: (params) => {
          if (typeof params.value === 'number') {
            return <Rating value={params.value} readOnly />;
          }
          if (isValidElement(params.value)) {
            return params.value;
          }
          return null;
        },
      });
  
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <DataGrid
        image={'/favourite.svg'}
        title="WishList"
        rows={rows}
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        handleDeleteClick={handleDeleteClick}
        loading={false}
        width="60%"
        marginTop="50px"
      />
    );
  };
  
  export default WishListDataTable;