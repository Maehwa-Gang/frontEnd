import react from "react"
import AppHeader from "../../components/Common/AppHeader";
import BaseForm from "./../../components/baseForm"
import styled from '@emotion/styled'

const TitleTextInfo = styled.div({
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "40px",
    padding: "0 20px"
})

const LogoTypeNoText = styled.img({
    maxWidth: "90px"
})

const TitleTextInfoTextBig = styled.h1({
    fontSize: "20px",
    lineHeight: "1.4",
    fontWeight: 300,
    marginTop: "30px"
})

const Agree = () => {
    return (
        <>

            <BaseForm>
                <AppHeader isBack={true} title={"약관동의"} />
                <TitleTextInfo>
                    <LogoTypeNoText src="/assets/images/common/logo_type_no_text.svg" />
                    <TitleTextInfoTextBig><b>회원가입</b>을 위해<br />아래 <b>약관</b>을 확인해주세요.</TitleTextInfoTextBig>
                </TitleTextInfo>
            </BaseForm>

        </>
    )

}


export default Agree;