import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto '>


      {/* HERO SECTION  */}
      <div className='py-10'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='space-y-5 flex flex-col justify-center items-start'>
            <h4 className='text-5xl capitalize font-bold leading-[120%] max-w-sm'>Start learning with us now</h4>
            <p className='text-lg text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam  voluptates sed beatae?</p>
            <button className='bg-secondaryButton px-4 py-3 rounded-lg text-white'>Start Learning</button>
          </div>
          <div>
            <img src='/images/hero.png' className='max-w-full h-auto' />
          </div>
        </div>
      </div>




      {/* ABOUT SECTION  */}
      <div className='py-10'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>
            <img src='/images/about-1.png' className='max-w-full h-auto' />
          </div>
          <div className='space-y-5 flex flex-col justify-center items-start'>
            <h4 className='text-5xl capitalize font-bold leading-[120%] max-w-sm'>Welcome to the online centers</h4>
            <ul className='space-y-2'>
              <li>
                <Link href="#!" className='text-xl capitalize'>Start learning from your experience</Link>
              </li>
              <li>
                <Link href="#!" className='text-xl capitalize'>Enhance your skills with us now</Link>
              </li>
              <li>
                <Link href="#!" className='text-xl capitalize'>Do your favorite course</Link>
              </li>


            </ul>
          </div>

        </div>
      </div>



      {/* CREATE FREE ACCOUNT  */}
      <div className='py-10'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='space-y-5 flex flex-col justify-center items-start'>
            <h4 className='text-5xl capitalize font-bold leading-[120%]'>
              Start learning by creating free account and get register
            </h4>

          </div>
          <div>
            <img src='/images/about-2.png' className='max-w-full h-auto' />
          </div>


        </div>
      </div>


    </div>
  )
}

export default Home
