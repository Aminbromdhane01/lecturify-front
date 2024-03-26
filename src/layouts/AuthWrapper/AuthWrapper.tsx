'use client'
import { AnimatedCard } from "@/components/auth-components/animatedCard/AnimatedCard"

import { Grid } from "@mui/material"
import React from "react"
import { AuthElementsGrid, Container, CardGrid, LogoGrid } from "./AuthWrapper.styles"


interface AuthWrapperChildren {
    background?: React.ReactNode
    logo?: React.ReactNode
    card?: React.ReactNode
    footer?: React.ReactNode
}

const AuthWrapper = ({ background, logo, card, footer }: AuthWrapperChildren) => {
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
                        <AnimatedCard card={card} delay="0" />
                    </CardGrid>
                </Grid>
                <Grid item xs={12} p={3}>
                    {footer}
                </Grid>
            </AuthElementsGrid>
        </Container>
    )
}

export default AuthWrapper