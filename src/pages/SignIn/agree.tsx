import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import * as S from "./agreeStyles"
import AppHeader from "../../components/molecules/AppHeader";
import BaseForm from "../../components/molecules/BaseForm";
import { CheckBoxMolecule, CheckBoxWithArrowButtonMolecule } from "../../components/molecules/CheckBoxMolecule";
import { Button, ButtonWrapper } from "../../components/atoms/Button";

const Agree = () => {
    const navigate = useNavigate();

    const [isCheck, setIsCheck] = useState([0, 0])
    const [isCheckAll, setIsCheckAll] = useState(0)
    const checkHandler = (idx: number) => {
        setIsCheck(isCheck.map((elem, i) => i === idx ? 1-elem : elem))
    }
    const checkAllHandler = (): void => {
        if (isCheckAll === 1) {
            setIsCheckAll(0)
            setIsCheck(isCheck.map(elem => 0))
        }
        else {
            setIsCheckAll(1)
            setIsCheck(isCheck.map(elem => 1))
        }
    }
    useEffect(() => {
        if (isCheck.filter(elem => elem).length === 2) setIsCheckAll(1)
        else setIsCheckAll(0)
    }, [isCheck])

    const nextBtnHandler = (): void => {
        if (isCheckAll === 1) {
            navigate('/signIn')
        }
        else {
            alert('필수 항목에 동의가 필요합니다.')
        }
    }

    const [policies, setPolicies] = useState({
        title: '',
        content: ''
    });
    const {title, content} = {...policies}
    
    const policyButtonHandler = (idx: number): void => {
        if (idx === 1) {
            setPolicies({
                title: '이용약관',
                content: '약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용약관내용'
            })
        }
        else {
            setPolicies({
                title: '개인정보 수집',
                content: '개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집개인정보수집'
            })
        }
        document.body.style.overflow = 'hidden';
        navigate('tos');
    }


    return (
    <>
        <BaseForm>
            <AppHeader isBack={true} title={"약관동의"} />
            <S.TitleTextInfoContainer>
                <S.LogoTypeNoText src="/assets/images/common/logo_type_no_text.svg" />
                <S.TitleTextInfo><b>회원가입</b>을 위해<br />아래 <b>약관</b>을 확인해주세요.</S.TitleTextInfo>
            </S.TitleTextInfoContainer>
            <S.AgreeCheckContainer>
                <S.AgreeAllWrapper>
                    <CheckBoxMolecule checkBoxHandler={ () => checkAllHandler() } active={ isCheckAll } checkBoxMargin="10px">약관 전체동의</CheckBoxMolecule>
                </S.AgreeAllWrapper>
                <CheckBoxWithArrowButtonMolecule margin="22px 0 24px 0" checkBoxHandler={ () => checkHandler(0) } active={ isCheck[0] } checkBoxMargin="10px" arrowHandler={ () => policyButtonHandler(1)}>
                    이용약관 동의 (필수)
                </CheckBoxWithArrowButtonMolecule>
                <CheckBoxWithArrowButtonMolecule checkBoxHandler={ () => checkHandler(1) } active={ isCheck[1] } checkBoxMargin="10px" arrowHandler={ () => policyButtonHandler(2)}>
                    개인정보 수집 및 이용동의 (필수)
                </CheckBoxWithArrowButtonMolecule>
            </S.AgreeCheckContainer>
            <ButtonWrapper>
                <Button width="100%" handler={ () => nextBtnHandler() }>다음</Button>
            </ButtonWrapper>
        </BaseForm>
        <Outlet context={{ title, content }}></Outlet>
    </>
    )

}


export default Agree;