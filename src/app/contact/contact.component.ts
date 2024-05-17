import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public user: any = {
    name: '',
    email: ''
  }

  enviar(){
    console.log(this.user);
  }

}
