import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { CustomCardsActions } from 'src/app/redux/actions/customCards.actions';
import { AdminComponent } from './admin.component';
import * as customCardsReducer from '../../../redux/reducers/customCards.reducer';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  // let store: MockStore;
  // const initialState = {
  //   customCards: [],
  // };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AdminComponent, StoreModule.forRoot({})],
      providers: [Store],
    });
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should select customCards', () => {
  //   const result = selectCustomCards.projector(initialState.customCards);
  //   expect(result.length).toEqual(1);
  //   expect(result[0].id).toEqual('1hfmclpr1');
  // });

  it('should return initial state of customCards', () => {
    const { initialState } = customCardsReducer;
    const action = {
      type: 'Uknown',
    };

    const state = customCardsReducer.customCardsReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('should add card for customCards', () => {
    const { initialState } = customCardsReducer;

    const newCard = {
      creationDate: '2023-11-19',
      description: 'Des',
      id: '111112',
      imageLink: 'Im',
      tags: ['tag'],
      title: 'Tit',
      videoLink: 'Link',
    };
    const action = CustomCardsActions.addCard({ cardData: newCard });

    const state = customCardsReducer.customCardsReducer(initialState, action);
    expect(state[state.length - 1]).toBe(newCard);
  });

  it('should edit card for customCards', () => {
    const { initialState } = customCardsReducer;

    const newCard = {
      creationDate: '2023-11-19',
      description: 'Des',
      id: '111112',
      imageLink: 'Im',
      tags: ['tag'],
      title: 'Tit',
      videoLink: 'Link',
    };

    const action = CustomCardsActions.addCard({ cardData: newCard });

    const state = customCardsReducer.customCardsReducer(initialState, action);

    const updateCard = {
      creationDate: '2023-11-19',
      description: 'Des',
      id: '111112',
      imageLink: 'Im',
      tags: ['tag'],
      title: 'Updated title',
      videoLink: 'Link',
    };
    const editAction = CustomCardsActions.editCard({ cardData: updateCard });
    const updatedState = customCardsReducer.customCardsReducer(state, editAction);
    expect(updatedState[0].title).toBe(updateCard.title);
  });

  it('should delete card for customCards', () => {
    const { initialState } = customCardsReducer;

    const newCard = {
      creationDate: '2023-11-19',
      description: 'Des',
      id: '111112',
      imageLink: 'Im',
      tags: ['tag'],
      title: 'Tit',
      videoLink: 'Link',
    };

    const idForDelete = '111112';
    const action = CustomCardsActions.addCard({ cardData: newCard });

    customCardsReducer.customCardsReducer(initialState, action);
    // const beforeDeleteLength = state.length;
    const deleteAction = CustomCardsActions.removeCard({ cardId: idForDelete });
    const afterDeleteState = customCardsReducer.customCardsReducer(initialState, deleteAction);
    expect(initialState.length).toBe(afterDeleteState.length);
  });
});
