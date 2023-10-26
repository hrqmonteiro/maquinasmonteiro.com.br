'use client'

import Link from 'next/link'
import { partner, partners } from '@/utils/constants'

import LeftSectionHeading from '@/components/atoms/left-section-heading'
import Map from '@/components/atoms/map'
import SectionDivider from '@/components/atoms/section-divider'
import SectionHeading from '@/components/atoms/section-heading'
import Hero from '@/components/organisms/hero'

import Container from '../atoms/container'

export default function IndexPage() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <SectionHeading
        heading='Conheça a'
        image='/historia.jpg'
        subheading='Máquinas Monteiro'
        width={600}
      >
        <div className='flex justify-between'>
          <p className='text-justify text-xl font-light'>
            A Máquinas Monteiro atua há anos, com uma visão inovadora de gestão,
            focando em melhoria contínua dos processos, parcerias estratégias
            com fornecedores, ampliação do portfólio de produtos para atender
            com excelência os clientes.
          </p>
        </div>
      </SectionHeading>
      <SectionDivider />

      <LeftSectionHeading
        heading='Trazemos décadas de experiência'
        subheading='no ramo joalheiro'
      >
        <div className='flex justify-center'>
          <div>
            <h5 className='mb-7 text-3xl font-bold'>
              Sempre estamos presentes na maiores feiras do setor como:
            </h5>
            <span className='mb-7 text-3xl font-medium font-medium'>
              Tecnogold, AJORESP TECH, Feninjer Tech, Feira do Empreendor
              Sebrae.
            </span>
            <h6 className='mb-7 text-2xl font-medium'></h6>
            <h6 className='mb-7 text-xl font-normal'>
              Fornecemos nossos produtos para diversas empresas do setor
              presentes em território nacional e internacional.
            </h6>
            <h6 className='mb-7 text-lg font-light'>
              Estamos prontos para alavancar sua empresa trazendo qualidade à
              fabricação e retorno no investimento.
            </h6>
          </div>
        </div>
      </LeftSectionHeading>
      <ul className='my-10 inline-flex w-full items-center justify-center px-3 md:px-6'>
        {partners.map(({ name, url }: partner, index: number) => (
          <li
            className='mr-4 grayscale transition-all duration-200 hover:opacity-80 hover:grayscale-0 md:mr-20'
            key={index}
          >
            <Link href={url} target='_blank'>
              <img
                src={`/partners/${name.toLowerCase().replace(/ /g, '-')}.jpg`}
                alt={name}
                width={110}
              />
            </Link>
          </li>
        ))}
      </ul>
      <SectionDivider />
      <Map />
      <Container>
        <SectionHeading heading='Entre em' subheading='Contato'>
          <div className='w-full'>
            <div className='flex flex-wrap justify-between md:flex-nowrap'>
              <div className='w-1/2'>Contact details</div>
              <form className='w-1/2'>
                <input type='text' placeholder='blablabla' />
              </form>
            </div>
          </div>
        </SectionHeading>
      </Container>
    </>
  )
}
