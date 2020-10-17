import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://jsonplaceholder.typicode.com";

  constructor(private httpCLient:HttpClient) { }

  getAll():Observable<Post[]> {
    return this.httpCLient.get<Post[]>(this.apiUrl+'/users/')
  }

  create(post):Observable<Post> {
    return this.httpCLient.post<Post>(this.apiUrl + '/users/',JSON.stringify(post))
  }

  update(id, post):Observable<Post>{
    return this.httpCLient.put<Post>(this.apiUrl + '/users/' + id, JSON.stringify(post))
  }

  find(id):Observable<Post> {
    return this.httpCLient.get<Post>(this.apiUrl+'/users/'+id)
  }

  delete(id){
    return this.httpCLient.delete(this.apiUrl+'/users/'+id)
  }

}
