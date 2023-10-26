export type catalogItem = {
  name: string
  url: string
}

export const catalogItems: catalogItem[] = [
  {
    name: 'Bancadas',
    url: '/catalogo/bancadas'
  },
  {
    name: 'Bancadas Aspiradas',
    url: '/catalogo/bancadas-aspiradas'
  },
  {
    name: 'Bancadas Especiais',
    url: '/catalogo/bancadas-especiais'
  },
  {
    name: 'Politrizes',
    url: '/catalogo/politrizes'
  },
  {
    name: 'Equipamentos Diversos',
    url: '/catalogo/equipamentos-diversos'
  },
  {
    name: 'Prensas Hidráulicas',
    url: 'catalogo/prensas-hidraulicas'
  }
]

export function compareFn(a: catalogItem, b: catalogItem) {
  const nameA = a.name.toUpperCase()
  const nameB = b.name.toUpperCase()

  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
}
