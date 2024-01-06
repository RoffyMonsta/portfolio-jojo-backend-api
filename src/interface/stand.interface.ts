export interface IStand {
  id: string,
  name: string,
  alternateName?: string,
  japaneseName: string,
  image: string,
  standUser: string,
  chapter: string[],
  abilities: string[],
  battlecry?: string,
}