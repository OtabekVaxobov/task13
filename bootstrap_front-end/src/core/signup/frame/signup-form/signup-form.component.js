import React from 'react';
import { FieldPrimary } from "../../../../lib/elements/field";
import { FieldLayout } from "../../../../lib/elements/layout";

import styled from "styled-components";

 export function SignupFormComponent(props){ 
    const {
        fieldLogin,
        fieldPassword, 
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,} = props;

        const isFieldError = (name) =>{
        //     const errorMassage = errors[name] && touched[name] && errors[name];
        //     console.log(errors)
        //  return errorMessage;
        return errors[name] && touched[name] &&errors[name];
        };

 return (
         <form onSubmit={handleSubmit}>
         <Container>
        <FieldLayout>
         <FieldPrimary
             titleTid="SIGNUP.SIGNUP_FROM.FIELD.LOGIN.TITLE"
             placeholderTid="SIGNUP.SIGNUP_FROM.FIELD.LOGIN.PLACEHOLDER"
             name={fieldLogin}
             onChange={handleChange}
             onBlur={handleBlur}
             value={values[fieldLogin]}
             error={isFieldError(fieldLogin)}
           />
           
           <FieldPrimary
             titleTid="SIGNUP.SIGNUP_FROM.FIELD.PASSWORD.TITLE"
             placeholderTid="SIGNUP.SIGNUP_FROM.FIELD.PASSWORD.PLACEHOLDER"
             name={fieldPassword}
             onChange={handleChange}
             onBlur={handleBlur}
             value={values[fieldPassword]}
             error={isFieldError(fieldPassword)}
           />
           </FieldLayout>
           <Button type="submit" disabled={isSubmitting}>
             Submit
           </Button>
         </Container>
         </form>
 );
}

const Button = styled.button`
    background: #ddd;
    border-radius: 15px;
`;

const Container = styled.div`
    display: grid;
    gap: 16px;
`;
