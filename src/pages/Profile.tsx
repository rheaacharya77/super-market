import React from 'react'
import Profile from '../components/Profile/Profile';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
const MyProfile = () => {
  return (
    <>
    <BreadCrumbs previous="Home" current="Profile" />
    <Profile/>
    </>
  )
}
export default MyProfile;