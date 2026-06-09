import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authenticationDescription } from './resources/authentication';
import { forgotHealthIdNumberDescription } from './resources/forgot-health-id-number';
import { healthFacilityDescription } from './resources/health-facility';
import { integratedProgramsDescription } from './resources/integrated-programs';
import { profileDescription } from './resources/profile';
import { registrationWithAadhaarDescription } from './resources/registration-with-aadhaar';
import { registrationWithMobileNumberDescription } from './resources/registration-with-mobile-number';
import { searchDescription } from './resources/search';
import { tagsDescription } from './resources/tags';
import { utilityDescription } from './resources/utility';

export class NdhmGovNdhmHealthid implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ndhm-gov-ndhm-healthid',
		name: 'N8nDevNdhmGovNdhmHealthid',
		icon: { light: 'file:./ndhm-gov-ndhm-healthid.svg', dark: 'file:./ndhm-gov-ndhm-healthid.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'It is important to standardize the process of identification of an individual across healthcare providers, to ensure that the created medical records are issued to the right individual or accessed ..',
		defaults: { name: 'ndhm-gov-ndhm-healthid' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNdhmGovNdhmHealthidApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Authentication",
					"value": "Authentication",
					"description": "Health ID Authentication APIs"
				},
				{
					"name": "Forgot Health Id Number",
					"value": "Forgot Health Id Number",
					"description": "APIs to Retrieve Health ID/number using mobile number or aadhar."
				},
				{
					"name": "Health Facility",
					"value": "Health Facility",
					"description": "Create Health facility ID APIs"
				},
				{
					"name": "Integrated Programs",
					"value": "Integrated Programs",
					"description": "APIs to be published by the Health ID system for benefit linkage"
				},
				{
					"name": "Profile",
					"value": "Profile",
					"description": "Health ID Profile APIs (requires authenticated user token)"
				},
				{
					"name": "Registration With Aadhaar",
					"value": "Registration With Aadhaar",
					"description": "APIs to create Health ID using Aadhaar number & mobile number."
				},
				{
					"name": "Registration With Mobile Number",
					"value": "Registration With Mobile Number",
					"description": "APIs to create Health ID using mobile number."
				},
				{
					"name": "Search",
					"value": "Search",
					"description": "Health ID Search APIs"
				},
				{
					"name": "Tags",
					"value": "Tags",
					"description": "Health ID Tag APIs"
				},
				{
					"name": "Utility",
					"value": "Utility",
					"description": "Health ID Information APIs"
				}
			],
			"default": ""
		},
		...authenticationDescription,
		...forgotHealthIdNumberDescription,
		...healthFacilityDescription,
		...integratedProgramsDescription,
		...profileDescription,
		...registrationWithAadhaarDescription,
		...registrationWithMobileNumberDescription,
		...searchDescription,
		...tagsDescription,
		...utilityDescription
		],
	};
}
