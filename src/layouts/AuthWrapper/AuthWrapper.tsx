'use client'
import { AnimatedCard } from "@/components/AnimatedCard/AnimatedCard"

import { Grid } from "@mui/material"
import React from "react"
import { AuthElementsGrid, CardGrid, Container, LogoGrid } from "./AuthWrapper.styles"


interface AuthWrapperChildren {
    background?: React.ReactNode
    logo?: React.ReactNode
    card?: string
    token?: string
}

const AuthWrapper = ({ background, logo, card, token }: AuthWrapperChildren) => {
    return (
        <Container >
            {background}
            <AuthElementsGrid
                container
                direction="column"
                justifyContent="flex-end"
            >
                <LogoGrid item xs={12}>
                    {logo}
                </LogoGrid>
                <Grid item xs={12}>
                    <CardGrid
                        item
                        xs={12}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <AnimatedCard card={card as string} resetPasswordToken={token} delay="0" />
                    </CardGrid>
                </Grid>
                <Grid item xs={12} p={3}>
                </Grid>
            </AuthElementsGrid>
        </Container>
    )
}

export default AuthWrapper