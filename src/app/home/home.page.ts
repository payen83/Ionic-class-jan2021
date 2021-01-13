import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public person_name: string = "Ah Keong";
  public multiplePerson: Array<any>;
  constructor(public alertController: AlertController, public router: Router) {

    this.multiplePerson = [
      { name: "Abu", age: 23, gender: "male" },
      { name: "Jenny", age: 35, gender: "female" },
      { name: "Tan Wai Kit", age: 18, gender: "male" },
    ];

  }
 
  btnClick() {
    this.person_name = "Rashid Ahmad";
    
    for(let person = 0; person < this.multiplePerson.length; person++){
      console.log(this.multiplePerson[person].name + ' age is ' + this.multiplePerson[person].age);

      if(this.multiplePerson[person].gender == "female"){
        console.log(this.multiplePerson[person].name + '\'s gender is female');
      }

    }
    
    // console.log(multiplePerson[2]);
    //console.log(multiplePerson[2].name + ' age is ' + multiplePerson[2].age);

    // let message_: string = multiplePerson[2].name + ' age is ' + multiplePerson[2].age;
    // console.log(message_);
    // this.presentAlert(message_);
    
    // let name: any = "Ali";
    // let name2: string = "Osman";

    // let multipleName: Array<string> = ["Kenny", "Muthu", "Wan"];
    // console.log('My name is ' + multipleName[1]);


    // let isMale: boolean = true; // or false
    // isMale = false;

    // if (name == "Ali"){
    //   let age: number = 10;
    //   console.log('Age user is ' + age);
    // }
    // this.presentAlert();
  }

  async presentAlert(message_: string){
    const alert = await this.alertController.create({
      header: 'Notification',
      message: message_,
      buttons: ['OK']
    });
    await alert.present();
  }

  profilePage(){
    //process data, do some functions
    this.router.navigateByUrl('/profile');
  }

}
