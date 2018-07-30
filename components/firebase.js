import * as firebase from "firebase";

const config = {
      apiKey: "AIzaSyCSOdMPsmijyKurThkueks7L-P97EEXMv4",
      authDomain: "bookapp-19925.firebaseapp.com",
      databaseURL: "https://bookapp-19925.firebaseio.com",
      projectId: "bookapp-19925",
      storageBucket: "bookapp-19925.appspot.com",
      messagingSenderId: "994516693004"
  };
firebase.initializeApp(config);

export default class Firebase{

    static auth;

    static init(){

        firebase.initializeApp(config);
        Firebase.auth = firebase.auth();

    }

}