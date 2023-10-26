'use client'

import Link from 'next/link'

import Container from '../atoms/container'

export default function BottomFooter() {
  const year = new Date().getFullYear().toString()

  return (
    <div className='flex flex-wrap items-center justify-between bg-primary py-3 text-primary md:flex-nowrap'>
      <Container>
        <div className='flex flex-wrap justify-between md:flex-nowrap'>
          <p className='mb-4 text-xs uppercase md:mb-0'>
            Copyright © {year} - Todos os direitos reservados.{' '}
            <span className='font-medium'>Máquinas Monteiro.</span>
          </p>
          <span className='text-xs'>
            Desenvolvido por:{' '}
            <Link
              className='transition-all duration-200 hover:opacity-80'
              href='https://hrqmonteiro.com.br'
              target='_blank'
              rel='noreferrer'
            >
              <span className='font-bold text-accent'>Henrique Monteiro</span>
            </Link>
          </span>
        </div>
      </Container>
    </div>
  )
}
