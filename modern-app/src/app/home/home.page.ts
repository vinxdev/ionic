import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, InfiniteScrollCustomEvent,IonList,IonItem ,IonAvatar,IonSkeletonText, IonAlert, IonLabel, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent} from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { catchError, finalize } from 'rxjs';
import { MovieResults } from '../services/interfaces';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonItem,IonAvatar,IonAlert,IonLabel,DatePipe,RouterModule,IonBadge,IonInfiniteScroll,IonInfiniteScrollContent,DecimalPipe],
})
export class HomePage {
  public currentPage:number = 1;
  public error = null;
  public isLoading:boolean = false;
  public movies:MovieResults[]=[];
  public imageBaseUrl = "https://image.tmdb.org/t/p";

  constructor(private movieService:MovieService) {
    this.loadMovies();
  };

  loadMovies(event?:InfiniteScrollCustomEvent){
    this.error = null;
    if (!event) {
        this.isLoading = true;
    };

    this.movieService.getTopRatedMovies(this.currentPage).pipe(
      finalize(()=>{
        this.isLoading = false;
        if(event){
          event.target.complete();
        }
      }),
        catchError((err:any)=>{
          console.log(err);
          this.error = err.error.status_message;
          return [];
        })
    )
    .subscribe({
      next:(res)=>{
        console.log(res.results);
        this.movies.push(...res.results);
        if(event){
          event.target.disabled = res.total_pages === this.currentPage;
        }
      },
    });  

  };

  loadMore(event: InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadMovies(event)
  }

}
