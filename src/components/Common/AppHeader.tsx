import react from "react"
import styled from '@emotion/styled'

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
    isBack: boolean
}

const AppHeader = ({ title, isBack }: AppHeaderProps) => {
    return (
        <TitleHeader>
            {isBack && <HistoryBackImg src="/assets/images/common/icon_back.svg" />}
            <TitleText>{title}</TitleText>
        </TitleHeader>
    )
}


export default AppHeader;