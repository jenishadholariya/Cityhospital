import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signInAction, signupAction } from '../../Redux/Action/Signup.action';

function Auth(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false);

    const dispatch = useDispatch();

    let schemaobj, initail;

    if (user === "login") {
        schemaobj = {
            email: yup.string().required("Enter your valid email").email("Enter your email"),
            password: yup.string().required("Enter your password"),
        }
        initail = {
            email: '',
            password: ''
        }
    } else if (user === "Signup") {
        schemaobj = {
            name: yup.string().required("Enter your name"),
            email: yup.string().required("Enter your valid email").email("Enter your email"),
            password: yup.string().required("Enter your password")
        }
        initail = {
            name: '',
            email: '',
            password: ''
        }
    }

    const schema = yup.object().shape(schemaobj);

    const formikObj = useFormik({
        initialValues: initail,

        validationSchema: schema,

        onSubmit: values => {
            dispatch(signupAction(values))
            dispatch(signInAction(values))
        },

    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formikObj;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        reset ?
                            <h2>Forget Password</h2>
                            :
                            user === 'login' ?
                                <h2>Login</h2>
                                :
                                <h2>Signup</h2>
                    }
                </div>
                <Formik values={formikObj}>
                    <Form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                        <div className="row">
                            {
                                reset ?
                                    null :

                                    user === 'login' ?
                                        null :
                                        <div className="col-md-4 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handleChange} onBlur={handleBlur} />
                                            <div className="validate" />
                                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                            }

                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} />
                                <div className="validate" />
                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                            </div>
                        </div>
                        <div>
                            {
                                reset ?
                                    null
                                    :
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" onChange={handleChange} onBlur={handleBlur}/>
                                        <div className="validate"  />
                                        <div className="validate" />
                                        <p>{errors.password && errors.password ? errors.password : ''}</p>
                                    </div>
                            }
                        </div>
                        <div className="text-start">
                            {
                                reset ?
                                    <>
                                        <p className='d-inline-block me-2 mt-3'>Already have an account
                                        </p>
                                        <button type='submit'>Login</button>
                                    </>
                                    :
                                    user === 'login' ?
                                        <>
                                            <p className='d-inline-block me-2 mt-3'>Create new account</p><button onClick={() => setUser('Signup')}>Sign Up</button>
                                            <a className='d-block' onClick={() => setReset(true)}>Forget Password...</a>
                                        </>
                                        :
                                        <>
                                            <p className='d-inline-block me-2 mt-3'>Already have an account</p><button onClick={() => setUser('login')}>Login</button>
                                        </>
                            }
                        </div>
                        <div className='text-center'>
                            {
                                reset ?
                                    <button type='submit'>Submit</button>
                                    :
                                    user === 'login' ?
                                        <button type='submit'>Login</button>
                                        :
                                        <button type='submit'>Signup</button>
                            }
                        </div>
                    </Form>
                </Formik>
            </div>

        </section>
    );
}
export default Auth;