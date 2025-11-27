import styled from 'styled-components';

export const StyleOrderConfirm = styled.div`
  font-family: sans-serif;
  width: 100%;
  max-width: 340px;
  max-height: 500px;
  padding: 20px;
  height: auto;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  img {
    object-fit: cover;
    border-radius: 12px;
    width: 100%;
    height: 150px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.03);
    }

    @media screen and (max-width: 480px) {
      height: 120px;
    }
  }

  #container-main {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  #container-main h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;

    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  #container-main span {
    color: green;
    font-size: 1rem;
    font-weight: 600;

    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  button {
    margin-top: 30px;
    width: 100%;
    height: 40px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    background-color: #00b074;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background-color: #00995f;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
      height: 35px;
      padding: 8px;
    }
  }

  #cart-container {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media screen and (max-width: 768px) {
    padding: 16px;
  }

  @media screen and (max-width: 480px) {
    padding: 16px;
    border-radius: 10px;
  }
`;
