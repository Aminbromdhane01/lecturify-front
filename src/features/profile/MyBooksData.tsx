import DataGrid from "@/layouts/DataGrid/DataGrid";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useGetBooksByUserIdQuery } from "@/RTK/api/BookApi";
import { decodeAccesToken } from "@/helpers/decodedAceesToken";


const MyBooksData: React.FC = () => {
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const { data: books, isLoading, refetch , isSuccess , isError , error } = useGetBooksByUserIdQuery({userId : decodeAccesToken().sub});
    
    

  
    const handleDeleteClick = (id: number) => {
      console.log(`Deleted row with ID: ${id}`);
    };
  
    const VISIBLE_FIELDS: string[] = ['title', 'rating', 'date', 'genre',]
  
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
  
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <DataGrid
        image={'/mybooks.svg'}
        title="My Books"
        rows={books?.data || []}
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        handleDeleteClick={handleDeleteClick}
        loading={isLoading}
        width="100%"
        
      />
    );
  };
  
  export default MyBooksData;