import { NgIf, Location, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectSearchItems } from 'src/app/redux/selectors/search-items.selector';
import { ColorDateDirective } from 'src/app/shared/directives/colorDate.directive';
import { SearchItem } from 'src/app/shared/models/search-item.model';
import { SearchItemsService } from '../../../features/services/search-items.service';

@Component({
  standalone: true,
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
  imports: [NgIf, MatIconModule, DatePipe, ColorDateDirective],
  providers: [],
})
export class DetailedInformationComponent implements OnInit {
  searchItems$ = this.store.select(selectSearchItems);

  favoriteIds = [];

  @Input() isFavorite = false;

  item: SearchItem | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private service: SearchItemsService,
    private location: Location,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.item = this.service.items?.find((item) => item.id === this.route.snapshot.paramMap.get('id'));
    if (!this.item) {
      const itemId = this.route.snapshot.paramMap.get('id') || '';
      this.service.getItem(itemId).subscribe(() => {
        this.item = this.service.item;
      });
    }
    this.searchItems$.subscribe((data) => {
      if (this.item?.id) this.isFavorite = Boolean(data.favoritesIds?.includes(this.item.id));
    });
  }

  backClick() {
    this.location.back();
  }
}
