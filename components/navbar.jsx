import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import Link from 'next/link'
import { useState } from 'react'

export const Navbar = props => {
  return (
    <div className='navbar-center bg-none text-white text-sm max-h-1 w-3/9'>
      <div className='navbar-start'>       
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='red'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>

          </label>

          <ul
            tabIndex='0'
            className='p-1 mt-2 shadow menu menu-compact dropdown-content bg-black rounded-box w-52 pr-0'
          >
        <li>
            <Link href='/' passHref> 
              <button className='tracking-wide uppercase'>
                HOME
              </button>
            </Link>
          </li>
        <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                MINT
              </button>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                GALLERY
              </button>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                COLLABS
              </button>
            </Link>
          </li>
          <li>
            <Link href='https://magiceden.io/marketplace/unicorn' passHref>
              <button className='tracking-wide uppercase'>
                MAGICEDEN ✨
              </button>
            </Link>
          </li>
            <li>
            <WalletMultiButton className='max-h-5' />
            </li>
            <div className='mr-16 mt-2 w-full rounded-none content-center text-xs'>
            The Royal AI Collection 👑 - 2022
            </div>
          </ul>
        </div>

      </div>

      <div className='bg-black hidden navbar-center lg:flex'>
        
        <ul className='shadow-white menu menu-horizontal'>

        <li>
            <Link href='/' passHref> 
              <button className='tracking-wide uppercase'>
                HOME
              </button>
            </Link>
          </li>
        <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                MINT
              </button>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                GALLERY
              </button>
            </Link>
          </li>
          <li>
            <Link href='/' passHref>
              <button className='tracking-wide uppercase'>
                COLLABS
              </button>
            </Link>
          </li>
          <li>
            <Link href='https://magiceden.io/marketplace/unicorn' passHref>
              <button className='tracking-wide uppercase'>
                MAGICEDEN ✨
              </button>
            </Link>
          </li>
          {/* <li>
            <Link href='http://collector.theshadyclass.xyz/' passHref>
              <button className='tracking-wide uppercase'>
                COLLECTOR 🔥
              </button>
            </Link>
          </li> */}
          {/* <li>
            <Link href='nftminter' passHref>
              <button className='tracking-wide uppercase'>
                NFT Minter
              </button>
            </Link>
          </li> 
          <li>
            <Link href='gatedentry' passHref>
              <button className='tracking-wide uppercase'>
                GETTED
              </button>
            </Link>
          </li>
          <li>
            <Link href='minthash' passHref>
              <button className='tracking-wide uppercase'>
                HASHER
              </button>
            </Link>
          </li>
          <li>
            <Link href='holdersnapshot'>
              <button className='tracking-wide uppercase'>
                SNAPPER
              </button>
            </Link>
          </li>
          <li>
            <Link href='multisend' passHref>
              <button className='tracking-wide uppercase'>
                BURNT
              </button>
            </Link>
          </li> 
*/}
          <li>

            <WalletMultiButton className='max-h-5' />

          </li>

        </ul>
      </div>
    </div>
  )
}
