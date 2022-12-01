import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LoginBannerLogo = styled.img`
	margin: 0 auto;
	display: block;
	width: 98px;
	height: 141px;
`

export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 56px;
`

// const CheckBoxContainer = styled.div`
//   margin: 14px 0 36px 0;
// `

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 14px;
`

export const UserFindContainer = styled.div`
  margin-bottom: 56px;
`

export const UserFind = styled(Link)`
  font-weight: 400;
  font-size: 13px;
  color: #353535;
  margin-right: 8px;
`

export const PwFind = styled(UserFind)`
  &::before{
    content: 'l';
    color: #353535;
    margin-right: 8px;
    cursor: auto;
  }
`

export const SnsLoginContainer = styled.div`

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

export const SnsLoginList = styled.ul`
  display: flex;
  grid-gap: 16px;
  align-items: center;
  justify-content: center;
`

export const SnsLoginButtons = styled.li`
`

export const GoogleLoginButton = styled.button`
  background: url(/assets/images/login_google.svg) 0% 0%/cover no-repeat;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
`

export const KakaoLoginButton = styled(GoogleLoginButton)`
  background: url(/assets/images/login_kakao.svg) 0% 0%/cover no-repeat;
`

export const AppleLoginButton = styled(GoogleLoginButton)`
  background: url(/assets/images/login_apple.svg) 0% 0%/cover no-repeat;
`