import React from 'react';
import { signupFormValidation } from "./signup.validation";
import { SIGNUP_FIELD_NAME, SIGNUP_FORM_FIELD_NAME } from "./signup.type";

import { SignupComponent } from './signup.component';
import { signupFormUploadData } from './signup.action';
import { useDispatch } from 'react-redux';

 export function SignupContainer(){
    const dispatch = useDispatch();

    const signupFormSentData =(values) =>{
        dispatch(signupFormUploadData(values));
    }
    
    const signupFormGetInitialValue = () =>{
        return {
            [SIGNUP_FIELD_NAME.LOGIN]: '',
            [SIGNUP_FIELD_NAME.PASSWORD]: '',
        };
    };

 return (
     <SignupComponent
      validation={signupFormValidation}
      initialValue={signupFormGetInitialValue()}
      onSubmitForm={signupFormSentData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
      />
 );
       }