'use client'

import { useState } from 'react'
import Link from 'next/link'
import { partner, partners } from '@/utils/constants'
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  WhatsappLogo
} from '@phosphor-icons/react'
import toast from 'react-hot-toast'

import LeftSectionHeading from '@/components/atoms/left-section-heading'
import Map from '@/components/atoms/map'
import SectionDivider from '@/components/atoms/section-divider'
import SectionHeading from '@/components/atoms/section-heading'
import Hero from '@/components/organisms/hero'

import Container from '../atoms/container'

export default function IndexPage() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [business, setBusiness] = useState<string>('')
  const [phone, setPhone] = useState<string | undefined>('')
  const [message, setMessage] = useState<string>('')

  const formatPhoneNumber = (input: string): string | undefined => {
    if (input) {
      const numericInput = input.replace(/\D/g, '')

      let formattedNumber = ''

      if (numericInput.length >= 2) {
        formattedNumber += `(${numericInput.substring(0, 2)}`
      } else if (numericInput.length > 0) {
        formattedNumber += `(${numericInput.substring(0)}`
      }

      if (numericInput.length > 2) {
        formattedNumber += `) ${numericInput.substring(2, 7)}`
      } else if (numericInput.length > 0) {
        formattedNumber += `) ${numericInput.substring(2)}`
      }

      if (numericInput.length > 7) {
        formattedNumber += `-${numericInput.substring(7, 11)}`
      } else if (numericInput.length > 2) {
        formattedNumber += `-${numericInput.substring(7)}`
      }

      return formattedNumber
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    async function sendEmail() {
      try {
        const response = await fetch('/api/sendmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            phone: phone
          })
        })

        if (response.ok) {
          toast.success('Email enviado com sucesso! Aguarde nossa resposta!')
          setName('')
          setEmail('')
          setBusiness('')
          setPhone('')
          setMessage('')
        } else {
          toast.error('Não foi possível enviar o e-mail, tente novamente.')
        }
      } catch (error) {
        toast.error('Não foi possível enviar o e-mail, tente novamente.')
        console.error('Error:', error)
      }
    }

    sendEmail()
  }

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
        image='/hero.jpg'
        width={600}
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
      <Container>
        <SectionHeading heading='Entre em' subheading='Contato'>
          <div className='w-full'>
            <div className='flex flex-wrap justify-start md:flex-nowrap'>
              <div className='w-full md:w-1/2'>
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
                <div className='mb-8 flex w-full flex-wrap items-start'>
                  <WhatsappLogo className='mr-2 text-accent' />
                  <div className='-mt-1 mb-6 flex items-start'>
                    (17) 991448508 / (17) 99123 5432
                  </div>
                </div>
                <div className='mb-8 font-bold'>Horário de Funcionamento</div>
                <div className='flex w-full flex-wrap items-start'>
                  <Clock className='mr-2 text-accent' />
                  <div className='-mt-1 mb-6 flex flex-nowrap items-start'>
                    Segunda à Sexta: 7h30 às 17h30
                  </div>
                </div>
                <div className='flex w-full flex-wrap items-start'>
                  <Clock className='mr-2 text-accent' />
                  <div className='-mt-1 mb-6 flex items-start'>
                    Sábado: fechado
                  </div>
                </div>
                <div className='mb-8 flex w-full flex-wrap items-start'>
                  <Clock className='mr-2 text-accent' />
                  <div className='-mt-1 mb-6 flex items-start'>
                    Domingo: fechado
                  </div>
                </div>
              </div>
              <form onSubmit={onSubmit} className='w-full md:w-1/2'>
                <div className='mb-8 font-bold'>Enviar um e-mail</div>
                <div className='block justify-between md:flex'>
                  <input
                    className='focus:shadow-outline mb-4 mr-4 w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Nome completo'
                  />
                  <input
                    className='focus:shadow-outline mb-4 w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    type='text'
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder='Empresa (se houver)'
                  />
                </div>
                <div className='block justify-between md:flex'>
                  <input
                    className='focus:shadow-outline mb-4 mr-4 w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    type='email'
                    value={email}
                    title='test'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email para contato'
                  />
                  <input
                    className='focus:shadow-outline mb-4 w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    type='text'
                    value={phone}
                    onChange={(e) =>
                      setPhone(formatPhoneNumber(e.target.value))
                    }
                    placeholder='Telefone/celular para contato'
                  />
                </div>
                <div className='block justify-between md:flex'>
                  <textarea
                    className='focus:shadow-outline mb-4 w-full appearance-none break-words rounded border px-4 py-3 leading-tight text-gray-700 shadow focus:outline-none'
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Mensagem...'
                    wrap='hard'
                  />
                </div>
                <div className='flex justify-end'>
                  <button
                    className='rounded-md border border-primary px-6 py-3 font-bold text-secondary transition-all duration-200 hover:opacity-80'
                    type='submit'
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </SectionHeading>
      </Container>
      <Map height={600} />
    </>
  )
}
