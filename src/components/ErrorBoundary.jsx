import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();

  console.log(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      return (
        <div className='flex flex-col min-h-svh justify-center items-center'>
          <h2>You aren&#39;t authorized to see this</h2>
        </div>
      );
    }

    return (
      <div className='flex flex-col min-h-svh justify-center items-center gap-4'>
        <h1 className='text-5xl'>{error.status}</h1>
        <h2>{error.statusText}</h2>
        <p>{error.data}</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col min-h-svh justify-center items-center gap-4'>
      <h2>An unknown error has occurred. please try again</h2>
    </div>
  );
}
