import { useState, useEffect } from "react";

type Props = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState("");

  // ✅ debounce 적용
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(input);
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);
 
  return (
    <input
      type="text"
      placeholder="레시피 검색 (제목, 셰프)"
      value={input}
      onChange={e => setInput(e.target.value)}
      className="search"
    />
  );
}