import styled from 'styled-components';

export const StyleOrders = styled.div`
  width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .orders-search {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .input input {
    width: 100%;
    height: 45px;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: border 0.2s ease;

    &:focus {
      border-color: #00b074;
      outline: none;
    }
  }

  .card {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .shop {
    position: relative;
    display: inline-block;
  }

  .img-with {
    width: 100%;
    display: flex;
    justify-content: center;
    height: auto;
  }

  .img-with img {
    width: 450px;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  .shop .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: red;
    color: white;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 50%;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .main-header {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .orders-list {
    width: 100%;
    overflow-x: auto;
    margin-top: 20px;
  }

  .orders-list table {
    border-collapse: separate;
    border-spacing: 0 16px;
    width: 100%;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
  }

  table thead {
    background-color: #ffd900ff;
  }

  table thead th {
    padding: 16px 20px;
    border-top: 2px solid #ffd900;
    border-bottom: 2px solid #ffd900;
  }

  table thead th:first-child {
    border-top-left-radius: 12px;
  }

  table thead th:last-child {
    border-top-right-radius: 12px;
  }

  tbody td {
    padding: 20px;
    vertical-align: middle;
  }

  tbody td button {
    background-color: #fff1ee;
    color: #ff6d4c;
    height: 35px;
    width: 125px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background-color: #ffe6e0;
    }
  }

  .order-special {
    width: 100%;
    margin-right: 12px;
  }

  @media screen and (max-width: 480px) {
    .main-header {
      flex-direction: column;
      gap: 10px;
    }

    .order-header-text {
      font-size: 12px;
    }

    .order-header-btns button {
      font-size: 12px;
      margin-top: 10px;
      width: 150px;
      height: 35px;
    }

    .orders-nav {
      margin-right: 0;
    }

    .order-special {
      margin-right: 0;
    }

    .orders-search {
      flex-direction: column;
      gap: 10px;
    }

    .input {
      width: 100%;
    }

    .profile {
      margin-top: 20px;
    }

    .img-with img {
      width: 100%;
      max-width: 300px;
      height: auto;
    }
  }
`;
