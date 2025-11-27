import styled from 'styled-components';

export const StyleCategories = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    gap: 16px;
  }

  .category-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;
    gap: 12px;
  }

  .defualtImage {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 24px;
  }

  .defualtImage img {
    width: 400px;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    opacity: 0.95;
    transition: opacity 0.25s ease;
  }

  .defualtImage img:hover {
    opacity: 1;
  }

  @media screen and (max-width: 480px) {
    header {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      font-size: 14px;
    }

    header button {
      margin-top: 10px;
      width: 210px;
      font-size: 11px;
    }

    .defualtImage {
      padding: 16px;
    }

    .defualtImage img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
`;
