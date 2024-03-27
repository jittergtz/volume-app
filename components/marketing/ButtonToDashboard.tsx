
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'


function ButtonToDashboard() {


  return (
    <Link href={"/dashboard"}>
<button className="relative z-40 inline-flex h-12 overflow-hidden rounded-3xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-gray-950 hover:bg-transparent px-3 py-1 text-sm font-medium text-neutral-200 backdrop-blur-3xl">
    Jetzt starten 
    <BiChevronRight size={22}/>
  </span>

</button>
</Link>
  )
}

export default ButtonToDashboard