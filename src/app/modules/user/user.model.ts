import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, 
      
      // UserModel

} from "./user.interface";

// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, {}, IUserMethods>;


// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser, UserModel, IUserMethods>({

      id: { type: String, required: true, unique: true },
      role: { type: String, required: true },
      password: { type: String, required: true },
      name: {
            firstName: { type: String, required: true },
            lastName: { type: String, required: true },
      },
      dateOfBirth: { type: String },
      gender: { type: String, enum: ['male', 'female'] },
      contactNo: { type: String, required: true },
});

///for instance
userSchema.method('fullName', function fullName() {
      return this.name.firstName + ' ' + this.name.lastName;
    });
    

    //for static
    userSchema.static('getAdminUsers', async function getAdminUser() {
      const admins= await this.find({role:"admin"})
      return admins;
    });



// 3. Create a Model.
const User = model<IUser,UserModel>('User', userSchema);
export default User;

