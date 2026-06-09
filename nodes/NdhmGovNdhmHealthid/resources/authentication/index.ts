import type { INodeProperties } from 'n8n-workflow';

export const authenticationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					]
				}
			},
			"options": [
				{
					"name": "Authenticate With Password Using POST",
					"value": "Authenticate With Password Using POST",
					"action": "Authenticate using Health ID number / Health ID and password",
					"description": "Authenticate using Health ID number / Health ID and password",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/authPassword"
						}
					}
				},
				{
					"name": "Authenticate User Using POST",
					"value": "Authenticate User Using POST",
					"action": "Authenticate request to generate Mobile OTP using Health ID number / Health ID",
					"description": "Authenticate request to generate Mobile OTP using Health ID number / Health ID",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/authWithMobile"
						}
					}
				},
				{
					"name": "Auth With Mobile Token Using POST",
					"value": "Auth With Mobile Token Using POST",
					"action": "Authenticate using verified Mobile Number and user data",
					"description": "Authenticate using verified Mobile Number and user data",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/authWithMobileToken"
						}
					}
				},
				{
					"name": "Cert Using GET",
					"value": "Cert Using GET",
					"action": "Auth token public key.",
					"description": "Auth token public key.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/auth/cert"
						}
					}
				},
				{
					"name": "Confirm With Aadhaar Bio Using POST",
					"value": "Confirm With Aadhaar Bio Using POST",
					"action": "Authentication with Aadhaar Biometric based auth transaction.",
					"description": "Authentication with Aadhaar Biometric based auth transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/confirmWithAadhaarBio"
						}
					}
				},
				{
					"name": "Confirm With Aadhaar Otp Using POST",
					"value": "Confirm With Aadhaar Otp Using POST",
					"action": "Authentication with Aadhaar OTP based auth transaction.",
					"description": "Authentication with Aadhaar OTP based auth transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/confirmWithAadhaarOtp"
						}
					}
				},
				{
					"name": "Confirm With Demographics Using POST",
					"value": "Confirm With Demographics Using POST",
					"action": "Authenticate using demographic data of user.",
					"description": "Authenticate using demographic data of user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/confirmWithDemographics"
						}
					}
				},
				{
					"name": "Confirm With Mobile Using POST",
					"value": "Confirm With Mobile Using POST",
					"action": "Authentication with Mobile OTP based auth transaction.",
					"description": "Authentication with Mobile OTP based auth transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/confirmWithMobileOTP"
						}
					}
				},
				{
					"name": "Auth Account Password Request Using POST",
					"value": "Auth Account Password Request Using POST",
					"action": "Authentication with PASSWORD based auth transaction.",
					"description": "Authentication with PASSWORD based auth transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/confirmWithPassword"
						}
					}
				},
				{
					"name": "Initiate Auth Using POST",
					"value": "Initiate Auth Using POST",
					"action": "Initiate authentication process for given Health ID",
					"description": "Initiate authentication process for given Health ID",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/init"
						}
					}
				},
				{
					"name": "Resend Auth Mobile OTP Using POST",
					"value": "Resend Auth Mobile OTP Using POST",
					"action": "Resend Aadhaar/Mobile OTP for Authentication Transaction.",
					"description": "Resend Aadhaar/Mobile OTP for Authentication Transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/auth/resendAuthOTP"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/auth/authPassword",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate With Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate With Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "Health Id",
			"name": "healthId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "healthId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate With Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate With Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate With Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate With Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/auth/authWithMobile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate User Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate User Using POST"
					]
				}
			}
		},
		{
			"displayName": "Healthid",
			"name": "healthid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "healthid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate User Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate User Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Authenticate User Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/auth/authWithMobileToken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "Health Id",
			"name": "healthId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "healthId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn Id",
			"name": "txnId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "Year Of Birth",
			"name": "yearOfBirth",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "yearOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth With Mobile Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/auth/cert",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Cert Using GET"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Cert Using GET"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Cert Using GET"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Cert Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/auth/confirmWithAadhaarBio",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Auth Type",
			"name": "authType",
			"type": "options",
			"default": "FINGERSCAN",
			"options": [
				{
					"name": "FINGERSCAN",
					"value": "FINGERSCAN"
				},
				{
					"name": "IRIS",
					"value": "IRIS"
				},
				{
					"name": "OTP",
					"value": "OTP"
				}
			],
			"routing": {
				"send": {
					"property": "authType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Bio Type",
			"name": "bioType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "bioType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pid",
			"name": "pid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Txn Id",
			"name": "txnId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/auth/confirmWithAadhaarOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Otp Using POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Otp",
			"name": "otp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "otp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Otp Using POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn Id",
			"name": "txnId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Aadhaar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/auth/confirmWithDemographics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Demographics Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Demographics Using POST"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Demographics Using POST"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Demographics Using POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn Id",
			"name": "txnId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Demographics Using POST"
					]
				}
			}
		},
		{
			"displayName": "Year Of Birth",
			"name": "yearOfBirth",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "yearOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Demographics Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Demographics Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Demographics Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/auth/confirmWithMobileOTP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Otp",
			"name": "otp",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "otp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Txn Id",
			"name": "txnId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Confirm With Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/auth/confirmWithPassword",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Account Password Request Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Account Password Request Using POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Account Password Request Using POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn Id",
			"name": "txnId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Account Password Request Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Account Password Request Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Auth Account Password Request Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/auth/init",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Initiate Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Initiate Auth Using POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Auth Method",
			"name": "authMethod",
			"type": "options",
			"default": "AADHAAR_OTP",
			"options": [
				{
					"name": "AADHAAR OTP",
					"value": "AADHAAR_OTP"
				},
				{
					"name": "MOBILE OTP",
					"value": "MOBILE_OTP"
				},
				{
					"name": "PASSWORD",
					"value": "PASSWORD"
				},
				{
					"name": "DEMOGRAPHICS",
					"value": "DEMOGRAPHICS"
				},
				{
					"name": "AADHAAR BIO",
					"value": "AADHAAR_BIO"
				}
			],
			"routing": {
				"send": {
					"property": "authMethod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Initiate Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Healthid",
			"name": "healthid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "healthid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Initiate Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Initiate Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Initiate Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/auth/resendAuthOTP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Resend Auth Mobile OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"default": "en-US",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Resend Auth Mobile OTP Using POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn Id",
			"name": "txnId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "txnId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Resend Auth Mobile OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Resend Auth Mobile OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID (Header)",
			"name": "security_x_hip_id",
			"type": "string",
			"default": "",
			"description": "API key for X-HIP-ID (header: X-HIP-ID)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication"
					],
					"operation": [
						"Resend Auth Mobile OTP Using POST"
					]
				}
			}
		},
];
