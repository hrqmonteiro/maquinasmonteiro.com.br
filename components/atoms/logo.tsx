'use client'

type LogoProps = {
  width?: number
}

export default function Logo({ width }: LogoProps) {
  return <img src='/logo.png' width={width || 200} alt='Máquinas Monteiro' />
}
