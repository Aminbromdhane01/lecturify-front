import { Button, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Stepper from '@mui/material/Stepper';


export const StepperContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
export const StepperPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    margin: '20px',
    padding: '20px',
    flexDirection: 'column',
}));
export const StepperContentContainer = styled(Box)(({ theme }) => ({
    width: '95%',
    padding: '10px',
}));
export const NavigationContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '30px',
    justifyContent: 'space-between',
    width: '100%',
}));
export const NavigationButton = styled(Button)(({ theme }) => ({
}));
export const ButtonsDivider = styled(Box)(({ theme }) => ({
    flex: '1 1 auto'
}));
export const FormStepper = styled(Stepper)(({ theme }) => ({
    marginBottom: '10px',
}));