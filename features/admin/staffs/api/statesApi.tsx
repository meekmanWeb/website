const url = "https://nigeria-states-and-lga.p.rapidapi.com/lgalists";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "0a9db66f0bmshb9d39578f44110ep17b42djsnb21de07d77db",
    "x-rapidapi-host": "nigeria-states-and-lga.p.rapidapi.com",
  },
};
export const getStates = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
