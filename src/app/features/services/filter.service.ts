import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  isFilterShow$: Observable<boolean>;

  private boolSubject: Subject<boolean>;

  private filterSubject = new Subject();

  filter = false;

  onFlagChange$: BehaviorSubject<boolean> = new BehaviorSubject(this.filter);

  constructor() {
    this.boolSubject = new Subject<boolean>();
    this.isFilterShow$ = this.boolSubject.asObservable();
  }

  public getFilterSubject() {
    return this.filterSubject;
  }

  toggleFilter() {
    this.filter = !this.filter;
    this.filterSubject.next(this.filter);
    this.boolSubject.next(this.filter);
    this.onFlagChange$.next(this.filter);
  }
}
