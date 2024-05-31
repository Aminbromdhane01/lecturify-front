'use client'
import { Background } from "@/components/Book/Book.style";
import IconTextTag from "@/components/IconTextTag/IconTextTag";
import HorizontalStepper from "@/layouts/Stepper/HorizontalStepper";
import WithAuth from "@/utils/WithAuth";
import { constants } from "@/utils/constants/constants";
import { Button } from "@mui/material";

const AddBook = () => {
    return (
            <HorizontalStepper steps={constants.BookForm.ADD_BOOK_FORM_STEPS} />
    );
}
export default WithAuth(AddBook);