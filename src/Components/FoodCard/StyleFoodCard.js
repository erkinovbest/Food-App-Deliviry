import styled from 'styled-components';

export const StyleFoodCard = styled.div`
  margin-top: 20px;
  background-color: ${(props) =>
    props.isSpeacial
      ? '#fff'
      : props.isFavourite
      ? '#fff'
      : props.isFoodCard
      ? '#fbcce6'
      : '#fff'};
  width: 270px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 20%;
    object-fit: cover;
    margin-bottom: 12px;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  img:hover {
    transform: scale(1.05);
    opacity: 0.95;
  }

  h2 {
    margin: 8px 0;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }

  p {
    color: #666;
    margin-bottom: 16px;
    text-align: center;
  }

  span {
    color: green;
    font-weight: bold;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: auto;
  }

  #unicBtn {
    position: relative;
    left: 105px;
  }

  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .btn button {
    width: 40px !important;
    height: 36px !important;
    min-width: 30px !important;
    border-radius: 6px;
    padding: 0 !important;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .btn button:hover {
    background-color: #e0e0e0;
  }

  .btn p {
    font-size: 12px;
    color: #333;
    margin-top: 5px;
  }

  .quontity {
    background-color: red;
    padding: 8px 12px;
    border-radius: 8px;
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quontity span {
    color: #fff;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    padding: 12px;

    img {
      width: 120px;
      height: 120px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }

    #unicBtn {
      left: 80px;
    }

    .quontity {
      top: 8px;
      right: 8px;
      padding: 6px 10px;
    }
  }
`;
