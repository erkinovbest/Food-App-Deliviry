import styled from 'styled-components';

export const StyleCategoryInfo = styled.div`
  .continer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .img-with {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 350px;
    gap: 12px;
  }

  .img-with button {
    margin-right: 70px;
    padding: 8px 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .img-with button:hover {
    opacity: 0.8;
  }

  #undefind {
    margin-top: 40px;
    width: 450px;
    height: 400px;
    object-fit: contain;
    opacity: 0.95;
    transition: opacity 0.25s ease;
  }

  #undefind:hover {
    opacity: 1;
  }

  @media (max-width: 800px) {
    .continer {
      justify-content: center;
      text-align: center;
      gap: 20px;
    }

    .img-with {
      margin-left: 0;
      margin-top: 40px;
      gap: 10px;
    }

    .img-with button {
      font-size: 11px;
      margin-right: 0;
      padding: 7px 12px;
    }

    #undefind {
      width: 100%;
      max-width: 330px;
      height: auto;
      margin-inline: auto;
    }

    .continer button {
      height: 36px;
      font-size: 12px;
    }
  }
`;
