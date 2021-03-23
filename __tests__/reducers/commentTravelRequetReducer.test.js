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
<<<<<<< HEAD
      ...initialState,
      loading:false, 
        comments:commentPayload,
=======
        loading:false, 
        comments:action.payload,
>>>>>>> f05c6b25b5a1ddcf0729d810434f3c261b8fc6e9
      error: null
    })
  })

  it('Should handle RETRIEVE_COMMENTS_PENDING', () => {
<<<<<<< HEAD
    expect(commentReducer(initialState, {
      type: types.RETRIEVE_COMMENTS_PENDING
    })
    ).toEqual({
      ...initialState,
    loading:true,
     
=======
    expect(commentReducer(undefined, {
      type: types.RETRIEVE_COMMENTS_PENDING
    })
    ).toEqual({
    loading:true,
      comments: [],
      error: null
>>>>>>> f05c6b25b5a1ddcf0729d810434f3c261b8fc6e9
    })
  })

  it('Should handle RETRIEVE_COMMENTS_FAIL', () => {
<<<<<<< HEAD
    expect(commentReducer(initialState, {
=======
    expect(commentReducer(undefined, {
>>>>>>> f05c6b25b5a1ddcf0729d810434f3c261b8fc6e9
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