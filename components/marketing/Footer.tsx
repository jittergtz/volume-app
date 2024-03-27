import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className=' border-t border-neutral-800'>
        <div className='px-10 p-5  flex flex-col  gap-3 justify-start items-start
       text-neutral-400 text-sm'>
            <p >Volume</p>    
            <Link href={""}>sandro-email.com</Link>
            <Link href={""}>Github.com</Link>
        </div>

    </footer>
  )
}

export default Footer