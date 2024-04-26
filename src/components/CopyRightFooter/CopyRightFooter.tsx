import React from 'react';
import { Typography, Link } from '@mui/material';

const CopyRightFooter = () => {
    return (
        <footer style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
                &copy; {new Date().getFullYear()} Lecturify. All rights reserved.
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Built with <Link href="https://nextjs.org/">Next.js</Link> and <Link href="https://mui.com/">Material-UI</Link>.
            </Typography>
        </footer>
    );
};

export default CopyRightFooter;
