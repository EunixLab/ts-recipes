import { Dispatch, SetStateAction } from "react";
import "@/assets/scss/components/FilterBar.scss";

type Filter = {
    category: string | null;
    chef: string | null;
};
type Props = {
    filter: Filter;
    setFilter: Dispatch<SetStateAction<Filter>>;
    categoryOptions: string[];
    chefOptions: string[];
    onReset: () => void;
};

export default function FilterBar({
    filter,
    setFilter,
    categoryOptions,
    chefOptions,
    onReset,
}: Props) {
const toggle = (key: string, value: string) => {
    setFilter((prev: any) => ({
    ...prev,
    [key]: prev[key] === value ? null : value,
    }));
};

return (
    <div className="filter">
        <div className="filter__header">
            <h3>필터</h3>
            <button className="filter__reset" onClick={onReset}>
                초기화
            </button>
        </div>

        {/* 카테고리 */}
        <div className="filter__group">
            <span className="filter__label">카테고리</span>
            {categoryOptions.map(c => (
                <button
                key={c}
                className={`filter__chip ${filter.category === c ? "active" : ""}`}
                onClick={() => toggle("category", c)}
                >
                {c}
                </button>
            ))}
        </div>

        {/* 셰프 */}
        <div className="filter__group">
            <span className="filter__label">셰프</span>
            {chefOptions.map(c => (
                <button
                    key={c}
                    className={`filter__chip ${filter.chef === c ? "active" : ""}`}
                    onClick={() => toggle("chef", c)}
                >
                    {c}
                </button>
            ))}
        </div>
    </div>
);}