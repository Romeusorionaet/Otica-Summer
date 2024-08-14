'use client'

import { InstagramLogo, PhoneCall, WhatsappLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="mt-20 p-8 md:rounded-md">
      <div className="flex justify-center gap-8 max-md:flex-col">
        <div className="flex flex-col gap-8">
          <p>Ótica Summer [data-da-ótica]. Todos os direitos reservados.</p>

          <div className="flex flex-col gap-2">
            <PhoneCall size={32} />
            <span>84 981127596</span>
            <span>fulanodetal@gmail.com</span>

            <div className="flex gap-4">
              <a
                href="https://wa.me/5584981127596?text=Ol%C3%A1,%20vim%20pelo%20site!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo size={32} />
              </a>

              <a
                href="https://www.instagram.com/romeusoaresdesouto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo size={32} />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-2">
          <p>CNPJ: 85.798.176/7801-45</p>
          <p>Rua Mestre José Alfredo, 75, Canguaretama - RN - Brasil</p>

          <p>
            Desenvolvido por{' '}
            <a
              href="https://romeu-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline"
            >
              Romeu soares Programador Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
