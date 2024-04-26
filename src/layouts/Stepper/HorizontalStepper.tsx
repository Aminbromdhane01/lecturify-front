'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { FormStepper, StepperContainer, StepperContentContainer, StepperPaper } from '@/layouts/Stepper/HorizontalStepper.style';
import Image from 'next/image';
import BookFormOne from '@/features/book/AddBookFrom/BookFormOne';
import BookFormTwo from '@/features/book/AddBookFrom/BookFormTwo';

interface HorizontalStepperProps {
    steps: string[],

}

export default function HorizontalStepper({ steps }: HorizontalStepperProps) {


    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});
    ;
    const totalSteps = () => {
        if (steps)
            return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() as number - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };


    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <BookFormOne nextStep={handleNext} />;
            case 1:
                return <BookFormTwo previousStep={handleBack} />
            default:
                return null;
        }
    };

    return (

        <StepperContainer >
            <StepperPaper elevation={2}  >
                <Image src={'/Book.svg'} alt='Book Form Image' height={70} width={100} priority />

                <StepperContentContainer >
                    <FormStepper nonLinear activeStep={activeStep}>
                        {steps && steps.map((label, index) => (
                            <Step key={label} completed={completed[index]}>
                                <StepButton color="inherit" onClick={handleStep(index)}>
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </FormStepper>
                    <Box>
                        {renderStepContent(activeStep)}
                    </Box>
                </StepperContentContainer>
            </StepperPaper>
        </StepperContainer>

    );
}
