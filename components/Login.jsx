import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    return (
        <div className='login-wrapper w-auto'>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={
                    Yup.object().shape({
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        password: Yup.string()
                            .required('Password is required'),
                    })}
                onSubmit={fields => {
                    console.log(fields)
                    router.push('/leads')
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <h2>VEDAYUU ADMIN</h2>
                        <hr></hr>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" autoComplete="off" />
                            <ErrorMessage name="email" component="div" className='error-text' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" autoComplete="off" />
                            <ErrorMessage name="password" component="div" className='error-text' />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Login</button>
                        </div>
                    </Form>
                )}
            />
        </div>
    )
}
