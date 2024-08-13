import { ScrollLinkComponent } from './scroll-link-component'

export function Header() {
  return (
    <div className="fixed z-20 w-full bg-clRef_2">
      <header className="top-0 mx-auto flex w-full max-w-[1680px] items-center justify-between p-8">
        <div className="flex flex-col text-4xl font-bold">
          <span className="text-clVRef">Ótica</span>
          <span className="text-clRef_4">Summer</span>
        </div>

        <nav className="w-[500px] text-right">
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
