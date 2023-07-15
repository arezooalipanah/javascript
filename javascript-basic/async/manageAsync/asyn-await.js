async function sendRequest() {
  try {
    const response = await fetch("https://jsonplaeholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err + " inner catch");
  }
}

sendRequest();
