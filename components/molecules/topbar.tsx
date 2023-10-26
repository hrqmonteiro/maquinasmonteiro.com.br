'use client'

import Link from 'next/link'

import Container from '@/components/atoms/container'
import Logo from '@/components/atoms/logo'

export default function Topbar() {
  return (
    <div className='min-h-20 flex items-center justify-between bg-white py-4'>
      <Container>
        <Link className='transition-all duration-200 hover:opacity-80' href='/'>
          <Logo />
        </Link>
      </Container>
    </div>
  )
}
