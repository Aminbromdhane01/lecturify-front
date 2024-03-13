import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
    minHeight: '100vh',

    backgroundSize: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.9)'

}));

export default Container