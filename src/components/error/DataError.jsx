import { useAsyncError } from 'react-router-dom';

export default function DataError() {
  const error = useAsyncError();
  return (
    <div>
      <h2>{error.status}</h2>
      <p>{error.message}</p>
    </div>
  );
}
