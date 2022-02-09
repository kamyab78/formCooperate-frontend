const SERVER = "http://79.175.177.56:9092/api/v1";
function generateHeader(object) {
  const header = {};
  if (
    localStorage.getItem("token") &&
    localStorage.getItem("token").length > 0
  ) {
    header["Authorization"] = "jwt " + localStorage.getItem("token");
  }
  for (const key of Object.keys(object)) {
    header[key] = object[key];
  }
  return header;
}
export function get(url, params = {}) {
  const generatedUrl = new URL(SERVER + url);
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      generatedUrl.searchParams.append(key, params[key]);
    }
  });
  let status = null;
  return new Promise((resolve, reject) => {
    fetch(SERVER + url, {
      method: "GET",
      headers: generateHeader({ "Content-Type": "application/json" }),
    })
      .then(function (response) {
        status = response.status;
        return response.json();
      })
      .then(function (data) {
        resolve({ data, status });
      })
      .catch((err) => {
        resolve({ data: null, status });
      });
  });
}

export function responseValidator(status) {
  return status >= 200 && status < 300;
}
