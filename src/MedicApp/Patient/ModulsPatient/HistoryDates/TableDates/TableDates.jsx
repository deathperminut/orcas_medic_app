import React from 'react'
import './TableDates.css'
import Pagination from 'pagination-for-reactjs-component';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import { FaEye } from "react-icons/fa";
require('jquery-mousewheel');


export default function TableDates() {

  let navigate=useNavigate()
  const [pageIndex, setPageIndex] = React.useState(1);
  let pageCount = 10;
  return (
    <React.Fragment>
        <div className='row mt-4 mb-4'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
          <div className='card border-0 rounded-0 w-100 bg-transparent'>
            <div className='card-body p-0 w-100'>
              <div className='table-responsive table-general-'>
                <table id='table-medication-' className='table table-sm table-striped table-no-border- align-middle'>
                  <thead>
                    <tr>
                      <th scope="col" className='th-width-auto-'>
                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                          <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Fecha</span>
                        </div>
                      </th>
                      <th scope="col" className='th-width-auto-'>
                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                          <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Médico</span>
                        </div>
                      </th>
                      <th scope="col" className='th-width-auto-'>
                        <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                          <span className='font_medium'>Visualizar</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className=' p-0 text-center input-large- white font_medium
                          '> 2022-03-20</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p className=' p-0 text-center input-large- white font_medium'> Juan Sebastian Mendez Rondon</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className='p-0 text-center input-large- white font_medium'>
                          <FaEye onClick={()=>navigate('/ModulsPatient/HistoryDates/medicalPDF/')} cursor={'pointer'} color='white'/>
                          </p>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className=' p-0 text-center input-large- white font_medium
                          '> 2022-03-20</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p className=' p-0 text-center input-large- white font_medium'> Juan Sebastian Mendez Rondon</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className='p-0 text-center input-large- white font_medium'>
                          <FaEye cursor={'pointer'} color='white'/>
                          </p>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className=' p-0 text-center input-large- white font_medium
                          '> 2022-03-20</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p className=' p-0 text-center input-large- white font_medium'> Juan Sebastian Mendez Rondon</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className='p-0 text-center input-large- white font_medium'>
                          <FaEye cursor={'pointer'} color='white'/>
                          </p>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className=' p-0 text-center input-large- white font_medium
                          '> 2022-03-20</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p className=' p-0 text-center input-large- white font_medium'> Juan Sebastian Mendez Rondon</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className='p-0 text-center input-large- white font_medium'>
                          <FaEye cursor={'pointer'} color='white'/>
                          </p>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className=' p-0 text-center input-large- white font_medium
                          '> 2022-03-20</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p className=' p-0 text-center input-large- white font_medium'> Juan Sebastian Mendez Rondon</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className='p-0 text-center input-large- white font_medium'>
                          <FaEye cursor={'pointer'} color='white'/>
                          </p>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className=' p-0 text-center input-large- white font_medium
                          '> 2022-03-20</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p className=' p-0 text-center input-large- white font_medium'> Juan Sebastian Mendez Rondon</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className='p-0 text-center input-large- white font_medium'>
                          <FaEye cursor={'pointer'} color='white'/>
                          </p>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className=' p-0 text-center input-large- white font_medium
                          '> 2022-03-20</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p className=' p-0 text-center input-large- white font_medium'> Juan Sebastian Mendez Rondon</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className='p-0 text-center input-large- white font_medium'>
                          <FaEye cursor={'pointer'} color='white'/>
                          </p>
                        </div>
                      </td>
                      
                    </tr>
                    <tr>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className=' p-0 text-center input-large- white font_medium
                          '> 2022-03-20</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p className=' p-0 text-center input-large- white font_medium'> Juan Sebastian Mendez Rondon</p>
                        </div>
                      </td>
                      <td className='align-middle'>
                        <div id='internal-form' className='w-100'>
                          <p  className='p-0 text-center input-large- white font_medium'>
                          <FaEye cursor={'pointer'} color='white'/>
                          </p>
                        </div>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-4 mb-4'>
        <div className='col-12 d-flex flex-row justify-content-center align-items-center align-self-center'>
          <Pagination
            pageCount={pageCount}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        </div>
      </div>
      <div className='row gx-2 d-flex flex-row justify-content-end align-items-start align-self-start mt-4 mb-4'>
        <div className='col-auto'>
          <button className='btn rounded-pill ps-3 pe-3 ps-sm-3 pe-sm-3 ps-md-3 pe-md-3 ps-lg-5 pe-lg-5 ps-xl-5 pe-xl-5 ps-xxl-5 pe-xxl-5 h-45- d-flex flex-row justify-content-center align-items-center align-self-center btn-red- bs-1-' type="button">
              <span className='lh-1 fs-5- ff-monse-regular- d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'>Guardar</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
