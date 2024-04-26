import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const AuthElementsGrid = styled(Grid)(({ theme }) => ({
    minHeight: '100vh'
}));

export const Container = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
}));
export const CardGrid = styled(Grid)(({ theme }) => ({
    minHeight: 'calc(100vh - 120px)',
}));
export const LogoGrid = styled(Grid)(({ theme }) => ({
    marginLeft: '10px',
    marginTop: '10px'
}));