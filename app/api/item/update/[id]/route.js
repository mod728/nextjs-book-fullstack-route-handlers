import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

export async function PUT(request, context){
    const reqBody = await request.json()
    try{
        await connectDB()
        const params = await context.params 
        await ItemModel.updateOne({_id: params.id}, reqBody)
        return NextResponse.json({message: "アイテム編集成功"})
    }catch(err){
        return NextResponse.json({message: "アイテム編集失敗"})
    }
}