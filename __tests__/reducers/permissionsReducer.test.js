import { permissionsReducer } from '../../src/redux/reducers/permissionsReducer';
import * as types from '../../src/redux/actions/PermissionsAction';
import { permissionsPayload } from '../../dummyData';

describe('Create role reducer', () => {
    const initialState = {
        pending: false,
        permissions: null,
        error: null,
        selectedRole: '',
        snackBarMessage: {
          open: false,
          severity: '',
          message: null
        }
      }

  it('Should get initial state', () => {
    expect(permissionsReducer(undefined, {})).toEqual(initialState)
    })


  it('Should handle FETCH_PERMISSIONS_SUCCESS ', () => {
    expect(permissionsReducer(initialState, {
      type: types.FETCH_PERMISSIONS_SUCCESS,
      payload:permissionsPayload,
      role:"Requester"
    })
    ).toEqual(
      {
        ...initialState,
        pending: false,
        selectedRole:'Requester',
        permissions:permissionsPayload.permissions
      }
    )
  })

  it('Should handle FETCH_PERMISSIONS_ERROR', () => {
    expect(permissionsReducer(initialState, {
        type: types.FETCH_PERMISSIONS_ERROR,
        error:"could not fetch permissions"
      })
      ).toEqual(
        {
          ...initialState,
          pending: false,
          snackBarMessage: {
            open: true,
            severity: 'error',
            message:"could not fetch permissions"
          }
        }
      )
  })

  it('Should handle FETCH_PERMISSIONS_PENDING', () => {
    expect(permissionsReducer(initialState, {
        type: types.FETCH_PERMISSIONS_PENDING
      })
      ).toEqual(
        {
          ...initialState,
          pending:true
        }
      )
  })

  it('Should handle CHECKBOX_CHANGED', () => {
      let perm=permissionsPayload
      perm["edit profile"]=1
    expect(permissionsReducer(initialState, {
        type: types.CHECKBOX_CHANGED,
        property:"edit profile",
        payload:1
      })
      ).toEqual(
        {
            ...initialState,
            permissions:{} 
        }
      )
  })

  it('Should handle UPDATE_PERMISSIONS_SUCCESS', () => {
    
    expect(permissionsReducer(initialState, {
        type: types.UPDATE_PERMISSIONS_SUCCESS,
        message:"updated success"
      })
      ).toEqual(
        {
            ...initialState,
            pending: false,
            snackBarMessage: {
                open: true,
                severity: 'success',
                message: "updated success"
            }
        }
      )
  })

  it('Should handle UPDATE_PERMISSIONS_PENDING', () => {
    expect(permissionsReducer(initialState, {
        type: types.UPDATE_PERMISSIONS_PENDING
      })
      ).toEqual(
        {
            ...initialState,
            pending:true
        }
      )
  })

  
  it('Should handle CLEAR_PERMISSIONS_SNACKBAR', () => {
    expect(permissionsReducer(initialState, {
        type: types.CLEAR_PERMISSIONS_SNACKBAR
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

  it('Should handle UPDATE_PERMISSIONS_ERROR', () => {
    expect(permissionsReducer(initialState, {
        type: types.UPDATE_PERMISSIONS_ERROR,
        error:"failed to update permission"
      })
      ).toEqual(
        {
            ...initialState,
            pending: false,
            error:"failed to update permission",
            snackBarMessage:{
                open:true,
                severity:"error",
                message:"failed to update permission"
            }
        }
      )
  })
})