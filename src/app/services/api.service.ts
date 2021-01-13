import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = "https://newsapi.org/v2/";
  API_KEY: string = "2871131a0c474263abd6029bd6380e9d";
  newsList: Array<any>; //add new here
  constructor(public httpClient: HttpClient) { }

  //add new here
  setNewsList(list: Array<any>){ 
    this.newsList = list;
  }

  //add new here
  getNewsData(index: number){
    return this.newsList[index];
  }

  getNewsList() {
    let url: string = this.baseURL + "everything?q=bitcoin&from=2020-12-13&sortBy=publishedAt&apiKey=" + this.API_KEY;

    return new Promise((resolve, reject) => { 
      this.httpClient.get(url)
      .subscribe(res => {
        resolve(res);
      }, (err) => { reject(err) })
    });

  }

  postData(){
    let url: string = this.baseURL +'submitData';
    let body: any = {
      name: "Ali",
      email: "ali@gmail.com"
    };
    return new Promise((resolve, reject) => { 
      this.httpClient.post(url, body)
      .subscribe(res => {
        resolve(res);
      }, (err) => { reject(err) })
    });
  }
}
