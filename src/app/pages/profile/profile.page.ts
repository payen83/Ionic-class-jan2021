import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public person: any;
  public showCard: boolean;
  public user: any;
  constructor() { 
    this.showCard = false;
    this.person = { 
      name: null, 
      gender: null,
      image_url: null,
      birth_date: null
    }  }

  submit(){
    this.showCard = true;
    console.log(this.person);
    this.user = this.person;
    this.clearForm();
  }

  clearForm(){
    this.person = { 
      name: null, 
      gender: null,
      image_url: null,
      birth_date: null
    }
  }

  reset(){
    this.showCard = false;
    this.person = { 
      name: null, 
      gender: null,
      image_url: null,
      birth_date: null
    }
  }

  getAge(){
    // age = current year - birth year
    
    //1. Get current year
    let current_date = new Date();
    let current_year = current_date.getFullYear();
    
    //2. Get birth year
    let birth_date = new Date(this.person.birth_date);
    let birth_year = birth_date.getFullYear();

    //3. Calculate age
    let age = current_year - birth_year;

    //4. Return age to function
    return age;
  }

  ngOnInit() {
  }

}
