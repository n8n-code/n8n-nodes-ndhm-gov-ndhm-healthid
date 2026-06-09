import type { INodeProperties } from 'n8n-workflow';

export const tagsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					]
				}
			},
			"options": [
				{
					"name": "Delete Tag Using DELETE",
					"value": "Delete Tag Using DELETE",
					"action": "Delete tag against HealthId.",
					"description": "Delete tag against HealthId.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/v1/ha/tags"
						}
					}
				},
				{
					"name": "Get Tags Using GET",
					"value": "Get Tags Using GET",
					"action": "Get list of Tags against HealthID.",
					"description": "Get list of Tags against HealthID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/ha/tags"
						}
					}
				},
				{
					"name": "Add Tag Using POST",
					"value": "Add Tag Using POST",
					"action": "Add tag against HealthId.",
					"description": "Add tag against HealthId.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v1/ha/tags"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /v1/ha/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Delete Tag Using DELETE"
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
						"Tags"
					],
					"operation": [
						"Delete Tag Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "DELETE /v1/ha/tags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Delete Tag Using DELETE"
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
						"Tags"
					],
					"operation": [
						"Delete Tag Using DELETE"
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
						"Tags"
					],
					"operation": [
						"Delete Tag Using DELETE"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/ha/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Get Tags Using GET"
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
						"Tags"
					],
					"operation": [
						"Get Tags Using GET"
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
						"Tags"
					],
					"operation": [
						"Get Tags Using GET"
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
						"Tags"
					],
					"operation": [
						"Get Tags Using GET"
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
						"Tags"
					],
					"operation": [
						"Get Tags Using GET"
					]
				}
			}
		},
		{
			"displayName": "POST /v1/ha/tags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Add Tag Using POST"
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
						"Tags"
					],
					"operation": [
						"Add Tag Using POST"
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
						"Tags"
					],
					"operation": [
						"Add Tag Using POST"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Tags"
					],
					"operation": [
						"Add Tag Using POST"
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
						"Tags"
					],
					"operation": [
						"Add Tag Using POST"
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
						"Tags"
					],
					"operation": [
						"Add Tag Using POST"
					]
				}
			}
		},
];
