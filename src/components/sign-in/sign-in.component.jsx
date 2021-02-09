import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import {SignInWithGoogle, auth} from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import {ReactComponent as GoogleLogo} from '../../assets/search.svg'

import './sign-in.style.scss'
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

export class SignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async (event) =>{
        event.preventDefault()

        const{email, password} = this.state; 
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""});
        } catch(error){ 
            console.log(error); 
        }
        
        
    }

    handleChange = (event) =>{
        const{value, name} = event.target

        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>LOG INTO MY OUTSTEP</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <label></label>
                    <FormInput 
                    name="email" 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required />
                    <label></label>
                    <FormInput
                    name="password" 
                    type='password' 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="password"
                    required />

                    <CustomButton type='submit'>Sign In</CustomButton>
                    <p className='forgot-password'>I've forgotten my password</p>
                    <GoogleLogo className='google-button' onClick={SignInWithGoogle}/>
                    <p className='sign-in-with'>Sign in With <b>Google</b></p>               
                </form>
                
            </div>
        )
    }
}

export default SignIn
