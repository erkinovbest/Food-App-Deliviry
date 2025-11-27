import styled from 'styled-components';

export const StyledLayoutWrapper = styled.div`
  position: relative;

  .content {
    overflow: hidden;
    min-height: 100vh;
    padding-block: 32px;
    padding-left: 280px;
    background-color: #f3f3f7;
    transition: padding-left 0.3s ease;
  }

  @media (max-width: 800px) {
    .content {
      padding-left: ${(props) => (props.$openHeaderDashboard ? '280px' : '80px')};
    }
  }
`;

export const StyleHeaderDashboard = styled.div`
  position: fixed;
  width: 280px;
  padding: 20px;
  height: 100%;
  z-index: 1000;
  background-color: #fff;
  transition: width 0.3s ease;

  img {
    cursor: pointer;
    margin: 22px auto 20px auto;
    display: block;
    width: 150px;
    height: 150px;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  .header-nav {
    padding: 30px 10px;
  }

  .header-nav ul {
    list-style: none;
    padding: 0;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .header-nav ul li {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: background 0.2s ease;
  }

  .header-nav ul li a {
    display: flex;
    gap: 15px;
    align-items: center;
    text-decoration: none;
    color: black;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .header-nav ul li:hover {
    background-color: #f0f0f0;
  }

  .header-nav ul li.active {
    background-color: #9ae6b4;
    color: #065f46;
  }

  .add-menus {
    background-color: #00b074;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-items: center;
    gap: 10px;
    transition: background 0.3s ease;
  }

  .add-menus img {
    width: 100px;
    height: 90px;
    margin-bottom: 20px;
    object-fit: cover;
  }

  #text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #fff;
  }

  #text button {
    background-color: #fff;
    color: #000;
    width: 150px;
    height: 50px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  #text button:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 800px) {
    width: ${(props) => (props.$openHeaderDashboard ? '280px' : '80px')};
    padding: 10px;

    img {
      width: ${(props) => (props.$openHeaderDashboard ? '150px' : '65px')};
      height: ${(props) => (props.$openHeaderDashboard ? '150px' : '65px')};
      margin-left: auto;
      margin-right: auto;
    }

    .header-nav ul li {
      padding-left: ${(props) => (props.$openHeaderDashboard ? '10px' : '0')};
      justify-content: ${(props) => (props.$openHeaderDashboard ? 'flex-start' : 'center')};
    }

    .header-nav ul li a {
      justify-content: ${(props) => (props.$openHeaderDashboard ? 'flex-start' : 'center')};
    }

    .add-menus img {
      width: ${(props) => (props.$openHeaderDashboard ? '100px' : '60px')};
      height: ${(props) => (props.$openHeaderDashboard ? '90px' : '50px')};
      margin-bottom: ${(props) => (props.$openHeaderDashboard ? '20px' : '10px')};
    }

    #text button {
      width: ${(props) => (props.$openHeaderDashboard ? '150px' : '50px')};
      height: 40px;
      font-size: ${(props) => (props.$openHeaderDashboard ? '16px' : '12px')};
      padding: 5px;
    }
  }
`;
