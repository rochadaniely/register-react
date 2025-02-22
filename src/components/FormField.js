import React from 'react';

const FormField = ({ label, children }) => {
  return (
    <div className="form-field">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default FormField;
