


import mongoose from "mongoose";
import app from './app'

const port: number = 3000

//database connection
async function mongoOseTest() {
      try {
            await mongoose.connect('mongodb://127.0.0.1:27017/mongose-test');
            console.log("databse connected")
            app.listen(port, () => {
                  console.log(`Example app listening on port ${port}`)
            })
      }
      catch (error) {
            console.log("Failed to databse connected", error)
      }


}
mongoOseTest()


