import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pages } from '../nav-bar/nav-bar.component';

@Injectable({
  providedIn: 'root'
})
export class ChangePageService {

  constructor() { }

  current_page: Subject<Pages> = new Subject<Pages>()

  changePage(new_page: Pages): void{
    this.current_page.next(new_page)
  }
}
