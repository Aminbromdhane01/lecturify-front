'use client'
import { Grid } from "@mui/material";
import { AnimatedCardPaper } from "./AnimatedCardPaper.styles";
import { useEffect, useState } from "react";

interface AnimatedCardProps {
    card: React.ReactNode
    delay: string
}

export const AnimatedCard = ({ card, delay }: AnimatedCardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, []);


    return (


        <Grid item xs={10} sm={8} md={6} lg={4}>

            <AnimatedCardPaper elevation={1} style={{ animationDelay: `${delay}s` }}>
                {card}
            </AnimatedCardPaper>

        </Grid>
    );
} 