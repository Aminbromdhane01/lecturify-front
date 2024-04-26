'use client'
import { palette } from "@/theme/palette";
import { Button } from "@mui/material";
import { styled } from '@mui/system';
export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: palette.primaryColor,
    color: palette.whiteText,
    width: '100%',
    position: 'sticky',
    borderRadius: 0,
    '&:hover': {
        backgroundColor: palette.skyBlueText
    },

}))