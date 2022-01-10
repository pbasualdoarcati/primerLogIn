import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUserLogged: any;

  constructor(private afauth:AngularFireAuth) { }




// Ingreso con Email y Contraseña

  async logIn(email:string, password:string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch(err){
      console.log (`Error en el login: `, err);
      return null;
    }
  }


//Ingreso con cuenta en Google

 async logInWhitGoogle(email:string, password:string){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch(err){
      console.log (`Error en el login con Google: `, err);
      return null;
    }
  }


// Registración

  async register(email:string, password:string){
    try{
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch(err){
      console.log (`Error en el login: `, err);
      return null;
    }
  }

  // Para cerrar sesión

  logout(){
    this.afauth.signOut();
  }

}
