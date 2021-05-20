import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  async register(name, phone, address, email, password) {
    const userRole = ['user'];
    const timstamp = new Date();
    const newUser = await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        this.db.collection("profile").doc(cred.user.uid).set({
          email,
          phone,
          address,
          userRole,
          timstamp,
        });
        return cred;
      });
    return newUser.user.updateProfile({
      displayName: name,
    });
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }
  async logout() {
    await this.auth.signOut();
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }

  async createProfile(values) {
    const { email, phone, address, user } = values;
    console.log(user);
    console.log(email);
    // await this.db.collection("profile").doc(user.uid).set({
    //   email,
    //   phone,
    //   address,
    // });
  }
}

const firebase = new Firebase();
export default firebase;
