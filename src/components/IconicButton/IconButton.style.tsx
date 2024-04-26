'use client'
import { styled } from '@mui/system';
import Link from 'next/link';

export const NonDecoratedLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
}))
