'use client'

import Link from 'next/link'

import Container from '@/components/atoms/container'
import Logo from '@/components/atoms/logo'

export default function Topbar() {
  return (
    <Container>
      <div className='my-4 flex items-center justify-between'>
        <Link className='transition-all duration-200 hover:opacity-80' href='/'>
          <Logo />
        </Link>
      </div>
    </Container>
  )
}
