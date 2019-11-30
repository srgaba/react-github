import styled from 'styled-components';

export const Loading = styled.div`

`;

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;

    a {
        text-decoration: none;
        margin-left: 80%;
    }
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: 7px;
        width: 120px;
        border-radius: 60px;
    }

    h1{
        margin-top: 10px;
    }

    p{
        margin-top: 10px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li {
        margin-top: 10px;
        display: flex;
        padding: 15px 10px;
        border: 1.5px solid #eee;
        border-radius: 4px;
    }

    div{
        flex: 1;
    }

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    a{
        text-decoration: none;
        color: #6A5ACD;
        margin-left: 5px;
    }


    p{
        margin-left: 5px;
    }
`;
