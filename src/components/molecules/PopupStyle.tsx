import styled from "@emotion/styled";

export const PopupContainer = styled.div`
    width: calc(100% + 26px);
    height: 100%;
    position: absolute;
    top: 0;
    left: -13px;
    z-index: 99;
`

export const PopupBackground = styled.div`
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
`

export const PopupBox = styled.div`
    position: absolute;
    width: 390px;
    height: 215px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px 2px rgb(162 162 162 / 25%);
    border-radius: 8px;
`

export const PopupInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PopupPhraseContainer = styled.div`
`

export const PopupTitleWrapper = styled.div`
    margin-bottom: 22px;
    h3 {    
        font-size: 22px;
        font-weight: 600;
    }
`

export const PopupContentWrapper = styled.div`
`
