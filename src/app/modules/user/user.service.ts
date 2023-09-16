import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserDB = async (payload: IUser) : Promise<IUser>=> {
      const user = new User(
      //       {
      //       // id: "147",
      //       // role: "student",
      //       // password: "35436fdgd",
      //       // name: {
      //       //       firstName: "rina",
      //       //       lastName: "fawjia",
      //       // },
      //       // dateOfBirth: "3454",
      //       // gender: "female",
      //       // contactNo: "969595697",
           

      // }
      payload 
      );
      await user.save();//built in instance methods
user.fullName();//custom instance methods
      console.log(user);
      console.log(user.fullName());
      return user;


}

export const getUsersFromDB =async(): Promise<IUser[]>=>{

      const user = await User.find()
      return user;

}

export const getUserByIdFromDB =async(payload:string):Promise<IUser|null>=>{
const user = await User.findOne({id:payload},{name:1,contactNo:1});
return user;
};

// export const getAdminUsersFromDB =async()=>{
//       const admins = await User.getAdminUser();
//       return admins;
//       };