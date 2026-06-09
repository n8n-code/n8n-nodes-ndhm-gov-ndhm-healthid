import type { INodeProperties } from 'n8n-workflow';

export const forgotHealthIdNumberDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Forgot Health Id Number"
					]
				}
			},
			"options": [
				{
					"name": "Retrieval Health Id By Aadhar Using POST",
					"value": "Retrieval Health Id By Aadhar Using POST",
					"action": "Verify aadhar OTP sent as part of forgetHealth id.",
					"description": "Verify aadhar OTP sent as part of forgetHealth id.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/forgot/healthId/aadhaar"
						}
					}
				},
				{
					"name": "Generate Aadhar OTP Using POST 1",
					"value": "Generate Aadhar OTP Using POST 1",
					"action": "Generate Aadhaar OTP on registrered mobile number",
					"description": "Generate Aadhaar OTP on registrered mobile number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/forgot/healthId/aadhaar/generateOtp"
						}
					}
				},
				{
					"name": "Retrieval Health Id By Mobile Using POST",
					"value": "Retrieval Health Id By Mobile Using POST",
					"action": "Verify Mobile OTP sent as  part of forgetHealth id.",
					"description": "Verify Mobile OTP sent as  part of forgetHealth id.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/forgot/healthId/mobile"
						}
					}
				},
				{
					"name": "Generate Mobile OTP Using POST",
					"value": "Generate Mobile OTP Using POST",
					"action": "Generate Mobile OTP to start registration",
					"description": "Generate Mobile OTP to start registration transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/forgot/healthId/mobile/generateOtp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/forgot/healthId/aadhaar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Aadhar Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Aadhar Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Aadhar Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Aadhar Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Aadhar Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Aadhar Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/forgot/healthId/aadhaar/generateOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 1"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "Aadhaar",
			"name": "aadhaar",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "aadhaar",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 1"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 1"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/forgot/healthId/mobile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Retrieval Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/forgot/healthId/mobile/generateOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST"
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
						"Forgot Health Id Number"
					],
					"operation": [
						"Generate Mobile OTP Using POST"
					]
				}
			}
		},
];
