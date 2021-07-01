import axios from "axios";
import {getToken} from "../utils/util";

export default function Ajax(
    {
        url = "/",
        method = "POST",
        data = {},
        params = {},
        headers = {}
    }) {
    return new Promise((resolve, reject) => {
        let newData = {
            busiParam: data,
            sysParam: {
                ts: new Date().getTime()
            }
        }
        let token = getToken();
        // @ts-ignore
        headers.authorization = token || '';
        // @ts-ignore
        axios({
            url,
            params,
            method,
            headers,
            data: newData
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}