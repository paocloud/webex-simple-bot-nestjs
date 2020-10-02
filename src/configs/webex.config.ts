import * as dotenv from "dotenv";

dotenv.config()

export const config: any = {
    secret: process.env.SECRET,
    token: process.env.TOKEN,
}
