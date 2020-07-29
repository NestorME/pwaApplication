import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { FormsModule } from '@angular/forms';
import { NotesService } from 'src/services/notes.service';
import { AuthService } from 'src/services/auth.service';
import { MessagingService } from 'src/services/messaging.service';
import { AngularFireMessagingModule } from '@angular/fire/messaging';


const firebaqseConfig:any = {
  apiKey: "AIzaSyCm-k09D2slE9eiqW-KqmCZI0nHHFJb4OA",
  authDomain: "mi-aplication-ae3f7.firebaseapp.com",
  databaseURL: "https://mi-aplication-ae3f7.firebaseio.com",
  projectId: "mi-aplication-ae3f7",
  storageBucket: "mi-aplication-ae3f7.appspot.com",
  messagingSenderId: "886313261708",
  appId: "1:886313261708:web:1b9919464f124156b879a9"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(firebaqseConfig), 
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireMessagingModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule

    
  ],
  providers: [
    NotesService,
    AuthService, 
    MessagingService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
