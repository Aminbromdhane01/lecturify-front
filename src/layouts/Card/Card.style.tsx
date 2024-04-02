import { styled, keyframes } from "@mui/system";
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import { Paper } from "@mui/material";
const animateAppear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const CardContainer = styled(Card)`
    margin: 18px;
   
`;
export const StyledIconButton = styled(IconButton)(({ theme }) => ({

    position: 'absolute',
    zIndex: 2,
    borderRadius: '50%',
    right: '1rem',
    bottom: 0,
    transform: 'translateY(50%)'

}));
export const CardPaper = styled(Paper)(({ theme }) => ({
    padding: '0.5px',
}))

