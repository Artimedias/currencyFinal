export default class Exchange {
  static exchange(moneyOne, moneyTwo) {
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${moneyOne}/${moneyTwo}`
    )
      .then(function (response) {
        if (!response) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}