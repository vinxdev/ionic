import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonThumbnail,
  IonIcon,
  IonRow,
  IonCol,
  IonLabel,
  IonText,
  IonSearchbar,
  IonicSlides, IonList, IonListHeader } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { appsOutline, options } from 'ionicons/icons';
import { JobComponent } from '../componenets/job/job.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonListHeader, IonList, 
    IonSearchbar,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonThumbnail,
    IonRow,
    IonCol,
    IonLabel,
    IonText,
    JobComponent,
  ],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  popular: any[] = [];
  recent: any[] = [];

  constructor() {
    addIcons({ appsOutline, options });
  }

  ngOnInit() {
    this.popular = [
      {
        id: 1,
        company: 'Technyks Llc',
        location: 'New Delhi',
        expires_on: '30/11/12',
        post: 'Senior Ux Designer',
        type: 'Full Time',
        salary: '₹12 - 15LPA',
      },
      {
        id: 2,
        company: 'Innovatech Solutions',
        location: 'Bengaluru',
        expires_on: '15/12/12',
        post: 'Software Engineer',
        type: 'Full Time',
        salary: '₹10 - 13LPA',
      },
      {
        id: 3,
        company: 'DataDynamo Inc.',
        location: 'Mumbai',
        expires_on: '20/12/12',
        post: 'Data Scientist',
        type: 'Full Time',
        salary: '₹14 - 17LPA',
      },
      {
        id: 4,
        company: 'WebWorks Pvt Ltd',
        location: 'Hyderabad',
        expires_on: '25/12/12',
        post: 'Frontend Developer',
        type: 'Full Time',
        salary: '₹8 - 11LPA',
      },
      {
        id: 5,
        company: 'CloudConnect Services',
        location: 'Chennai',
        expires_on: '30/12/12',
        post: 'DevOps Engineer',
        type: 'Full Time',
        salary: '₹13 - 16LPA',
      },
      {
        id: 6,
        company: 'MobileMasters Llc',
        location: 'Pune',
        expires_on: '05/01/13',
        post: 'Mobile App Developer',
        type: 'Full Time',
        salary: '₹9 - 12LPA',
      },
      {
        id: 7,
        company: 'SecureSolutions Inc.',
        location: 'Gurgaon',
        expires_on: '10/01/13',
        post: 'Cybersecurity Analyst',
        type: 'Full Time',
        salary: '₹15 - 18LPA',
      },
      {
        id: 8,
        company: 'AIAdvance Llc',
        location: 'Kolkata',
        expires_on: '15/01/13',
        post: 'AI Engineer',
        type: 'Full Time',
        salary: '₹16 - 19LPA',
      },
      {
        id: 9,
        company: 'NetworkNinjas Inc.',
        location: 'Ahmedabad',
        expires_on: '20/01/13',
        post: 'Network Engineer',
        type: 'Full Time',
        salary: '₹11 - 14LPA',
      },
      {
        id: 10,
        company: 'DigitalDreams Pvt Ltd',
        location: 'Jaipur',
        expires_on: '25/01/13',
        post: 'Digital Marketing Specialist',
        type: 'Full Time',
        salary: '₹7 - 10LPA',
      },
    ];

    this.recent = [
      {
        id: 11,
        company: 'QualityQuests Llc',
        location: 'Chandigarh',
        expires_on: '30/01/13',
        post: 'QA Engineer',
        type: 'Full Time',
        salary: '₹9 - 12LPA',
      },
      {
        id: 12,
        company: 'HRHeroes Inc.',
        location: 'Lucknow',
        expires_on: '05/02/13',
        post: 'HR Manager',
        type: 'Full Time',
        salary: '₹12 - 15LPA',
      },
      {
        id: 13,
        company: 'FinanceFusion Pvt Ltd',
        location: 'Bhopal',
        expires_on: '10/02/13',
        post: 'Financial Analyst',
        type: 'Full Time',
        salary: '₹10 - 13LPA',
      },
      {
        id: 14,
        company: 'ContentCreators Llc',
        location: 'Indore',
        expires_on: '15/02/13',
        post: 'Content Writer',
        type: 'Full Time',
        salary: '₹6 - 9LPA',
      },
      {
        id: 15,
        company: 'SalesSolutions Inc.',
        location: 'Surat',
        expires_on: '20/02/13',
        post: 'Sales Manager',
        type: 'Full Time',
        salary: '₹13 - 16LPA',
      },
      {
        id: 16,
        company: 'ProjectPioneers Pvt Ltd',
        location: 'Patna',
        expires_on: '25/02/13',
        post: 'Project Manager',
        type: 'Full Time',
        salary: '₹14 - 17LPA',
      },
      {
        id: 17,
        company: 'SupportSquad Llc',
        location: 'Nagpur',
        expires_on: '01/03/13',
        post: 'Customer Support Specialist',
        type: 'Full Time',
        salary: '₹7 - 10LPA',
      },
      {
        id: 18,
        company: 'DesignDynamos Inc.',
        location: 'Vadodara',
        expires_on: '05/03/13',
        post: 'Graphic Designer',
        type: 'Full Time',
        salary: '₹8 - 11LPA',
      },
      {
        id: 19,
        company: 'OpsOptimizers Pvt Ltd',
        location: 'Coimbatore',
        expires_on: '10/03/13',
        post: 'Operations Manager',
        type: 'Full Time',
        salary: '₹12 - 15LPA',
      },
      {
        id: 20,
        company: 'TechTitans Llc',
        location: 'Visakhapatnam',
        expires_on: '15/03/13',
        post: 'Technical Lead',
        type: 'Full Time',
        salary: '₹15 - 18LPA',
      },
      {
        id: 21,
        company: 'Innovatech Solutions',
        location: 'Kochi',
        expires_on: '20/03/13',
        post: 'Product Manager',
        type: 'Full Time',
        salary: '₹14 - 17LPA',
      },
    ];


  }
}
