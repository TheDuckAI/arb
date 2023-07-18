const sendRequest = async (route, method) => {
    let result;
    if (method === "GET") {
      result = await fetch(route);
    // } else if (method === "POST" || method === "PUT" || method === "DELETE") {
    //   result = await fetch(route, {
    //     method,
    //     body: stringify ? JSON.stringify(data) : data,
    //     headers,
    //   });
    } else {
      console.log("Invalid Method");
    }
  
    return result.json();
  };
  
  export default sendRequest;