import { useState, useEffect } from "react";

interface MessageData {
    message: string;
}

const useAlert = (state: boolean, messageData: MessageData | any) => {
    const [open, setOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    const handleCloseAlert = () => {
        setOpen(false);
        setAlertMessage('');
    };

    useEffect(() => {
        if (state && messageData) {
            setOpen(true);
            if (messageData.message) { setAlertMessage(messageData.message || ''); }
            else { setAlertMessage(messageData.data.message || ''); }

            const timer = setTimeout(() => {
                handleCloseAlert();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [state, messageData]);

    return { open, alertMessage, handleCloseAlert };
};

export default useAlert;