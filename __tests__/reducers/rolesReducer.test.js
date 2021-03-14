import { RolesReducer } from '../../src/redux/reducers/rolesReducer';
import * as types from '../../src/redux/actions/fetchRolesAction';
import { rolePayload } from '../../dummyData';

describe('Create role reducer', () => {
    const initialState = {
        pending: true,
        roles: {},
        error: null,
        load: false,
        snackBarMessage: {
          open: false,
          severity: '',
          message: null
        },
        role:null
      }

  it('Should get initial state', () => {
    expect(RolesReducer(undefined, {})).toEqual(initialState)
    })


  it('Should handle FETCH_ROLES_SUCCESS ', () => {
    expect(RolesReducer(initialState, {
      type: types.FETCH_ROLES_SUCCESS,
      payload:rolePayload
    })
    ).toEqual(
      {
        ...initialState,
        pending: false,
        roles:rolePayload
      }
    )
  })

  it('Should handle FETCH_ROLES_ERROR', () => {
    expect(RolesReducer(initialState, {
        type: types.FETCH_ROLES_ERROR,
        error:"could not fetch roles"
      })
      ).toEqual(
        {
          ...initialState,
          pending: false,
         error:"could not fetch roles"
        }
      )
  })

  it('Should handle DELETE_ROLE_PENDING ', () => {
    expect(RolesReducer(initialState, {
        type: types.DELETE_ROLE_PENDING
      })
      ).toEqual(
        {
          ...initialState,
          load:true
        }
      )
  })

  it('Should handle DELETE_ROLE_ERROR', () => {
    expect(RolesReducer(initialState, {
        type: types.DELETE_ROLE_ERROR,
        error:"failed to delete role"
      })
      ).toEqual(
        {
            ...initialState,
            load: false,
            error: "failed to delete role",
            snackBarMessage: {
                open: true,
                severity: 'error',
                message: "failed to delete role"
            }
        }
      )
  })

  it('Should handle DELETE_ROLE_SUCCESS', () => {
    let state={
        pending: true,
        roles: {
            rows:[rolePayload.rows[0],rolePayload.rows[0]]
        },
        error: null,
        load: false,
        snackBarMessage: {
          open: false,
          severity: '',
          message: null
        },
        role:null
      }
    expect(RolesReducer(state, {
        type: types.DELETE_ROLE_SUCCESS,
        payload:0
      })
      ).toEqual(
        {
            ...state,
            load: false,
            roles: {
                ...state.roles,
                rows:[...state.roles.rows.slice(0,0),...state.roles.rows.slice(0+1)]
            },
            snackBarMessage: {
                open: true,
                severity: 'success',
                message: "Role deleted successfully!"
            }
        }
      )
  })

  it('Should handle CLEAN_ROLE', () => {
    expect(RolesReducer(initialState, {
        type: types.CLEAN_ROLE
      })
      ).toEqual(
        {
            ...initialState,
            role:null
        }
      )
  })

  it('Should handle EDIT_ROLE', () => {
      let state=initialState
      state.roles=rolePayload
    expect(RolesReducer(state, {
        type: types.EDIT_ROLE,
        id:rolePayload.rows[0].id
      })
      ).toEqual(
        {
            ...initialState,
            role:rolePayload.rows[0]
        }
      )
  })

  it('Should handle CLEAR_SNACKBAR', () => {
    expect(RolesReducer(initialState, {
        type: types.CLEAR_SNACKBAR
      })
      ).toEqual(
        {
          ...initialState,
          snackBarMessage: {
            open: false,
            severity: '',
            message: null
          }
        }
      )
  })

  it('Should handle UPDATE_ROLE', () => {
    expect(RolesReducer(initialState, {
        type: types.UPDATE_ROLE
      })
      ).toEqual(
        {
            ...initialState,
            pending: false,
            snackBarMessage:{
                open:true,
                severity:"success",
                message:"Role updated successfully!"
            },
            role:null 
        }
      )
  })

  it('Should handle UPDATE_ROLE_FAILED', () => {
    expect(RolesReducer(initialState, {
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