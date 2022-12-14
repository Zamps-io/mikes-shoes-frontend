import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div
    className="text-white font-extrabold flex justify-center items-center"
    >
      <Image src="/clientlogo.png" height={50} width={50} />
      <h1
      className='ml-2 uppercase text-2xl'
      >Mikes Shoes</h1>
    </div>
  )
}

export default Logo