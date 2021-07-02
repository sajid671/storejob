const Model = require('./model/grocModel');
const Data=require('./model/Data');
const connectDB=require('./config/db');
const Camera = require('./model/camera');

connectDB();

const importDB=async()=>
{
    try {
        await Model.deleteMany({});
        await Model.insertMany(Data)
        await Model.insertMany(Camera)
        console.log('Data Imported')
    } catch (error) {
        console.log('Data not Imported')

    }
}
importDB();
