import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public courses$: Observable<Course[]>;
  constructor(private http: HttpClient) {
    this.courses$ = this.http
      .get('/api/courses')
      .pipe(map((data: { payload: Course[] }) => data.payload));
  }

  onCourseSelected(course: Course) {
    console.log(course);
  }
}
