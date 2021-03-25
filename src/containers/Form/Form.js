import React from 'react';
import './Form.scss';
import PropTypes from 'prop-types';
import { Input } from '@components';

const Form = (props) => {
  const { inputForm, formData, setFormData, submitHandler } = props;

  const changeHandler = (e) => {
    const TARGET = e.target;
    let value = TARGET.value;
    setFormData((prevState) => {
      let formData_value = formData[TARGET.name];

      // checkbox 取值處理
      if (TARGET.type === 'checkbox') {
        if (!formData_value) {
          formData_value = [value];
        } else {
          if (TARGET.checked) {
            formData_value.push(value);
          } else {
            const INDEX = formData_value.findIndex((itm) => itm === value);
            formData_value.splice(INDEX, 1);
          }
        }
        value = formData_value;
      }

      return {
        ...prevState,
        [TARGET.name]: value,
      };
    });
  };

  console.log(inputForm);

  return (
    <form className="Form" onSubmit={submitHandler}>
      {inputForm.map((itm, idx) => {
        console.log(itm.name);
        return (
          <Input
            key={itm.name + idx}
            name={itm.name}
            title={itm.title}
            inputType={itm.inputType}
            changeHandler={changeHandler}
            {...itm.config}
          />
        );
      })}
    </form>
  );
};

Form.propTypes = {};

export default Form;
