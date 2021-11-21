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
  overflow-y: "scroll";
  border-right: 1px solid #dbdbdb;
  background-color: #ffffff;
  .section-header {
    padding: 15px;
    border-bottom: 1px solid #dbdbdb;
  }
  .section-content {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
  .letter-card {
    width: 25%;
    padding: 15px;
    text-align: left;
  }
  ul {
    list-style: none;
  }
  form {
    font-size: 12px;
    padding: 5px 10px;
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
