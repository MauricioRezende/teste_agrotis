import styled from 'styled-components'

export const Container = styled.div`
    background-color: #17181F;
    color: #797A81;
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`

export const Header = styled.h1`
    margin: 0px;
    padding: 0px;
    color: #FFF;
    text-align: center;
    padding-bottom: 20px
`

export const Form = styled.form`
    .input {
        border: 0px;
        background: transparent;
        outline: 0;
        color: #fff;
        font-size: 18px;
        flex: 1;
        margin: 10px 0;
        width: 100%;

        label{
            color: #fff;
            &.Mui-focused{
                color: gray;
            }
        }

        & > div{
            &.Mui-focused{
                color: gray;
            }

            input {
                color: #fff;
            }  
            
            fieldset{
                border: solid 1px #a9a9a9 !important;
            }
        }
    }
    .button{
        margin-top: 10px;
        background-color: #00876e;
        &:hover{
            background-color: #00725c;
        }
    }

    .required{
        color: #AF2120;
        font-size: 13px ;
    }
`