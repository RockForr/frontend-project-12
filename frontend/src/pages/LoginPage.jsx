import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from 'react-bootstrap';

const LoginPage = () => {
      return (
        <div>
        <Formik
          initialValues={{ userName: "", password: "" }}
          onSubmit={({ setSubmitting }) => {
            console.log("Form is validated! Submitting the form...");
            setSubmitting(false);
          }}
        >
          {() => (
            <Form>
              <div className="form-group">
                <label htmlFor="userName"> Ваш ник</label>
                <Field
                  type="userName"
                  name="userName"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>
            </Form>
          )}  
      </Formik>
      <Button
              type="submit"
              className="w-100 mb-3"
              variant="outline-primary"
            >
                {/* {t('authForm.buttonLogIn')} */}
              Войти
        </Button> 
      </div>
      );
    };

export default LoginPage;
  