import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1541140134513-85a161dc4a00?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JleSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.9)'

}));

export default Container