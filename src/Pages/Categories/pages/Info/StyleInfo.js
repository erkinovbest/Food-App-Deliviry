import styled from 'styled-components';

export const StyleCategoryInfoo = styled.div`
  .continer {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 16px;
  }

  @media (max-width: 600px) {
    .continer {
      flex-direction: column;
      text-align: center;
      gap: 12px;
      padding: 12px;
    }
  }
`;
