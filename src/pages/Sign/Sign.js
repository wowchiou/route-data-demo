import React, { useState } from 'react';
import './Sign.scss';
import PropTypes from 'prop-types';
import { Form } from '@containers';

// const SKILL_LIST = [
//   { title: 'html', checked: false },
//   { title: 'css', checked: false },
//   { title: 'js', checked: false },
//   { title: 'php', checked: false },
// ];

const Sign = (props) => {
  const [formData, setFormData] = useState({});

  const inputForm = [
    {
      name: 'account',
      inputType: 'email',
      title: '帳戶',
      config: {
        placeholder: '請輸入帳戶信箱',
      },
    },
    {
      name: 'password',
      inputType: 'password',
      title: '密碼',
      config: {
        placeholder: '請輸入帳戶密碼',
      },
    },
    {
      name: 'gender',
      inputType: 'radio',
      title: '性別',
      config: {
        data: [
          { subtitle: '男', value: '1', checked: false },
          { subtitle: '女', value: '2', checked: false },
        ],
      },
    },
    {
      name: 'skill',
      inputType: 'checkbox',
      title: '技能',
      config: {
        data: [
          { subtitle: 'html', value: 'html', checked: false },
          { subtitle: 'css', value: 'css', checked: false },
          { subtitle: 'js', value: 'js', checked: false },
          { subtitle: 'php', value: 'php', checked: false },
        ],
      },
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // const changeHandler = (e) => {
  //   const TARGET = e.target;
  //   let value = TARGET.value;
  //   setFormData((prevState) => {
  //     let formData_value = formData[TARGET.name];

  //     // checkbox 取值處理
  //     if (TARGET.type === 'checkbox') {
  //       if (!formData_value) {
  //         formData_value = [value];
  //       } else {
  //         if (TARGET.checked) {
  //           formData_value.push(value);
  //         } else {
  //           const INDEX = formData_value.findIndex((itm) => itm === value);
  //           formData_value.splice(INDEX, 1);
  //         }
  //       }
  //       value = formData_value;
  //     }

  //     return {
  //       ...prevState,
  //       [TARGET.name]: value,
  //     };
  //   });
  // };

  console.log(formData);

  return (
    <div className="Sign">
      {/* <form onSubmit={submitHandler}> */}
      <Form
        inputForm={inputForm}
        formData={formData}
        setFormData={setFormData}
        submitHandler={submitHandler}
      />
      {/* </form> */}

      <div className="input_wrap">
        <input type="submit" value="送出" />
      </div>
    </div>
  );
};

Sign.propTypes = {
  formData: PropTypes.object,
};

export default Sign;
