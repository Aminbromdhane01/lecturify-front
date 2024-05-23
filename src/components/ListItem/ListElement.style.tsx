'use client'
import { styled } from '@mui/system';
import DatasetIcon from '@mui/icons-material/Dataset';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import HomeIcon from '@mui/icons-material/Home';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { palette } from '@/theme/palette';

export const StyledDatasetIcon = styled(DatasetIcon)(({ theme }) => ({
    color : palette.adminIconsColor
}))
export const StyledQueryStatsIcon = styled(QueryStatsIcon)(({ theme }) => ({
    color : palette.adminIconsColor
}))
export const StyledAdminPanelSettingsRoundedIcon = styled(AdminPanelSettingsRoundedIcon)(({ theme }) => ({
    color : palette.adminIconsColor
}))
export const StyledHomeIcon = styled(HomeIcon)(({ theme }) => ({
    color : palette.adminIconsColor
}))
export const StyledPowerSettingsNewIcon = styled(PowerSettingsNewIcon)(({ theme }) => ({
    color : palette.adminIconsColor
}))
