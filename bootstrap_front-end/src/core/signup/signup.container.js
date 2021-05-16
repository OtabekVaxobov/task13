import React from 'react';
import { signupFormValidation } from "./signup.validation";
import { SIGNUP_FORM_FIELD_NAME } from "./signup.types";
import { SignupFormContainer } from './frame/signup-form';


 export function SignupContainer(){
    const  signupFormSentData =(value) =>{
        ///
    }
    
    const signupFormGetInitialValue = () =>{
        return {
            [SIGNUP_FORM_FIELD_NAME.LOGIN]: '',
            [SIGNUP_FORM_FIELD_NAME.PASSWORD]: '',
        };
    };

 return (
     <SignupFormContainer
      validation={signupFormValidation}
      initialValues={signupFormGetInitialValue()}
      onSubmitForm={signupFormSentData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
      />
 );
       }