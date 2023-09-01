const getResponseError = (error) => ({
  headers: {
    "Access-Control-Allow-Origin": "https://front-swapi-challenge.vercel.app",
    "Access-Control-Allow-Methods": "OPTIONS,GET,PUT",
  },
  statusCode: 500,
  body: JSON.stringify(error)
})

export default getResponseError
