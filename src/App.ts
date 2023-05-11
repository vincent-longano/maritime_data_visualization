import {
    AuthenticationJWTTokenApi,
    DataSetsApi,
    HttpBearerAuth,
  } from "./gen/api";
  
  const userName = "api-user-05580fa4-1d84-44ff-ba47-50848c0121fe@spire.com";
  const password = "f55caac2-6dc7-476a-affd-d4dfe92200e7";
  
  async function getJWTToken() {
    const authenticationApi = new AuthenticationJWTTokenApi();
  
    return await authenticationApi
      .obtainToken({
        userName: userName,
        password: password,
      })
      .then((r) => {
        return r.body.jwtToken;
      })
      .catch((reason) => {
        console.log(reason);
        return null;
      });
  }
  
  getJWTToken().then(async (token) => {
    console.log("Got access token : " + token);
  
    if (token == null) {
      return;
    }
  
    //Use the obtained JWT token to create an authentication object
    const authentication = new HttpBearerAuth();
    authentication.accessToken = token;
  
    const dataSetsApi = new DataSetsApi();
    //Make sure all requests to the server use the JWT token
    dataSetsApi.setDefaultAuthentication(authentication);
  
    //Query for all the datasets
    const dataSets = (await dataSetsApi.getAllDataSets()).body;
    console.log(dataSets);
  });