import { commentReducer} from '../../src/redux/reducers/CommentReducer';
import * as types from '../../src/redux/actions/CommentActon';
import {commentPayload} from '../../dummyData'

describe('Fetch comment Reducer', ()=> {
  
  it('Should return initial state', () => {
    expect(commentReducer(undefined, {})).toEqual(
      {
    comments: [],
    currentComment: {},
    error: {},
    status: "",
    loading:false
      }
    )
  })

  it('Should handle RETRIEVE_COMMENTS_SUCCESS', () => {
    expect(commentReducer(undefined, {
      type: types.RETRIEVE_COMMENTS_SUCCESS,
      payload: commentPayload
    })
    ).toEqual({
        loading:false, 
        comments:action.payload,
      error: null
    })
  })

  it('Should handle RETRIEVE_COMMENTS_PENDING', () => {
    expect(commentReducer(undefined, {
      type: types.RETRIEVE_COMMENTS_PENDING
    })
    ).toEqual({
    loading:true,
      comments: [],
      error: null
    })
  })

  it('Should handle RETRIEVE_COMMENTS_FAIL', () => {
    expect(commentReducer(undefined, {
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