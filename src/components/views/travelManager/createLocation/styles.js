import { makeStyles } from "@material-ui/core";


export const useStyles= makeStyles( theme =>({
    container: {
        width: '100vw',
        marginTop: '30px',
        marginBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: 'gray',
    },
    responsiveWrapper:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding:'0px 15px'
    },
    wrapperItem:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor:'#EAF4FB'
    },
    form: {
        width: '100%',
        marginTop: '40px',
        backgroundColor:'#EAF4FB',
        paddingBottom: '20px',

    },
    formActions:{
        display: 'flex',
        justifyContent: 'center',
        marginTop:'50px'
    },
    formSection:{
        marginTop: '10px',
    },
    
    controlsSection:{
        width: '100%',
        // backgroundColor:'green',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    groupTitle:{
        marginTop: '20px',
        textAlign: 'center'
    },
    controlGroup: {
        width: '100%',
        padding: '20px 0px',
        display: 'flex',
        justifyContent: 'center'

    },
    formControl:{
        width: '100%',
    },
    controlItem:{
        display: 'flex',
        justifyContent: 'center'
    },
    imageContainer:{
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    respImageContainer:{
        display: 'flex',
        justifyContent: 'center'
    },
    imageIcon:{
        margin: 'auto',
        textAlign:'center'
    },
    button:{
        padding: '7px 20px',
        margin: '0px 10px',
        borderRadius: '0px'
    },
    resetBtn:{
        backgroundColor: '#F2994A',
        color: 'white'
    }  


}));
