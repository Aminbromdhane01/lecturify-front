import { styled, keyframes } from "@mui/system";
import Card from '@mui/joy/Card';

const animateAppear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;



const CardContainer = styled(Card)`
    margin: 18px;
   
    animation: ${animateAppear} 2s forwards; // Disappearance animation
  

 
`;

export default CardContainer;