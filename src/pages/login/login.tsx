/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from '@emotion/styled';
import BaseForm from "../../components/molecules/BaseForm";
import CheckBoxMolecule from "../../components/molecules/CheckBoxMolecule";
import Button from "../../components/atoms/Button";
import { InputWrapper, TextInput, PwInput } from "../../components/atoms/Input";
import CheckBox from "../../components/atoms/CheckBox";

/* styled-components */
const LoginBannerLogo = styled.img`
	margin: 0 auto;
	display: block;
	width: 98px;
	height: 141px;
`

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 56px;
`

// const CheckBoxContainer = styled.div`
//   margin: 14px 0 36px 0;
// `

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 14px;
`

const UserFindContainer = styled.div`
  margin-bottom: 56px;
`

const UserFind = styled(Link)`
  font-weight: 400;
  font-size: 13px;
  color: #353535;
  margin-right: 8px;
`

const PwFind = styled(UserFind)`
  &::before{
    content: 'l';
    color: #353535;
    margin-right: 8px;
    cursor: auto;
  }
`

const SnsLoginContainer = styled.div`

  h4 {
    margin: 0 0 25px;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
  }
  h4::before {
    content: '';
    flex-grow: 1;
    background-color: #C6C6C6;
    height: 1px;
    margin-right: 15px;
  }
  h4::after {
    content: '';
    flex-grow: 1;
    background-color: #C6C6C6;
    height: 1px;
    margin-left: 15px;
  }
`

const SnsLoginList = styled.ul`
  display: flex;
  grid-gap: 16px;
  align-items: center;
  justify-content: center;
`

const SnsLoginButtons = styled.li`
`

const GoogleLoginButton = styled.button`
  background: url(/assets/images/login_google.svg) 0% 0%/cover no-repeat;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
`

const KakaoLoginButton = styled(GoogleLoginButton)`
  background: url(/assets/images/login_kakao.svg) 0% 0%/cover no-repeat;
`

const AppleLoginButton = styled(GoogleLoginButton)`
  background: url(/assets/images/login_apple.svg) 0% 0%/cover no-repeat;
`


/* React Components */
const LoginPage = () => {
  const navigate = useNavigate();

	const [userInputs, setUserInputs] = useState({
    id: '',
    pw: ''
  });
  const { id, pw } = userInputs;
  const [inputHide, setInputHide] = useState('hide')
	const [idSave, setIdSave] = useState(0)

  const loginHandler = (): void => {
    axios.post(
      'https://api.bbig.co.kr/api/login',
      {
        id: id,
        password: pw
      },
    )
    .then(res=>{
      if (res.data.success === true){
        alert('로그인 성공')
      }
      else {
        alert('로그인 실패')
      }
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const signUpHandler = (): void => {
    navigate('/agree')
  }
	
	return (
		<BaseForm>
      <LoginBannerLogo src="/assets/images/common/main_logo.svg" alt="로고"/>
      <LoginInputContainer>
        <InputWrapper><TextInput name='id' placeHolder='아이디를 입력하세요.' inputs={ userInputs } setInputsState={ setUserInputs }>''</TextInput></InputWrapper>
        <InputWrapper elements='button'><PwInput name='pw' placeHolder='비밀번호를 입력하세요.' inputs={ userInputs } show={ inputHide } setInputsState={setUserInputs} setInputHide={setInputHide}>''</PwInput></InputWrapper>
      </LoginInputContainer>
      <CheckBoxMolecule margin="14px 0 36px 0" checkBoxHandler={ () => {setIdSave(1-idSave)} } active={ idSave }>
        아이디 저장
      </CheckBoxMolecule>
      <ButtonContainer>
        <Button width="100%" handler={ () => loginHandler() }>로그인</Button>
        <Button variant='white' width="100%" handler={ () => signUpHandler() }>회원가입</Button>
      </ButtonContainer>
      <UserFindContainer>
        <UserFind to='#'>아이디 찾기</UserFind>
        <PwFind to='#'>비밀번호 찾기</PwFind>
      </UserFindContainer>
      <SnsLoginContainer>
        <h4>SNS로그인</h4>
        <SnsLoginList>
          <SnsLoginButtons>
            <GoogleLoginButton></GoogleLoginButton>
          </SnsLoginButtons>
          <SnsLoginButtons>
            <KakaoLoginButton></KakaoLoginButton>
          </SnsLoginButtons>
          <SnsLoginButtons>
            <AppleLoginButton></AppleLoginButton>
          </SnsLoginButtons>
        </SnsLoginList>
      </SnsLoginContainer>
		</BaseForm>
	)
}

export default LoginPage