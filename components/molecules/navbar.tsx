'use client'

import Link from 'next/link'
import { constants } from '@/utils/constants'

export default function Navbar() {
  return (
    <div className='my-4 flex h-16 items-center justify-between rounded-md bg-primary p-3 text-primary'>
      <ul className='inline-flex'>
        {constants.map((constant, index: number) => (
          <Link href={constant.url} key={index}>
            <li className='mr-2 transition-all duration-200 hover:opacity-90'>
              {constant.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
