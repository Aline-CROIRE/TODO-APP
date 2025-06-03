import React from "react";
import type { Duration } from "../types/index";

interface Props {
  selected: Duration | "All";
  onChange: (d: Duration | "All") => void;
}

const FilterBar: React.FC<Props> = ({ selected, onChange }) => {
  const filters: (Duration | "All")[] = ["All", "Daily", "Weekly", "Monthly", "Yearly"];
  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button
          key={f}
          className={selected === f ? "active" : ""}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
