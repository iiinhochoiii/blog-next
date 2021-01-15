import { AxiosError } from 'axios';

declare global {
	type Success = {
		[key: string]: boolean;
	};
	type Pending = {
		[key: string]: boolean;
	};
	type Failure = {
		[key: string]: [boolean, null | AxiosError];
	};
}
