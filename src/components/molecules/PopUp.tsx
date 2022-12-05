/** @jsxImportSource @emotion/react */
import { useAppDispatch, useAppSelector } from '../../store/config'
import { setFlag, setPhrase } from '../../store/slices/popupSlice'
import { Button, PopupButtonWrapper } from '../atoms/Button'
import * as S from './PopupStyle'

const Popup = () => {

    const dispatch = useAppDispatch();
    const popup = useAppSelector((state) => state.popup);

    const popupHandler = (title: string, content: string) => {
        
        dispatch(setFlag(0));
        dispatch(setPhrase({title, content}));
    }
    
    return (
        <S.PopupContainer>
            <S.PopupBackground></S.PopupBackground>
            <S.PopupBox>
                <S.PopupInfoContainer>
                    <S.PopupPhraseContainer>
                        <S.PopupTitleWrapper>
                            <h3>{popup.phrase.title}</h3>
                        </S.PopupTitleWrapper>
                        <S.PopupContentWrapper>
                            <span>{popup.phrase.content}</span>
                        </S.PopupContentWrapper>
                    </S.PopupPhraseContainer>
                    <PopupButtonWrapper>
                        <Button handler={() => popupHandler('', '')}>확인</Button>
                    </PopupButtonWrapper>
                </S.PopupInfoContainer>
            </S.PopupBox>
        </S.PopupContainer> 
    )
}

export default Popup