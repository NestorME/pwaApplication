import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';
import '@firebase/messaging';

import { BehaviorSubject } from 'rxjs'
import { take } from 'rxjs/operators';

@Injectable()
export class MessagingService {

    messaging = firebase.messaging();
    currentmessage = new BehaviorSubject(null);

    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth){
    
    }

    private updateToken(token){
        this.afAuth.authState.pipe(take(1)).subscribe(user =>{
            if (!user) return;

            const data = {[user.uid]: token};
            this.db.object('fcmTokens/').update(data);
        });
    }

    getPermission(){
        this.messaging.requestPermission().then(()=>{
            console.log('notification permistion ');
            return this.messaging.getToken();
            
        }).then(token => {
            console.log(token);
            this.updateToken(token);
        }).catch((err) =>{
            console.log('unable to get permission', err);
        });
    }

    receiveMessage(){
        this.messaging.onMessage((payload) =>{
            console.log("Message Received", payload);
            this.currentmessage.next(payload);
        });
    }
}