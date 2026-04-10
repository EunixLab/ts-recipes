import { useMemo, useState } from "react";
import { recipes } from "@/data/recipes";
import FilterBar from "@/components/FilterBar";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  
  type Filter = {
    category: string | null;
    chef: string | null;
  };
  
  const initialFilter: Filter = {
    category: null,
    chef: null,
  };
  
  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [keyword, setKeyword] = useState("");

  const resetFilter = () => {
    setFilter(initialFilter);
  };
  // recipes 기반으로 자동 생성
  const categoryOptions = useMemo( () => {
    return [...new Set(recipes.flatMap(r => r.category))];
  }, []);

  const chefOptions = useMemo( () => {
    return [...new Set(recipes.flatMap(r => r.chef))];
  }, []);

  // 필터 적용  
  const filteredRecipes = recipes.filter(r => {
     // 검색
    const matchKeyword =
      r.title.toLowerCase().includes(keyword.toLowerCase()) ||
      r.chef.toLowerCase().includes(keyword.toLowerCase());

    if (!matchKeyword) return false;

    //필터
    if (filter.category && !r.category.includes(filter.category)) return false;
    if (filter.chef && r.chef !== filter.chef) return false;
    return true;
  });

  return (
    <div>
      <SearchBar onSearch={setKeyword} />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        categoryOptions={categoryOptions}
        chefOptions={chefOptions}
        onReset={resetFilter}
      />

      <div className="recipe-list">
        {filteredRecipes.map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      </div>
    </div>
  );
}