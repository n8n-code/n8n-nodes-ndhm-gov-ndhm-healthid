import type { INodeProperties } from 'n8n-workflow';

export const healthFacilityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					]
				}
			},
			"options": [
				{
					"name": "Authenticate Health Facility Using POST",
					"value": "Authenticate Health Facility Using POST",
					"action": "Generate token for heath facility id.",
					"description": "Generate token for heath facility id.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/health/facility/authenticate"
						}
					}
				},
				{
					"name": "Change Password Using POST",
					"value": "Change Password Using POST",
					"action": "Change password for heath facility id.",
					"description": "Change password for heath facility id.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/health/facility/change/password"
						}
					}
				},
				{
					"name": "Create Aadhaar Account Using POST 1",
					"value": "Create Aadhaar Account Using POST 1",
					"action": "Generate Health ID card SVG",
					"description": "Generate Health ID card SVG",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/health/facility/createHealthIdWithPreVerified"
						}
					}
				},
				{
					"name": "Generate Password Using POST",
					"value": "Generate Password Using POST",
					"action": "Generates password for heath facility id.",
					"description": "Generates password for heath facility id.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/health/facility/generate/password"
						}
					}
				},
				{
					"name": "Generate Facility OTP Using POST",
					"value": "Generate Facility OTP Using POST",
					"action": "Generate health hacility OTP on registrered mobile number",
					"description": "Generate health facility OTP on registrered mobile number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/health/facility/generateOtp"
						}
					}
				},
				{
					"name": "Generate Svg Card Using GET 1",
					"value": "Generate Svg Card Using GET 1",
					"action": "generateSvgCard",
					"description": "generateSvgCard",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/health/facility/getSvgCard"
						}
					}
				},
				{
					"name": "Reset Password Using POST",
					"value": "Reset Password Using POST",
					"action": "Reset password for heath facility id.",
					"description": "Reset password for heath facility id.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/health/facility/reset/password"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/health/facility/authenticate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Authenticate Health Facility Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Authenticate Health Facility Using POST"
					]
				}
			}
		},
		{
			"displayName": "Hfr Uid",
			"name": "hfrUid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "hfrUid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Authenticate Health Facility Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Authenticate Health Facility Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Authenticate Health Facility Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Authenticate Health Facility Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/health/facility/change/password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Change Password Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Change Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "Hfr Uid",
			"name": "hfrUid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "hfrUid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Change Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "New Password",
			"name": "newPassword",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "newPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Change Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "Old Password",
			"name": "oldPassword",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "oldPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Change Password Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Change Password Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Change Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/health/facility/createHealthIdWithPreVerified",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
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
						"Health Facility"
					],
					"operation": [
						"Create Aadhaar Account Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/health/facility/generate/password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Generate Password Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Generate Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "Hfr Uid",
			"name": "hfrUid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "hfrUid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Generate Password Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Generate Password Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Generate Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/health/facility/generateOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Generate Facility OTP Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Generate Facility OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "X Token",
			"name": "X-Token",
			"required": true,
			"description": "Auth Token",
			"default": "Bearer XToken",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Generate Facility OTP Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Generate Facility OTP Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Generate Facility OTP Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Generate Facility OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/health/facility/getSvgCard",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Generate Svg Card Using GET 1"
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
						"Health Facility"
					],
					"operation": [
						"Generate Svg Card Using GET 1"
					]
				}
			}
		},
		{
			"displayName": "Health ID",
			"name": "Health-ID",
			"required": true,
			"description": "Your health id",
			"default": "demo@ndhm",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Health-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Generate Svg Card Using GET 1"
					]
				}
			}
		},
		{
			"displayName": "X Token",
			"name": "X-Token",
			"required": true,
			"description": "Auth Token",
			"default": "Bearer X-Token",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-Token": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Generate Svg Card Using GET 1"
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
						"Health Facility"
					],
					"operation": [
						"Generate Svg Card Using GET 1"
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
						"Health Facility"
					],
					"operation": [
						"Generate Svg Card Using GET 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/health/facility/reset/password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Reset Password Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Reset Password Using POST"
					]
				}
			}
		},
		{
			"displayName": "Hfr Uid",
			"name": "hfrUid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "hfrUid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Health Facility"
					],
					"operation": [
						"Reset Password Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Reset Password Using POST"
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
						"Health Facility"
					],
					"operation": [
						"Reset Password Using POST"
					]
				}
			}
		},
];
