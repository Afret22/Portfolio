import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBJ-pWhAkcgHL90RCiSK0Jp2y_dFTcB1uk",
    authDomain: "portfolio-d2a52.firebaseapp.com",
    databaseURL: "https://portfolio-d2a52.firebaseio.com",
    projectId: "portfolio-d2a52",
    storageBucket: "portfolio-d2a52.appspot.com",
    messagingSenderId: "698968897436",
    appId: "1:698968897436:web:c63947af526035ca223a59",
    measurementId: "G-K6EL98L9X9"
  };

  class Firebase {
    constructor() {
      if(!firebase.apps.length){
        app.initializeApp(config);
      }
      this.auth = app.auth();
      this.db = app.firestore();
    //   this.Persistence = app.auth.Auth.Persistence;
    }
    async createMsg(data){

        const currentdate = new Date();
        let datetime =
        (currentdate.getDate()) +"_"+
        
        // (currentdate.getMonth() + 1) +""+
        
        // currentdate.getFullYear() +""+
        
        + currentdate.getHours() +":"+
        
        currentdate.getMinutes()+":"+
        currentdate.getSeconds();
        await this.db
      .collection("Messages").doc(`Message(${datetime})`).set(data)

    }
}

export default new Firebase();