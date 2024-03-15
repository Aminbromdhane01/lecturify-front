import { palette } from "@/theme/palette";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const CardTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    color: palette.text3

}));

export default CardTitle