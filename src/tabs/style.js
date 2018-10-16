import styled from "styled-components";

export const Tab = styled.button`
  font-size: 28px;
  color: ${props => (props.disabled ? "#ffffff" : "black")};
  background-color: ${props => (props.disabled ? "#515151" : "#ffffff")};
  border: none;
  outline: none;
  border-radius: ${props => props.disabled && "25px"};
  padding-top: ${props => props.disabled && "5px"};
  padding-bottom: ${props => props.disabled && "5px"};
  padding-right: ${props => props.disabled && "15px"};
  padding-left: ${props => props.disabled && "15px"};
`;
export const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
