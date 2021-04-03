import React, {Component} from 'react'
import FacebookLoginWithButton from 'react-facebook-login';
import GoogleLoginButton from 'react-google-login'
import { Trans } from 'react-i18next';


class SocialButtons extends Component{
    
    render(){
        return(
            
            (this.props.stepIndex == 0 ? (
                <>
                    <Trans><p>Or</p></Trans>
                    
                    <FacebookLoginWithButton
                        textButton='Signup with facebook'
                        size= 'small'
                        fields="name,email,picture"
                        icon="fa-facebook"/>
                    <Trans><p>Or</p></Trans>
                    <GoogleLoginButton
                        buttonText="SIGNUP WITH GOOGLE"
                        cookiePolicy={'single_host_origin'}
                    />
                </>
            ): '')
        )
    }
}

export default SocialButtons