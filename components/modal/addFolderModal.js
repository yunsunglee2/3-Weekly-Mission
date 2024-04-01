import styled from "styled-components";
import { addFolder } from "../api/Api";
import { useContext, useState } from "react";
import { TokenContext } from "../providers/authProvider";

const Title = styled.div`
  color: var(--Linkbrary-gray100, #373740);
  font-family: "Pretendard-regular";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Input = styled.input`
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Linkbrary-gray20, #ccd5e3);
  background: var(--Linkbrary-white, #fff);
`;

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  border: none;

  ${Title} {
    color: var(--Grey-Light, #f5f5f5);
    font-size: 16px;
    font-weight: 600;
  }
`;

const Container = styled.div`
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

const SubText = styled(Title)`
  color: var(--Linkbrary-gray60, #9fa6b2);
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

export default function AddFolderModal({ folder, isSubtext }) {
  const { token } = useContext(TokenContext);
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    addFolder(token, inputValue);
  };
  return (
    <Container>
      <Title>폴더 추가</Title>
      {isSubtext ? (
        <SubText>{folder}</SubText>
      ) : (
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="내용 입력"
        />
      )}
      <Button onClick={handleClick}>
        <Title>추가하기</Title>
      </Button>
    </Container>
  );
}
