'use client'
import IconTextTag from "@/components/IconTextTag/IconTextTag";
import HorizontalStepper from "@/layouts/Stepper/HorizontalStepper";
import { Background, HomeLink, IconContainer } from "@/pages/BookDeatails/BookDetails.style";
import withAuth from "@/utils/auth";
import { constants } from "@/utils/constants/constants";
import { Button } from "@mui/material";

const AddBook = () => {
    return (
        
            <HorizontalStepper steps={constants.BookForm.ADD_BOOK_FORM_STEPS} />
       
    );
}
export default withAuth(AddBook);