import react from "react"
import AppHeader from "../../components/Common/AppHeader";
import BaseForm from "./../../components/baseForm"
import styled from '@emotion/styled'

let Wrapper = styled.div({
    width: "100%",
    minHeight: "100vh",
    height: "100%",
    backgroundColor: "#eaeaea",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});
const Agree = () => {
    return (
        <>

            <BaseForm>
                <AppHeader isBack={true} title={"약관동의"} />
            </BaseForm>

        </>
    )

}


export default Agree;