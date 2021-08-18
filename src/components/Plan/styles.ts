import styled from 'styled-components';

export const Container = styled.div`
  height: 120px;
  background-color: #edf0f7;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 50px;
    width: 50px;
    margin-right: 22px;
  }

  div {
    margin-right: auto;
    text-align: left;

    h4 {
      color: var(--gray-title);
    }

    span {
      color: var(--gray-text);
    }
  }

  a {
    color: var(--button);
    font-weight: bold;
  }

  a:hover {
    filter: brightness(2);
    transition: 200ms;
  }
`;