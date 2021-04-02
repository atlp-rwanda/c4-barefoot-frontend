import { bookAccommodationsReducer } from '../../src/redux/reducers/bookAccommodationReducer';
import * as types from '../../src/redux/actions/bookAccommodationAction';
import { permissionsPayload } from '../../dummyData';

describe('Create role reducer', () => {
    const initialState = {
        pending: false,
        snackBarMessage: {
            open: false,
            severity: '',
            message: null
        }
      }

  it('Should get initial state', () => {
    expect(bookAccommodationsReducer(undefined, {})).toEqual(initialState)
    })


  it('Should handle BOOK_ACCOMMODATIONS_SUCCESS ', () => {
    expect(bookAccommodationsReducer(initialState, {
      type: types.BOOK_ACCOMMODATIONS_SUCCESS,
      message:"Booking successfully made"
    })
    ).toEqual(
      {
        ...initialState,
        pending: false,
        snackBarMessage: {
            open: true,
            severity: 'success',
            message: "Booking successfully made"
          }
      }
    )
  })

  it('Should handle BOOK_ACCOMMODATIONS_ERROR', () => {
    expect(bookAccommodationsReducer(initialState, {
        type: types.BOOK_ACCOMMODATIONS_ERROR
      })
      ).toEqual(
        {
          ...initialState,
          pending: false,
          snackBarMessage: {
            open: true,
            severity: 'error',
            message: "Booking accommodation failed Please try again"
          }
        }
      )
  })

  it('Should handle BOOK_ACCOMMODATIONS_PENDING', () => {
    expect(bookAccommodationsReducer(initialState, {
        type: types.BOOK_ACCOMMODATIONS_PENDING
      })
      ).toEqual(
        {
          ...initialState,
          pending:true
        }
      )
  })

  it('Should handle CLEAR_BOOK_SNACKBAR', () => {
    expect(bookAccommodationsReducer(initialState, {
        type: types.CLEAR_BOOK_SNACKBAR
      })
      ).toEqual(
        {
          ...initialState,
          snackBarMessage:{
            open: false,
            severity: '',
            message: null
            }
        }
      )
  })

})