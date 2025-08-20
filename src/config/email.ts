import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(payload: ContactPayload) {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error('Email service is not configured. Missing EmailJS environment variables.');
  }

  const templateParams = {
    from_name: payload.name,
    from_email: payload.email,
    message: payload.message,
    to_email: 'rajeshniure567@gmail.com',
  } as Record<string, unknown>;

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    { publicKey: EMAILJS_PUBLIC_KEY }
  );
}


