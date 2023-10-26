'use client'

import Container from '@/components/atoms/container'
import Divider from '@/components/atoms/divider'

type SectionHeadingProps = {
  children: React.ReactNode
  heading: string
  image?: string
  subheading: string
  width?: number
}

export default function SectionHeading({
  children,
  heading,
  image,
  subheading,
  width
}: SectionHeadingProps) {
  return (
    <Container>
      <div className='my-20 flex w-full flex-wrap justify-between md:flex-nowrap'>
        <div className={`py-4 ${!image ? 'md:w-full' : 'md:w-1/2'}`}>
          <h3 className='text-2xl font-bold md:text-4xl'>{heading}</h3>
          <h4 className='text-2xl font-light md:text-4xl'>{subheading}</h4>
          <Divider />
          {children}
        </div>
        {image && (
          <div
            className={`flex w-full justify-center py-4 ${
              !image ? 'md:w-full' : 'md:w-1/2'
            }`}
          >
            {image ? <img src={image} alt={image} width={width} /> : null}
          </div>
        )}
      </div>
    </Container>
  )
}
