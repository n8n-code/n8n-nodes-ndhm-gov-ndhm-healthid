import type { INodeProperties } from 'n8n-workflow';

export const utilityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					]
				}
			},
			"options": [
				{
					"name": "Get Districts In State Using GET",
					"value": "Get Districts In State Using GET",
					"action": "Get a list of districts in a given  State as per LGD.",
					"description": "Get a list of districts in a given  State as per LGD.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/ha/lgd/districts"
						}
					}
				},
				{
					"name": "Get States Using GET",
					"value": "Get States Using GET",
					"action": "Get a list of states as per LGD.",
					"description": "Get a list of states as per LGD.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/ha/lgd/states"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/ha/lgd/districts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Get Districts In State Using GET"
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
						"Utility"
					],
					"operation": [
						"Get Districts In State Using GET"
					]
				}
			}
		},
		{
			"displayName": "State Code",
			"name": "stateCode",
			"required": true,
			"description": "stateCode",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "stateCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Get Districts In State Using GET"
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
						"Utility"
					],
					"operation": [
						"Get Districts In State Using GET"
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
						"Utility"
					],
					"operation": [
						"Get Districts In State Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /v1/ha/lgd/states",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Utility"
					],
					"operation": [
						"Get States Using GET"
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
						"Utility"
					],
					"operation": [
						"Get States Using GET"
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
						"Utility"
					],
					"operation": [
						"Get States Using GET"
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
						"Utility"
					],
					"operation": [
						"Get States Using GET"
					]
				}
			}
		},
];
