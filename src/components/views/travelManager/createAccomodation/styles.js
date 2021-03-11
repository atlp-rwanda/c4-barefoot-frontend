import { makeStyles } from "@material-ui/core";


export const useStyles= makeStyles( theme =>({
    container: {
        // backgroundColor: '#EAF4FB',
        width: '100vw',
        marginTop: '30px',
        marginBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginTop: '40px',
    },
    formActions:{
        display: 'flex',
        justifyContent: 'center',
        marginTop:'50px'
    },
    formSection:{
        marginTop: '10px',
    },
    sectionHeader:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px 10px',
        backgroundColor: '#ABD5ED',
        transition: 'background-color .3s linear',
        '&:hover':{
            backgroundColor: '#43A0D6'
        }
    },
    sectionHeaderTitle:{
        display: 'flex'
    },
    headerIcon:{
        marginTop: '-2px',
        marginRight: '7px'
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
    },
    controlGroup: {
        width: '80%',
        // backgroundColor:"red",
        padding: '20px 0px',
        display: 'flex',
        justifyContent: 'center'

    },
    controlGroupAmenities: {
        width: '80%',
        // backgroundColor:"red",
        padding: '5px 0px',
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
        minHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
