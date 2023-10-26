'use client'

import Link from 'next/link'
import { catalogItems, compareFn, type catalogItem } from '@/utils/constants'

export default function Navbar() {
  return (
    <div className='my-4 flex h-16 flex-nowrap items-center bg-primary px-6 text-primary'>
      <ul className='flex w-full flex-nowrap items-center justify-between overflow-x-auto'>
        {catalogItems
          .sort(compareFn)
          .map(({ name, url }: catalogItem, index: number) => (
            <li
              className='mr-4 font-medium transition-all duration-200 hover:opacity-80 md:mr-0'
              key={index}
            >
              <Link className='truncate' href={url}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
