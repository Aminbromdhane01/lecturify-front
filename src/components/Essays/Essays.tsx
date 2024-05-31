'use client'
import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { EssaysListContainer } from './Essays.style';
import { useLazyGetUnreviewedEssaysQuery } from '@/RTK/api/EssayApi';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NonDecoratedLink } from '../IconicButton/IconButton.style';
const Essays = () => {
    const [fetchUnreviewedEssays, { data, isLoading, isError }] = useLazyGetUnreviewedEssaysQuery();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() =>{
     fetchUnreviewedEssays({page :currentPage , itemPerPage :5})
    }
    ,[currentPage])
    const handlePageChange = (event : React.ChangeEvent<unknown>, value : number) => {
        setCurrentPage(value);
    };
       
  

  return (
    <EssaysListContainer display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} p={4}>
    <TableContainer component={Paper} sx={{width :'80%'}} >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Essay Title</TableCell>
            <TableCell align="right">Content</TableCell>
            <TableCell align="right">isReviewd</TableCell>
            <TableCell align="right">Essay Details</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          { data?.essays && data.essays.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align='right' component="th" scope="row">
              <Box dangerouslySetInnerHTML={{ __html: row.content.slice(0,100) }} />
              </TableCell>
              <TableCell align="right">{row.isReviewd ? 'true' : 'false'}</TableCell>
              <TableCell align="right" 
                
              ><NonDecoratedLink href={'/essay/one/'+row.id}><LibraryBooksIcon color={'primary'}/></NonDecoratedLink></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Paper elevation={1} sx={{m : 1 , p:1, width :'80%', display : 'flex' , justifyContent : 'center'}}>
    <Pagination onChange={handlePageChange} color={'secondary'} count={data?.total && Math.ceil(data?.total/5)}/>
    </Paper>
    </EssaysListContainer>
  )
}

export default Essays
