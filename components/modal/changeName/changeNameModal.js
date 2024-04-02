import { Container, Title, Input, Button } from "@/components/modal/UI/modalStyledComponents";
import changeFolderName from "../../api/Api";

import { useContext, useState } from "react";

export default function ChangeNameModal({ folderId }) {
  const [inputValue, setInputValue] = useState("");
  let { token } = useContext(TokenContext);
  const handleClick = () => {
    changeFolderName(folderId, inputValue, token);
  };
  return (
    <Container>
      <Title>폴더 이름 변경</Title>
      <Input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="유용한 팁"
      />
      <Button onClick={handleClick}>
        <Title>변경하기</Title>
      </Button>
    </Container>
  );
}
