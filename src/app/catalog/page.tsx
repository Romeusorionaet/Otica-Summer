import { HeaderCatalog } from '@/components/header-catalog'
import { Main } from './components/main'
import { Suspense } from 'react'

export default function Catalog() {
  return (
    <div className="relative">
      <HeaderCatalog />

      <Suspense fallback={<p className="pt-44 text-center">Carregando...</p>}>
        <Main />
      </Suspense>
    </div>
  )
}
