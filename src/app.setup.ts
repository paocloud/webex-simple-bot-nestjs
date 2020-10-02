import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from "body-parser";
import * as helmet from 'helmet';
import { config } from "./configs/webex.config";
import { rawBodyBuffer } from "./utils/rawBodyBuffer.util";

export function appSetup (app: NestExpressApplication) {
    app.use(bodyParser.urlencoded({verify: rawBodyBuffer, extended: true }));
    app.use(bodyParser.json({ verify: rawBodyBuffer }));
    app.use(bodyParser.raw({ verify: rawBodyBuffer, type: '*/*' }));
    app.use(helmet());    
    app.enableCors();
    app.enable("trust proxy");
}
