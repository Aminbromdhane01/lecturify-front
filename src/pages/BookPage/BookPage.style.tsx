import { palette } from "@/theme/palette";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const BookPagePaper = styled(Paper)(({ theme }) => ({
    width : '90%',
    padding : '10px',
    backgroundColor : palette.lightGrey
}));