const firebaseRequest = (url) => {
  const request = async (body) => {
    const response = await fetch(url, {
      method: 'POST',
      body: body,
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    return data;
  };

  return request;
};

export default firebaseRequest;
