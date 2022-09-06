import {Global} from '@emotion/react';
import global from './global';
import Button from "./Button";
import { InputWrapper, DefaultInput, HideInput } from "./Input"
import BaseForm from './../baseForm';

const Common = () => {
  return (
    <BaseForm>
      <Global styles={global}/>
      <Button variant='white'>회원가입</Button>
      <InputWrapper><DefaultInput placeHolder='아이디를 입력하세요.' width="100%">''</DefaultInput></InputWrapper>
      <InputWrapper><HideInput placeHolder='비밀번호를 입력하세요.' width="80%">''</HideInput></InputWrapper>
    </BaseForm>
  );
};

export default Common