# @n8n-dev/n8n-nodes-ndhm-gov-ndhm-healthid

![ndhm-gov-ndhm-healthid Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-ndhm-gov-ndhm-healthid.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-ndhm-gov-ndhm-healthid)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing ndhm-gov-ndhm-healthid API integrations by hand.**

Every time you connect n8n to ndhm-gov-ndhm-healthid, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to ndhm-gov-ndhm-healthid took 5 minutes, not half a day?**

This node gives you **10+ resources** out of the box: **Authentication**, **Forgot Health Id Number**, **Health Facility**, **Integrated Programs**, **Profile**, and 5 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-ndhm-gov-ndhm-healthid
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-ndhm-gov-ndhm-healthid`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **ndhm-gov-ndhm-healthid API** → paste your API key
3. Drag the **ndhm-gov-ndhm-healthid** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Authentication | Post authenticate using health id number  health id and password, Post authenticate request to generate mobile otp using health id number  health id, Post authenticate using verified mobile number and user data, Get auth token public key, Post authentication with aadhaar biometric based auth transaction, Post authentication with aadhaar otp based auth transaction, Post authenticate using demographic data of user, Post authentication with mobile otp based auth transaction, Post authentication with password based auth transaction, Post initiate authentication process for given health id, Post resend aadhaarmobile otp for authentication transaction |
| Forgot Health Id Number | Post verify aadhar otp sent as part of forgethealth id, Post generate aadhaar otp on registrered mobile number, Post verify mobile otp sent as  part of forgethealth id, Post generate mobile otp to start registration |
| Health Facility | Post generate token for heath facility id, Post change password for heath facility id, Post generate health id card svg, Post generates password for heath facility id, Post generate health hacility otp on registrered mobile number, Get generatesvgcard, Post reset password for heath facility id |
| Integrated Programs | Post generate aadhaar otp on registrered mobile number, Post create health id using aadhaar number otp, Post create health id using biometric authentication, Post create health id using aadhaar demo auth, Post delinked with hid, Post linked with hid, Post create health id using mobile authentication, Post generate mobile otp on registrered mobile number, Post create health id using notify benefit, Post search health id number using aadhar or aadhar token, Post search benefit using health id number, Post update mobile number for account, Post update account information, Post update health id status |
| Profile | Post generate aadhaar otp on registrered for link account with aadhar number, Post verify aadhaar otp to complete kycrekyc verification, Get list of benefits associated with healthid, Post change password via aadhar for heath id, Post change password via mobile for heath id, Get generate aadhaar otp on registrered mobile number, Get generate mobile otp to start registration, Post change password via password for heath id, Get generate health id card in pdf format, Get generate health id card png, Get generate health id card svg, Delete account, Get account information, Post update account information, Get quick response code in png format for this account, Post validate auth token |
| Registration With Aadhaar | Post verify aadhaar otp on registrered mobile number to create health id, Post create health id using preverified aadhaar  mobile, Post generate mobile otp for verification, Post generate aadhaar otp on registrered mobile number, Post resend aadhaar otp on registrered mobile number to create health id, Post search health id number using aadhar, Post verify aadhaar using biometrics, Post verify mobile otp in an existing transaction, Post verify aadhaar otp and continue for mobile verification |
| Registration With Mobile Number | Post create health id with verified mobile token, Post generate mobile otp to start registration, Post resend mobile otp for health id registration, Post verify mobile otp sent as part of registration transaction |
| Search | Post search a user by health ids, Post search a user by health id number, Post search users with a mobile number |
| Tags | Delete tag against healthid, Get list of tags against healthid, Post add tag against healthid |
| Utility | Get a list of districts in a given  state as per lgd, Get a list of states as per lgd |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from ndhm-gov-ndhm-healthid docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official ndhm-gov-ndhm-healthid OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **ndhm-gov-ndhm-healthid** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the ndhm-gov-ndhm-healthid API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
