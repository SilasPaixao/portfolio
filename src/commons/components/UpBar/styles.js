import { Typography } from "@mui/material";
import styled from "styled-components";

export const Bar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const LinkAdmin = styled(Typography)`
    display:block;
    padding-right: 10px;
    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`