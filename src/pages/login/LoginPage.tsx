/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { css, Global } from "@emotion/react"
import styled from '@emotion/styled'
import BaseForm from "./../../components/baseForm"
import global from "../../components/Common/global"
import Button from "../../components/Common/Button";
import { InputWrapper, TextInput, PwInput } from "../../components/Common/Input";
import CheckBox from "../../components/Common/CheckBox";

/* styled-components */
const LoginBannerLogo = styled.img({
	margin: '0 auto',
	display: 'block',
	width: '98px',
	height: '141px'
})

const LoginInputContainer = styled.div({
  display:'flex', 
  flexDirection:'column',
  gap:'11px',
  marginTop: '56px'
})

const CheckBoxWrapper = styled.div({
  margin:'14px 0 36px 0'
})

const ButtonContainer = styled.div({
  display:'flex',
  flexDirection:'column',
  gap:'11px'
})

/* React Components */
const LoginPage = () => {
	const [userInputs, setUserInputs] = useState({
    id: '',
    pw: ''
  });
  const { id, pw } = userInputs;
  const [inputHide, setInputHide] = useState('hide')
	const [idSave, setIdSave] = useState(0)

  const loginHandler = (): void => {
    alert(id)
		alert(pw)
  }
	
	return (
		<BaseForm>
			<Global styles={global}/>
      <LoginBannerLogo src="/assets/images/common/main_logo.svg" alt="로고"/>
      <LoginInputContainer>
        <InputWrapper><TextInput name='id' placeHolder='아이디를 입력하세요.' inputs={userInputs} setInputsState={setUserInputs}>''</TextInput></InputWrapper>
        <InputWrapper elements='button'><PwInput name='pw' placeHolder='비밀번호를 입력하세요.' inputs={userInputs} show={inputHide} setInputsState={setUserInputs} setInputHide={setInputHide}>''</PwInput></InputWrapper>
      </LoginInputContainer>
      <CheckBoxWrapper>
        <label onClick={()=>{setIdSave(1-idSave)}}><CheckBox active={idSave}>아이디 저장</CheckBox></label>
      </CheckBoxWrapper>
      <ButtonContainer>
        <Button width="100%" handler={()=>{loginHandler()}}>로그인</Button>
        <Button variant='white' width="100%" handler=''>회원가입</Button>
      </ButtonContainer>
      <div>
        {/* 소셜 로그인 */}
      </div>
		</BaseForm>
	)
}

export default LoginPage