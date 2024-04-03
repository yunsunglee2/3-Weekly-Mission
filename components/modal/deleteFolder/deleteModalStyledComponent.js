import styled from "styled-components";

export const Title = styled.div`
  color: var(--Linkbrary-gray100, #373740);
  font-family: "Pretendard-regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
  box-sizing: border-box;

  &::placeholder {
    width: 80%;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--Linkbrary-red, #ff5b56);
  border: none;

  ${Title} {
    color: var(--Grey-Light, #f5f5f5);
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
`;