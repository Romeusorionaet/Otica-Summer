'use client'

interface Props {
  id: string
}

export function OrderProduct({ id }: Props) {
  const fullUrlProduct = `${process.env.NEXT_PUBLIC_SITE_URL}/catalog?q=${id}`

  async function handleOrderProduct() {
    const numeroWhatsApp = '55084991264571'
    const message = `Olá, tenho interesse no item:\n${fullUrlProduct}`

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      message,
    )}`

    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <button
      type="button"
      onClick={() => handleOrderProduct()}
      className="rounded-lg border border-black p-1"
    >
      Quero este
    </button>
  )
}
