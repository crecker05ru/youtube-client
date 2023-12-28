import {
  Component, Output, EventEmitter, OnInit,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  Subject, debounceTime, distinctUntilChanged, switchMap,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../auth/services/login.service';
import { SearchItem } from '../../../shared/models/search-item.model';
import { FilterService } from '../../../features/services/filter.service';
import { SearchResultComponent } from '../../../features/components/search/search-result/search-result.component';
import { SearchItemsService } from '../../../features/services/search-items.service';
import { AppButtonComponent } from '../../../shared/UI/button/app-button.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [AppButtonComponent, MatButtonModule, MatDividerModule, MatIconModule,
    FormsModule, MatFormFieldModule, MatInputModule, FilterComponent, RouterLink, CommonModule],
  // providers: [SearchItemsService],
  providers: [SearchResultComponent],

})
export class HeaderComponent implements OnInit {
  @Output() handleSearchSubmit = new EventEmitter<string>();

  private searchInputs = new Subject<string>();

  private serviceArrSubject: Subject<SearchItem[] | SearchItem> | undefined;

  constructor(
    public searchItemsService: SearchItemsService,
    private searchResultComponent:SearchResultComponent,
    private filterService: FilterService,
    public router :Router,
    public loginService: LoginService,
  ) {

  }

  handleSearch(text: string) {
    this.searchItemsService.getItems();
    this.handleSearchSubmit.emit(text);
  }

  handleTuneCLick() {
    this.filterService.toggleFilter();
  }

  search(input: string): void {
    this.searchInputs.next(input);
  }

  ngOnInit(): void {
    this.serviceArrSubject = this.searchItemsService.getArrSubject();
    this.searchInputs.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((input: string) => {
        const obs = this.searchItemsService.getByInput(input);
        return obs;
      }),
    ).subscribe();
  }
}
