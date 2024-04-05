import { Container, Title, Button } from "./deleteModalStyledComponent";
import { deleteFolder } from "@/components/api/Api";
import { TokenContext } from "@/components/providers/authProvider";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function DeleteModal({ currentFolderName, onClick, folderId }) {
  let { token } = useContext(TokenContext);
  const router  = useRouter();
  const handleClick = () => {
    deleteFolder(token, folderId);
    onClick(false);
    router.push(`/shared/${folderId}`);
  };
  return (
    <Container>
      <Title>폴더 삭제</Title>
      <span>{currentFolderName}</span>
      <Button onClick={handleClick}>
        <Title>삭제하기</Title>
      </Button>
    </Container>
  );
}
