import React from 'react';
import { Formik } from 'formik';
 
import { SIGNUP_FORM_FIELD_KEY } from "./signup-form-type";  
import { SignupFormComponent } from "./signup-form.component";

 export function SignupFormContainer(props){
    const LOGIN_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN]
    const PASWORD_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD]

     return (
    <div>
      <Formik
        initialValues={props.initialValues}
        validate={props.validation}
        onSubmit={props.onSubmit}
      >
        <SignupFormComponent fieldPasword={PASWORD_NAME} fieldName={LOGIN_NAME} />
      </Formik>
    </div>
  );}