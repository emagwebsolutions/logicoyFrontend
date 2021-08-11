import React from 'react'
import Navbars from '../Navbars'
import Footer from '../Footer'
import Header from './Header'
import RestrictAccess from '../shared/RestrictAccess'

export default function Users(){
const {accessdenied} = RestrictAccess()
accessdenied()
    return (
        <>
        <Navbars />
        <br />
        <div className="clearfix"></div>
        <Header />
  
        <Footer />
        </>
    )
}