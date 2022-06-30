import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const StreamForm = ({ handleSubmit, createStream, userId, submitAction }) => {
  const navigate = useNavigate();
  const renderInput = ({ meta, input, label }) => {
    return (
      <div>
        <label>{label}</label>
        <br />
        <input {...input} type="text" />
        <div>{meta.touched && meta.error}</div>
      </div>
    );
  };

  const onSubmitForm = val => {
    submitAction({...val, userId});
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Field name="name" component={renderInput} label="Stream Name" />
        <Field
          name="description"
          component={renderInput}
          label="Stream description"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = "put on a name";
  }
  if (!formValues.description) {
    errors.description = "put on a shit";
  }
  return errors;
};
const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
    }
}
export default connect(mapStateToProps)(
  reduxForm({ form: "streamForm", validate })(StreamForm)
);
