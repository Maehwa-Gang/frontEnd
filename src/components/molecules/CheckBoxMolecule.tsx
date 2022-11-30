/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import CheckBox from "../atoms/CheckBox"

type CheckBoxContainerType = {
    margin: string
}

const CheckBoxContainer = styled.div<CheckBoxContainerType>`
    margin: ${(props) => props.margin}
`

interface CheckBoxMoleculeProps {
    children: any,
    margin?: string,
    checkBoxHandler: any,
    active: number,
    checkBoxMargin?: string
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

export default CheckBoxMolecule