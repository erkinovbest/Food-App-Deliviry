import styled from 'styled-components';
import signInBg from '../../assets/food.jpg';

export const StyleSignIn = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'curive';
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: url(${signInBg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .sign-in-nav {
    width: 400px;
    max-width: 90%;
    margin-top: 145px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;

    span {
      color: red;
      font-weight: 500;
    }
  }

  .form {
    width: 100%;
    border-radius: 12px;
    padding: 24px;
    background-color: #fff;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  .form-nav {
    padding: 20px 0 0 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
  }

  @media (max-width: 800px) {
    .sign-in-nav {
      width: 100%;
      margin-top: 120px;
      padding: 0 16px;
    }

    .form {
      padding: 20px;
    }

    .inputs {
      gap: 16px;
    }
  }
`;
