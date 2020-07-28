importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': '886313261708'
});

const messaging = firebase.messaging();

// curl https://fcm.googleapis.com/fcm/send \
// -H "Content-Type: application/json" \
// -H "Authorization: key=AAAAzlxjGow:APA91bEkr6mI9KlI8Ga_R5eaUII89xkk8kskJ8CAxFLOUA3BkjCSRq32k11GwbpIzF78OLWzlKuMsdF3hFOFeGhYKfCbsnaC4sZ6hGgzEOp7U1xs-FgdlmUcJPhzDE_1xXIXy_TnGD51" \
// -d '{ "notification": { "title": "Nueva Feature!", "body": "Hay nuevas features","icon":"https://url-de-tu-icono", "click_action": "https://mi-aplication-ae3f7.firebaseapp.com/"}, "to" : "coID6qAIobvtPviTPDTnbQ:APA91bGLqIQLDgUwHcsMh0j4lJeZyWx-Rbldg6f4-TbILB4aMOwJfOmNnnn-tWe5QBP_nY3w9vnLW1juvpOgwRr-ABag4F0pwHpNjNNIIiitlkGW3iGIbkIuPtBgk91fE-9Ugzoxh-1e"
// }'