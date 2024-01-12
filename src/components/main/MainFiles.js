import TimeAgo from "./MainFileTimeAgo";
import STAR_IMAGE from "../../assets/star.svg";
import KEBAB_IMAGE from "../../assets/kebab.svg";
import TEMP_IMAGE from "../../assets/logo.svg";

function File({ file }) {
  let year;
  let month;
  let date;
  let editedTime;
  if (10 < file.id) {
    // 전체 데이터
    const { created_at, url, title, description, image_source } = file;

    const handleClick = () => {
      window.open(url, "_blank");
    };

    year = new Date(created_at).getFullYear();
    month = new Date(created_at).getMonth();
    date = new Date(created_at).getDate();
    editedTime = year + "-" + (month + 1) + "-" + date;

    return (
      <div className="File" onClick={handleClick}>
        <div className="item01">
          <img className="fileImage"
            src={image_source === null ? TEMP_IMAGE : image_source}
            alt={title}
          />
        </div>
        <div className="item02">
          <img className="kebab" src={KEBAB_IMAGE} alt="" />
          <TimeAgo className="timeAgo" time={created_at} />
          <div className="description">{description}</div>
          <div className="editTime">{editedTime}</div>
        </div>
      </div>
    );
  } else {
    //즐겨찾기 데이터
    const { url, title, description, imageSource, createdAt } = file;
    const handleClick = function () {
      window.open(url, "_blank");
    };
    year = new Date(createdAt).getFullYear();
    month = new Date(createdAt).getMonth();
    date = new Date(createdAt).getDate();
    editedTime = year + "-" + (month + 1) + "-" + date;

    return (
      <div className="File" onClick={handleClick}>
        <img className="star" src={STAR_IMAGE} alt="" />
        <div className="item01">
          <img
            src={imageSource === undefined ? TEMP_IMAGE : imageSource}
            alt={title}
          />
        </div>
        <div className="item02">
          <img className="kebab" src={KEBAB_IMAGE} alt="" />
          <TimeAgo className="timeAgo" time={createdAt} />
          <div className="description">{description}</div>
          <div className="editTime">{editedTime}</div>
        </div>
      </div>
    );
  }
}

export default function MainFiles({ folders }) {
  return (
    <div className="MainFiles">
      <div className="files">
        {folders.map((folder) => (
          <File file={folder} />
        ))}
      </div>
    </div>
  );
}
