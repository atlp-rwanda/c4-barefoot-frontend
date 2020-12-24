import React, {Component} from 'react'
import FacebookLoginWithButton from 'react-facebook-login';
import GoogleLoginButton from 'react-google-login'

class SocialButtons extends Component{
    render(){
        return(
            
            (this.props.stepIndex == 0 ? (
                <>
                    <p>Or</p>
                    
                    <FacebookLoginWithButton
                        appId="1206715649505081"
                        size= 'small'
                        fields="name,email,picture"
                        icon="fa-facebook"/>
                    <p>Or</p>
                    <GoogleLoginButton
                        onClick={() => { console.log('Google button clicked') }}
                    />
                </>
            ): '')
        )
    }
}

export default SocialButtons