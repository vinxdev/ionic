import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonText,IonLabel,IonButton,IonBackButton,IonItem, IonButtons, IonCard, IonBadge, IonChip } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { MovieResults } from '../services/interfaces';
import { addIcons } from 'ionicons';
import { cashOutline,calendarOutline} from'ionicons/icons';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonChip,IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon,CurrencyPipe,DatePipe,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonText,IonLabel,IonButtons,IonBackButton,IonItem]
})
export class DetailsPage implements OnInit {
  public imageBaseUrl = "https://image.tmdb.org/t/p";
  public movie: WritableSignal<MovieResults | null> = signal(null)
  public movieId :string = "";

  constructor(private movieService:MovieService,private route: ActivatedRoute) { 
    addIcons({cashOutline,calendarOutline});
  }
  
  ngOnInit() {
    this.route.params.subscribe(para=>{
      this.movieId = para['id'];
      console.log("movieId",this.movieId);
      this.fetchmoviedetails(this.movieId)
    })
  }

  fetchmoviedetails(movieId:string){
    this.movieService.getMovieDetails(movieId).subscribe(
      (movie) => {
        console.log("fetched movie",movie);
        this.movie.set(movie);
      },(error)=>{
        console.log(error);
    })
  }

}
