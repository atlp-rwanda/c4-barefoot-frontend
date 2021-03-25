import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {bookAccommodations,clearBookSnackbar} from '../../../src/redux/actions/bookAccommodationAction';
import moxios from 'moxios';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const URL =process.env.REACT_APP_BACKEND_LINK
const middlewares = [thunk]
const mockStore = configureStore(middlewares);
let store=mockStore({});
let mock = new MockAdapter(axios)
describe('Book accommodation actions', () => {

  beforeEach(() => {
    moxios.install()
    store = mockStore({bookAccommodations: {}})
  })
  afterEach(() => moxios.uninstall())

  it('Book ACCOMMODATION successfully', () => {
    mock.onGet(`${URL}/accommodations/book/123394`)
    .reply(200,{response:{message: "Booking successfully made"}})
    store.dispatch(bookAccommodations()).then((res)=>{
      const action=[{type:'BOOK_ACCOMMODATIONS_SUCCESS',message:"Booking successfully made"}]
      expect(store.getActions().type).toEqual(action.type)
    })
  })

it('Book ACCOMMODATION failed', () => {
  mock.onGet(`${URL}/accommodations/book/123394`)
  .reply(500,{response:{Error: 'Internal Error'}})
  store.dispatch(bookAccommodations()).then((res)=>{
    const action=[{type:'BOOK_ACCOMMODATIONS_SUCCESS',message:"Booking successfully made"}]
    expect(store.getActions().type).toEqual(action.type)
  }).catch(err=>{
    const action=[{type:'BOOK_ACCOMMODATIONS_ERROR',error:err}]
    expect(store.getActions().type).toEqual(action.type)
  })
})

// it('clearBookSnackbar', () => {
//   store.dispatch(clearBookSnackbar()).then((res)=>{
//     const action=[{type:'CLEAR_BOOK_SNACKBAR'}]
//     expect(store.getActions().type).toEqual(action.type)
//   })
// })
})
