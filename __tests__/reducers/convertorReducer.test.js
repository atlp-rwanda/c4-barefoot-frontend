import {convertorReducer } from '../../src/redux/reducers/convertorReducer';
import * as types from '../../src/redux/actions/convertorAction';

describe('Convertor reducer', () => {
    const initialState = {
        money: null,
        err:null
      }

  it('Should get initial state', () => {
    expect(convertorReducer(undefined, {})).toEqual(initialState)
    })


  it('Should handle CONVERT_MONEY_SUCCESS', () => {
    expect(convertorReducer(initialState, {
      type: types.CONVERT_MONEY_SUCCESS,
      result:{USD:5}
    })
    ).toEqual(
      {
        ...initialState,
        money: {USD:5}
      }
    )
  })

  it('Should handle CONVERT_MONEY_ERROR', () => {
    expect(convertorReducer(initialState, {
        type: types.CONVERT_MONEY_ERROR,
        error:'failed'
      })
      ).toEqual(
        {
          ...initialState,
          err:'failed'
        }
      )
  })
})