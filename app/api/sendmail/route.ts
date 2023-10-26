import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json()

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_TO,
    subject: `Novo email recebido de ${name} em maquinasmonteiro.com.br`,
    text: `${message}


Nome: ${name}
Email: ${email}
Telefone/Celular: ${phone}
    `
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log(`Email sent: ${info.response}`)

    return NextResponse.json({ message: 'Success' })
  } catch (error) {
    console.log(error)
    NextResponse.json({ message: 'could not send message' })
  }
}
