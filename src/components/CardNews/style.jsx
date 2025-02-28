import styled from "styled-components";

const CardNewsWrapper = styled.section`
    min-height: 160px;
    width: 100%;
    background-color: #17171A;
    padding: 18px 20px;
    transition: all 0.1s;
    border: 1px solid #252529;

    &:hover{
        outline: 2px solid #E07B67;
        cursor: pointer;
        border-radius: 4px;
        transform: scale(1.01);
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Inter', sans-serif;

        span{
            color: #E07B67;
            font-size: 11px;
        }

        img{
            cursor: pointer;
            height: 18x;
            width: 18px;
            transition: all 0.3s;
            position: relative;
        
            &:hover{
               transform: scale(1.2);
            }
        }
    }

    h1{
        color: #FFFFFF;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 400;
        margin-top: 10px;
        font-size: 17px;
    }

    p{
        color: #AFABB6;
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        font-size: 15px;
        margin-top: 10px;
    }
`

export default CardNewsWrapper;