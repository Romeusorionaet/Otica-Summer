import { CarouselAutoSlider } from '@/components/carrousel/carousel-auto-slider'
import { CarrouselGlasses } from '@/components/carrousel/carrousel-glasses'
import { Header } from '@/components/header'
import 'keen-slider/keen-slider.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />

      <main className="overflow-hidden">
        <section
          id="first-section"
          className="mx-auto flex min-h-[1000px] w-full max-w-[1680px] flex-col bg-gradient-to-t from-blue_1 via-blue_2 to-blue_1 max-md:items-center md:h-[24rem] md:flex-row md:gap-1 md:bg-gradient-to-r"
        >
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

        <section
          id="second-section"
          className="mx-auto -mt-24 flex w-full max-w-[1680px] flex-col items-center justify-center gap-10 rounded-lg bg-slate-800 p-4 md:mt-44 md:h-[500px] md:flex-row"
        >
          <div className="h-full w-96">
            <Image
              width={300}
              height={300}
              src="/img/people-models/woman-2.png"
              alt=""
              className="h-full w-full rounded-lg object-fill"
            />
          </div>
          <div className="w-full space-y-4 text-center text-blue_1 md:w-1/2 md:text-xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Sua <span className="text-clVRef">Visão</span> com Estilo
            </h2>

            <p>
              Descontos Exclusivos de até 50% em lentes e armações de alta
              qualidade.
            </p>

            <p>
              Ajudamos você a encontrar o par de óculos perfeito para realçar
              sua personalidade.
            </p>

            <p>
              Não é apenas uma ótica! É um compromisso com o seu conforto visual
              e bem-estar.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
