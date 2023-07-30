import './App.css';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {
  return (
    <div className="App">
      <h1>Form</h1>
        <Formik
          initialValues={{ name: '', email: '', tel: ''}}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }

            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }

            if (!values.tel) {
              errors.tel = 'Required';
            } else if (
              values.tel.length !== 12 || !/^\d+$/i.test(values.tel)
            ) {
              errors.tel = 'Must be 12 numbers';
            }
              return errors;
          }}

          onSubmit={(values, { setSubmitting }) => {                        
            setTimeout(() => {
              alert(JSON.stringify(`Name: ${values.name}; Email: ${values.email}; Phone number: ${values.tel}`));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field type='text' name='name' placeholder='Enter your name' /> 
              </div>           
              <ErrorMessage name='name' component='div' style={{ color: 'red' }} />
              
              <div>
                <Field type='email' name='email' placeholder='Enter your email address' />
              </div>              
              <ErrorMessage name='email' component='div' style={{ color: 'red' }} />

              <div>
                <Field type='tel' name='tel' placeholder='Enter your phone number' />
              </div>              
              <ErrorMessage name='tel' component='div' style={{ color: 'red' }} />

              <button type='submit' disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>      
    </div>
  );
}

export default App;
