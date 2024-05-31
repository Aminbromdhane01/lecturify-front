'use client'
import ForgetPasswordCard from "@/features/auth/forgetPasswordCard/ForgetPasswordCard";
import LoginCard from "@/features/auth/loginCard/LoginCard";
import ResetPasswordCard from "@/features/auth/resetPasswordCard/ResetPasswordCard";
import SingUpCard from "@/features/auth/signupCard/SignUpCard";
import EditProfileForm from "@/features/profile/edit-profile/EditProfileForm";
import { AuthCardType } from "@/layouts/AuthWrapper/auth-wrapper.enum";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { AnimatedCardPaper } from "./AnimatedCard.styles";

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
            case AuthCardType.Login:
                return <LoginCard />;
            case AuthCardType.Signup:
                return <SingUpCard />;
            case AuthCardType.ResetPassword:
                return < ResetPasswordCard token={resetPasswordToken as string}/>;
            case AuthCardType.ForgetPassword:
                return <ForgetPasswordCard/>;
            case AuthCardType.EditProfile:
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