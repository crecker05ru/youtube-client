import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl, FormGroup, ReactiveFormsModule, Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { CustomCard } from 'src/app/favorite/services/custom-card.model';
import { CustomCardsActions } from 'src/app/redux/actions/customCards.actions';
import { checkNotFutureDate } from 'src/app/shared/directives/checkNotFutureDate.directive';

@Component({
  standalone: true,
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  imports: [ReactiveFormsModule, NgIf, NgFor],
})
export class AdminComponent {
  constructor(private store: Store) {}

  newCardForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl<string>('', Validators.maxLength(255)),
    img: new FormControl<string>('', Validators.required),
    linkVideo: new FormControl<string>('', Validators.required),
    creationDate: new FormControl<string>('', [Validators.required, checkNotFutureDate()]),
    tags: new FormArray<FormControl<string | null>>([
      new FormControl<string>('tag', Validators.required),
    ]),
  });

  get tags() {
    return this.newCardForm.controls.tags as FormArray;
  }

  addTag() {
    if (this.tags.length >= 5) return;
    this.tags.push(new FormControl<string>('new tag', Validators.required));
  }

  formSubmit() {
    // localStorage.setItem('cardForm', JSON.stringify(this.newCardForm.value));
    const formatedCustomCard:CustomCard = {
      id: Date.now().toString(32),
      title: this.newCardForm.value.title as string,
      description: this.newCardForm.value.description as string,
      imageLink: this.newCardForm.value.img as string,
      videoLink: this.newCardForm.value.linkVideo as string,
      creationDate: this.newCardForm.value.creationDate as string,
      tags: this.newCardForm.value.tags as string[],

    };
    this.tags.clear();
    this.newCardForm.reset();
    this.tags.push(new FormControl<string>('', Validators.required));
    this.store.dispatch(CustomCardsActions.addCard({ cardData: formatedCustomCard }));
  }

  resetForm() {
    this.tags.clear();
    this.newCardForm.reset();
    this.tags.push(new FormControl<string>('', Validators.required));
  }
}
