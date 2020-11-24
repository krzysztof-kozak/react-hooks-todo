import { useState } from "react";

const useFilter = (value) => {
  const [filterValue, setFilterValue] = useState(value);

  const handleFilterChange = (e) => {
    const name = e.target.name;
    setFilterValue(name);
  };

  return [filterValue, handleFilterChange];
};

export default useFilter;
