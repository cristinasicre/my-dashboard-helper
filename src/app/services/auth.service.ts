import { Injectable } from '@angular/core';
import {
  getAuth,
  createUserWithEmailAndPassword,
  isSignInWithEmailLink,
  signInWithEmailLink,
  linkWithCredential,
  EmailAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  signOut,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = getAuth();

  constructor() {}

  login(email: string, password: string) {
    setPersistence(this.auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(this.auth, email, password);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        console.log('Sign-out successful');
      })
      .catch((error) => {
        alert(error);
      });
  }

  getCurrentUser() {
    return this.auth;
  }
}
