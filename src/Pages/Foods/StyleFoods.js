import styled from 'styled-components';

export const StyleFoods = styled.div`
  .foods-header {
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .food-cards-nav {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    width: 100%;
  }

  .food-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .defualtImage {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .defualtImage img {
    margin-top: 100px;
    width: 400px;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    transition: transform 0.25s ease, opacity 0.25s ease;
    opacity: 0.95;
  }

  .defualtImage img:hover {
    transform: scale(1.02);
    opacity: 1;
  }

  #def {
    width: 550px;
    height: 330px;
    max-width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 480px) {
    .food-cards {
      flex-direction: column;
      gap: 12px;
    }

    .foods-header {
      flex-direction: column;
      align-items: flex-start;
      font-size: 14px;
      gap: 20px;
    }

    .foods-header p {
      margin-top: 10px;
    }

    .foods-header button {
      font-size: 12px;
      margin-top: 10px;
      width: 150px;
      height: 35px;
      padding: 4px 8px;
    }

    #special {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .defualtImage img {
      width: 100%;
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }

    #def {
      width: 100%;
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;
