import Layout from "../components/Layout";
import { Card, Row } from "react-bootstrap";
import { useState } from "react";
import dynamic from "next/dynamic";
import { pdfjs } from 'react-pdf';


const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  {
    ssr: false,
  }
);

const Page = dynamic(() => import("react-pdf").then((mod) => mod.Page), {
  ssr: false,
});



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const changePage= (offset) =>{
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  const previousPage=()=> {
    changePage(-1);
  }

  const nextPage= ()=> {
    changePage(1);
  }
  return (
    <Layout>
      <Row className="justify-content-md-center">
        <Card style={{background:"inherit",maxWidth: "%"}}>
        <Document
            style={{maxWidth:"50%",maxHeight: "50%"}}
            file="/static/PDF/Abdelkader-rafaat.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>

          <p style={{color:"#808080"}}>
            Page {pageNumber} of {numPages}
          </p>
          
        </Card>
      </Row>
      
    </Layout>
  );
};

export default Resume;
