import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotesService } from "../services/notes.service";
import { AuthService } from 'src/services/auth.service';
import { MessagingService } from 'src/services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  records: any = [];
  note: any = {};
  notes: any = [];
  message: any = {};

  constructor(private swUpdate: SwUpdate, public snackBar: MatSnackBar, public notesService: NotesService,
    public autservice: AuthService,
    public messagingservice: MessagingService) {
    this.notesService.getNotes().valueChanges().subscribe((fbnotes) => {
      this.notes = fbnotes;
    });
    
  }
  ngOnInit(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((v) => {
        if (confirm('Actualización disponible, deseas obtenerla?')) {
          window.location.reload();
        }
      });
    }
    this.messagingservice.getPermission();
    this.messagingservice.receiveMessage();
    this.message = this.messagingservice.currentmessage;
  }
  
  saveNote(): void {
    if (!this.note.id) {
      this.note.id = Date.now();
    }
    console.log(this.note);
    this.notesService.createNote(this.note).then(() => {
      this.note = {};
      this.openSnackBar('Nota Guardada con éxito', null);
    });
  }

  selectnote(note): void {
    this.note = note;
  }

  login(): void {
    this.autservice.loginWithGoogle();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}