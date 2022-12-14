/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from './loginStyles'
import BaseForm from "../../components/molecules/BaseForm";
import { CheckBoxMolecule } from "../../components/molecules/CheckBoxMolecule";
import { Button, ButtonWrapper } from "../../components/atoms/Button";
import { InputWrapper, TextInput, PwInput } from "../../components/atoms/Input";
import Popup from "../../components/molecules/Popup";
import { useAppDispatch, useAppSelector } from '../../store/config'
import { setFlag, setPhrase } from '../../store/slices/popupSlice'
import { loginUser } from "../../api/user/user";

/* React Components */
const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const popup = useAppSelector((state) => state.popup);

    const [userInputs, setUserInputs] = useState({
        id: '',
        pw: ''
    });
    const { id, pw } = userInputs;
    const [inputHide, setInputHide] = useState('hide')
    const [idSave, setIdSave] = useState(0)
    

    const loginApi = () => {
        const userData = {id: id, password: pw}
        loginUser(userData)
        .then(res=>{
            if (res.data.success === true){
                alert('로그인 성공')
            }
            else {
                popupHandler('로그인 실패', res.data.msg)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const loginHandler = (): void => {
        if (id === '' || pw === '') {
            popupHandler('로그인 실패', '아이디 또는 비밀번호를 확인하세요.');
        }
        else {
            loginApi()
        }
    }

    const signUpHandler = (): void => {
        navigate('/agree')
    }

    const popupHandler = (title: string, content: string): void => {
        dispatch(setFlag(1));
        dispatch(setPhrase({title, content}));
    }

    return (
        <>
            <BaseForm>
                <S.LoginBannerLogo src="/assets/images/common/main_logo.svg" alt="로고"/>
                <S.LoginInputContainer>
                    <InputWrapper><TextInput name='id' placeHolder='아이디를 입력하세요.' inputs={ userInputs } setInputsState={ setUserInputs }>''</TextInput></InputWrapper>
                    <InputWrapper elements='button'><PwInput name='pw' placeHolder='비밀번호를 입력하세요.' inputs={ userInputs } show={ inputHide } setInputsState={setUserInputs} setInputHide={setInputHide}>''</PwInput></InputWrapper>
                </S.LoginInputContainer>
                <CheckBoxMolecule margin="14px 0 36px 0" checkBoxHandler={ () => {setIdSave(1-idSave)} } active={ idSave }>
                    아이디 저장
                </CheckBoxMolecule>
                <S.ButtonContainer>
                    <Button width="100%" handler={ () => loginHandler() }>로그인</Button>
                    <Button variant='white' width="100%" handler={ () => signUpHandler() }>회원가입</Button>
                </S.ButtonContainer>
                <S.UserFindContainer>
                    <S.UserFind to='#'>아이디 찾기</S.UserFind>
                    <S.PwFind to='#'>비밀번호 찾기</S.PwFind>
                </S.UserFindContainer>
                <S.SnsLoginContainer>
                    <h4>SNS로그인</h4>
                    <S.SnsLoginList>
                        <S.SnsLoginButtons>
                            <S.GoogleLoginButton></S.GoogleLoginButton>
                        </S.SnsLoginButtons>
                        <S.SnsLoginButtons>
                            <S.KakaoLoginButton></S.KakaoLoginButton>
                        </S.SnsLoginButtons>
                        <S.SnsLoginButtons>
                            <S.AppleLoginButton></S.AppleLoginButton>
                        </S.SnsLoginButtons>
                    </S.SnsLoginList>
                </S.SnsLoginContainer>
                {
                    popup.flag ? <Popup/> : ''
                }
            </BaseForm>
                
        </>
    )
}

export default LoginPage