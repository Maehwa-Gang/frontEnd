/** @jsxImportSource @emotion/react */

import { useState } from "react";
import BaseForm from './molecules/BaseForm';
import { Button, ButtonWrapper } from "./atoms/Button";
import { InputWrapper, TextInput, PwInput } from "./atoms/Input";
import CheckBox from './atoms/CheckBox';

const Common = () => {
  const [inputHide, setInputHide] = useState('hide')
  const clickHandler = (): void => {
    alert('click')
  }

  return (
    <BaseForm>
      <Button variant='default' width="100%" handler={clickHandler}>로그인</Button>
      <InputWrapper><TextInput>''</TextInput></InputWrapper>
      <InputWrapper elements='button'><PwInput width="80%" show={inputHide} setInputHide={setInputHide}>''</PwInput><Button width='20%' handler={()=>{}}>인증</Button></InputWrapper>
      <label onClick={()=>{console.log('setState or 함수 넣는 곳')}}><input type='checkbox' css={{display:'none'}}/><CheckBox>아이디 저장</CheckBox></label>
    </BaseForm>
  );
};

export default Common