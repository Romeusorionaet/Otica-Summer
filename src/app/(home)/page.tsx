import { CarrouselGlasses } from '@/components/carrousel/carrousel-glasses'
import { Header } from '@/components/header'
import 'keen-slider/keen-slider.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="overflow-hidden">
        <section className="mx-auto flex min-h-[1000px] w-full max-w-[1680px] flex-col bg-gradient-to-t from-white via-zinc-300 to-white max-md:items-center md:h-[24rem] md:flex-row md:gap-4 md:bg-gradient-to-r">
          <div className="h-[900px] min-w-[300px] pt-64">
            <h1 className="mb-4 text-center text-4xl font-bold md:ml-4 md:text-5xl">
              Veja o mundo com clareza e estilo
            </h1>

            <div className="h-full w-full rounded-lg bg-blue-50" />
          </div>

          <div className="flex h-[650px] w-full justify-center gap-8 rounded-b-lg bg-blue-50 pt-72">
            <CarrouselGlasses />
          </div>
        </section>
      </main>
    </div>
  )
}
