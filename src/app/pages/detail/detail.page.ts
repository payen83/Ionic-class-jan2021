import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public id: any;
  public articles: any;
  constructor(public activatedRoute: ActivatedRoute, public apiService: ApiService) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('current id ==> ' + this.id);
  }

  ngOnInit() {
    this.articles = this.apiService.getNewsData(this.id);
    console.log(this.articles);
  }

}
