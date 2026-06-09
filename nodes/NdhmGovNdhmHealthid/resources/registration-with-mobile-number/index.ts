import type { INodeProperties } from 'n8n-workflow';

export const registrationWithMobileNumberDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					]
				}
			},
			"options": [
				{
					"name": "Verify User Via Mobile Using POST",
					"value": "Verify User Via Mobile Using POST",
					"action": "Create Health ID with verified mobile token",
					"description": "Create Health ID with verified mobile token",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/mobile/createHealthId"
						}
					}
				},
				{
					"name": "Generate Mobile OTP Using POST 1",
					"value": "Generate Mobile OTP Using POST 1",
					"action": "Generate Mobile OTP to start registration",
					"description": "Generate Mobile OTP to start registration transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/mobile/generateOtp"
						}
					}
				},
				{
					"name": "Resent Otp Using POST",
					"value": "Resent Otp Using POST",
					"action": "Resend Mobile OTP for Health ID registration",
					"description": "Resend Mobile OTP in an existing transaction in case previous OTP is not received.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/mobile/resendOtp"
						}
					}
				},
				{
					"name": "Verify Mobile OTP Using POST",
					"value": "Verify Mobile OTP Using POST",
					"action": "Verify Mobile OTP sent as part of registration transaction.",
					"description": "Verify Mobile OTP in current registration transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/mobile/verifyOtp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/registration/mobile/createHealthId",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Day Of Birth",
			"name": "dayOfBirth",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dayOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "District Code",
			"name": "districtCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "districtCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "firstName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "firstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Last Name",
			"name": "lastName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "lastName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middleName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "middleName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Month Of Birth",
			"name": "monthOfBirth",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "monthOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Pincode",
			"name": "pincode",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "pincode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Profile Photo",
			"name": "profilePhoto",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "profilePhoto",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Restrictions",
			"name": "restrictions",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "restrictions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "State Code",
			"name": "stateCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "stateCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Subdistrict Code",
			"name": "subdistrictCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "subdistrictCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Town Code",
			"name": "townCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "townCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Village Code",
			"name": "villageCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "villageCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Ward Code",
			"name": "wardCode",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "wardCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify User Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/mobile/generateOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST 1"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "Mobile",
			"name": "mobile",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mobile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST 1"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST 1"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/mobile/resendOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Resent Otp Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Resent Otp Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Resent Otp Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Resent Otp Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Resent Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/mobile/verifyOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify Mobile OTP Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify Mobile OTP Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify Mobile OTP Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify Mobile OTP Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify Mobile OTP Using POST"
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
						"Registration With Mobile Number"
					],
					"operation": [
						"Verify Mobile OTP Using POST"
					]
				}
			}
		},
];
