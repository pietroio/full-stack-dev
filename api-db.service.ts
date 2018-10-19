//  Estritamente necessários
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observables } from 'rxjs';

//  Varia de acordo com a "objeto"
import { IAuthor } from '../../assets/author';

@Injectable({
  providedIn: 'root'
  })

export class ApiDbService {

  constructor(private http: HttpClient) {}
  
  /*  Author Handle  */
  //  GET LIST OF AUTHORS
  getAuthor(): Observable<IAuthor[]>{
    return this.http.get<IAuthor[]>('/api/author');
  }
  
  //  GET SINGLE AUTHOR
  getAuthor(id: string): Observable<IAuthor[]>{
    return this.http.get<IAuthor[]>('/api/author/'+id);
  }
  
  //  CREATE AUTHOR
  updateAuthor(id: string, author: IAuthor[]): Observable<IAuthor[]>{
    return this.http.post<IAuthor[]>('/api/author/new', author);
  }
  
  //  UPDATE AUTHOR
  updateAuthor(id: string, author: IAuthor[]): Observable<IAuthor[]>{
    return this.http.put<IAuthor[]>('/api/author/'+id, author);
  }
  
  //  DELETE AUTHOR
  deleteAuthor(id: string): Observable<IAuthor[]>{
    return this.http.delete<IAuthor[]>('/api/author/'+id);
  }
  
}
