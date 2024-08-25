import { ScrollLinkComponent } from './scroll-link-component'
import Image from 'next/image'

export function Header() {
  return (
    <div className="fixed z-20 w-full border-b border-clVRef/20 bg-clRef_2">
      <header className="top-0 mx-auto flex w-full max-w-[1680px] items-center justify-between p-8">
        <div className="h-32 w-full md:w-44">
          <Image
            width={300}
            height={300}
            src="/img/logo.png"
            alt=""
            className="h-full w-full rounded-lg"
          />
        </div>

        <nav className="text-right md:w-[500px]">
          <ul className="flex flex-col justify-between gap-2 md:flex-row md:gap-8">
            <li>
              <ScrollLinkComponent
                to="first-section"
                offset={0}
                title="Início"
              />
            </li>
            <li>
              <ScrollLinkComponent
                to="third-section"
                offset={-220}
                title="Óculos"
              />
            </li>
            <li>
              <ScrollLinkComponent
                to="fourth-section"
                offset={-220}
                title="Sobre"
              />
            </li>
            <li>
              <ScrollLinkComponent
                to="fifth-section"
                offset={-220}
                title="Serviços"
              />
            </li>
            <li>
              <ScrollLinkComponent
                to="sixth-section"
                offset={-220}
                title="Localização"
              />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
