import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full bg-primary  py-5'>
            <div className="container mx-auto">
                <div className='flex justify-between items-center'>
                    <h2 className={`Montesesrat text-3xl`}>Educare</h2>
                    <ul className='flex items-center gap-10'>
                        <li>
                            <Link href='#!' className='text-lg'>Home</Link>
                        </li>
                        <li>
                            <Link href='#!' className='text-lg'>About</Link>
                        </li>
                        <li>
                            <Link href='#!' className='text-lg'>Courses</Link>
                        </li>
                        <li>
                            <Link href='#!' className='text-lg'>Blog</Link>
                        </li>
                        <li>
                            <button className='bg-primaryButton p-2 rounded-lg text-white'>Get Started</button>
                        </li>




                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
