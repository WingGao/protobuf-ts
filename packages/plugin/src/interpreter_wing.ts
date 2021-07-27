import { IMessageType } from "@protobuf-ts/runtime";

function WingPatchType(type:IMessageType<any>){
    type.fields.forEach(field=>{
        // 替换为大写
        field.localName = field.jsonName
    })
    return type
}
export default {WingPatchType}
