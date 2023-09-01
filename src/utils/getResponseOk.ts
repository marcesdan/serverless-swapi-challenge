const getResponseOk = (data) => ({
  headers: {
    "Access-Control-Allow-Origin": "https://front-swapi-challenge.vercel.app",
    "Access-Control-Allow-Methods": "OPTIONS,GET,PUT",
  },
  statusCode: 200,
  body: JSON.stringify(data),
});

export default getResponseOk
