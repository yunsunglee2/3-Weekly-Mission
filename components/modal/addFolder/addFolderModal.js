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
import { useRouter } from "next/navigation";

export default function AddFolderModal({ folder, isSubtext, onClick }) {
  const { token } = useContext(TokenContext);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleClick = () => {
    if (inputValue) {
      addFolder(token, inputValue);
      onClick(false)
      router.push('/shared/0')
    } else {
      alert('폴더명을 입력해주세요.')
    }
    
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
