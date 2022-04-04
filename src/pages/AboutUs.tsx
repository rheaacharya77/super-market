import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';

const Aboutus = () => {
  return (
    <>
    <BreadCrumbs previous="Home" current="AboutUs"/>
    <AboutUs/>
    </>
  )
}
export default Aboutus;
