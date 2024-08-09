export function Header() {
  return (
    <div className="fixed z-10 w-full bg-blue-50">
      <header className="top-0 mx-auto flex w-full max-w-[1680px] items-center justify-between p-8">
        <div className="flex flex-col text-4xl font-bold">
          <span className="text-orange-300">Ótica</span>
          <span className="text-blue-800">Summer</span>
        </div>

        <nav className="w-[500px]text-right">
          <ul className="flex flex-col justify-between gap-2 md:flex-row md:gap-8">
            <li>Início</li>
            <li>Sobre</li>
            <li>Óculos</li>
            <li>Estilos</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
