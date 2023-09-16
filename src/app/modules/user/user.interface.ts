import { HydratedDocument, Model } from "mongoose";

      // 1. Create an interface representing a document in MongoDB.
      export interface IUser {
            id: string;
            role: "student";
            password: string;
            name:{
            firstName:string,
            lastName:string,
            };
            dateOfBirth?:string,
            gender : "male"| "female",
            contactNo: string,
      
      }





      //static methods

      
export interface UserModel extends Model<IUser,{},IUserMethods> {
      getAdminUser(): Promise<HydratedDocument<IUser,IUserMethods>>;
    }
    
//instance methods
      // Put all user instance methods in this interface:
 export interface IUserMethods {
      fullName(): string;
    }