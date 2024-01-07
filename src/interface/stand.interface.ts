export interface IStand {
  id: string,
  name: string,
  alternateName?: string,
  japaneseName: string,
  image: string,
  characterId: string,
  chapter: string[],
  abilities: string[],
  battlecry?: string,
}