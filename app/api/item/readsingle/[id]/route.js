import { NextResponse } from "next/server"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

export async function GET(request, context){
    const params = await context.params
    try{
        await connectDB()
        const singleItem = await ItemModel.findById(params.id)  
        return NextResponse.json({message: "アイテム読み取り成功（シングル）", singleItem: singleItem})
    }catch(err){
        return NextResponse.json({message: "アイテム読み取り失敗（シングル）"})
    }
}