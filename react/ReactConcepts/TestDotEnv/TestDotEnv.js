import React from 'react';

function TestDotEnv() {
  return (
    <div>
      <p>you are running this application in {process.env.NODE_ENV}</p>
      <h1>The environment variable {process.env.REACT_APP_NOT_SECRET_CODE}</h1>
    </div>
  );
}

export default TestDotEnv;
