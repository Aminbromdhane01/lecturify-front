import { styled } from "@mui/system";
import IconButton from '@mui/joy/IconButton';


const StyledIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    zIndex: 2,
    borderRadius: '50%',
    right: '1rem',
    bottom: 0,
    transform: 'translateY(50%)'

}));

export default StyledIconButton