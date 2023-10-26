'use client'

import { useRouter } from 'next/navigation'

import Container from '@/components/atoms/container'
import Divider from '@/components/atoms/divider'

export default function Hero() {
  const router = useRouter()

  return (
    <div
      className='relative flex h-screen w-screen items-center '
      style={{
        backgroundImage: 'url("/hero.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
      }}
    >
      <div className='brightness-20 absolute inset-0 z-0 bg-black opacity-80 filter'></div>
      <Container>
        <div className='relative text-white'>
          <div className='py-100'>
            <h1 className='mb-2 text-7xl font-bold'>Máquinas Monteiro</h1>
            <h2 className='mb-2 text-5xl font-light'>
              Soluções para fabricação de joias
            </h2>
            <Divider />
            <p>
              Combinando inovação e precisão, proporcionamos excelência em cada
              peça que produzimos,
              <br />
              ajudando você a brilhar no mercado de joias.
            </p>
          </div>
          <button
            className='my-20 rounded-md border px-6 py-4 font-bold transition-all duration-200 hover:opacity-80'
            onClick={() => router.push('/catalogo')}
          >
            Nosso catálogo
          </button>
        </div>
      </Container>
    </div>
  )
}
