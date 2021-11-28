import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover{
      color: #666;
    }

    svg {
      margin-right: 4px;
    }

  }
`;

export const RepositoryInfo = styled.div`
  header{
    display: flex;
    align-items: center;
    margin-top: 60px;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }

    }

  }

  ul {

    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      //todo elemento li que é precedido por outro elemento li eu aplico um margin left
      & + li {
        margin-left: 80px;
      }

      strong{
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span{
        //adiciono um display block no span para usar o margin top
        display: block;
        margin-top: 4px;
        color: #6c6c80
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {

    background: #FFF;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    //Define o tempo da transicao
    transition: transform 0.2s;

    //efeito de transição hover
    &:hover{
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div{

      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;

      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

  }


`;
