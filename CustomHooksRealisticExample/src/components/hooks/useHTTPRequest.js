import { useCallback, useState } from 'react';

const useHTTPRequest = (url, method, headers) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (body) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
          method: !method ? 'GET' : method,
          body: !body ? null : body,
          headers: !headers ? {} : headers,
        });

        if (!response.ok) {
          throw new Error('Request failed!');
        }

        const data = await response.json();

        return data;
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    },
    [url, method, headers]
  );

  return [isLoading, error, request];
};

export default useHTTPRequest;
