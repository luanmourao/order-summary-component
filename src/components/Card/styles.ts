import styled from 'styled-components';

export const Container = styled.div`
  max-width: 450px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: whitesmoke;
  border-radius: 20px;
  box-shadow: 1px 35px 30px -20px #c4d5fc;

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  main {
    padding: 32px;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      color: var(--gray-title);
      font-weight: bolder;
      margin-bottom: 16px;
    }

    p {
      color: var(--gray-text);
    }

    .buttons a {
      text-decoration: none;
    }

    .buttons a:first-child {
      display: block;
      color: whitesmoke;
      font-weight: bold;
      padding: 12px;
      background-color: var(--button);
      border-radius: 12px;
      margin-bottom: 24px;
      box-shadow: 1px 25px 30px -20px var(--button);
    }

    .buttons a:first-child:hover {
      filter: brightness(1.3);
      transition: 400ms;
    }
    
    .buttons a:last-child {
      color: var(--gray-link);
      font-weight: bold;
      font-size: 14px;
      letter-spacing: -0.5px;
    }

    .buttons a:last-child:hover {
      text-decoration: underline;
    }
  }
`;