import React from 'react'
import CategoryLink from './CategoryLink'
import LogoutLink from './LogoutLink'
import ProfileLink from './ProfileLink'
import TransactionsLink from './TransactionsLink'
import UserInformation from './UserInformation'


const NavBar = () => {
  return (
    <div>
      <CategoryLink/>
      <LogoutLink/>
      <ProfileLink/>
      <TransactionsLink/>
      <UserInformation/>
    </div>
  )
}

export default NavBar
