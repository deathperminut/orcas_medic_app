import React,{useState} from 'react'
import './History_pdf.css'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { Document, Page, pdfjs } from 'react-pdf';
import { DefaultTextLayerFactory, DefaultAnnotationLayerFactory } from 'pdfjs-dist/build/pdf';
import FilePdf from '../../../../../Assets/docs/pruebas_.pdf';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function History_pdf() {

    let navigate=useNavigate();
  
  const [selectedDates, setSelectedDates] = useState([]);
  const minDate = new Date(2021, 0, 1); // 1 de enero de 2021
  const maxDate = new Date(2023, 11, 31); // 31 de diciembre de 2023

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [zoomPercent, setZoomPercent] = useState('100%');
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  pdfjs.DefaultTextLayerFactory = () => new DefaultTextLayerFactory({textLayerMode: 1});
  pdfjs.DefaultAnnotationLayerFactory = () => new DefaultAnnotationLayerFactory();
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    if (pageNumber === 1) {
      return;
    }
    changePage(-1);
  }

  function nextPage() {
    if (pageNumber === numPages) {
      return;
    }
    changePage(1);
  }

  function goToPage(event) {
    const pageNumber = parseInt(event.target.value, 10);
    if (pageNumber > 0) {
      setPageNumber(pageNumber);
    }
  }

  function zoomIn() {
    setScale(scale => scale + 0.1);
    setZoomPercent(`${Math.round((scale + 0.1) * 100)}%`);
  }

  function zoomOut() {
    setScale(scale => scale - 0.1);
    setZoomPercent(`${Math.round((scale - 0.1) * 100)}%`);
  }

  function goToFirstPage() {
    setPageNumber(1);
  }

  function goToLastPage() {
    setPageNumber(numPages);
  }

  function downloadPdf() {
    const link = document.createElement('a');
    link.href = '';
    link.target = '_blank';
    link.download = 'dummy.pdf';
    link.click();
  }

  function customLoading() {
    return <p className='m-0 p-0 fs-5- ff-monse-regular- fw-normal tx-black-'>Cargando pdf</p>;
  }
  return (
    <React.Fragment>
        <div className='container-fluid'>
          <div className='row gx-4 d-flex flex-wrap flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-start justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between justify-content-xxl-between align-items-start align-self-start align-self-xxl-center mt-2'>
            <div className='col-12 col-sm-12 col-md-auto col-lg-auto col-xl-auto col-xxl-auto flex-grow-1 mb-3 mb-sm-3 mb-md-2 mb-lg-2 mb-xl-2 mb-xxl-2'>
              <div className='col-12'>
                <h2 className='m-0 p-0 lh-sm fs-4- ff-monse-regular- fw-bold tx-dark-purple- white font_medium'>Historia </h2>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-12'>
              <div className="pdf-container d-flex flex-column justify-content-center align-items-center align-self-center">
                <div className="pdf-controls d-flex flex-row justify-content-center align-items-center align-self-center flex-wrap">
                  <div className='row gx-4 d-flex flex-wrap'>

                    <div className='col-auto mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                      <button className='btn rounded-pill d-flex flex-row justify-content-center align-items-center align-self-center btn-transparent-black- white font_medium' type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                        <FaChevronLeft  className='fa icon-backward me-0 white'></FaChevronLeft>
                      </button>
                    </div>
                    <div className='col-auto mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                      <div className='d-flex flex-row justify-content-start align-items-center align-self-center'>
                        <p className='m-0 p-0 fs-5- ff-monse-regular- fw-normal tx-black- pe-2 white font_medium'>Página {' '}</p>
                        <div id="internal-form-border-0-" className='w-100'>
                          <input type="number" className='form-control p-0 border-0 text-center white font_medium' value={pageNumber} onChange={goToPage}/>
                        </div>
                        <p className='m-0 p-0 fs-5- ff-monse-regular- fw-normal tx-black- ps-2 pe-2 white font_medium'>{' '} de </p>
                        <p className='m-0 p-0 fs-5- ff-monse-regular- fw-normal tx-black- white font_medium'> {numPages}</p>
                      </div>
                    </div>
                    <div className='col-auto mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                      <button className='btn rounded-pill d-flex flex-row justify-content-center align-items-center align-self-center btn-transparent-black-' type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
                      <FaChevronRight className='fa icon-backward me-0 white'></FaChevronRight>
                      </button>
                    </div>

                    <div className='col-auto mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                      <button className='btn rounded-pill d-flex flex-row justify-content-center align-items-center align-self-center btn-transparent-black-' type="button" onClick={downloadPdf}>
                        <FaFileDownload className='fa icon-download-pdf me-0 white'></FaFileDownload>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pdf-viewer">
                  <Document
                    file={FilePdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    renderMode="svg"
                    error={() => <p className='m-0 p-0 fs-5- ff-monse-regular- fw-normal tx-black- white font_medium'>Ha ocurrido un error al cargar el archivo PDF</p>}
                    loading={customLoading}>
                    <Page pageNumber={pageNumber} scale={scale} 
                    error={() => <p className='m-0 p-0 fs-5- ff-monse-regular- fw-normal tx-black- white font_medium'>No existen mas páginas para visualizar</p>}
                    noPagesFound={() => <p className='m-0 p-0 fs-5- ff-monse-regular- fw-normal tx-black- white font_medium'>Ir a la primera página</p>}
                    goToFirstPage={() => <p className='m-0 p-0 fs-5- ff-monse-regular- fw-normal tx-black- white font_medium'>No se encontraron páginas</p>}/>
                  </Document>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
  )
}
