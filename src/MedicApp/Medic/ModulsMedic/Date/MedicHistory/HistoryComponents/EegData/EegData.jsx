import React from 'react'
import DropArea from '../../../../../../../Assets/img/bg_upload_file.png'
import './EegData.css'
import { NavLink } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { AppContext } from '../../../../../../../context';
import Swal from 'sweetalert2';

export default function EegData() {

  /* AppContext */
  let {filerepose,setFilerepose,fileActive,setFileActive,flagHistory} = React.useContext(AppContext);
  /* useState */
  
  let [reposoFile,setReposoFile] = React.useState(filerepose);
  let [activeFile,setactiveFile] = React.useState(fileActive);

  /* functions */
  
  const ReadFiles=(event)=>{
      
      console.log("DATOS: ",event.target.files);
      if(event.target.files.length  == 0){
        return ""
      }
      if(activeFile !== null && reposoFile !== null){

        // Alerta para que elimine alguno de los archivos suministrados
        Swal.fire({
          icon: 'info',
          title: 'Elimina alguno de los archivos para cargar alguno nuevo'
        })
        


      }else if (reposoFile !== null){

        setactiveFile(event.target.files[0]);

      }else if (activeFile !== null){

        setReposoFile(event.target.files[0]);

      }else{

        setactiveFile(event.target.files[0]);

      }

  }

  const cleanFile=(type)=>{

    if(type == "active"){

      setactiveFile(null);

    }else{

      setReposoFile(null);

    }

  }

  React.useEffect(()=>{
    if(flagHistory){
      setFileActive(activeFile);
      setFilerepose(reposoFile);
    }
  },[flagHistory])

  return (
    <div className='modal-dialog modal-dialog-centered' role="document">
          <div className='modal-content p-0 ps-4 pe-4'>
            <div className='modal-body position-relative'>
              <div className='row mt-3'>
                <div className='col-12'>
                  <form id='internal-form' className='w-100" autocomplete="nope'>
                    <div className='row gx-0 gx-sm-0 gx-md-4 gx-lg-4 gx-xl-4 gx-xxl-5'>
                      <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex flex-column justify-content-center align-items-center align-self-center'>
                        <div id="test-drop-area" className='file-drop-area- position-relative overflow-hidden'>
                          <img className='card-img position-absolute top-50 start-50 translate-middle' src={DropArea} alt="" />
                          <div className='d-flex flex-column justify-content-center align-items-center align-self-center w-100 pt-3 pb-3'>
                            <span className='file-msg-drop- lh-sm fs-5- ff-monse-regular- fw-bold tx-black- white font_medium'>Arrastre aquí</span>
                            <span className="file-msg-drop- lh-sm fs-5- ff-monse-regular- fw-bold tx-black- mt-1">o</span>
                            <span className='fake-btn-drop- font-notosans-light fw-bold mt-2 d-flex flex-row justify-content-start align-items-center align-self-center ps-3 pe-3 pt-1 pb-1'>
                              <span className='lh-sm fs-6- ff-monse-regular- fw-bold tx-dark-purple- white font_medium'>Busca un archivo</span>
                            </span>
                            <input onChange={ReadFiles} className='file-input-drop-' type="file" />
                          </div>
                        </div>
                        {activeFile !== null  ?
                        <div className='row row-cols-auto g-1 d-flex flex-wrap justify-content-start align-items-center align-self-center mt-3 mb-2 wrapper-list-files'>
                          <div className='col d-flex justify-content-start align-items-center align-self-center ps-2 pe-2'>
                            <NavLink className='lh-sm fs-6- ff-monse-regular- fw-bold tx-black- p-0 m-0 ps-1'>
                              <span className='lh-sm fs-6- ff-monse-regular- fw-normal tx-black- text-center white font_medium'>{'ACTIVO: '+activeFile?.name}</span>
                            </NavLink>
                            <IoClose onClick={()=>cleanFile('active')} cursor={'pointer'} color='red' size={20}></IoClose>
                          </div>
                        </div>
                        :
                        <></>
                        }
                        {reposoFile !== null  ?
                          <div className='row row-cols-auto g-1 d-flex flex-wrap justify-content-start align-items-center align-self-center mt-3 mb-2 wrapper-list-files'>
                          <div className='col d-flex justify-content-start align-items-center align-self-center ps-2 pe-2'>
                            <NavLink className='lh-sm fs-6- ff-monse-regular- fw-bold tx-black- p-0 m-0 ps-1'>
                              <span className='lh-sm fs-6- ff-monse-regular- fw-normal tx-black- text-center white font_medium'>{'REPOSO: '+reposoFile?.name}</span>
                            </NavLink>
                            <IoClose onClick={()=>cleanFile('reposo')} cursor={'pointer'} color='red' size={20}></IoClose>
                          </div>
                        </div>
                        :
                        <></>
                        }
                        
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
