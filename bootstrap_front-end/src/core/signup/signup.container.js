import React from 'react';
import { signupFormValidation } from "./signup.validation";
import { SIGNUP_FIELD_NAME, SIGNUP_FORM_FIELD_NAME } from "./signup.type";
import { SignupFormContainer } from './frame/signup-form';


 export function SignupContainer(){
    const  signupFormSentData =(values) =>{
        ///
        console.log(values);
    }
    
    const signupFormGetInitialValue = () =>{
        return {
            [SIGNUP_FIELD_NAME.LOGIN]: '',
            [SIGNUP_FIELD_NAME.PASSWORD]: '',
        };
    };

 return (
     <SignupFormContainer
      validation={signupFormValidation}
      initialValue={signupFormGetInitialValue()}
      onSubmitForm={signupFormSentData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
      />
 );
       }