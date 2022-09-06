function Twilio(this: any,  username: string, password: string, opts: any) {
  opts = opts || {};
  const env = opts.env || Deno.env;

  this.username = username || env.TWILIO_ACCOUNT_SID;
  this.password = password || env.TWILIO_AUTH_TOKEN;
  this.accountSid = opts.accountSid || this.username;
  this._httpClient = opts.httpClient;
  if (opts.lazyLoading == false) {
    this._httpClient = this.httpClient;
  }
  this.edge = opts.edge || env.TWILIO_EDGE;
  this.region = opts.region || env.TWILIO_REGION;
  this.logLevel = opts.logLevel || env.TWILIO_LOG_LEVEL;
  this.userAgentExtensions = opts.userAgentExtensions || [];

  if (!this.username) {
    throw new Error('username is required');
  }

  if (!this.password) {
    throw new Error('password is required');
  }

  if (!this.accountSid.startsWith('AC')) {
    throw new Error('accountSid must start with AC');
  }

  // Domains
  this._accounts = undefined;
  this._api = undefined;
  this._autopilot = undefined;
  this._chat = undefined;
  this._conversations = undefined;
  this._events = undefined;
  this._flexApi = undefined;
  this._frontlineApi = undefined;
  this._insights = undefined;
  this._ipMessaging = undefined;
  this._lookups = undefined;
  this._media = undefined;
  this._messaging = undefined;
  this._monitor = undefined;
  this._notify = undefined;
  this._numbers = undefined;
  this._preview = undefined;
  this._pricing = undefined;
  this._proxy = undefined;
  this._routes = undefined;
  this._serverless = undefined;
  this._studio = undefined;
  this._sync = undefined;
  this._taskrouter = undefined;
  this._trunking = undefined;
  this._trusthub = undefined;
  this._verify = undefined;
  this._video = undefined;
  this._voice = undefined;
  this._wireless = undefined;
  this._supersim = undefined;
  this._bulkexports = undefined;
  this._microvisor = undefined;

  if (opts.lazyLoading == false) {
    this.accounts;
    this.api;
    this.autopilot;
    this.chat;
    this.conversations;
    this.events;
    this.flexApi;
    this.frontlineApi;
    this.insights;
    this.ipMessaging;
    this.lookups;
    this.media;
    this.messaging;
    this.monitor;
    this.notify;
    this.numbers;
    this.preview;
    this.pricing;
    this.proxy;
    this.routes;
    this.serverless;
    this.studio;
    this.sync;
    this.taskrouter;
    this.trunking;
    this.trusthub;
    this.verify;
    this.video;
    this.voice;
    this.wireless;
    this.supersim;
    this.bulkexports;
    this.microvisor;
  }
}

Object.defineProperty(Twilio.prototype,
  'queues', {
    get: function() {
      return this.api.account.queues;
    }
});

Object.defineProperty(Twilio.prototype,
  'recordings', {
    get: function() {
      return this.api.account.recordings;
    }
});

Object.defineProperty(Twilio.prototype,
  'signingKeys', {
    get: function() {
      return this.api.account.signingKeys;
    }
});

Object.defineProperty(Twilio.prototype,
  'tokens', {
    get: function() {
      return this.api.account.tokens;
    }
});

module.exports = Twilio;