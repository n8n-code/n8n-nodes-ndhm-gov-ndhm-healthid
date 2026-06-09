import type { INodeProperties } from 'n8n-workflow';

export const profileDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					]
				}
			},
			"options": [
				{
					"name": "Generatere Kyc Aadhar OTP Using POST",
					"value": "Generatere Kyc Aadhar OTP Using POST",
					"action": "Generate Aadhaar OTP on registrered for link account with aadhar number",
					"description": "Generate Aadhaar OTP on registrered for link account with aadhar number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/account/aadhaar/generateOTP"
						}
					}
				},
				{
					"name": "Verify Aadhar OTP Only Using POST 1",
					"value": "Verify Aadhar OTP Only Using POST 1",
					"action": "Verify Aadhaar OTP to complete KYC/re-KYC verification.",
					"description": "Verify Aadhaar OTP to complete KYC/re-KYC verification",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/account/aadhaar/verifyOTP"
						}
					}
				},
				{
					"name": "Get Benefits Using GET",
					"value": "Get Benefits Using GET",
					"action": "Get List of Benefits associated with HealthID.",
					"description": "Get List of Benefits associated with HealthID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/account/benefits"
						}
					}
				},
				{
					"name": "Change Password Via Aadhar Using POST",
					"value": "Change Password Via Aadhar Using POST",
					"action": "Change password via Aadhar for heath id.",
					"description": "Change password via Aadhar for heath id.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/account/change/passwd/byAadhaar"
						}
					}
				},
				{
					"name": "Change Password Via Mobile Using POST",
					"value": "Change Password Via Mobile Using POST",
					"action": "Change password via mobile for heath id.",
					"description": "Change password via mobile for heath id.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/account/change/passwd/byMobile"
						}
					}
				},
				{
					"name": "Generate Aadhar OTP Using GET",
					"value": "Generate Aadhar OTP Using GET",
					"action": "Generate Aadhaar OTP on registrered mobile number.",
					"description": "Generate Aadhaar OTP on registrered mobile number.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/account/change/passwd/generateAadhaarOTP"
						}
					}
				},
				{
					"name": "Generate Mobile OTP Using GET",
					"value": "Generate Mobile OTP Using GET",
					"action": "Generate Mobile OTP to start registration.",
					"description": "Generate Mobile OTP to start registration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/account/change/passwd/generateMobileOTP"
						}
					}
				},
				{
					"name": "Change Password Via Using POST",
					"value": "Change Password Via Using POST",
					"action": "Change password via password for heath id.",
					"description": "Change password via password for heath id.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/account/change/password"
						}
					}
				},
				{
					"name": "Generate Card Using GET",
					"value": "Generate Card Using GET",
					"action": "Generate Health ID card in PDF format",
					"description": "Generate Health ID card in PDF format",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/account/getCard"
						}
					}
				},
				{
					"name": "Generate Png Card Using GET",
					"value": "Generate Png Card Using GET",
					"action": "Generate Health ID card PNG",
					"description": "Generate Health ID card PNG",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/account/getPngCard"
						}
					}
				},
				{
					"name": "Generate Svg Card Using GET",
					"value": "Generate Svg Card Using GET",
					"action": "Generate Health ID card SVG",
					"description": "Generate Health ID card SVG",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/account/getSvgCard"
						}
					}
				},
				{
					"name": "Delete Account Using DELETE",
					"value": "Delete Account Using DELETE",
					"action": "Delete account",
					"description": "Delete account",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/account/profile"
						}
					}
				},
				{
					"name": "Get Account Information Using GET",
					"value": "Get Account Information Using GET",
					"action": "Get account information.",
					"description": "Get account information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/account/profile"
						}
					}
				},
				{
					"name": "Update Account Information Using POST",
					"value": "Update Account Information Using POST",
					"action": "Update account information",
					"description": "Update account information",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/account/profile"
						}
					}
				},
				{
					"name": "Get Qr Code Using GET",
					"value": "Get Qr Code Using GET",
					"action": "Get Quick Response code in PNG format for this account.",
					"description": "Get Quick Response code in PNG format for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/account/qrCode"
						}
					}
				},
				{
					"name": "Validate Token Using POST",
					"value": "Validate Token Using POST",
					"action": "Validate auth token",
					"description": "Validate auth token",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/account/token"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/account/aadhaar/generateOTP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Generatere Kyc Aadhar OTP Using POST"
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
						"Profile"
					],
					"operation": [
						"Generatere Kyc Aadhar OTP Using POST"
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
						"Profile"
					],
					"operation": [
						"Generatere Kyc Aadhar OTP Using POST"
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
						"Profile"
					],
					"operation": [
						"Generatere Kyc Aadhar OTP Using POST"
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
						"Profile"
					],
					"operation": [
						"Generatere Kyc Aadhar OTP Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/account/aadhaar/verifyOTP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST 1"
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
						"Profile"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST 1"
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
						"Profile"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST 1"
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
						"Profile"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST 1"
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
						"Profile"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST 1"
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
						"Profile"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST 1"
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
						"Profile"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST 1"
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
						"Profile"
					],
					"operation": [
						"Verify Aadhar OTP Only Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/account/benefits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Benefits Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Benefits Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Benefits Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Benefits Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Benefits Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/account/change/passwd/byAadhaar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Change Password Via Aadhar Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Aadhar Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Aadhar Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Aadhar Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Aadhar Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Aadhar Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Aadhar Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Aadhar Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/account/change/passwd/byMobile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Change Password Via Mobile Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Mobile Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Mobile Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Mobile Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Mobile Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Mobile Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Mobile Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/account/change/passwd/generateAadhaarOTP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Generate Aadhar OTP Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Aadhar OTP Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Aadhar OTP Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Aadhar OTP Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Aadhar OTP Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/account/change/passwd/generateMobileOTP",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Generate Mobile OTP Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Mobile OTP Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Mobile OTP Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Mobile OTP Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Mobile OTP Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/account/change/password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Change Password Via Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Using POST"
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
						"Profile"
					],
					"operation": [
						"Change Password Via Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/account/getCard",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Generate Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Card Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/account/getPngCard",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Generate Png Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Png Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Png Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Png Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Png Card Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/account/getSvgCard",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Generate Svg Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Svg Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Svg Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Svg Card Using GET"
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
						"Profile"
					],
					"operation": [
						"Generate Svg Card Using GET"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/account/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Delete Account Using DELETE"
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
						"Profile"
					],
					"operation": [
						"Delete Account Using DELETE"
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
						"Profile"
					],
					"operation": [
						"Delete Account Using DELETE"
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
						"Profile"
					],
					"operation": [
						"Delete Account Using DELETE"
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
						"Profile"
					],
					"operation": [
						"Delete Account Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/account/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Account Information Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Account Information Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Account Information Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Account Information Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Account Information Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/account/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
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
						"Profile"
					],
					"operation": [
						"Update Account Information Using POST"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/account/qrCode",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Get Qr Code Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Qr Code Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Qr Code Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Qr Code Using GET"
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
						"Profile"
					],
					"operation": [
						"Get Qr Code Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/account/token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Validate Token Using POST"
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
						"Profile"
					],
					"operation": [
						"Validate Token Using POST"
					]
				}
			}
		},
		{
			"displayName": "Auth Token",
			"name": "authToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "authToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Profile"
					],
					"operation": [
						"Validate Token Using POST"
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
						"Profile"
					],
					"operation": [
						"Validate Token Using POST"
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
						"Profile"
					],
					"operation": [
						"Validate Token Using POST"
					]
				}
			}
		},
];
