import  commentReducer from '../../src/redux/reducers/CommentReducer';
import * as types from '../../src/redux/actions/CommentActon';
import {commentPayload} from '../../dummyData'

describe('Fetch comment Reducer', ()=> {

  it('Should return initial state', () => {
    expect(commentReducer(undefined, {})).toEqual(
    {
    comments: [],
    currentComment:{},
    error: null,
    // status: "",
   loading:false
    }
  )
    })

  it('Should handle RETRIEVE_COMMENTS_SUCCESS', () => {
    expect(commentReducer(undefined, {
      type: types.RETRIEVE_COMMENTS_SUCCESS,
      payload: comment
    })
    ).toEqual({
      // ...initialState,
      loading:false, 
        comments:comments,
      error: null
    })
  })

  it('Should handle RETRIEVE_COMMENTS_PENDING', () => {
    expect(commentReducer(undefined, {
      type: types.RETRIEVE_COMMENTS_PENDING
    })
    ).toEqual({
      // ...initialState,
    loading:true,
     
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
describe('create comment reducer',()=>{
  const initialState={
    comments: [],
    currentComment: {},
    error: null,
    // status: "",
   loading:false
  }
  it ('should get initial state',() =>{
    expect (commentReducer(initialState,{
      type:types.SUBMIT_COMMENT_PENDING
    })
    ).toEqual({
      ...initialState,
      loading:true
    }
    )
  })

it ('should handle SUBMIT_COMMENT_SUCCESS')
expect(commentReducer(initialState,{
  type:types.SUBMIT_COMMENT_SUCCESS
})
).toEqual(
  {
    ...initialState,
    loading: false,
    comments:currentComment
  })
  it ('should handle SUBMIT_COMMENT_ERROR')
  expect(commentReducer(initialState,{
    type:types.SUBMIT_COMMENT_SUCCESS,
    error:"failed to create comment"
  })
  ).toEqual({
    ...initialState,
    loading:false,
    error:"failed to create comment"

  })
})