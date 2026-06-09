import type { INodeProperties } from 'n8n-workflow';

export const integratedProgramsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					]
				}
			},
			"options": [
				{
					"name": "Generate Aadhar OTP Using POST 2",
					"value": "Generate Aadhar OTP Using POST 2",
					"action": "Generate Aadhaar OTP on registrered mobile number",
					"description": "Generate Aadhaar OTP on registrered mobile number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/aadhaar/generateOtp"
						}
					}
				},
				{
					"name": "Verify Aadhar Otp Using POST",
					"value": "Verify Aadhar Otp Using POST",
					"action": "Create health id using Aadhaar Number Otp.",
					"description": "Create health id using Aadhaar number opt",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/aadhaar/verifyAadharOtp"
						}
					}
				},
				{
					"name": "Verify Bio Using POST",
					"value": "Verify Bio Using POST",
					"action": "Create health id using Biometric Authentication.",
					"description": "Create health id using Biometric Authentication.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/aadhaar/verifyBio"
						}
					}
				},
				{
					"name": "Create Health Id By Demo Auth Using POST",
					"value": "Create Health Id By Demo Auth Using POST",
					"action": "Create health id using Aadhaar Demo Auth.",
					"description": "Create health id using Aadhaar Demo Auth.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/createHealthId/demo/auth"
						}
					}
				},
				{
					"name": "Delink Hid Benefit Using POST",
					"value": "Delink Hid Benefit Using POST",
					"action": "De-Linked with hid.",
					"description": "De-Linked with hid.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/delink"
						}
					}
				},
				{
					"name": "Link Hid Benefit Using POST",
					"value": "Link Hid Benefit Using POST",
					"action": "Linked with hid.",
					"description": "Linked with hid.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/link"
						}
					}
				},
				{
					"name": "Create Health Id By Mobile Using POST",
					"value": "Create Health Id By Mobile Using POST",
					"action": "Create health id using mobile Authentication.",
					"description": "Create health id using mobile Authentication.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/mobile/createHealthId"
						}
					}
				},
				{
					"name": "Generate Mobile Otp Using POST",
					"value": "Generate Mobile Otp Using POST",
					"action": "Generate mobile OTP on registrered mobile number",
					"description": "Generate mobile OTP on registrered mobile number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/mobile/generateOtp"
						}
					}
				},
				{
					"name": "Notify Benefit Using POST",
					"value": "Notify Benefit Using POST",
					"action": "Create health id using notify Benefit.",
					"description": "Create health id using notify Benefit.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/notify/benefit"
						}
					}
				},
				{
					"name": "Find By Aadhar Using POST",
					"value": "Find By Aadhar Using POST",
					"action": "Search health id number using aadhar or aadhar token.",
					"description": "Search health id number using aadhar or aadhar token.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/search/aadhaar"
						}
					}
				},
				{
					"name": "Find By Health Id Using POST",
					"value": "Find By Health Id Using POST",
					"action": "Search benefit using health id number.",
					"description": "Search benefit using health id number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/search/healthIdNumber"
						}
					}
				},
				{
					"name": "Update Mobile Information Using POST",
					"value": "Update Mobile Information Using POST",
					"action": "Update mobile number for account.",
					"description": "Update mobile number for account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/update/mobile"
						}
					}
				},
				{
					"name": "Update Account Information Using POST 1",
					"value": "Update Account Information Using POST 1",
					"action": "Update account information",
					"description": "Update account information",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/update/profile"
						}
					}
				},
				{
					"name": "Update Status Using POST",
					"value": "Update Status Using POST",
					"action": "Update health id status .",
					"description": "Update health id status.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/hid/benefit/update/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v1/hid/benefit/aadhaar/generateOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 2"
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
						"Integrated Programs"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 2"
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
						"Integrated Programs"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 2"
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
						"Integrated Programs"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 2"
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
						"Integrated Programs"
					],
					"operation": [
						"Generate Aadhar OTP Using POST 2"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/aadhaar/verifyAadharOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "Auto Generated Benefit Id",
			"name": "autoGeneratedBenefitId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "autoGeneratedBenefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Id",
			"name": "benefitId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Name",
			"name": "benefitName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "Consent Health Id",
			"name": "consentHealthId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "consentHealthId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "Mobile Number",
			"name": "mobileNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mobileNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "Validity",
			"name": "validity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "validity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Aadhar Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/aadhaar/verifyBio",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Auto Generated Benefit Id",
			"name": "autoGeneratedBenefitId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "autoGeneratedBenefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Id",
			"name": "benefitId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Name",
			"name": "benefitName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Consent Health Id",
			"name": "consentHealthId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "consentHealthId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Mobile Number",
			"name": "mobileNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mobileNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "Validity",
			"name": "validity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "validity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Verify Bio Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/createHealthId/demo/auth",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Aadhar Number",
			"name": "aadharNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "aadharNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Auto Generated Benefit Id",
			"name": "autoGeneratedBenefitId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "autoGeneratedBenefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Id",
			"name": "benefitId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Name",
			"name": "benefitName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Consent Health Id",
			"name": "consentHealthId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "consentHealthId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Mobile Number",
			"name": "mobileNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mobileNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "Validity",
			"name": "validity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "validity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Demo Auth Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/delink",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Delink Hid Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Delink Hid Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Name",
			"name": "benefitName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Delink Hid Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Uid Token",
			"name": "uidToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "uidToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Delink Hid Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Delink Hid Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Delink Hid Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/link",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Link Hid Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Link Hid Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Id",
			"name": "benefitId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Link Hid Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Name",
			"name": "benefitName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Link Hid Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Link Hid Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Uid Token",
			"name": "uidToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "uidToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Link Hid Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Validity",
			"name": "validity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "validity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Link Hid Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Link Hid Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Link Hid Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/mobile/createHealthId",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Auto Generated Benefit Id",
			"name": "autoGeneratedBenefitId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "autoGeneratedBenefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Doc Type",
			"name": "benefitDocType",
			"type": "options",
			"default": "VOTER_ID_CARD",
			"options": [
				{
					"name": "VOTER ID CARD",
					"value": "VOTER_ID_CARD"
				},
				{
					"name": "RATION CARD",
					"value": "RATION_CARD"
				},
				{
					"name": "PAN CARD",
					"value": "PAN_CARD"
				},
				{
					"name": "DRIVING LICENSE",
					"value": "DRIVING_LICENSE"
				},
				{
					"name": "PENSIONER PHOTO CARD",
					"value": "PENSIONER_PHOTO_CARD"
				},
				{
					"name": "KISSAN PHOTO PASSBOOK",
					"value": "KISSAN_PHOTO_PASSBOOK"
				},
				{
					"name": "FREEDOM FIGHTER PHOTO CARD",
					"value": "FREEDOM_FIGHTER_PHOTO_CARD"
				},
				{
					"name": "CERTIFICATE IDENTIFY",
					"value": "CERTIFICATE_IDENTIFY"
				},
				{
					"name": "DISABILITY ID CARD",
					"value": "DISABILITY_ID_CARD"
				},
				{
					"name": "MNREGA JOB CARD",
					"value": "MNREGA_JOB_CARD"
				},
				{
					"name": "BIRTH CERTIFICATE",
					"value": "BIRTH_CERTIFICATE"
				},
				{
					"name": "MARRIAGE CERTIFICATE",
					"value": "MARRIAGE_CERTIFICATE"
				},
				{
					"name": "OTHER GOVERNMENT ID",
					"value": "OTHER_GOVERNMENT_ID"
				},
				{
					"name": "ADOPTION CERTIFICATE",
					"value": "ADOPTION_CERTIFICATE"
				}
			],
			"routing": {
				"send": {
					"property": "benefitDocType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Id",
			"name": "benefitId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Name",
			"name": "benefitName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Consent Health Id",
			"name": "consentHealthId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "consentHealthId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Doc Number",
			"name": "docNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "docNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "File Type",
			"name": "fileType",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "fileType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Uploaded Doc",
			"name": "uploadedDoc",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "uploadedDoc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "Validity",
			"name": "validity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "validity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Create Health Id By Mobile Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/mobile/generateOtp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Generate Mobile Otp Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Generate Mobile Otp Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Generate Mobile Otp Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Generate Mobile Otp Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Generate Mobile Otp Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/notify/benefit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Aadhar Number Or Uid Token",
			"name": "aadharNumberOrUidToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "aadharNumberOrUidToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Auto Generated Benefit Id",
			"name": "autoGeneratedBenefitId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "autoGeneratedBenefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Id",
			"name": "benefitId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Name",
			"name": "benefitName",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Consent Health Id",
			"name": "consentHealthId",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "consentHealthId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Date Of Birth",
			"name": "dateOfBirth",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dateOfBirth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Mobile Number",
			"name": "mobileNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "mobileNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "Validity",
			"name": "validity",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "validity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Notify Benefit Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/search/aadhaar",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Find By Aadhar Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Find By Aadhar Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Find By Aadhar Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Find By Aadhar Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Find By Aadhar Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/search/healthIdNumber",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Find By Health Id Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Find By Health Id Using POST"
					]
				}
			}
		},
		{
			"displayName": "Benefit Id",
			"name": "benefitId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "benefitId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Find By Health Id Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Find By Health Id Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Find By Health Id Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Find By Health Id Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/update/mobile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Update Mobile Information Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Mobile Information Using POST"
					]
				}
			}
		},
		{
			"displayName": "Health Id Number",
			"name": "healthIdNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "healthIdNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Update Mobile Information Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Mobile Information Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Mobile Information Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Mobile Information Using POST"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/update/profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "Health Id Number",
			"name": "healthIdNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "healthIdNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Account Information Using POST 1"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/hid/benefit/update/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Update Status Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Status Using POST"
					]
				}
			}
		},
		{
			"displayName": "Health Id Number",
			"name": "healthIdNumber",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "healthIdNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Integrated Programs"
					],
					"operation": [
						"Update Status Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Status Using POST"
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
						"Integrated Programs"
					],
					"operation": [
						"Update Status Using POST"
					]
				}
			}
		},
];
