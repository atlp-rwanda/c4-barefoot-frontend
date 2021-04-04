import ChatReducer from '../../src/redux/reducers/ChatReducer';
import * as types from '../../src/redux/actions/ChatAction';


describe('testing chat reducers', () => {
    it('should return initial state', () => {
        expect(ChatReducer(undefined, {})).toEqual(
            {
                users: [],
                allchats: [],
                chat: {},
                message: {},
                visitors: [],
                vmessages: [],
                response: {},
                supportresponse: [],
                allusers: [],
                error: '',
                pending: false,
                lastchat: {}
            }
        )
    })


    it('should handle getting CHATTED_USERS', () => {
        expect(ChatReducer(undefined, {
            type: types.CHATTED_USERS,
            payload: { data: { profile: {} }, status: 200 }
        }))
        .toEqual({
            users: { data: { profile: {} }, status: 200 },
            allchats: [],
            chat: {},
            message: {},
            visitors: [],
            vmessages: [],
            response: {},
            supportresponse: [],
            allusers: [],
            error: '',
            pending: false,
            lastchat: {}
        })
    })

    it('should handle getting all users', ()=> {
        expect(ChatReducer(undefined, {
            type: types.ALL_USERS,
            payload: {data: {profile: {}}, status: 200}
        }))
        .toEqual({
            users: [],
            allchats: [],
            chat: {},
            message: {},
            visitors: [],
            vmessages: [],
            response: {},
            supportresponse: [],
            allusers: { data: { profile: {} }, status: 200 },
            error: '',
            pending: false,
            lastchat: {}
        })
    })

    it('should handle GETALL_CHATS', ()=> {
        expect(ChatReducer(undefined, {
            type: types.GETALL_CHATS,
            payload: {data: {profile: {}}, status: 200}
        }))
        .toEqual({
            users: [],
            allchats: { data: { profile: {} }, status: 200 },
            chat: {},
            message: {},
            visitors: [],
            vmessages: [],
            response: {},
            supportresponse: [],
            allusers: [],
            error: '',
            pending: false,
            lastchat: {}
        })
    })

    it('should handle GET_VISITORS', ()=> {
        expect(ChatReducer(undefined, {
            type: types.GET_VISITORS,
            payload: {data: {profile: {}}, status: 200}
        }))
        .toEqual({
            users: [],
            allchats: [],
            chat: {},
            message: {},
            visitors: { data: { profile: {} }, status: 200 },
            vmessages: [],
            response: {},
            supportresponse: [],
            allusers: [],
            error: '',
            pending: false,
            lastchat: {}
        })
    })

    it('should handle GETV_MESSAGES', ()=> {
        expect(ChatReducer(undefined, {
            type: types.GETV_MESSAGES,
            payload: {data: {profile: {}}, status: 200}
        }))
        .toEqual({
            users: [],
            allchats: [],
            chat: {},
            message: {},
            visitors: [],
            vmessages: { data: { profile: {} }, status: 200 },
            response: {},
            supportresponse: [],
            allusers: [],
            error: '',
            pending: false,
            lastchat: {}
        })
    })

    it('should handle SUPPORT_RESPONDS', ()=> {
        expect(ChatReducer(undefined, {
            type: types.SUPPORT_RESPONDS,
            payload: {data: {profile: {}}, status: 200}
        }))
        .toEqual({
            users: [],
            allchats: [],
            chat: {},
            message: {},
            visitors: [],
            vmessages: [],
            response: { data: { profile: {} }, status: 200 },
            supportresponse: [],
            allusers: [],
            error: '',
            pending: false,
            lastchat: {}
        })
    })

    it('should handle GETSUPPORT_RESPONSE', ()=> {
        expect(ChatReducer(undefined, {
            type: types.GETSUPPORT_RESPONSE,
            payload: {data: {profile: {}}, status: 200}
        }))
        .toEqual({
            users: [],
            allchats: [],
            chat: {},
            message: {},
            visitors: [],
            vmessages: [],
            response: {},
            supportresponse: { data: { profile: {} }, status: 200 },
            allusers: [],
            error: '',
            pending: false,
            lastchat: {}
        })
    })

    it('should handle NEW_MESSAGE', ()=> {
        expect(ChatReducer(undefined, {
            type: types.NEW_MESSAGE,
            payload: {data: {profile: {}}, status: 200}
        }))
        .toEqual({
            users: [],
            allchats: [],
            chat: { data: { profile: {} }, status: 200 },
            message: {},
            visitors: [],
            vmessages: [],
            response: {},
            supportresponse: [],
            allusers: [],
            error: '',
            pending: false,
            lastchat: {}
        })
    })

    it('should handle VISITOR_MESSAGEE', ()=> {
        expect(ChatReducer(undefined, {
            type: types.VISITOR_MESSAGEE,
            payload: {data: {profile: {}}, status: 200}
        }))
        .toEqual({
            users: [],
            allchats: [],
            chat: {},
            message:{},
            visitors: [],
            vmessages: [],
            response: {},
            supportresponse: [],
            pending: false,
            allusers: [],
            error: '',
            lastchat: {}
        })
    })
})