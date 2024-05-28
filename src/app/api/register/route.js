import { NextResponse} from "next/server";

import { connectMongoDB} from "../../../../lib/mongodb";
import User from '../../../../models/user'
import bcrypt from 'bcryptjs'

export async function POST(req) {

    try {

        const { name, password, email } = await req.json();
        const hashPassword = await bcrypt.hash(password, 10)
        await connectMongoDB()
        await User.create({ name, email, password: hashPassword})


        return NextResponse.json({ message: "User registered."},{ status: 201})
    } catch (e) {
        console.log(e)
        return NextResponse.json({ message: 'An error occurred while registering the user.'},{ status: 500})
    }
}