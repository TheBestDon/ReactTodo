import firebase from 'firebase';

try {
    var config = {
    apiKey: "AIzaSyCMur88dEGyD-RZmQGleARhcPQy63TdFvg",
    authDomain: "dons-todo-app.firebaseapp.com",
    databaseURL: "https://dons-todo-app.firebaseio.com",
    projectId: "dons-todo-app",
    storageBucket: "dons-todo-app.appspot.com",
    messagingSenderId: "267868683523"
  };
  firebase.initializeApp(config);

} catch (e) {

}

  export var firebaseRef = firebase.database().ref();
  export default firebase;