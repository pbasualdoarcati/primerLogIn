import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  usuario={
    email: '',
    password: ''
  }

  constructor (private authService:AuthService){

  }


  ingresar(){
    const {email, password} = this.usuario;
    this.authService.logIn(email, password).then(res => {
     console.log("Se registro: ", res);
    })
  }


  ingresarConGoogle(){
    const {email, password} = this.usuario;
    this.authService.logInWhitGoogle(email, password).then(res => {
     console.log("Se registro: ", res);
    })
  }


  logOut(){
    this.authService.logout();
  }

}
