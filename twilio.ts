import * as types from "./types/index.ts"
import { Twilio } from "./lib/rest/Twilio.ts";
import video from "./modules/video/video.ts"

var initializer = function(accountSid:string, authToken: string, opts: any) {
  return new Twilio(accountSid, authToken, opts);
};

// Main functional components of the Twilio module
initializer.Twilio = Twilio;
initializer.jwt = { };
initializer.twiml = { };
initializer.RequestClient = RequestClient;