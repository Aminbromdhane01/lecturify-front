import { palette } from "@/theme/palette";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const AccountCheckMessage = styled(Typography)(({ theme }) => ({
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: palette.dodgerBlueText


}));

export default AccountCheckMessage