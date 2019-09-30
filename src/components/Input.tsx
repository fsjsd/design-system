import React from "react";
import styled, { css } from "styled-components";

const InputStyled = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  border: solid 1px #bbb;
  outline: none;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) background-color;
  -webkit-tap-highlight-color: transparent;
  padding: 7px 9px;

  &:focus {
    background-color: #fff;
    border: solid 1px #aaa;
  }
  &:hover {
    border: solid 1px rgb(109, 183, 239);
  }
`;

const TextareaStyled = styled.textarea`
  box-sizing: border-box;
  border-radius: 4px;
  border: solid 1px #bbb;
  outline: none;
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) background-color;
  -webkit-tap-highlight-color: transparent;
  padding: 7px 9px;

  &:focus {
    background-color: #fff;
    border: solid 1px #aaa;
  }
  &:hover {
    border: solid 1px rgb(109, 183, 239);
  }

  ${(props: React.AllHTMLAttributes<any>) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props: React.AllHTMLAttributes<any>) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

export const Input: React.FC<React.AllHTMLAttributes<any>> = props => {
  return <InputStyled {...props} />;
};

export const Textarea: React.FC<React.AllHTMLAttributes<any>> = props => {
  return <TextareaStyled {...props} />;
};
