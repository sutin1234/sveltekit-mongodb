
import mongoose from "mongoose";
const { VITE_MONGODB_URI } = import.meta.env;

const { Schema } = mongoose
export const UserShema = new Schema({
    // _id: new mongoose.Types.ObjectId(),
    fullName: String,
    email: String,
    created: { type: Date, default: Date.now }
})


const connectDb = async () => {
    try {
        await mongoose.connect(<string>VITE_MONGODB_URI,
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
        )
    } catch (e) {
        console.log("could not connect", e);
    }
}

export const UserModel = mongoose.model('Users', UserShema)
export const saveUser = async (body: never): Promise<void> => {
    await connectDb()
    const userModel = new UserModel(body)
    await userModel.save();
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const currentDateUTC = () => {
    const now = new Date();
    const isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
    return new Date(isoDate);
}