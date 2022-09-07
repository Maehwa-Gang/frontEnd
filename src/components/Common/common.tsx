/** @jsxImportSource @emotion/react */

import { useState } from "react";
import {Global} from '@emotion/react';
import BaseForm from './../baseForm';
import global from './global';
import Button from "./Button";
import { InputWrapper, TextInput, PwInput } from "./Input"
import CheckBox from './CheckBox';

const Common = () => {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
	const [inputHide, setInputHide] = useState('hide')

  const clickHandler = (a: string): void => {
    alert('click')
  }

  return (
    <BaseForm>
      <Global styles={global}/>
      <Button variant='default' width="100%" handler={clickHandler}>로그인</Button>
      <InputWrapper elements='one'><TextInput placeHolder='아이디를 입력하세요.' width="100%" setInputState={setId}>''</TextInput></InputWrapper>
      <InputWrapper elements='two'><PwInput placeHolder='비밀번호를 입력하세요.' width="80%" show={inputHide} setInputState={setPw} setInputHide={setInputHide}>''</PwInput><Button variant='default' width='20%' handler=''>인증</Button></InputWrapper>
      <label><input type='checkbox' css={{display:'none'}} onClick={()=>console.log(1)}/><CheckBox active={0} margin='8px'>아이디 저장</CheckBox></label>
    </BaseForm>
  );
};

export default Common