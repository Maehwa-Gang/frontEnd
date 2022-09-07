/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { css, Global } from "@emotion/react"
import styled from '@emotion/styled'
import BaseForm from "./../../components/baseForm"
import global from "../../components/Common/global"
import Button from "../../components/Common/Button";
import { InputWrapper, TextInput, PwInput } from "../../components/Common/Input";
import CheckBox from "../../components/Common/CheckBox";


const LoginContainer = styled.div({
	width: 'calc(100% - 26px)',
	margin: '0 auto',
	paddingTop: '63px'
});

const LoginBannerLogo = styled.img({
	margin: '0 auto',
	display: 'block',
	width: '98px',
	height: '141px'
})

const LoginPage = () => {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
	const [inputHide, setInputHide] = useState('hide')
	const [idSave, setIdSave] = useState(0)

  const loginHandler = (): void => {
    alert(id)
		alert(pw)
  }
	
	return (
		<BaseForm>
			<Global styles={global}/>
			<LoginContainer>
				<LoginBannerLogo src="/assets/images/common/main_logo.svg" alt="로고 이미지"/>
				<div css={{display:'flex', flexDirection:'column', gap:'11px', marginTop: '56px'}}>
					<InputWrapper elements='one'><TextInput placeHolder='아이디를 입력하세요.' width="100%" setInputState={setId}>''</TextInput></InputWrapper>
					<InputWrapper elements='two'><PwInput placeHolder='비밀번호를 입력하세요.' width="100%" show={inputHide} setInputState={setPw} setInputHide={setInputHide}>''</PwInput></InputWrapper>
				</div>
				<div css={{margin:'14px 0 36px 0'}}>
					<label onClick={()=>{setIdSave(1-idSave)}}><CheckBox active={idSave} margin='8px'>아이디 저장</CheckBox></label>
				</div>
				<div css={{display:'flex', flexDirection:'column', gap:'11px',}}>
					<Button variant='default' width="100%" handler={()=>{loginHandler()}}>로그인</Button>
					<Button variant='white' width="100%" handler=''>회원가입</Button>
				</div>
				<div>
					{/* 소셜 로그인 */}
				</div>
			</LoginContainer>
			{/* <Button variant='default' width="100%" handler={()=>{loginHandler()}}>로그인</Button>
			<InputWrapper elements='one'><TextInput placeHolder='아이디를 입력하세요.' width="100%" setState={setId}>''</TextInput></InputWrapper>
			<InputWrapper elements='two'><PwInput placeHolder='비밀번호를 입력하세요.' width="80%" show='hide' setState={setPw}>''</PwInput><Button variant='default' width='20%' handler=''>로그인</Button></InputWrapper>
			<label><input type='checkbox' css={{display:'none'}} onClick={()=>console.log(1)}/><CheckBox active='yes' margin='8px'>아이디 저장</CheckBox></label> */}
		</BaseForm>
	)
}

export default LoginPage