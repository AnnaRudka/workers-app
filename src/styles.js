import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
`;

export const Section = styled.section`
  width: 50%;
  height: 100vh;
  border-right: 1px solid #dbdbdb;
  background-color: #ffffff;
  .section-header {
    padding: 15px;
    border-bottom: 1px solid #dbdbdb;
    @media (max-width: 515px) {
      min-height: 90px;
    }
  }
  .section-content {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
  .letter-card {
    width: 33%;
    padding: 10px 20px;
    text-align: left;
    @media (max-width: 767px) {
      width: 100%;
    }
    @media (min-width: 767px) and (max-width: 1023px) {
      width: 50%;
    }
  }
  ul {
    list-style: none;
  }
  li {
    padding: 5px 0;
  }
  label {
    font-size: 12px;
    padding: 5px 10px;
  }
  .empty-message {
    padding: 20px;
    text-align: center;
  }
  span {
    font-size: 12px;
  }
  .active {
    color: blue;
  }
  .unactive {
    color: black;
  }
`;
