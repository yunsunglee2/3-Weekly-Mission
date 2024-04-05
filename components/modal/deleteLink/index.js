import {
  Container,
  Title,
  Button,
} from "@/components/modal/deleteFolder/deleteModalStyledComponent";
import { deleteLink } from "@/components/api/Api";
import { TokenContext } from "@/components/providers/authProvider";
import { useRouter } from "next/router";
import { useContext } from "react";
import { clickedFolderContext } from "@/components/main";
import styles from "@/components/modal/deleteLink/deleteLink.module.css";

export default function DeleteLinkModal({ isModalOpen, links, onClick }) {
  let { token } = useContext(TokenContext);
  let { clickedFolderList } = useContext(clickedFolderContext);
  const router = useRouter();
  const handleClick = () => {
    onClick(false);
    isModalOpen(false);
    clickedFolderList.map((clickedFolderId) =>
      deleteLink(token, clickedFolderId)
    );
    router.push("/shared/0");
  };
  const filteredLinks = links.filter((link) =>
    clickedFolderList.includes(link.id)
  );
  return (
    <Container>
      <Title>링크 삭제</Title>
      {filteredLinks.map((filterdLink) => (
        <span className={styles.urls} key={filterdLink.id}>
          {filterdLink.url}
        </span>
      ))}
      <Button onClick={handleClick}>
        <Title>삭제하기</Title>
      </Button>
    </Container>
  );
}
