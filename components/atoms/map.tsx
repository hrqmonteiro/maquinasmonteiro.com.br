'use client'

type MapProps = {
  height?: number
}

export default function Map({ height }: MapProps) {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.6699297718387!2d-49.40364822378478!3d-20.804637166141546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad0b56eefa6d%3A0x99bbac76c2e2e698!2sM%C3%A1quinas%20Monteiro!5e0!3m2!1sen!2sbr!4v1698338203935!5m2!1sen!2sbr'
      width='100%'
      height={height || 450}
      loading='lazy'
    ></iframe>
  )
}
