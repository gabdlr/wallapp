import * as https from "https";
import crypto from "crypto";

const prompt = require("prompt-sync")();
export class Common {
  
  static generateId():string {
    return crypto.randomUUID({ disableEntropyCache: true })
  }

  protected getInput(messagge: string): string {
    return prompt(messagge);
  }

  protected httpCall(options: https.RequestOptions): Promise<string> {
    return new Promise((resolve, reject) => {
      https.request(options, (res) => {
          let data: Buffer[] = [];
          res.on("data", (chunk) => {
            data.push(chunk);
          });
          res.on("end", () => {
            const res: string = Buffer.concat(data).toString();
            resolve(res);
          });
        })
        .on("error", (err) => {
          reject(err);
        })
        .end();
    });
  }
}
