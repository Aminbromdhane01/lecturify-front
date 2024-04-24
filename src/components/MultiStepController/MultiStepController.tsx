import { ButtonsDivider, NavigationButton, NavigationContainer } from '@/layouts/Stepper/HorizontalStepper.style'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import React from 'react'

interface MultiStepControllerProps {
    backButtonIsDisabled: boolean
    forwadButtonIsDisabled: boolean
    backButtonOnClick?: any
    forwadButtonOnClick?: any
}

const MultiStepController = ({ backButtonIsDisabled, forwadButtonIsDisabled, backButtonOnClick, forwadButtonOnClick }: MultiStepControllerProps) => {
    return (
        <NavigationContainer >
            <NavigationButton
                color="inherit"
                disabled={backButtonIsDisabled}
                onClick={backButtonOnClick}
            >
                <ArrowBackIosIcon />
            </NavigationButton>
            <ButtonsDivider />
            <NavigationButton
                type='submit'
                disabled={forwadButtonIsDisabled}
                onClick={forwadButtonOnClick}
            >
                <ArrowForwardIosIcon />
            </NavigationButton>

        </NavigationContainer>
    )
}

export default MultiStepController