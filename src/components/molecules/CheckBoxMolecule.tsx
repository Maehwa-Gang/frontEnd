/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import CheckBox from "../atoms/CheckBox"
import LinkArrow from "../atoms/LinkArrow"

type CheckBoxContainerType = {
    margin: string
}

const CheckBoxContainer = styled.div<CheckBoxContainerType>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${(props) => props.margin}    
`

interface CheckBoxMoleculeProps {
    children: any,
    margin?: string,
    checkBoxHandler: any,
    active: number,
    checkBoxMargin?: string,
}

interface CheckBoxWithArrowButtonMoleculeProps extends CheckBoxMoleculeProps {
    arrowHandler: any
}

const CheckBoxMolecule = ({children, margin, checkBoxHandler, active, checkBoxMargin}: CheckBoxMoleculeProps) => {

    return (
        <CheckBoxContainer margin={margin ? margin : '0'}>
            <label onClick={ () => checkBoxHandler()} style={{display:'block'}}>
                <CheckBox active={ active } margin={checkBoxMargin}>{children}</CheckBox>
            </label>
        </CheckBoxContainer>
    )
}

const CheckBoxWithArrowButtonMolecule = ({children, margin, checkBoxHandler, active, checkBoxMargin, arrowHandler}: CheckBoxWithArrowButtonMoleculeProps) => {

    return (
        <CheckBoxContainer margin={margin ? margin : '0'}>
            <label onClick={ () => checkBoxHandler()} style={{display:'block'}}>
                <CheckBox active={ active } margin={checkBoxMargin}>{children}</CheckBox>
            </label>
            <LinkArrow handler={ arrowHandler }></LinkArrow>
        </CheckBoxContainer>
    )
}

export { CheckBoxMolecule, CheckBoxWithArrowButtonMolecule }