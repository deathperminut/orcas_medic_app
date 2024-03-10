import './Navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
  return (
    <React.Fragment>
        <nav style={{'height':'20px'}} className='navbar navbar-expand pt-0 pb-0 d-flex flex-row justify-content-end align-items-center align-self-center'>
                <div className='container-fluid navbar-collapse-background position-relative d-flex flex-row justify-content-between align-items-center align-self-center'>
                    <div className='navbar-brand d-flex flex-row justify-content-start align-items-center align-self-center'>
                        <div id="sidebarCollapse" className='btn d-flex flex-row justify-content-center align-items-center align-self-center rounded-circle ps-2 btn-collapse-sidebar- btn-dark-purple- bs-1-' style={{'backgroundColor':'white','display':'flex','alignItems':'center','justifyContent':'center'}}>
                        <TiThMenu style={{'position':'relative','left':'2px'}} />
                        </div>
                    </div>
                </div>
        </nav>
    </React.Fragment>
  )
}
