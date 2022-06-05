import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaBlog} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#header"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#project"><AiOutlineFundProjectionScreen/></a>
      <a href="#blog"><FaBlog/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav