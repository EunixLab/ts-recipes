import { useMemo, useState } from "react";
import { recipes } from "@/data/recipes";
import { categories } from "@/data/categories";
import FilterBar from "@/components/FilterBar";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";

type Filter = {
  category: number | null;
  chef: string | null;
  tag: string | null; // ✅ 추가
};

export default function Home() {
  localStorage.setItem("recipes", JSON.stringify(recipes));

  const initialFilter: Filter = {
    category: null,
    chef: null,
    tag: null,
  };

  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [keyword, setKeyword] = useState("");

  const resetFilter = () => {
    setFilter(initialFilter);
  };

  // ✅ category id → name
  const categoryMap = useMemo(() => {
    return Object.fromEntries(categories.map((c) => [c.id, c.name]));
  }, []);

  // ✅ 카테고리 옵션
  const categoryOptions = useMemo(() => {
    return categories.map((c) => ({ id: c.id, label: c.name }));
  }, []);

  // ✅ 셰프 옵션
  const chefOptions = useMemo(() => {
    return [...new Set(recipes.map((r) => r.chef))];
  }, []);

  // ✅ 태그 옵션 (recipes에서 추출)
  const tagOptions = useMemo(() => {
    return [
      ...new Set(
        recipes.flatMap((r) => r.tag || [])
      ),
    ];
  }, []);

  // ✅ 필터 + 검색
  const filteredRecipes = recipes.filter((r) => {
    const matchKeyword =
      r.title.toLowerCase().includes(keyword.toLowerCase()) ||
      r.chef.toLowerCase().includes(keyword.toLowerCase());

    if (!matchKeyword) return false;

    // category
    if (
      filter.category &&
      r.categoryId !== filter.category
    )
      return false;

    // chef
    if (filter.chef && r.chef !== filter.chef) return false;

    // 🔥 tag
    if (
      filter.tag &&
      !(r.tag || []).includes(filter.tag)
    )
      return false;

    return true;
  });

  return (
    <div className="recipes-wrap">
      <header>
        <h1>Recipes</h1>
        <SearchBar onSearch={setKeyword} />
      </header>

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        categoryOptions={categoryOptions}
        chefOptions={chefOptions}
        tagOptions={tagOptions} // ✅ 추가
        onReset={resetFilter}
      />

      <section className="recipe-list">
        {filteredRecipes.map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      </section>
    </div>
  );
}