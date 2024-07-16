import { useFetch } from "./useFetch";
import "./table.css";
import { CategoryTable } from "./CategoryTable";

export function Menu() {
  const { data, isLoading, isError } = useFetch(
    "https://menus-api.vercel.app/"
  );
  if (isLoading) return "Loading";
  if (isError) return "Error";

  // Just for debugging
  console.log(data);

  return (
    <div>
      {Object.keys(data).map((category) => {
        // Handle edge-case for this category, it does not contain an array of dishes
        if (category === "pagination") return;
        // Handle edge-case for those categories, they contain duplicated data
        if (category === "best-foods" || category === "our-foods") return;

        return <CategoryTable key={category} data={data} category={category} />;
      })}
    </div>
  );
}
