export interface ApiResult {
    page: number;
    results: MovieResults[];
    total_pages:number;
    total_results:number;
}

export interface MovieResults{
    adult:boolean;
    backdrop_path:string;
    belongs_to_collection?:any;
    budget:number;
    gener_ids:number[];
    genres:Gener[];
    homepage:string;
    id:number;
    imdb_id:string;
    original_language:string;
    original_title:string;
    production_companies: Productioncompany[];
    production_countres: Productioncountry[];
    revenue:number;
    runtime:number;
    spoken_language: SpokenLanguage[];
    overview:string;
    popularity:number;
    poster_path:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
    tagline:string;
    status:string;
}



interface Gener {
    id:number,
    name:string,
}

interface Productioncompany{
    id:number,
    name:string,
}

interface Productioncountry{
    id:number,
    name:string,
}

interface SpokenLanguage{
    id:number,
    name:string,
}