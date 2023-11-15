import Image from 'next/legacy/image'
import React from 'react'
import {SearchIcon, PlusCircleIcon } from '@heroicons/react/solid'
import {HomeIcon} from "@heroicons/react/solid"

export default function Header() {
  return (
        <div className='shadow-sm border-b sticky top-0 bg-white z-30'>
          <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
          {/* Left */}
            <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
                <Image  
                src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
                layout='fill'
                className='object-contain'
                />
            </div>
            <div className="cursor-pointer h-24 w-10 relative lg:hidden">
                <Image  
                src="https://www.computerhope.com/jargon/i/instagram.png"
                layout='fill'
                className='object-contain'
                />
            </div>
            
            {/* Middle */}
            <div className='relative mt-1'>
              <div className='absolute top-2 left-2'>
                <SearchIcon className="h-6 text-gray-500 " />
              </div>
              <input type='text' placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm  focus:ring-black focus:border-black rounded-md' />
            </div>

        {/* Right */}
        <div className='flex space-x-4 items-center'> 
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img src="https://th.bing.com/th/id/OIP.qNBaBUh5A4nnZgbCWEHLdQAAAA?w=120&h=180&c=7&r=0&o=5&pid=1.7" alt='user-image' className='h-10 w-10 rounded-full' />
        </div>
        </div>

        </div>
            )
}
