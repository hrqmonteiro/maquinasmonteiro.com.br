'use client'

import Link from 'next/link'

import Container from '@/components/atoms/container'
import Logo from '@/components/atoms/logo'

export default function TopFooter() {
  return (
    <div className='flex items-center justify-between bg-primary/95 py-10 text-primary'>
      <Container>
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <Logo />
            <p className='text-xs'>
              <span className='font-bold'>
                Máquinas Monteiro Fabricação de Máquinas Industriais LTDA
              </span>
              <br />
              <span className='font-bold'>CNPJ: </span> 35.915.654/0001-20
              <br />
              <br />
              <br />
              Avenida Doutor Cenobelino de Barros Serra, 1920
              <br />
              Parque Industrial
              <br />
              São José do Rio Preto, SP, Brasil
              <br />
              CEP: 15030-000
              <br />
              <br />
              <br />
              <Link
                className='font-bold underline transition-all duration-200 hover:opacity-80'
                href='mailto:contato@maquinasmonteiro.com.br'
              >
                contato@maquinasmonteiro.com.br
              </Link>
            </p>
          </div>
          <div className='w-1/2'></div>
        </div>
      </Container>
    </div>
  )
}
