import react from "react"
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';

const TitleHeader = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
`
const TitleText = styled.span`
    font-size: 16px;
    font-weight: 500;
`

const HistoryBackImg = styled.img`
    cursor: pointer;
    position: absolute;
    left: 13px;
`

interface AppHeaderProps {
    title: String,
    isBack: boolean,
    fixedLocation?: string
}

const AppHeader = ({ title, isBack, fixedLocation = '-1' }: AppHeaderProps) => {
    const navigate = useNavigate();

    const backButtonHandler = () => {
        if (fixedLocation === '-1') {
            navigate(-1)
        }
        else {
            navigate(fixedLocation, {replace : true})
        }
    }


    return (
        <TitleHeader>
            {isBack && <HistoryBackImg onClick={() => backButtonHandler()} src="/assets/images/common/icon_back.svg" />}
            <TitleText>{title}</TitleText>
        </TitleHeader>
    )
}


export default AppHeader;