import { styled, keyframes } from "@mui/system";
import CardPaper from "../cardPaper/CardPaper..styles";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedCardPaper = styled(CardPaper)`
  animation: ${fadeIn} 0.5s ease-out;
`;