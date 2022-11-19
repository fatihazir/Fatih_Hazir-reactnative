import { GetRequestModel, PostRequestModel } from "../typescriptModels/TypeScriptModels"
import { BearerToken } from "./Auth"

class ApiBase {
    Get = async (requestProps: GetRequestModel) => {
        await fetch(requestProps.url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${BearerToken}`,
            }
        }).then((response) => response.json()).
            then((json) => {
                if (json.message == "Success") {
                    requestProps.successFunction(json)
                }
                else {
                    requestProps.errorFunction(json)
                }
            }).catch((err) => {
                this.ExLog(err)
                requestProps.exceptionFunction(err)
            })
    }

    Post = async (requestProps: PostRequestModel) => {
        await fetch(requestProps.url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${BearerToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestProps.body)
        }).then((response) => response.json()).
            then((json) => {
                if (json.message == "Success") {
                    requestProps.successFunction(json)
                }
                else {
                    requestProps.errorFunction(json)
                }
            }).catch((err) => {
                this.ExLog(err)
                requestProps.exceptionFunction(err)
            })
    }

    ExLog = async (err: any) => {
        //to do
    }
}

export default new ApiBase