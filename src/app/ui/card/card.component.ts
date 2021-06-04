import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { MyCards } from 'src/app/shared/interfaces/cards.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: MyCards[];
  
  @Output() deleteCard =
  new EventEmitter<number>();
  @Output() setEdit =
  new EventEmitter<MyCards>();
  
  editText : string = "";
  editName : string = "";
  editIndex :number;
  editActive :boolean = false;
   
  onDeleteCard(index:number){
   this.deleteCard.emit(index)
  }
  
  getEdit(index:number){
   this.editActive = true;
   this.editName = this.card[index].name;
   this.editText = this.card[index].inputText;
   this.editIndex = this.card[index].id;

  }
  
  onSetEdit(){
    let note: MyCards = {
      id: this.editIndex,
      name: this.editName,
      inputText: this.editText,
      reDate: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + " ред.."
    }
    this.setEdit.emit(note);
    this.editActive = false;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
