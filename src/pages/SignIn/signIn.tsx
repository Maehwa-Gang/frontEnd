/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from '@emotion/styled';
import BaseForm from "../../components/molecules/BaseForm"
import AppHeader from "../../components/molecules/AppHeader"

const SignIn = () => {

    return (
        <BaseForm>
            <AppHeader isBack={true} title={"회원가입"}></AppHeader>
        </BaseForm>
    )
}

export default SignIn