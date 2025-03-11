import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { bookmark } from 'ionicons/icons';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  standalone: true,
  imports: [IonicModule] 
})
export class JobComponent implements OnInit {

  @Input() job: any;

  constructor() { 
    addIcons({bookmark});
  }
  
  ngOnInit() {}

}
