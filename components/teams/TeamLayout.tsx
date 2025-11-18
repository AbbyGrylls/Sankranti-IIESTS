"use client";

import { useState } from "react";
import { Member, Category } from "@/public/teams/data/data";
import { FilterControls } from "./FilterControls";
import { TeamGrid } from "./TeamGrid";

type TeamLayoutProps = {
  members: Member[];
  categories: Category[];
};

export function TeamLayout({ members, categories }: TeamLayoutProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0]
  );

  const filteredMembers =
    selectedCategory === "All"
      ? members
      : members.filter((member) => member.category === selectedCategory);

  return (
    <div>
      <FilterControls
        categories={categories}
        selected={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <TeamGrid members={filteredMembers} />
    </div>
  );
}
