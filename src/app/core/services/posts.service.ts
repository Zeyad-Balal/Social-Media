import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/env';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _HttpClient: HttpClient) { }

  createPost(data: object):Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/posts`, data)
  }

  getAllPosts():Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/posts`)
  }

  getMyPosts():Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/users/664bcf3e33da217c4af21f00/posts`)
  }
   
  getSinglePost(postId:string):Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}posts/${postId}`)
  }

 updatePost(data:object,postId:string):Observable<any> {
    return this._HttpClient.put(`${environment.baseUrl}posts/${postId}`,data)
  }

  deletePost(postId:string):Observable<any> {
    return this._HttpClient.delete(`${environment.baseUrl}posts/${postId}`)
  }

}
