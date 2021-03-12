import { commentReducer} from '../../src/redux/reducers/CommentReducer';
import * as types from '../../src/redux/actions/CommentActon';
import {commentPayload} from '../../dummyData'

describe('Fetch comment Reducer', ()=> {
  const initialState={
    comments: [],
    currentComment: {},
    error: null,
    status: "",
   loading:false
  }
  it('Should get initial state', () => {
    expect(commentReducer(undefined, {})).toEqual(initialState)
    })

  it('Should handle RETRIEVE_COMMENTS_SUCCESS', () => {
    expect(commentReducer(initialState, {
      type: types.RETRIEVE_COMMENTS_SUCCESS,
      payload: commentPayload
    })
    ).toEqual({
      ...initialState,
      loading:false, 
        comments:commentPayload,
      error: null
    })
  })

  it('Should handle RETRIEVE_COMMENTS_PENDING', () => {
    expect(commentReducer(initialState, {
      type: types.RETRIEVE_COMMENTS_PENDING
    })
    ).toEqual({
      ...initialState,
    loading:true,
     
    })
  })

  it('Should handle RETRIEVE_COMMENTS_FAIL', () => {
    expect(commentReducer(initialState, {
      type: types.RETRIEVE_COMMENTS_FAIL,
      error: 'comment not found'
    })
    ).toEqual({
    loading:false,
    comments: [],
      error: 'comment not found'
    })
  })
})