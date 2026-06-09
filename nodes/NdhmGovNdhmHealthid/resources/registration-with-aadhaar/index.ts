import type { INodeProperties } from 'n8n-workflow';

export const registrationWithAadhaarDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					]
				}
			},
			"options": [
				{
					"name": "Verify Aadhar OTP Using POST",
					"value": "Verify Aadhar OTP Using POST",
					"action": "Verify Aadhaar OTP on registrered mobile number to create Health ID.",
					"description": "Verify Aadhar OTP received on registrered mobile number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/aadhaar/createHealthIdWithAadhaarOtp"
						}
					}
				},
				{
					"name": "Create Aadhaar Account Using POST",
					"value": "Create Aadhaar Account Using POST",
					"action": "Create Health ID using pre-verified Aadhaar & Mobile.",
					"description": "Create Health ID using pre-verified Aadhaar & Mobile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/aadhaar/createHealthIdWithPreVerified"
						}
					}
				},
				{
					"name": "Generate Mobile OTP For Txn Using POST",
					"value": "Generate Mobile OTP For Txn Using POST",
					"action": "Generate Mobile OTP for verification.",
					"description": "Generate Mobile OTP to verify mobile number.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/aadhaar/generateMobileOTP"
						}
					}
				},
				{
					"name": "Generate Aadhar OTP Using POST",
					"value": "Generate Aadhar OTP Using POST",
					"action": "Generate Aadhaar OTP on registrered mobile number",
					"description": "Generate Aadhaar OTP on registrered mobile number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/aadhaar/generateOtp"
						}
					}
				},
				{
					"name": "Resend Aadhar OTP Using POST",
					"value": "Resend Aadhar OTP Using POST",
					"action": "Resend Aadhaar OTP on registrered mobile number to create Health ID.",
					"description": "Resend Aadhar OTP on registrered mobile number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/aadhaar/resendAadhaarOtp"
						}
					}
				},
				{
					"name": "Get Health ID Numbers By Aadhar Using POST",
					"value": "Get Health ID Numbers By Aadhar Using POST",
					"action": "Search health id number using aadhar.",
					"description": "Search health id number using aadhar.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/aadhaar/search/aadhar"
						}
					}
				},
				{
					"name": "Verify Aadhar Bio Using POST",
					"value": "Verify Aadhar Bio Using POST",
					"action": "Verify Aadhaar using biometrics.",
					"description": "Verify Aadhaar using biometrics",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/aadhaar/verifyBio"
						}
					}
				},
				{
					"name": "Verify Mobile OTP For Txn Using POST",
					"value": "Verify Mobile OTP For Txn Using POST",
					"action": "Verify Mobile OTP in an existing transaction.",
					"description": "Verify Mobile OTP in an existing transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/aadhaar/verifyMobileOTP"
						}
					}
				},
				{
					"name": "Verify Aadhar OTP Only Using POST",
					"value": "Verify Aadhar OTP Only Using POST",
					"action": "Verify Aadhaar OTP and continue for mobile verification.",
					"description": "Verify Aadhaar OTP received on registrered mobile number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/registration/aadhaar/verifyOTP"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/registration/aadhaar/createHealthIdWithAadhaarOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "Txn ID",
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/aadhaar/createHealthIdWithPreVerified",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
					]
				}
			}
		},
		{
			"displayName": "Health ID",
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
					]
				}
			}
		},
		{
			"displayName": "Txn ID",
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Create Aadhaar Account Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/aadhaar/generateMobileOTP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Mobile OTP For Txn Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Mobile OTP For Txn Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Mobile OTP For Txn Using POST"
					]
				}
			}
		},
		{
			"displayName": "Txn ID",
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Mobile OTP For Txn Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Mobile OTP For Txn Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Mobile OTP For Txn Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/aadhaar/generateOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Generate Aadhar OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/aadhaar/resendAadhaarOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Resend Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Resend Aadhar OTP Using POST"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Txn ID",
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Resend Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Resend Aadhar OTP Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Resend Aadhar OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/aadhaar/search/aadhar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Get Health ID Numbers By Aadhar Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Get Health ID Numbers By Aadhar Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Get Health ID Numbers By Aadhar Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Get Health ID Numbers By Aadhar Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Get Health ID Numbers By Aadhar Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/aadhaar/verifyBio",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar Bio Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar Bio Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar Bio Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar Bio Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar Bio Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar Bio Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar Bio Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/aadhaar/verifyMobileOTP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Mobile OTP For Txn Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Mobile OTP For Txn Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Mobile OTP For Txn Using POST"
					]
				}
			}
		},
		{
			"displayName": "Txn ID",
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Mobile OTP For Txn Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Mobile OTP For Txn Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Mobile OTP For Txn Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/registration/aadhaar/verifyOTP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST"
					]
				}
			}
		},
		{
			"displayName": "Txn ID",
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST"
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
						"Registration With Aadhaar"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST"
					]
				}
			}
		},
];
