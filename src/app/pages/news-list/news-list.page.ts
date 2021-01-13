import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
  public newsList: Array<any>;
  public headLine: any;
  public searchText: string;
  public newsTemp: Array<any>;
  constructor(public apiService: ApiService) { 
    this.newsList = [];
    this.headLine = null;
    this.searchText = null;
  }

  ngOnInit() {
    //this function will trigger after all components are loaded
    this.getNews();
  }

  async getNews(){
    let response: any = await this.apiService.getNewsList();
    if(response.status == "ok") {
      this.newsList = response.articles;
      this.newsTemp = this.newsList;
      this.headLine = this.newsList.shift();
      this.setNewsList();  // add here
    }
  }

  initiateData(){
    this.newsList = this.newsTemp;
    this.setNewsList(); // add here
  }

  // add function here
  setNewsList(){
    this.apiService.setNewsList(this.newsList);
  }

  onSearch(){
    this.initiateData();
    let newsData: Array<any> = this.newsList;
    if(this.searchText && this.searchText.trim() != ""){
      this.newsList = newsData.filter((item: any) => {
        return (item.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
      });
      this.setNewsList(); // add here
    } else {
      this.initiateData();
    }
  }

  ionViewDidLeave(){
    //this function will trigger if user exits the page
  }

}
