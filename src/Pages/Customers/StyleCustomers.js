import styled from 'styled-components';

export const StyleCustomers = styled.div`
  width: 100%;

  .orders-search {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 16px;
  }

  .orders-search input {
    background-color: #fff;
    height: 38px;
    width: 100%;
    max-width: 860px;
    box-sizing: border-box;
    padding: 0 10px;
    border-radius: 6px;
  }

  table thead th:first-child {
    border-top-left-radius: 12px;
  }

  table thead th:last-child {
    border-top-right-radius: 12px;
  }

  .select {
    width: 68px;
  }

  .selectId {
    margin-right: 12px;
  }

  .shop {
    position: relative;
    display: inline-block;
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

  .img-with {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .img-with img {
    width: 100%;
    max-width: 450px;
    height: auto;
    transition: transform 0.25s ease, opacity 0.25s ease;
    opacity: 0.95;
  }

  .img-with img:hover {
    opacity: 1;
    transform: scale(1.02);
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .main-header {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 12px;
  }

  .order-header-btns input {
    height: 15px;
  }

  .orders-list {
    margin-top: 20px;
    width: 100%;
    overflow-x: auto;
  }

  .orders-list table {
    border-collapse: separate;
    border-spacing: 0 6px;
    width: 100%;
    min-width: 650px;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
  }

  table thead {
    background-color: #00b074;
    color: #fff;
  }

  table tbody {
    color: #000;
    background-color: #fff;
  }

  tbody tr {
    transition: background 0.2s ease;
  }

  tbody tr:hover {
    background-color: #f3f3f3;
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
    border: none;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  tbody td button:hover {
    opacity: 0.8;
  }

  thead th {
    padding: 20px;
  }

  /* RESPONSIVE */
  @media (max-width: 1200px) {
    .orders-search input {
      max-width: 600px;
    }
    .img-with img {
      max-width: 350px;
    }
    tbody td button {
      width: 105px;
    }
  }

  @media (max-width: 900px) {
    .orders-search input {
      max-width: 100%;
    }
    .main-header {
      flex-direction: column;
      align-items: flex-start;
    }
    .img-with img {
      max-width: 300px;
    }
  }

  @media (max-width: 600px) {
    .img-with img {
      max-width: 250px;
    }
    tbody td {
      padding: 12px;
    }
    thead th {
      padding: 12px;
    }
    tbody td button {
      width: 85px;
      height: 30px;
    }
  }
`;
