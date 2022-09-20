/** @jsxImportSource @emotion/react */

import { useState } from "react";
import {Global} from '@emotion/react';
import BaseForm from './../baseForm';
import global from './global';
import Button from "./Button";
import { InputWrapper, TextInput, PwInput } from "./Input";
import CheckBox from './CheckBox';

const Common = () => {
  const [inputHide, setInputHide] = useState('hide')
  const clickHandler = (a: string): void => {
    alert('click')
  }

  return (
    <BaseForm>
      <Global styles={global}/>
      <Button variant='default' width="100%" handler={clickHandler}>로그인</Button>
      <InputWrapper><TextInput>''</TextInput></InputWrapper>
      <InputWrapper elements='button'><PwInput width="80%" show={inputHide} setInputHide={setInputHide}>''</PwInput><Button width='20%' handler=''>인증</Button></InputWrapper>
      <label onClick={()=>{console.log('setState or 함수 넣는 곳')}}><input type='checkbox' css={{display:'none'}}/><CheckBox>아이디 저장</CheckBox></label>
    </BaseForm>
  );
};

export default Common