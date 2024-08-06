import {model,Schema} from 'mongoose';
const linkSchema = new Schema ({

    target :{
        type : String,
        required:true
    },
    title :{
        type : String,
        required :true
    },
    slug :{
        type:String,
        required:true,
        unique:true
    },
    views:{
        type:Number,
        default:0
    }
}
    
    ,{timestamps:true});

const Link =model ("Link" , linkSchema);
export default Link ;