import Image from "next/image";
import { useState, useEffect } from "react";
import readingGlasses from "@/public/Search.svg";
import styles from "./search.module.css";

function Search({ setSearch }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    setSearch(inputValue);
  }, [inputValue]);

  const handleClick = () => {
    setInputValue("");
  };

  return (
    <div className={styles.MainSearch}>
      <input
        value={inputValue}
        onChange={handleChange}
        className={styles.searchBar}
        type="text"
        placeholder="링크를 검색해 보세요."
      />
      {inputValue && (
        <Image
          width={24}
          height={24}
          alt="close"
          src={"/close.svg"}
          onClick={handleClick}
          className={styles.closeImage}
        />
      )}
      <Image
        className={styles.readingGlasses}
        src={readingGlasses}
        alt="readingGlasses"
      />
    </div>
  );
}

export default Search;
