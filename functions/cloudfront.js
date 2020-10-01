exports.handler = (event, context, callback) => {
  const response = { ...event.Records[0].cf.response };
  const headers = response.headers;
  const headerHSTS = "Strict-Transport-Security";
  const headerCSP = "Content-Security-Policy";
  const headerXFO = "X-Frame-Options";
  const headerCTO = "X-Content-Type-Options";
  const headerRP = "Referrer-Policy";
  const headerXSS = "X-XSS-Protection";
  const headerServer = "Server";

  headers[headerHSTS.toLowerCase()] = [
    {
      key: headerHSTS,
      value: "max-age=31536000; includeSubDomains",
    },
  ];
  headers[headerCSP.toLowerCase()] = [
    {
      key: headerCSP,
      value: "frame-ancestors 'self';",
    },
  ];
  headers[headerXFO.toLowerCase()] = [
    {
      key: headerXFO,
      value: "SAMEORIGIN",
    },
  ];
  headers[headerCTO.toLowerCase()] = [
    {
      key: headerCTO,
      value: "nosniff",
    },
  ];
  headers[headerRP.toLowerCase()] = [
    {
      key: headerRP,
      value: "no-referrer",
    },
  ];
  headers[headerXSS.toLowerCase()] = [
    {
      key: headerXSS,
      value: "1; mode=block",
    },
  ];
  headers[headerServer.toLowerCase()] = [
    {
      key: headerServer,
      value: "None",
    },
  ];

  callback(null, response);
};
