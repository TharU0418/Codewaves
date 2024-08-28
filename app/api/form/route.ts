// import dbConnect from "@/lib/dbConnect";
// import { NextResponse } from "next/server";

// export async function POST(request: Request){
//     try {

//         await dbConnect();
//         const body = await request.json();
//         const newBook = new Books(body);
//         await newBook.save();

//         console.log("Book created successfully", newBook)
        
//     } catch (err: any) {
//         console.log('Error Occurred', err);
//         return NextResponse.json({error: err.message})
//     }
// }

// export async function GET(){
//     try {
//         await dbConnect();
//         const books = await Books.find({});
//         console.log("Books fetched successfully:", books);

//         return NextResponse.json(books);
        
//     } catch (err:any) {
//         console.log('Error occured', err)
//         return NextResponse.json({error: err.message})
//     }
// }