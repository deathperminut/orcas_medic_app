import React from 'react'
import DropArea from '../../../../../../../Assets/img/bg_upload_file.png'
import './EegData.css'
import { NavLink } from 'react-router-dom'
import { IoClose } from "react-icons/io5";

export default function EegData() {
  return (
    <div className='modal-dialog modal-dialog-centered' role="document">
          <div className='modal-content p-0 ps-4 pe-4'>
            <div className='modal-body position-relative'>
              <div className='row mt-3'>
                <div className='col-12'>
                  <form id='internal-form' className='w-100" autocomplete="nope'>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                      {/* <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3 mb-sm-3 mb-md-4 mb-lg-4 mb-xl-4 mb-xxl-4'>
                        <div className='form-floating inner-addon- left-addon-'>
                          <input type="text" className='form-control white font_medium' id='type-attachment' placeholder="Ingrese su segundo nombre" />
                          <label className='fs-5- ff-monse-regular- white font_medium'>Tipo de anexo (EEG)</label>
                        </div>
                      </div> */}
                      <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-column justify-content-center align-items-center align-self-center'>
                        <div id="test-drop-area" className='file-drop-area- position-relative overflow-hidden'>
                          <img className='card-img position-absolute top-50 start-50 translate-middle' src={DropArea} alt="" />
                          <div className='d-flex flex-column justify-content-center align-items-center align-self-center w-100 pt-3 pb-3'>
                            <span className='file-msg-drop- lh-sm fs-5- ff-monse-regular- fw-bold tx-black- white font_medium'>Arrastre aquí</span>
                            <span className="file-msg-drop- lh-sm fs-5- ff-monse-regular- fw-bold tx-black- mt-1">o</span>
                            <span className='fake-btn-drop- font-notosans-light fw-bold mt-2 d-flex flex-row justify-content-start align-items-center align-self-center ps-3 pe-3 pt-1 pb-1'>
                              <span className='lh-sm fs-6- ff-monse-regular- fw-bold tx-dark-purple- white font_medium'>Busca un archivo</span>
                            </span>
                            <input className='file-input-drop-' type="file"/>
                          </div>
                        </div>
                        <div className='row row-cols-auto g-1 d-flex flex-wrap justify-content-start align-items-center align-self-center mt-3 mb-2 wrapper-list-files'>
                          <div className='col d-flex justify-content-start align-items-center align-self-center ps-2 pe-2'>
                            <NavLink className='lh-sm fs-6- ff-monse-regular- fw-bold tx-black- p-0 m-0 ps-1'>
                              <span className='lh-sm fs-6- ff-monse-regular- fw-normal tx-black- text-center white font_medium'>1) Archivo_EEG.csv</span>
                            </NavLink>
                            <IoClose cursor={'pointer'} color='red' size={20}></IoClose>
                          </div>
                        </div>
                        <div className='row row-cols-auto g-1 d-flex flex-wrap justify-content-start align-items-center align-self-center mt-3 mb-2 wrapper-list-files'>
                          <div className='col d-flex justify-content-start align-items-center align-self-center ps-2 pe-2'>
                            <NavLink className='lh-sm fs-6- ff-monse-regular- fw-bold tx-black- p-0 m-0 ps-1'>
                              <span className='lh-sm fs-6- ff-monse-regular- fw-normal tx-black- text-center white font_medium'>2) Archivo_EEG.csv</span>
                            </NavLink>
                            <IoClose cursor={'pointer'} color='red' size={20}></IoClose>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
