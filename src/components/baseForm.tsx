import react from "react"
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

let AppWrapper = styled.div({
    width: "100%",
    maxWidth: "500px",
    minHeight: "100vh",
    height: "100%",
    backgroundColor: "#fff"
});

const BaseForm = ({children}: any) => {
    return <>
        <Wrapper>
            <AppWrapper>
                {children}
            </AppWrapper>
        </Wrapper>
    </>;
};
export default BaseForm;