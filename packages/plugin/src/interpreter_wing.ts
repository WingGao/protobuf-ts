import { IMessageType } from "@protobuf-ts/runtime";

function WingPatchType(type:IMessageType<any>){
    type.fields.forEach(field=>{
        // 替换为大写
        field.localName = field.jsonName
        field.opt = true //默认都是可选
    })
    return type
}
export default {WingPatchType}
