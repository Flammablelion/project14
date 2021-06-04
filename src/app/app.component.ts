import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MyCards } from './shared/interfaces/cards.interface';
import { NoteHTTPDbService } from './shared/services/note-http-db.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private noteHTTPDbService :NoteHTTPDbService){

  }

  title = 'project14';
  card: MyCards[] = [];


  async onAddNote(note: MyCards){    
    try{
      await this.noteHTTPDbService.postNotes(note);
      
    }catch(err){
      console.error(err);
    }
    this.getData();
  }

  async onDeleteCard(index:number) {
    try{
      await this.noteHTTPDbService.deleteNotes(this.card[index].id);
      
    }catch(err){
      console.error(err);
    }
    this.getData();
  }

  async onSetEdit(note: MyCards){
    try{
      await this.noteHTTPDbService.editNote(note);
      
    }catch(err){
      console.error(err);
    }
    this.getData();
  }

  ngOnInit(){
    this.getData();
  }

  async getData() {
    try {
      this.card = await this.noteHTTPDbService.getNotes();
    } catch (err) {
      console.error(err);
    }
  }


}
