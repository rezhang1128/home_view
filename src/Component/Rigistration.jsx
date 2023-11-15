import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles.css';
import '../index.css';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FormikDatePicker = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
      <div>
        <label>Date of Birth</label>
        <DatePicker
          {...field}
          {...props}
          selected={(field.value && new Date(field.value)) || null}
          onChange={value => helpers.setValue(value)}
          inline 
        />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const RigistrationForm = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1>Verdure</h1>
      <div className='flex flex-col items-center bg-white p-6 rounded-xl'>
        <h2>Create an account</h2>
        <Formik
            initialValues={{
                email:'',
                password:'',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: '',
                DoB:'',
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .min(8,'Password has to at least 8 symbols')
                    .required('Required'),
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required'),
                phoneNumber: Yup.string()
                    .required('Required'),
                address: Yup.string()
                    .required('Required'),
                gender: Yup.string()
                    .oneOf(
                    ['male', 'female', 'other'],
                    'Invalid Gender'
                    )
                    .required('Required'),
                DoB: Yup.date()
                    .max(new Date(), "You can't be born in the future!")
                    .required('Required'),

            })}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
            }}
        >
            <Form>

            <MyTextInput
                label="E-mail"
                name="email"
                type="email"
                placeholder="e.g. john@gmail.com"
            />
            <MyTextInput
                label="Password"
                name="password"
                type="text"
                placeholder="At least 8 symbols..."
            />
            <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Enter your first name..."
            />

            <MyTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter your last name..."
            />

            <MyTextInput
                label="Phone number"
                name="phoneNumber"
                type="text"
                placeholder="Enter your phone number..."
            />

            <MyTextInput
                label="Address"
                name="address"
                type="text"
                placeholder="Enter your address..."
            />
            

            <MySelect label="Gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </MySelect>

            <FormikDatePicker
                name="DoB"
                dateFormat="MMMM d, yyyy"
                className="some-custom-class" // Your custom styles here
            />
            <button className='w-full border-0 bg-green-400' type="submit">Submit</button>
            </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RigistrationForm;