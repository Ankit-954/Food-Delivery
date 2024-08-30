import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://ankit954mishra:ilKhOtNHAClngNiv@cluster0.aha7b.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.