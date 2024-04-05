import { Container, Title, Input, Button } from "@/components/modal/UI/modalStyledComponents";
import { changeFolderName } from "@/components/api/Api";
import { TokenContext } from "@/components/providers/authProvider";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

export default function ChangeNameModal({ onClick, folderId }) {
  const [inputValue, setInputValue] = useState("");
  let { token } = useContext(TokenContext);
  const router = useRouter();
  const handleClick = () => {
    if(inputValue) {
      changeFolderName(folderId, inputValue, token);
      onClick(false)
      router.push(`/shared/${folderId}`)
    } else {
      alert('폴더이름을 작성해주세요!')
    }
    
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
