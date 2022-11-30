import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./agreeStyles"
import AppHeader from "../../components/molecules/AppHeader";
import BaseForm from "../../components/molecules/BaseForm";
import CheckBoxMolecule from "../../components/molecules/CheckBoxMolecule";
import Button from "../../components/atoms/Button";
import LinkArrow from "../../components/atoms/LinkArrow";

const Agree = () => {
    const navigate = useNavigate();

    const [isCheck, setIsCheck] = useState([0, 0])
    const [isCheckAll, setIsCheckAll] = useState(0)
    const checkHandler = (idx: number) => {
        setIsCheck(isCheck.map((elem, i) => i === idx ? 1-elem : elem))
    }
    const checkAllHandler = () => {
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

    const nextBtnHandler = () => {
        if (isCheckAll === 1) {
            navigate('/signIn')
        }
        else {
            alert('필수 항목에 동의가 필요합니다.')
        }
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
                    <CheckBoxMolecule margin="22px 0 24px 0" checkBoxHandler={ () => checkHandler(0) } active={ isCheck[0] } checkBoxMargin="10px">
                        이용약관 동의 (필수)
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.600016 1.34784e-06L4.62221e-08 0.562518L5.79997 6L-9.04498e-07 11.4375L0.600015 12L7 6L0.600016 1.34784e-06Z" fill="#A8A8A8"/>
                            </svg>
                    </CheckBoxMolecule>
                    <CheckBoxMolecule checkBoxHandler={ () => checkHandler(1) } active={ isCheck[1] } checkBoxMargin="10px">
                        개인정보 수집 및 이용동의 (필수)
                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.600016 1.34784e-06L4.62221e-08 0.562518L5.79997 6L-9.04498e-07 11.4375L0.600015 12L7 6L0.600016 1.34784e-06Z" fill="#A8A8A8"/>
                            </svg>
                    </CheckBoxMolecule>
                </S.AgreeCheckContainer>
                <S.AgreeButtonWrapper>
                    <Button width="100%" handler={ () => nextBtnHandler() }>다음</Button>
                </S.AgreeButtonWrapper>
            </BaseForm>

        </>
    )

}


export default Agree;