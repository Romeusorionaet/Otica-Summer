import { CarouselAutoSlider } from '@/components/carrousel/carousel-auto-slider'
import { Header } from '@/components/header'
import 'keen-slider/keen-slider.min.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { SquareWithSocialMedia } from './components/square-with-social-media'
import Link from 'next/link'

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

            <div className="relative h-full w-full bg-clRef_2">
              <CarouselAutoSlider />

              <SquareWithSocialMedia />
            </div>
          </section>

          <section className="relative flex h-screen w-full flex-col items-center justify-center bg-clRef_2 p-4 md:h-[980px] md:justify-evenly">
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

            <div className="absolute bottom-0 flex w-full justify-center p-4">
              <button className="relative z-10 rounded-lg border border-clRef_5 p-2 duration-700 hover:scale-105">
                Agende sua Consulta
              </button>
            </div>
          </section>
        </section>

        <section
          id="second-section"
          className="mx-auto mt-24 flex w-full max-w-[1680px] flex-col items-center justify-center gap-10 rounded-lg bg-clRef_5 p-4 md:mt-44 md:h-[500px] md:flex-row"
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

        <section
          id="third-section"
          className="mx-auto mt-10 w-full max-w-[1680px] md:mt-20"
        >
          <div className="relative mx-auto h-[50rem] w-full max-w-[800px] rounded-lg bg-[url('/img/backgrounds/shelving.png')] bg-cover bg-center bg-no-repeat">
            <h2 className="text-center text-xl font-bold md:text-3xl">
              <span className="text-clVRef">Olhos</span> no futuro:{' '}
              <span className="text-clVRef">visão</span> perfeita, estilo
              incomparável
            </h2>

            <div className="flex h-full w-full flex-col justify-center gap-20 pb-24">
              <div className="flex h-28 w-full items-center justify-center max-md:gap-4 md:px-16">
                <div className="h-40 w-full max-w-[350px]">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>

                <div className="h-40 w-full max-w-[350px]">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>

                <div className="h-40 w-full max-w-[350px]">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>
              </div>
              <div className="flex h-28 w-full items-center justify-center max-md:gap-4 md:px-16">
                <div className="h-40 w-full max-w-[350px]">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>

                <div className="h-40 w-full max-w-[350px]">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>

                <div className="h-40 w-full max-w-[350px]">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>
              </div>
              <div className="flex h-28 w-full items-center justify-center max-md:gap-4 md:px-16">
                <div className="h-40 w-full max-w-[350px]">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>

                <div className="h-40 w-full max-w-[350px]">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>

                <div className="h-40 w-full max-w-[350px]">
                  <Image
                    width={300}
                    height={300}
                    src="/img/glasses/glasses-1.png"
                    alt=""
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>
              </div>
            </div>

            <Link
              href="#"
              className="absolute bottom-10 right-10 rounded-lg border border-black p-2 duration-700 hover:scale-105"
            >
              Ver mais
            </Link>
          </div>
        </section>

        <section
          id="fourth-section"
          className="mx-auto mt-28 flex w-full max-w-[1680px] flex-col items-center justify-center gap-4 px-4 text-white md:flex-row"
        >
          <article>
            <h3>Nossa História</h3>

            <p>
              Desde [Ano de Fundação], a Ótica [Nome da Ótica] tem se dedicado a
              proporcionar uma experiência visual única para nossos clientes.
              Localizada no coração de [Cidade/Bairro], nossa ótica nasceu do
              desejo de combinar a mais alta tecnologia em lentes com as últimas
              tendências em armações.
            </p>
          </article>

          <article>
            <h3>Nossa Equipe</h3>

            <p>
              Com anos de experiência no mercado óptico, nossa equipe é composta
              por especialistas que entendem as suas necessidades. Desde o
              primeiro contato até a entrega dos seus óculos, estamos aqui para
              garantir que você tenha a melhor experiência possível.
            </p>
          </article>

          <article>
            <h3>Nossa Missão</h3>

            <p>
              Acreditamos que ver bem é essencial para viver bem. Por isso,
              nossa missão é oferecer soluções visuais personalizadas que
              alinham conforto, qualidade e estilo. Trabalhamos com as melhores
              marcas do mercado para garantir que você tenha sempre o que há de
              mais moderno e eficiente em óculos e lentes.
            </p>
          </article>
        </section>

        <section
          id="fifth-section"
          className="mx-auto mt-28 w-full max-w-[1680px] rounded-lg bg-clRef_1 px-4"
        >
          <div className="mx-auto h-80 w-[300px] bg-clRef_2 md:w-[400px]">
            <Image
              width={300}
              height={300}
              src="/img/decorations/glasses-decoration-1.png"
              alt=""
              className="h-full w-full rounded-lg object-contain"
            />
          </div>

          <section className="mt-10 flex flex-wrap items-center justify-center gap-10">
            <article>
              <h3>Exames de Vista</h3>

              <p>
                Realizamos exames de vista completos com profissionais
                experientes para garantir que sua visão esteja sempre nítida.
                Nosso equipamento de última geração nos permite diagnosticar e
                prescrever lentes corretivas personalizadas para suas
                necessidades.
              </p>

              <ul>
                <li>
                  Consulta de Primeira Visão: Indicado para quem nunca usou
                  óculos ou lentes de contato.
                </li>
                <li>
                  Exame de Rotina: Mantenha sua prescrição sempre atualizada com
                  exames regulares.
                </li>
                <li>
                  Exame Infantil: Cuidados especiais para a visão dos pequenos
                </li>
              </ul>
            </article>

            <article>
              <h3>Ajustes e Manutenção de Armações</h3>

              <p>
                Compre seu óculos conosco e tenha a certeza de que ele será
                ajustado ao seu rosto com perfeição. Oferecemos ajustes
                gratuitos para garantir conforto e durabilidade.
              </p>

              <ul>
                <li>
                  Ajuste de Lentes: Troque as lentes antigas por novas em sua
                  armação favorita.
                </li>
                <li>
                  Ajuste de Nariz e Hastes: Evite desconfortos com armações
                  apertadas ou folgadas.
                </li>
                <li>
                  Limpeza e Polimento: Deixe seus óculos sempre como novos com
                  nosso serviço de limpeza profissional.
                </li>
              </ul>
            </article>

            <article>
              <h3>Conserto de Óculos</h3>

              <p>
                Quebrou seus óculos? Não se preocupe! Oferecemos serviços
                rápidos de conserto para que você possa voltar a enxergar bem o
                mais rápido possível.
              </p>

              <ul>
                <li>
                  Troca de Hastes e Aros: Substituição de partes danificadas por
                  peças originais.
                </li>
                <li>
                  Reposição de Lentes: Troque lentes riscadas ou quebradas por
                  novas.
                </li>
                <li>
                  Ajuste de Parafusos e Componentes: Pequenos reparos para
                  prolongar a vida útil dos seus óculos.
                </li>
              </ul>
            </article>
          </section>
        </section>
      </main>
    </div>
  )
}
