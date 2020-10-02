import { Injectable } from '@nestjs/common';

@Injectable()
export class DeveloperService {
  getDeveloperInfo(): object {
    return {
        fullname: "Payungsak",
        lastname: "Klinchampa",
        nickname: "pao",
        organization: "PaOCLOUD CO., LTD.",
        country : "Thailand",
        year: 2020
    };
  }
}
