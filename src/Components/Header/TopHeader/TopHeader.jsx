import React from 'react'
import './TopHeader.css'
import { Link } from 'react-router-dom'
const TopHeader = () => {
  return (
    <>
        <div className="header-top">

        <div className="container headertop">
            <ul className="topHeaderLeft">
                <Link to={'/about'}>
                    О компании
                </Link>    
                  
                <Link to={'/about'}>
                Оплата
                </Link>       
            </ul>

            <ul className='topHeaderLeft'>
                <Link >
                МФО: 00873 
                </Link>
                <Link to={"https://maps.app.goo.gl/Y9VTv1Ri66iZ4P7Y8"}>
                г.Ташкент, Чиланзарский р-н., ул. Бунедкор шох 1
                </Link>
            </ul>
        </div> 
        </div>
    </>
  )
}

export default TopHeader
