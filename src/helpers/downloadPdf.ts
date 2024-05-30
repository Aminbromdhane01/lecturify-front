import jsPDF from 'jspdf'
interface IDwonloadPdfProps {
 summary : string
 title : string
}
export const downloadPdf = ({summary , title} : IDwonloadPdfProps) => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text(`${title} Summary`, 10, 20);
    
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);
    
    doc.setFontSize(12);
    doc.text("Summary:", 10, 35);
    doc.setFontSize(10);
    doc.text(summary || '', 10, 45, { maxWidth: 190 });
  
    doc.setFontSize(12);
    doc.text("Thank you for using our recommendation service!", 10, doc.internal.pageSize.height - 30);
    
    doc.save(`${title}.pdf`);
  };