import { observable } from 'mobx';

class BaseStore {
	@observable
	public _success: Success = {};

	@observable
	public _pending: Pending = {};

	@observable
	public _failure: Failure = {};

	public _init(key: string) {
		this._pending[key] = true;
		this._success[key] = false;
		this._failure[key] = [false, null];
	}

	public get pending() {
		return this._pending;
	}

	public get success() {
		return this._success;
	}
	public get failure() {
		return this._failure;
	}
}

export default BaseStore;
