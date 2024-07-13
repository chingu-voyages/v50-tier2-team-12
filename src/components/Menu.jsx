import { useFetch } from "../useFetch";
import "../table.css";

export function Menu() {
  const { data, isLoading, isError } = useFetch(
    "https://menus-api.vercel.app/"
  );
  if (isLoading) return "Loading";
  if (isError) return "Error";

  return (
    <table>
      <caption>Category BBQS</caption>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Rate</th>
          <th>Country</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      {data.bbqs.map((item) => {
        return (
          <tbody key={item.id}>
            <tr>
              <td>
                <img src={item.img} />
              </td>
              <td>{item.name}</td>
              <td>{item.dsc}</td>
              <td>{item.price}</td>
              <td>{item.rate}</td>
              <td>{item.country}</td>
              <td>{item.latitude}</td>
              <td>{item.longitude}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
