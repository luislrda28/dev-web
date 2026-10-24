import type { Category } from "../../data/categories";

type NavigationBarProps = {
    categories: Category[];
    activeCategory: string;
    onSelectCategory: (alias: string) => void;
}

export function NavigationBar({ categories, activeCategory, onSelectCategory }: NavigationBarProps,) {
    return (
        <>
            <nav>
                <ul className="container">
                { categories.map((category) => (
                    <li>
                        <button type="button"
                                onClick={() => onSelectCategory(category.alias)}
                                className={activeCategory == category.alias ? "active" : ""}
                        >{category.label}</button>
                    </li>
                )) }
                </ul>
            </nav>
        </>
    );
}