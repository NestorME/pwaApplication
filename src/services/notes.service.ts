import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {
    constructor(public afDb: AngularFireDatabase){

    }

    public getNotes(){
        return this.afDb.list('/notes/')
    }

    public getNote(id){
        return this.afDb.object('/notes/'+ id);
    }

    public createNote(note){
        return this.afDb.database.ref('/notes/' + note.id).set(note);
    }

    public editNote(note) {
        return this.afDb.database.ref('/notes/' + note.id).set(note);
    }

    public deleteNote(id){
        return this.afDb.database.ref('/notes/' + id).remove();
    }
}