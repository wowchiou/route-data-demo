import React, { useState, useEffect } from 'react';

const Home = () => {
  const [test, setTest] = useState(false);
  const [u1, setU1] = useState(false);
  const [u2, setU2] = useState(false);

  const handleClick = () => {
    console.log(1);

    setTimeout(() => {
      console.log(2);
      setTest(!test);
    }, 5000);

    for (let i = 0; i < 10; i++) {
      console.log(3);
    }
    console.log(4);
  };

  const handleUseEffect = () => {
    setU1(!u1);
    setU2(!u2);
  };

  useEffect(() => {
    console.log('u1');
  }, [u1]);

  useEffect(() => {
    console.log('u2');
  }, [u2]);

  console.log(123);

  return (
    <div className="home">
      <h2>Home</h2>

      <button onClick={handleClick}>STATE 測試</button>
      <button onClick={handleUseEffect}>useEffect 測試</button>

      <a href="https://google.com" target="_blank" rel="norefferrer noopener">
        123
      </a>
    </div>
  );
};

export default Home;
