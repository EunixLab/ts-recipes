import { useState, useEffect } from "react";

import "@/assets/scss/components/SearchBar.scss";

type Props = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState("");

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(input);
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  // ✅ 삭제 버튼 클릭
  const handleClear = () => {
    setInput("");
    onSearch(""); // 즉시 반영
  };

  return (
    <div className="search-wrap">
      <input
        type="text"
        placeholder="레시피 검색 (제목, 셰프)"
        value={input}
        onChange={e => setInput(e.target.value)}
        className="search"
      />

      {/* ✅ 값 있을 때만 노출 */}
      {input && (
        <button className="search__clear" onClick={handleClear}> ✕ </button>
      )}
    </div>
  );
}