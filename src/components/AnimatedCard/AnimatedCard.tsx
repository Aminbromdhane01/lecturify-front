'use client'
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { AnimatedCardPaper } from "./AnimatedCard.styles";
import ForgetPasswordCard from "@/features/auth/ForgetPasswordCard/ForgetPasswordCard";
import LoginCard from "@/features/auth/LoginCard/LoginCard";
import SingUpCard from "@/features/auth/SignupCard/SignUpCard";
import EditProfileForm from "@/features/profile/edit-profile/EditProfileForm";
import ResetPasswordCard from "@/features/auth/ResetPasswordCard/ResetPasswordCard";

interface AnimatedCardProps {
    card: string
    delay: string
    resetPasswordToken?: string
}

export const AnimatedCard = ({ card, delay , resetPasswordToken }: AnimatedCardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, []);
    const renderCardComponent = (card: string) => {
        switch (card) {
            case 'login':
                return <LoginCard />;
            case 'signup':
                return <SingUpCard />;
            case 'reset-password':
                return < ResetPasswordCard token={resetPasswordToken as string}/>;
            case 'forget-password':
                return <ForgetPasswordCard/>;
            case 'edit-profile':
                return <EditProfileForm />;
            default:
                return null; // Handle the default case or invalid card values
        }
    };


    return (


        <Grid item xs={10} sm={8} md={6} lg={4}>

            <AnimatedCardPaper elevation={1} style={{ animationDelay: `${delay}s` }}>
                {renderCardComponent(card)}
            </AnimatedCardPaper>

        </Grid>
    );
} 