import { createRoles } from '../../src/redux/reducers/createRoleReducer';
import * as types from '../../src/redux/actions/createRoleAction';

describe('Create role reducer', () => {
    const initialState ={
        pending: false,
        snackBarMessage:{
          open: false,
          severity: '',
          message: null
        },
        error: null
      }

  it('Should get initial state', () => {
    expect(createRoles(undefined, {})).toEqual(initialState)
    })


  it('Should handle CREATE_ROLE_PENDING ', () => {
    expect(createRoles(initialState, {
      type: types.CREATE_ROLE_PENDING
    })
    ).toEqual(
      {
        ...initialState,
        pending: true
      }
    )
  })

  it('Should handle CREATE_ROLE_SUCCESS ', () => {
    expect(createRoles(initialState, {
        type: types.CREATE_ROLE_SUCCESS
      })
      ).toEqual(
        {
          ...initialState,
          pending: false,
          snackBarMessage:{
            open:true,
            severity:"success",
            message:"Role Successfully Created!"
          } 
        }
      )
  })

  it('Should handle CREATE_ROLE_ERROR ', () => {
    expect(createRoles(initialState, {
        type: types.CREATE_ROLE_ERROR,
        error:"failed to create role",
      })
      ).toEqual(
        {
          ...initialState,
          pending: false,
          snackBarMessage:{
            open:true,
            severity:"error",
            message:"failed to create role"
          },
          error:"failed to create role"
        }
      )
  })

  it('Should handle CLEAR_SNACKBAR', () => {
    expect(createRoles(initialState, {
        type: types.CLEAR_SNACKBAR
      })
      ).toEqual(
        {
          ...initialState,
          snackBarMessage:false
        }
      )
  })

  it('Should handle UPDATE_ROLE', () => {
    expect(createRoles(initialState, {
        type: types.UPDATE_ROLE
      })
      ).toEqual(
        {
            ...initialState,
            pending: false,
            snackBarMessage:{
                open:true,
                severity:"success",
                message:"Role Successfully Updated!"
            } 
        }
      )
  })

  it('Should handle UPDATE_ROLE_FAILED', () => {
    expect(createRoles(initialState, {
        type: types.UPDATE_ROLE_FAILED,
        error:"failed to update role"
      })
      ).toEqual(
        {
            ...initialState,
            pending: false,
            snackBarMessage:{
                open:true,
                severity:"error",
                message:"failed to update role"
            },
            error:"failed to update role" 
        }
      )
  })
})