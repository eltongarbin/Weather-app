import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SearchBarForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="input-group">
    <Field
      name="term"
      component="input"
      type="text"
      className="form-control"
      placeholder="Get a five-day forecast in your favorite cities"
    />
    <span className="input-group-btn">
      <button type="submit" className="btn btn-secondary">
        Submit
      </button>
    </span>
  </form>
);

SearchBarForm = reduxForm({
  form: 'searchBar'
})(SearchBarForm);

export default SearchBarForm;
