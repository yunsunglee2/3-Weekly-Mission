import Folder from "./addLinkFolder";
import styles from '@/components/modal/addLink/addLinkModal.module.css'

function Folders({ folders }) {
    return (
      <div className={styles.Folders}>
        {folders?.map((folder) => {
          return (
            <Folder
              key={folder.id}
              title={folder.name}
              linksCount={folder.link_count}
              folderId={folder.id}
            ></Folder>
          );
        })}
      </div>
    );
  }
  export default Folders;