import axios from "../axios";

const fetchDataSp500 = async () => {
  //.then creates a new promise that extracts the data
  const request = await axios
    .get("market/v2/get-summary", {
      params: { region: "US" },
      headers: {
        "x-rapidapi-key": "362a045420msh6a56907d12b3a99p189eccjsn301273e64d30",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    })
    .then((response) => JSON.stringify(response.data));
  console.log(request);
  return request;
};

const fetchDataBrentCrudeOil = async () => {
  const request = await axios
    .get("stock/v2/get-summary", {
      params: { symbol: "BZ=F" },
      headers: {
        "x-rapidapi-key": "362a045420msh6a56907d12b3a99p189eccjsn301273e64d30",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    })
    .then((response) => JSON.stringify(response.data));
  console.log(request);
  return request;
};

const fetchDataCrudeOil = async () => {
  const request = await axios
    .get("stock/v2/get-summary", {
      params: { symbol: "CL=F" },
      headers: {
        "x-rapidapi-key": "362a045420msh6a56907d12b3a99p189eccjsn301273e64d30",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    })
    .then((response) => JSON.stringify(response.data));
  console.log(request);
  return request;
};

export const Requests = {
  fetchDataSp500,
  fetchDataBrentCrudeOil,
  fetchDataCrudeOil,
};
