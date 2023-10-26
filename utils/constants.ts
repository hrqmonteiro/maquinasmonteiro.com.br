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

export type partner = {
  name: string
  url: string
}

export const partners: partner[] = [
  {
    name: 'Ajoresp Tech',
    url: 'http://ajoresp.com.br/formulario-de-incricao/index.php/ajoresp-tech-junho-2023/'
  },
  {
    name: 'Feninjer Tech',
    url: 'https://feninjer.com.br'
  },
  {
    name: 'Feira do Empreendedor SEBRAE',
    url: 'https://feiradoempreendedor.sebraesp.com.br/'
  },
  {
    name: 'Tecnogold',
    url: 'https://www.facebook.com/tecnogold.oficial/'
  },
  {
    name: 'Polo Joalheiro',
    url: 'https://ajoresp.com.br'
  }
]
