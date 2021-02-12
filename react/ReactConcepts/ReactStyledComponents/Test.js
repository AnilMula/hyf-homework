import React from 'react';
import styled from 'styled-components';
export default function Test() {
  const Button = styled.button`
    color: blue;
  `;
  const Label = styled.label`
    color: lightblue;
    background: none;
  `;
  const Input = styled.input``;

  return (
    <div>
      <div>
        <Label>Test Button</Label>
        <Button>Test</Button>
      </div>
      <div>
        <Label>Test Button</Label>
        <Input></Input>
      </div>
    </div>
  );
}
