import react from "react"
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom';


const TitleHeader = styled.div({
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    top: 0,
})
const TitleText = styled.span({
    fontSize: "16px",
    fontWeight: "500"
})

const HistoryBackImg = styled.img({
    cursor: "pointer",
    position: "absolute",
    left: "13px",
})

interface AppHeaderProps {
    title: String,
    isBack: Boolean,
    fixedLocation?: any,
}

const AppHeader = ({ title, isBack, fixedLocation = -1 }: AppHeaderProps) => {
    const navigate = useNavigate();

    return (
        <TitleHeader>
            {isBack && <HistoryBackImg onClick={() => navigate(fixedLocation)} src="/assets/images/common/icon_back.svg" />}
            <TitleText>{title}</TitleText>
        </TitleHeader>
    )
}


export default AppHeader;