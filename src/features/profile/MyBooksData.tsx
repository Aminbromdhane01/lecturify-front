import DataGrid from "@/layouts/DataGrid/DataGrid";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDeleteBookMutation, useLazyGetBooksByUserIdQuery } from "@/RTK/api/BookApi";
import { decodeAccesToken } from "@/helpers/decodedAceesToken";
import { Button, Modal, Stack, Typography } from "@mui/material";
import { ModalContainer } from "@/layouts/Modal/Modal.style";


const MyBooksData: React.FC = () => {
    const [page, setPage] = useState<number>(0);
    const [bookId, setBookId] = useState<number>();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [deleteBook] = useDeleteBookMutation();


    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [fetchbooks,{ data : books, error :err, isLoading : load}] = useLazyGetBooksByUserIdQuery();    
    useEffect(()=>{
      fetchbooks({userId : decodeAccesToken().sub})
  },[])
  console.log(decodeAccesToken().sub);
  
  
    const handleDeleteClick = (id: number) => {
      setBookId(id)
      handleOpen()
    };
    const handleConfirmDelete = async () => {
      if (bookId) {
          await deleteBook(bookId);
          fetchbooks({ userId: decodeAccesToken().sub }); 
          handleClose();
      }
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
      <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer sx={{width : '160px' , borderRaduis : '10px' ,}} >
          <Stack direction={'row'} gap={4} width={'100%'}>
          <Button
            variant="contained"
           color="error"
           onClick={handleConfirmDelete}

            sx={{
              borderRadius: '5px',
                  textTransform: 'none',
                padding: '8px 16px',
               '&:hover': {
                backgroundColor: 'darkred',
                },
              }}
           >
           Delete
          </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              sx={{
                 borderRadius: '5px',
                 textTransform: 'none',
                 padding: '8px 16px',
                   backgroundColor: 'gray',
                   '&:hover': {
                      backgroundColor: 'darkgray',
                  },
                 }}
                >Cancel</Button>
          </Stack>
        </ModalContainer>
      </Modal>
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
        loading={load}
        width="100%"
        
      />
      </>
    );
  };
  
  export default MyBooksData;