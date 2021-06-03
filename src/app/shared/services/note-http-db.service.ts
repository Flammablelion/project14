import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyCards } from '../interfaces/cards.interface';

@Injectable({
  providedIn: 'root'
})
export class NoteHTTPDbService {
  db_url = "http://localhost:3000/notes";
  constructor(private http: HttpClient) { }
  
  getNotes(): Promise<any>{
    return this.http.get(this.db_url).toPromise();
  }
  postNotes(data: MyCards){
    return this.http.post(this.db_url,data).toPromise();
  }
  deleteNotes(id:number){
    return this.http.delete(this.db_url + `/${id}`).toPromise();
  }
  editNote(data:MyCards){
    return this.http.patch(this.db_url + `/${data.id}`,data).toPromise();
  }
}
