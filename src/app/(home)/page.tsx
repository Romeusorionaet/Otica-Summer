import { CarouselAutoSlider } from '@/components/carrousel/carousel-auto-slider'
import { CarrouselGlasses } from '@/components/carrousel/carrousel-glasses'
import { Header } from '@/components/header'
import 'keen-slider/keen-slider.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { SocialMidia } from './components/social-midia'

export default function Home() {
  return (
    <div>
      <Header />

      <main className="overflow-hidden">
        <section
          id="first-section"
          className="mx-auto flex min-h-[1000px] w-full max-w-[1680px] flex-col bg-clRef_1 max-md:items-center md:h-[970px] md:flex-row md:gap-4 md:bg-gradient-to-r"
        >
          <section className="h-[900px] min-w-[300px] pt-64">
            <h2 className="mb-10 text-center text-4xl font-bold md:ml-4 md:text-5xl">
              <span className="text-clVRef">Veja</span> o mundo com clareza e
              estilo
            </h2>

            <div className="h-full w-full bg-clRef_2 bg-[url('/img/backgrounds/bg-square.png')] bg-center bg-no-repeat">
              <CarouselAutoSlider />
            </div>
          </section>

          <section className="flex h-screen w-full flex-col items-center justify-center bg-clRef_2 p-4 md:h-[980px] md:justify-evenly">
            <section className="gallery md:mt-28">
              <div className="gallery-item flex flex-col bg-blue-500">
                <div className="h-full w-full">
                  <Image
                    width={300}
                    height={300}
                    src="/img/people-models/model-3.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="gallery-item">
                <Image
                  width={300}
                  height={300}
                  src="/img/people-models/model-6.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="gallery-item">
                <Image
                  width={300}
                  height={300}
                  src="/img/glasses/glasses-2.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="gallery-item flex gap-6">
                <div className="h-full w-full">
                  <Image
                    width={300}
                    height={300}
                    src="/img/people-models/model-1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-full w-full">
                  <Image
                    width={300}
                    height={300}
                    src="/img/people-models/model-5.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-full w-full">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </section>
          </section>
        </section>

        <section
          id="second-section"
          className="mx-auto -mt-24 flex w-full max-w-[1680px] flex-col items-center justify-center gap-10 rounded-lg bg-clRef_5 p-4 md:mt-44 md:h-[500px] md:flex-row"
        >
          <div className="h-full w-96">
            <Image
              width={300}
              height={300}
              src="/img/people-models/woman-2.png"
              alt=""
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="w-full space-y-4 text-center text-clRef_1 md:w-1/2 md:text-xl">
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

        <section className="mx-auto mt-28 w-full max-w-[1680px]">
          <CarrouselGlasses />

          <div className="flex flex-col items-center justify-center gap-8">
            <h2 className="mt-10 text-center text-xl font-bold md:text-3xl">
              <span className="text-clVRef">Olhos</span> no futuro:{' '}
              <span className="text-clVRef">visão</span> perfeita, estilo
              incomparável
            </h2>

            <SocialMidia />
          </div>
        </section>
      </main>
    </div>
  )
}
