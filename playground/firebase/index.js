import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCMur88dEGyD-RZmQGleARhcPQy63TdFvg",
    authDomain: "dons-todo-app.firebaseapp.com",
    databaseURL: "https://dons-todo-app.firebaseio.com",
    projectId: "dons-todo-app",
    storageBucket: "dons-todo-app.appspot.com",
    messagingSenderId: "267868683523"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
      app: {
          name: 'My App',
          version: '1.0'
      },
      isRunning: true,
      user: {
          name: 'Donatas',
          age: 37
      }
  });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('todo_added', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Walk the dog!'});
todosRef.push({text: 'Drink the water'});

