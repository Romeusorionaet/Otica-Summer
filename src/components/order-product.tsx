'use client'

export function OrderProduct() {
  const fullUrlProduct =
    typeof window !== 'undefined' ? window.location.href : ''

  const splittedUrl = fullUrlProduct.split('/')
  const productName = splittedUrl[splittedUrl.length - 1]

  async function handleOrderProduct() {
    const numeroWhatsApp = '55084981127596'
    const message =
      `Olá, tenho interesse no item:\n` +
      `${productName}.\n` +
      `${fullUrlProduct}`

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      message,
    )}`

    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <button
      onClick={() => handleOrderProduct()}
      className="rounded-lg border border-black p-1"
    >
      Quero este
    </button>
  )
}
