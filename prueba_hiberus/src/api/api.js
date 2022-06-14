import { toast } from 'react-toastify';

export const api = async (
  url,
  method,
  callback,
  token = '',
  body,
  onError = () => {},
  onCommunicationError = () => {}
) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const body = (await response.json()) ?? null;

      callback(body);
      toast.success(response.statusText);
    } else {
      toast.error(response.statusText);
    }
  } catch (msg) {
    toast.error(msg);
  }
};
