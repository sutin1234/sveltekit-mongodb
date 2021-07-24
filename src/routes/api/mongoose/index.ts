
import type { Locals } from '$lib/types';
import type { Request } from '@sveltejs/kit';
import mongoose from "mongoose";
const { VITE_MONGODB_URI } = import.meta.env;
mongoose.Promise = global.Promise;

const { Schema } = mongoose
export const UserShema = new Schema({
    fullName: String,
    email: String,
    created: { type: Date }
})
const connectDb = async () => {
    try {
        await mongoose.connect(<string>VITE_MONGODB_URI,
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
        )
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error:"));
        db.once("open", function () {
            console.log("Connection Successful!");
        });
    } catch (e) {
        console.log("could not connect", e);
    }
}
export const UserModel = mongoose.models.Users || mongoose.model('Users', UserShema)
export const saveUser = async (body: any) => {
    await connectDb()
    const userModel = new UserModel(body)
    const saveModel = await userModel.save()
    console.log(saveModel)
    return saveModel
}


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const get = async () => {
    await connectDb()
    const all = await UserModel.find()
    if (all.length) {
        return {
            status: 200,
            body: all
        };
    } else {
        return {
            status: 400,
            body: 'not found!'
        };
    }
}

export async function post(request: Request<Locals>) {
    await connectDb()
    const body = JSON.parse(<string>request.body);
    const model = await saveUser(body)
    return model
}