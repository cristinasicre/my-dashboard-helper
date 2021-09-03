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
import { getDatabase, ref, set } from 'firebase/database';
import { Bookmark } from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = getAuth();
  db = getDatabase();

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
      .then(() => {})
      .catch((error) => {
        alert(error);
      });
  }

  async getCurrentUser() {
    return this.auth;
  }

  addBookmark(data: Bookmark, uid: string) {
    const name = data.name;
    const url = data.url;
    set(ref(this.db, uid + '/bookmarks'), [{ name: url }]);
  }
}
