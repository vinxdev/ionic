export interface ApiResult {
    page: number;
    results: MovieResults[];
    total_pages:number;
    total_results:number;
}

export interface MovieResults{
    adult:boolean;
    backdrop_path:string;
    gener_ids:number[];
    id:number;
    original_language:string;
    original_title:string;
    overview:string;
    popularity:number;
    poster_path:string;
    release_date:string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
}
