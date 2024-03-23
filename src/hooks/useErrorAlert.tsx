import { useState, useEffect } from "react";

interface ErrorData {
    message: string;
}

const useErrorAlert = (isError: boolean, error: ErrorData | any) => {
    const [open, setOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');
    const handleCloseAlert = () => {
        setOpen(false);
        setAlertMessage('');
    };

    useEffect(() => {
        if (isError && error) {
            setOpen(true);
            setAlertMessage(error?.data.message || 'An error occurred.');
            const timer = setTimeout(() => {
                handleCloseAlert();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isError, error]);

    return { open, alertMessage, handleCloseAlert };
};

export default useErrorAlert;