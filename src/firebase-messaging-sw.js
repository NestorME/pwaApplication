importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyCm-k09D2slE9eiqW-KqmCZI0nHHFJb4OA",
    authDomain: "mi-aplication-ae3f7.firebaseapp.com",
    databaseURL: "https://mi-aplication-ae3f7.firebaseio.com",
    projectId: "mi-aplication-ae3f7",
    storageBucket: "mi-aplication-ae3f7.appspot.com",
    messagingSenderId: "886313261708",
    appId: "1:886313261708:web:1b9919464f124156b879a9"
});
const messaging = firebase.messaging();

//    curl https://fcm.googleapis.com/fcm/send \
//    -H "Content-Type: application/json" \
//    -H "Authorization: key=AAAAzlxjGow:APA91bEkr6mI9KlI8Ga_R5eaUII89xkk8kskJ8CAxFLOUA3BkjCSRq32k11GwbpIzF78OLWzlKuMsdF3hFOFeGhYKfCbsnaC4sZ6hGgzEOp7U1xs-FgdlmUcJPhzDE_1xXIXy_TnGD51" \
//  -d '{ "notification": { "title": "Nueva Feature!", "body": "Hay nuevas features","icon":"https://url-de-tu-icono", "click_action": "https://mi-aplication-ae3f7.web.app/"}, "to" : "e-moBLEgQtdv98ZVp5uh_D:APA91bGgEaUOMC2QIcYHx2yDLgy8IkvGivaq9STA0SsRDBJZCwlS6-HYgunPpYOQFkhAsoKkeZGrTqWlt35C7BiaiNyK0znzoYOTldc8CBTKWVerPuojb2nVM11fFXnAtmxBpJk65VQg"
//    }'