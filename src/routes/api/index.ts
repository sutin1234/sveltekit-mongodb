
import { connectToDatabase } from '$lib/db';
import type { Locals } from '$lib/types';
import type { Request } from '@sveltejs/kit';
import type { IUser, IUserResponse } from '../users/types';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const get = async (request: Request<Locals>): Promise<IUserResponse> => {
	try {
		const _id = request.query.get('_id')
		const conn = await connectToDatabase();
		const db = conn.db;
		const collection = db.collection('sveltekit-collection');
		const users: IUser[] = _id ? await collection.find({ _id }).toArray() : await collection.find({}).toArray();

		return {
			status: 200,
			body: users
		};

	} catch (err) {
		return {
			status: 500,
			body: 'Internal Server Error!'
		};
	}
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function post(request: Request<Locals>) {
	try {
		const conn = await connectToDatabase();
		const db = conn.db;
		const body = JSON.parse(<string>request.body);
		const collection = db.collection('sveltekit-collection');
		await collection.insertOne(body);

		return {
			status: 200,
			body: 'Success!'
		};

	} catch (err) {
		return {
			status: 500,
			body: 'Internal Server Error!'
		};
	}
}

