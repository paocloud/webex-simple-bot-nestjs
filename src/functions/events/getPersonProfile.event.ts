import axios from "axios";
import { config } from "../../configs/webex.config";

export async function getPersonProfile(personId: string) {
    const header = {
      headers: {
        'authorization': `Bearer ${config.token}`
      }
    };
    try {
      let res = await axios.get(`https://webexapis.com/v1/people/${personId}`,header);
      return res.data;
    }
    catch (err) {
      console.log(err)
    }
}