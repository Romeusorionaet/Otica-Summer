import { ShareNetwork, X } from 'phosphor-react'
import Image from 'next/image'
import { useState } from 'react'
import { GlassesProps } from './main'
import { OrderProduct } from '@/components/order-product'
import { useRouter } from 'next/navigation'
import glasses from '@/lib/glasses.json'
import { Metadata } from 'next'

interface Props {
  showDetails: boolean
  setShowDetails: (value: boolean) => void
  selectedGlasses: GlassesProps
}

interface Props {
  params: {
    q: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = glasses.find((item) => item.id === params.q)

  if (!result) {
    return {
      title: 'Produto não encontrado',
      description: 'O produto que você está procurando não foi encontrado.',
      openGraph: {
        description: 'O produto que você está procurando não foi encontrado.',
        images: ['https://i.postimg.cc/pdXfCf26/logo.png'],
        locale: 'pt-br',
        type: 'website',
      },
    }
  }

  const product: GlassesProps = result

  return {
    title: product.type,
    description: product.description,
    openGraph: {
      description: product.description,
      images: [
        {
          url: product.img || '',
          width: 900,
          height: 900,
        },
      ],
      locale: 'pt-br',
      type: 'website',
    },
  }
}

export function ModalDetails({
  showDetails,
  setShowDetails,
  selectedGlasses,
}: Props) {
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [isZoomVisible, setIsZoomVisible] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget
    const { left, top, width, height } = target.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPosition({ x, y })
  }

  const router = useRouter()

  const handleCloseModal = () => {
    setShowDetails(false)

    router.push('/catalog')
  }

  const handleShareProduct = async (id: string) => {
    const fullUrlProduct = `${process.env.NEXT_PUBLIC_SITE_URL}/catalog?q=${id}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Confira este produto!',
          text: `Veja este produto incrível: ${selectedGlasses.type}`,
          url: fullUrlProduct,
        })
      } catch (error) {
        console.error('Erro ao compartilhar o produto:', error)
      }
    } else {
      copyLinkToClipboard(fullUrlProduct)
    }
  }

  const copyLinkToClipboard = (url: string) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert('Link copiado para a área de transferência!')
      })
      .catch((error) => {
        console.error('Falha ao copiar o link:', error)
        alert('Não foi possível copiar o link. Tente novamente.')
      })
  }

  return (
    <section
      data-value={showDetails}
      className="fixed left-1/2 top-1/2 z-20 hidden w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-clRef_2 p-2 data-[value=true]:block md:w-[600px]"
    >
      <button
        autoFocus
        onClick={() => handleCloseModal()}
        className="absolute right-2 top-2 z-10 md:right-4 md:top-4"
      >
        <X size={28} />
      </button>

      <div className="relative flex w-full items-center justify-center gap-2">
        <div
          className="relative h-full w-1/2"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsZoomVisible(true)}
          onMouseLeave={() => setIsZoomVisible(false)}
        >
          <Image
            width={300}
            height={300}
            src={selectedGlasses.img}
            alt={selectedGlasses.description}
            className="h-full w-full rounded-lg"
          />
          {isZoomVisible && (
            <div
              className="absolute -top-[410px] left-44 z-10 h-64 w-64 rounded-lg border border-gray-400 bg-cover bg-no-repeat md:-top-32 md:left-[450px]"
              style={{
                backgroundImage: `url(${selectedGlasses.img})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundSize: '200%',
                transform: `translate(-50%, 60%)`,
              }}
            />
          )}
        </div>

        <article className="w-1/2 space-y-4">
          <header>
            <h3 className="font-bold">{selectedGlasses.type}</h3>
          </header>

          <div className="min-h-[200px] md:h-56">
            <p className="text-sm md:text-base">
              {selectedGlasses.description}
            </p>
          </div>

          <footer className="mt-4 flex items-center justify-start gap-4 text-sm">
            <OrderProduct id={selectedGlasses.id} />
          </footer>
        </article>
      </div>

      <button
        onClick={() => handleShareProduct(selectedGlasses.id)}
        className="absolute bottom-4 text-blue-500 max-md:left-4 md:bottom-4 md:right-4"
      >
        <ShareNetwork size={28} />
      </button>
    </section>
  )
}
