import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './model/post';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor(private http: HttpClient) { }

  listPost():Observable<Post[]>{

    return this.http.get<Post[]>('http://localhost:8080/api/v1/post');
  }

  buscar(search: string):Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/api/v1/post/?search=${search}`);
  }

  detalhesPost(id: number):Observable<Post> {
    return this.http.get<Post>(`http://localhost:8080/api/v1/post/clique/${id}`);
  }
}
