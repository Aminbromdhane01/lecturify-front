'use client'
import HorizontalStepper from "@/layouts/Stepper/HorizontalStepper";
import { Background } from "@/pages/BookDeatails/BookDetails.style";
import withAuth from "@/utils/auth";
import { constants } from "@/utils/constants/constants";

const AddBook = () => {
    return (
        <Background>
            <HorizontalStepper steps={constants.BookForm.ADD_BOOK_FORM_STEPS} />
        </Background>
    );
}
export default withAuth(AddBook);