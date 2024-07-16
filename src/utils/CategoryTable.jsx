export function CategoryTable({ data, category }) {
  return (
    <table>
      <caption>Category: {category.toUpperCase()}</caption>
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
      <tbody>
        {data[category].map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.img} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>{item.dsc}</td>
            <td>{item.price}</td>
            <td>{item.rate}</td>
            <td>{item.country}</td>
            <td>{item.latitude}</td>
            <td>{item.longitude}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
