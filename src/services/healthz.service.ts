import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthzService {
  getHealthz(): object {
    return {msg: "Healthz !!"};
  }
}
