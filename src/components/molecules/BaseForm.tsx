import react from "react"
import styled from '@emotion/styled'

let Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: center;
`;

let AppWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    min-height: 100vh;
    height: 100%;
    background-color: #fff;
    position: relative;
`;

let AppContainer = styled.div`
	width: calc(100% - 26px);
    height: 100%;
    min-height: 100vh;
    position: relative;
	margin: 0 auto;
	padding-top: 63px;
`

const BaseForm = ({ children }: {children: React.ReactNode}) => {
    return <>
        <Wrapper>
            <AppWrapper>
                <AppContainer>
                    {children}
                </AppContainer>
            </AppWrapper>
        </Wrapper>
    </>;
};

export default BaseForm;