import styled from 'styled-components';

export const StyleOrderItem = styled.div`
  .header_nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
  }

  .header_nav h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }

  .header_nav p {
    font-size: 16px;
    margin: 0;
    color: #555;
  }

  @media screen and (max-width: 480px) {
    .header_nav {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 15px;
      gap: 8px;
    }

    .header_nav h2 {
      font-size: 20px;
    }

    .header_nav p {
      font-size: 15px;
    }
  }
`;
