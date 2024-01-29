import React from 'react'
import { FaSearchengin } from "react-icons/fa";

type Props = {}

const Searchbox = (props: Props) => {
  return (
  <form className='flex relative items-center justify-center h-10'>
      <input type='text' placeholder='Enter city name' className='px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full'/>
      <button className='px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600 h-full'>
      <FaSearchengin className='text-2xl' />
      </button>
  </form>
  )
}

export default Searchbox