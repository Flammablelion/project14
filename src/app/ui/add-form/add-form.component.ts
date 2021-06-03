import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MyCards } from 'src/app/shared/interfaces/cards.interface';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  inputName: string;
  text: string;
  @Output() addNote = new EventEmitter<MyCards>();
  @Input() editCard: MyCards;


  getClear() {
    this.inputName = "";
    this.text = "";
  }
  onAddNote() {
    let note: MyCards = {
      name: this.inputName,
      inputText: this.text,
      date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
    }
    this.addNote.emit(note);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
