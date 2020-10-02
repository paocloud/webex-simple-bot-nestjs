import axios from "axios";
import { config } from "../../configs/webex.config";

export async function sendMessage(roomId:string,message:string) {
    const header = {
        headers: {
          'authorization': `Bearer ${config.token}`
        }
    };
    const reqBody = {
            "roomId": roomId,
            "text": message,
    }
    try {
        let res = await axios.post(`https://webexapis.com/v1/messages/`,reqBody,header);
        return res.data;
    }
    catch (err) {
        console.log(err)
    }
}