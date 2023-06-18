import mongoose from 'mongoose';
declare const User: mongoose.Model<{
    age: string;
    firstName: string;
    lastName: string;
    userName: string;
    gender: string;
    email: string;
    password: string;
    friends: mongoose.Types.ObjectId[];
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    age: string;
    firstName: string;
    lastName: string;
    userName: string;
    gender: string;
    email: string;
    password: string;
    friends: mongoose.Types.ObjectId[];
}> & Omit<{
    age: string;
    firstName: string;
    lastName: string;
    userName: string;
    gender: string;
    email: string;
    password: string;
    friends: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
}, never>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    age: string;
    firstName: string;
    lastName: string;
    userName: string;
    gender: string;
    email: string;
    password: string;
    friends: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    age: string;
    firstName: string;
    lastName: string;
    userName: string;
    gender: string;
    email: string;
    password: string;
    friends: mongoose.Types.ObjectId[];
}>> & Omit<mongoose.FlatRecord<{
    age: string;
    firstName: string;
    lastName: string;
    userName: string;
    gender: string;
    email: string;
    password: string;
    friends: mongoose.Types.ObjectId[];
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>>;
export default User;
