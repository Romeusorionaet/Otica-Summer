import { CarouselAutoSlider } from '@/components/carrousel/carousel-auto-slider'
import { CarrouselGlasses } from '@/components/carrousel/carrousel-glasses'
import { Header } from '@/components/header'
import 'keen-slider/keen-slider.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Home() {
  return (
    <div>
      <Header />

      <main className="overflow-hidden">
        <section className="mx-auto flex min-h-[1000px] w-full max-w-[1680px] flex-col bg-gradient-to-t from-blue_1 via-blue_2 to-blue_1 max-md:items-center md:h-[24rem] md:flex-row md:gap-1 md:bg-gradient-to-r">
          <section className="h-[900px] min-w-[300px] pt-64">
            <h2 className="mb-10 text-center text-4xl font-bold md:ml-4 md:text-5xl">
              <span className="text-clVRef">Veja</span> o mundo com clareza e
              estilo
            </h2>

            <div className="h-full w-full rounded-lg bg-blue_1 bg-[url('/img/backgrounds/bg-square.png')] bg-center bg-no-repeat">
              <CarouselAutoSlider />
            </div>
          </section>

          <section className="flex h-[800px] w-full flex-col items-center justify-center rounded-b-lg bg-blue_1 p-4 md:pt-44">
            <CarrouselGlasses />
            <h2 className="mx-4 mt-10 text-center text-2xl font-bold md:text-3xl">
              <span className="text-clVRef">Olhos</span> no futuro:{' '}
              <span className="text-clVRef">visão</span> perfeita, estilo
              incomparável
            </h2>
          </section>
        </section>
      </main>
    </div>
  )
}
