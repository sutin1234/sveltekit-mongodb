// import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

// dotenv.config();
const { VITE_MONGODB_URI, VITE_MONGODB_DB } = import.meta.env;

if (!VITE_MONGODB_URI) {
	throw new Error('please defined MONGODB_URI in .env');
}
if (!VITE_MONGODB_DB) {
	throw new Error('please defined MONGODB_DB in .env');
}

let cached = global.mongo;
if (!cached) {
	cached = global.mongo = { conn: null, promise: null };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function connectToDatabase() {

	if (cached.conn) {
		return cached.conn
	}

	if (!cached.conn) {
		cached.promise = MongoClient.connect(<string>VITE_MONGODB_URI).then((client) => {
			return {
				client,
				db: client.db(<string>VITE_MONGODB_DB)
			}
		})
	}
	cached.conn = await cached.promise
	return cached.conn
}
