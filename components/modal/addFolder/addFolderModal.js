import { addFolder } from "../../api/Api";
import { useContext, useState } from "react";
import { TokenContext } from "../../providers/authProvider";
import {
  SubText,
  Title,
  Input,
  Button,
  Container,
} from "./addFolderStyledComponents";

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
