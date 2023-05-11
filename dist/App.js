"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./gen/api");
const userName = "api-user-05580fa4-1d84-44ff-ba47-50848c0121fe@spire.com";
const password = "f55caac2-6dc7-476a-affd-d4dfe92200e7";
function getJWTToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const authenticationApi = new api_1.AuthenticationJWTTokenApi();
        return yield authenticationApi
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
    });
}
getJWTToken().then((token) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Got access token : " + token);
    if (token == null) {
        return;
    }
    //Use the obtained JWT token to create an authentication object
    const authentication = new api_1.HttpBearerAuth();
    authentication.accessToken = token;
    const dataSetsApi = new api_1.DataSetsApi();
    //Make sure all requests to the server use the JWT token
    dataSetsApi.setDefaultAuthentication(authentication);
    //Query for all the datasets
    const dataSets = (yield dataSetsApi.getAllDataSets()).body;
    console.log(dataSets);
}));
