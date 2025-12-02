import Image from 'next/image'
import React from 'react'

function Code() {
  return (
    <section className='max-w-100 w-1/1 bg-white rounded-xl flex items-center justify-between flex-col p-4'>
        <Image className='w-1/1 rounded-lg' src="/image-qr-code.png" width={1000} height={1000} alt='' />
        <div className='p-5 text-center'>
            <h1 className='font-extrabold text-dark-blue text-lg sm:text-xl mb-3  text-500'>Improve your front-end skills by building projects</h1>
            <p className='text-sm text-light-blue sm:text-xl'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next .</p>
        </div>
    </section>
  )
}

export default Code