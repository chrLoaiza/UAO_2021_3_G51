export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  if (response.status === 400) {
    //Server -sede validation error
    //Server returns a string error, we parser as text instead of json
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In real app, we would like call an error logging service
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.log("Api call failed. ", error);
  throw error;
}
