import React from 'react'
import './AdminPanel.css'
import {NavLink} from "react-router-dom"
import Pagination from 'pagination-for-reactjs-component'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiEdit } from "react-icons/ci";
import { MdGppGood } from "react-icons/md";

export default function AdminPanel() {
  

  let [users,setUsers] = React.useState([]);
  let [ListReference,setListReference] = React.useState([]);
  let [supportList,setSupportList] = React.useState([]);
  let [preloader,setPreloader] = React.useState(false);
  let [selectUser,setSelectUser] = React.useState(null);

  /* PAGINATION */
  const [pageIndex, setPageIndex] = React.useState(1);
  const [pageCount,setPageCount] = React.useState(10);
  const paginationRef = React.useRef();


  return (
    <div className='container-fluid overflow-x-hidden p-0'>
        <div className='row g-4 mt-3'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4'>
            <div id="card-appointment" className='card border-0 rounded-3 w-100 position-relative bs-2-'>
              <div className='card-header border-0 rounded-3'>
                <div className='row'>
                  <div className='col-12'>
                    <ul className='nav nav-pills d-flex flex-row justify-content-between' role="tablist">
                      <li className='nav-item' role="presentation">
                        <button className='nav-link active rounded-0 d-flex flex-row justify-content-center align-items-center align-self-center' id="user-administration-tab" data-bs-toggle="pill" data-bs-target="#user-administration" type="button" role="tab" aria-controls="user-administration" aria-selected="true"> <span className='ff-monse-regular- me-2 font_medium'>Administración de usuarios</span></button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='card-body w-100 wrapper-list-appointment- pt-0 mt-1'>
                <div className='tab-content' id='myTabContent'>
                  <div className='tab-pane fade show active' id='user-administration' role="tabpanel" aria-labelledby="user-administration-tab" tabIndex="0">
                    <div className='row'>
                      <div className='col-12'>
                        <div className='d-grid gap-2 pt-1'>
                          <span style={{'cursor':'pointer'}}  className='nav-link rounded-pill ps-4 pe-4 h-45- d-flex flex-row justify-content-center align-items-center align-self-center bs-1- button-register-admin' ><span className='lh-1 fs-5- ff-monse-regular- font_medium white'>Registro de usuario</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8 bg-gray'>
            <div id="card-view" className='card border-0 rounded-3 w-100 bs-2- bg-gray'>
              <div className='card-body w-100 min-h-'>
                <div className='container-fluid'>
                  <div className='row mt-2'>
                    <div className='col-12'>
                      <h2 className='m-0 p-0 lh-sm fs-3- ff-monse-regular- fw-bold tx-dark-purple- font_medium white'>Usuarios</h2>
                    </div>
                  </div>
                  <div className='row mt-4 mb-4'>
                    <div className='col-12'>
                      <form action="" className='position-relative wrapper-search-small- d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block'>
                        <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                          <div className='form-floating inner-addon- left-addon-'>
                            <input type="text" className='form-control' id='middleLastName' placeholder="Ingrese su segundo pellido" />
                            <label className='fs-5- ff-monse-regular- white font_medium'>Busca por cédula</label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> 
                  <div className='row mt-4 mb-4'>
                    <div className='table-responsive table-general-'>
                      <table className='table table-sm table-striped table-no-border- align-middle'>
                      <thead>
                          <tr>
                            <th scope="col" className='th-width-md-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Nombre</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Identificación</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>email</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Número de celular</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Dirección</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Paciente</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Médico</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Admin</span>
                              </div>
                            </th>
                            <th scope="col" className='th-width-sm-'>
                              <div className='d-flex flex-row justify-content-center align-items-center align-self-center w-100'>
                                <span className='fs-5- ff-monse-regular- fw-bold tx-dark-purple- font_medium'>Editar</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {supportList.map((obj,index)=>{
                              return(
                                <tr key={index}>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.primer_nombre+' '+obj?.segundo_nombre+' '+obj?.primer_apellido+' '+obj?.segundo_apellido}</p>
                                  </td>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.identificacion}</p>
                                  </td>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.email}</p>
                                  </td>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.numero_celular}</p>
                                  </td>
                                  <td className='align-middle'>
                                    <p className='m-0 lh-sm fs-5- ff-monse-regular- fw-normal text-center'>{obj?.direccion}</p>
                                  </td>
                                  <td className='align-middle'>
                                    {obj?.es_paciente ? 
                                    <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                      <div className='col-auto'>
                                          <MdGppGood size={'24'} color={'#0463a2'} />
                                      </div>
                                    </div>
                                    :
                                    <></>
                                    }
                                  </td>
                                  <td className='align-middle'>
                                    {obj?.es_doctor ? 
                                    <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                      <div className='col-auto'>
                                          <MdGppGood size={'24'} color={'#0463a2'} />
                                      </div>
                                    </div>
                                    :
                                    <></>
                                    }
                                  </td>
                                  <td className='align-middle'>
                                    {obj?.es_admin ? 
                                    <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                      <div className='col-auto'>
                                          <CiEdit size={'24'} color={'#0463a2'} />
                                      </div>
                                    </div>
                                    :
                                    <></>
                                    }
                                  </td>
                                  
                                  <td className='align-middle'>
                                    <div className='row gx-1 d-flex flex-row justify-content-center align-items-start align-self-start'>
                                      <div className='col-auto' onClick={()=>{
                                        setSelectUser(index);
                                        }}>
                                          <MdGppGood size={'24'} color={'#0463a2'} style={{'cursor':'pointer'}}/>
                                          
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )
                          })}

                        </tbody>
                      </table>
                    </div>
                  </div> 
                  <div className='row mt-4'>
                    <div className='col-12 d-flex flex-row justify-content-center align-items-center align-self-center'>
                      <Pagination
                        pageCount={pageCount}
                        pageIndex={pageIndex}
                        setPageIndex={setPageIndex}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
