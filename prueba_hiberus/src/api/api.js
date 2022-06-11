export const api = async (
  url,
  method,
  body,
  callback,
  token = '',
  onError = () => {},
  onCommunicationError = () => {}
) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const body = await response.json();

      callback(body);
    } else {
      onError(response);
      console.log(
        'Codigo de estado no esperado',
        response.status,
        response.statusText
      );
    }
  } catch (msg) {
    onCommunicationError(msg);
    console.error('este es el catch', msg);
  }
};
