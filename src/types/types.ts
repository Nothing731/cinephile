export interface MovieAndTv {
    media_type: any
    status: ReactNode
    original_title: ReactNode
    released: ReactNode
    revenue: ReactNode
    budget: ReactNode
    runtime: number
    genres: any
    id: number
    title: string
    overview: string
    backdrop_path: string
    poster_path: string
    name: string
    release_date: string
    first_air_date: string
}

export interface UpcomingState {
    upcoming: [] | MovieAndTv[]
    fetchUpcoming: () => Promise<void>
}
export interface TopState {
    top: [] | MovieAndTv[]
    fetchTop: () => Promise<void>
}
export interface PopularState {
   popularMovies: [] | MovieAndTv[]
   popularTvs: [] | MovieAndTv[]
   fetchPopular: (type:string, page?:number) => Promise<void>
}

export interface SearchState {
    search: [] | MovieAndTv[]
    fetchSearch: (query:string) => Promise<void>
}
export interface CurrentState {
    current: null | MovieAndTv | any
    fetchCurrent: (type:string, id:string) => Promise<void>
}
export interface TrailerState {
    trailer: string
    fetchTrailer: (type:string, id:string) => Promise<void>
}