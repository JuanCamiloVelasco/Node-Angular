import { Injectable } from '@angular/core';
import { Comida } from '../shared/models/Comida';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { COMIDAS_BY_ID_URL, COMIDAS_BY_SEARCH_URL, COMIDAS_BY_TAG_URL, COMIDAS_TAGS_URL, COMIDAS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Comida[]>{
    return this.http.get<Comida[]>(COMIDAS_URL);
  }

  getAllComidasBySearchTerm(searchTerm:string){
    return this.http.get<Comida[]>(COMIDAS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(COMIDAS_TAGS_URL);
  }

  getAllComidasByTag(tag:string): Observable <Comida[]>{
    return tag === "Todo"?
      this.getAll():
      this.http.get<Comida[]>(COMIDAS_BY_TAG_URL+ tag);
  }

  getComidaById(comidaId:string): Observable <Comida>{
    return this.http.get<Comida>(COMIDAS_BY_ID_URL + comidaId);
  }
}
