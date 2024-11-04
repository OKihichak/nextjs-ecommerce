import { client } from "@/app/lib/sanity";
import { NextResponse } from "next/server";


export async function POST(req: Request, res: Response) {

    const data = await req.json();
    const {name, comment, dataId} = data;

    if(!name || !comment || !dataId ){
        return NextResponse.json({
            message: "All fields are required",
        },
            {status:400}
        );
    }

    try{
        const NewComment = await client.create({
            _type: "comment",
            name,
            comment,

            product: {
                _type: "ReferenceError",
                _ref: dataId,  //or productId
            }
        })

        return NextResponse.json({message:"Comment added Succesfully", comment: NewComment},{status:201});
        }catch(error){
            return NextResponse.json({message:"Comment wasn't added ", error},{status:500});


        }
        
    }
    
