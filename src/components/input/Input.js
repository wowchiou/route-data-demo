import React from 'react';
import './Input.scss';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { title, name, inputType, changeHandler, ...rest } = props;

  let input_html = '';

  switch (inputType) {
    case 'text':
    case 'email':
    case 'password':
    case 'tel':
      input_html = (
        <input
          name={name}
          type={inputType}
          onChange={changeHandler}
          {...rest}
        />
      );
      break;

    case 'radio':
      input_html = rest.data.map((itm, idx) => (
        <label className="checkBoxer" key={idx}>
          <input
            key={itm.name + idx}
            name={name}
            type={inputType}
            onChange={changeHandler}
            value={itm.value}
            checked={itm.checked}
          />
          <span>{itm.subtitle}</span>
        </label>
      ));
      break;

    case 'checkbox':
      input_html = rest.data.map((itm, idx) => (
        <label className="checkBoxer" key={idx}>
          <input
            key={itm.name + idx}
            name={name}
            type={inputType}
            onChange={changeHandler}
            value={itm.value}
            checked={itm.checked}
          />
          <span>{itm.subtitle}</span>
        </label>
      ));
      break;
  }

  return (
    <div className="input_group">
      <label>
        <span>{title}</span>
      </label>
      {input_html}
    </div>
  );
};

Input.propTypes = {};

export default Input;
