'use server'

import nodemailer from 'nodemailer'

export type FormState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function inviaRichiesta(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const nome    = (formData.get('nome')    as string | null)?.trim() ?? ''
  const telefono = (formData.get('telefono') as string | null)?.trim() ?? ''
  const email   = (formData.get('email')   as string | null)?.trim() ?? ''
  const messaggio = (formData.get('messaggio') as string | null)?.trim() ?? ''

  if (!nome || !email || !messaggio) {
    return { status: 'error', message: 'Compila tutti i campi obbligatori.' }
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST   ?? 'smtp.gmail.com',
    port:   Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER ?? '',
      pass: process.env.SMTP_PASS ?? '',
    },
  })

  const corpo = `
Nuova richiesta di appuntamento — Studio Mantovan

Nome: ${nome}
Telefono: ${telefono || '—'}
Email: ${email}

Messaggio:
${messaggio}
  `.trim()

  try {
    await transporter.sendMail({
      from:    `"Sito Studio Mantovan" <${process.env.SMTP_USER}>`,
      to:      'studio.mantovan@gmail.com',
      replyTo: email,
      subject: `Richiesta visita – ${nome}`,
      text:    corpo,
    })
    return { status: 'success', message: 'Messaggio inviato! Ti rispondo entro 24 ore.' }
  } catch {
    return { status: 'error', message: 'Errore nell\'invio. Scrivimi direttamente su WhatsApp.' }
  }
}
