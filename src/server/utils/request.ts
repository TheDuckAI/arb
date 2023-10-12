const sendRequest = async (
  route: string,
  method: "GET" | "POST" | "PUT" | "DELETE"
): Promise<any> => {
  let result: Response;
  if (method === "GET") {
    result = await fetch(route);
  } else {
    console.log("Invalid Method");
    throw new Error("Invalid Method");
  }

  if (!result.ok) {
    throw new Error(`Request failed with status ${result.status}`);
  }

  return result.json();
};

export default sendRequest;
