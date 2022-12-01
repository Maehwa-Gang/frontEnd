/** @jsxImportSource @emotion/react */

import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { useState, useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import { Button, ButtonWrapper } from "../../components/atoms/Button"
import AppHeader from "../../components/molecules/AppHeader"
import BaseForm from "../../components/molecules/BaseForm"

const upModal = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0%);
    }
`

const downModal = keyframes`
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(100%);
    }
`

type PolicyContainerTypes = {
    modal: number
}

const PolicyContainer = styled.div<PolicyContainerTypes>`
    position: absolute;
    top: 0;
    z-index: 99;
    width: 100%;
    animation: ${(props)=> props.modal ? css`${upModal} .4s ease alternate forwards;` : css`${downModal} .4s ease alternate forwards;` } 
`

const PolicyContentWrapper = styled.div`

`


const Policy = () => {
    const navigate = useNavigate();

    const [modal, setModal] = useState(1);

    useEffect(()=>{
        return () => {
            document.body.removeAttribute("style");
        }
    }, [])

    type policiesProps = {
        title: string,
        content: string
    }
    const {title, content} = useOutletContext<policiesProps>();


    return (
        <PolicyContainer modal={modal}>
            <BaseForm>
                <AppHeader isBack={false} title={title} />
                <PolicyContentWrapper>
                    {content}    
                </PolicyContentWrapper>
                <ButtonWrapper>
                    <Button handler={ () => {
                        setModal(0);
                        setTimeout(() => {
                            navigate(-1)        
                        }, 400);
                    }}>
                        확인
                    </Button>
                </ButtonWrapper>
            </BaseForm>
        </PolicyContainer>
    )
}

export default Policy