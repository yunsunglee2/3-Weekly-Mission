import Image from "next/image";
import { useState, useEffect } from "react";
import readingGlasses from "@/public/Search.svg";
import styles from './mainSearch.module.css';

function MainSearch({ setSearch }) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(()=>{
    setSearch(inputValue);
  }, [inputValue])

  const handleClick = () => {
    setInputValue("");
  }

  return (
    <div className={styles.MainSearch}>
      <input
        value={inputValue}
        onChange={handleChange}
        className={styles.searchBar}
        type="text"
        placeholder="링크를 검색해 보세요."
      />
      {inputValue && <button className="deleteButton" onClick={handleClick}>x</button>}
      <Image
        className={styles.readingGlasses}
        src={readingGlasses}
        alt="readingGlasses"
      />
    </div>
  );
}

export default MainSearch;