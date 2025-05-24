import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/Response';
import { TaskList } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  ApiUrl = environment.UrlApi;

  constructor(private http: HttpClient) {}

  GetTask(): Observable<Response<TaskList[]>> {
    return this.http.get<Response<TaskList[]>>(this.ApiUrl);
  }
}
