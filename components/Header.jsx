import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { FaUserCircle, FaBars, FaUserCheck, FaUserPlus,FaUserFriends,FaSignOutAlt } from 'react-icons/fa';

export default function Header() {
    const router = useRouter();
    console.log(router)
    return (
        <div className='header-wrapper'>
            <div className='menu-wrapper'>
                <ul className='menu-list'>
                    <li className='pb-0'><a href="#">Hi, John</a><hr></hr></li>
                    <li><FaUserCircle /><Link href="/customer"><a href="#" className={router.pathname == "/customer" ? "active" : ''}>Customer</a></Link></li>
                    <li><FaUserPlus /><Link href="/leads"><a href="#" className={router.pathname == "/leads" ? "active" : ''}>Leads</a></Link></li>
                    <li><FaUserCheck /><Link href="/user"><a href="#" className={router.pathname == "/user" ? "active" : ''}>User</a></Link></li>
                    <li><FaUserFriends /><Link href="/teams"><a href="#" className={router.pathname == "/teams" ? "active" : ''}>Teams</a></Link></li>
                    <li><FaSignOutAlt /><a href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    )
}
