import React from 'react'
import CategoryLink from './CategoryLink'
import LogoutLink from './LogoutLink'
import ProfileLink from './ProfileLink'
import TransactionsLink from './TransactionsLink'
import UserInformation from './UserInformation'
import DashboardLink from './DashboardLink'


const NavBar = () => {
  return (
    <>
      {/* <UserInformation/>      */}
      <DashboardLink/>
      {/* <TransactionsLink/>
      <CategoryLink/>
      <LogoutLink/>
      <ProfileLink/>  */}
    </>
  )
}

export default NavBar
