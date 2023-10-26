'use client'

import Link from 'next/link'
import { partner, partners } from '@/utils/constants'
import {
  EnvelopeSimple,
  MapPin,
  Phone,
  WhatsappLogo
} from '@phosphor-icons/react'

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
          <div className='w-full py-10'>
            <div className='flex flex-wrap justify-start md:flex-nowrap'>
              <div className='mb-8 w-full md:w-1/2'>
                <div className='mb-8 font-bold'>Informações de contato</div>
                <div className='flex w-full flex-wrap items-start'>
                  <MapPin className='mr-2 text-accent' />
                  <div className='-mt-1 mb-6 flex flex-nowrap items-start'>
                    Cenobelino de Barros Serra, 1920
                    <br />
                    Parque Industrial
                    <br />
                    São José do Rio Preto, SP
                  </div>
                </div>
                <div className='flex w-full flex-wrap items-start'>
                  <EnvelopeSimple className='mr-2 text-accent' />
                  <div className='-mt-1 mb-6 flex items-start'>
                    contato@maquinasmonteiro.com.br
                  </div>
                </div>
                <div className='flex w-full flex-wrap items-start'>
                  <WhatsappLogo className='mr-2 text-accent' />
                  <div className='-mt-1 mb-6 flex items-start'>
                    (17) 991448508 / (17) 99123 5432
                  </div>
                </div>
              </div>
              <form className='mb-8 w-full md:w-1/2'>
                <div className='mb-8 font-bold'>Enviar um e-mail</div>
                <div className='block justify-between md:flex'>
                  <input
                    className='focus:shadow-outline mb-4 mr-4 w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    type='text'
                    placeholder='Nome completo'
                  />
                  <input
                    className='focus:shadow-outline mb-4 w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    type='text'
                    placeholder='Empresa (se houver)'
                  />
                </div>
                <div className='block justify-between md:flex'>
                  <input
                    className='focus:shadow-outline mb-4 mr-4 w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    type='text'
                    placeholder='Email para contato'
                  />
                  <input
                    className='focus:shadow-outline mb-4 w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    type='text'
                    placeholder='Telefone/celular para contato'
                  />
                </div>
                <div className='block justify-between md:flex'>
                  <textarea
                    className='focus:shadow-outline mb-4 w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    rows={8}
                    placeholder='Mensagem...'
                  />
                </div>
              </form>
            </div>
          </div>
        </SectionHeading>
      </Container>
    </>
  )
}
