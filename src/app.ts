import express, { Application } from "express";
import cors from "cors";
const app: Application= express()
//application routes
import userRoutes from './app/modules/user/user.route'
app.use(cors());
//parse data
app.use(express.json());
//for parsing url encoded data
app.use(express.urlencoded({extended:true}));

app.use('/api/v1/user', userRoutes)

export default app; 





// mongoose query

//for getting all the database name
// show databases



//for using specific database
// use mongose-test

//for query in the specific collection
//db.getCollection('practice').find().limit(2)

//$eq operator
// db.practice.find({ age: { $eq: 17 } })
//db.practice.find({ favoutiteColor: { $eq: "Red" } },{favoutiteColor:1})

//$ne operator
// db.practice.find({ gender: { $ne: "Female" } },{gender:1})
// or db.practice.find({ gender: { $ne: "Female" } }).project({gender:1})
// db.practice.find({ gender: { $ne: "Female" } }).project({gender:1, name:1})

//$gt operator
// db.practice.find({ age: { $gt: 30 } }).project({age:1, name:1})

//$lt operator
// db.practice.find({ age: { $lt: 30 } }).project({age:1, name:1})

//$lte operator
// db.practice.find({ age: { $lte: 30 } }).project({age:1, name:1})
//using sort for getting ascending order
// db.practice.find({ age: { $lte: 30 } }).project({age:1, name:1}).sort({age:1})
//using sort for getting descending order
// db.practice.find({ age: { $lte: 30 } }).project({age:1, name:1}).sort({age:-1})

//implecite and 
// db.practice.find({ age: { $gt: 21,$lt: 30 } })
// db.practice.find({ age: { $gt: 21,$lt: 30 } }).project({age:1})
// db.practice.find({ age: { $gte: 21,$lt: 30 } }).project({age:1})

//$in operator . or er moto kaj kore, ekhane 18 r 23 chara onno kono value dibe na
// db.practice.find({ age: { $in: [18,23]} })

//$nin means not in
// db.practice.find({gender: "Female", age: { $nin: [18,23]} })

//nested condition
// db.practice.find({gender: "Female", age: { $nin: [18,23,70,48]} ,interests:{$in :["Writing","Cooking"]}}).project( {gender:1,age:1,interests:1})


//$and 
// db.practice.find({$and:[{gender: "Female"},{age: {$lt: 30}}]}).project({gender:1,age:1})
 //
// db.practice.find({ $and:[  {gender: "Female"}, {age: {$lt: 30}},  {"skills.name": "JAVASCRIPT"}  ]}).project({gender:1,age:1,"skills.name":1})     
      

//$or
// db.practice.find({ $or:[  {gender: "Female"}, {age: {$lt: 30}},  {"skills.name": "JAVASCRIPT"}  ]}).project({gender:1,age:1,"skills.name":1}) 


// for same field use $in
// db.practice.find({"skills.name": {$in: [ "JAVASCRIPT", "PYTHON"]}}).project({"skills.name":1})


//same field er jonno implicit and use kora jabe na. explicit and use korte hobe

// db.practice.find({ $and:[ {age: {$ne: 30}}, {age: {$gt: 18}}   ]}).project({age:1}).sort({age:1}) 
//$exists 
// db.practice.find({age: {$exists: true}})
//$type
// db.practice.find({age: {$type: "int"}})
// db.practice.find({friends: {$type: "array"}})
//$size bujhay array size
// db.practice.find({skills: {$size: 0}})
// db.practice.find({skills: {$size: 0}}).project({skills:1})
//here 0 means index of an array
// db.practice.find({"interests.0": "Travelling"}).project({interests:1})

///ekahne element gula position wise show korbe
// db.practice.find({interests: [ "Travelling", "Writing", "Reading" ]}).project({interests:1})

//$all operator array er jekono position er array return kore. It is equvalent to $and. $all only array er jonno use hoy.
// db.practice.find({interests: {$all: [ "Travelling", "Writing", "Reading" ]}}).project({interests:1})

// like-> db.practice.find({ $and: [ {"interests":"Travelling"}, {"interests":"Writing"}, {"interests":"Reading"} ]}).project({interests:1})



//ekahne element gula exact matched value return kore. eta theke ber hote hole $eleMatch operator use korte hobe
// db.practice.find({ skills: 	{
//       "name" : "RUBY",
//       "level" : "Expert",
//       "isLearning" : true} }).project({skills:1})


// $eleMatch exact value chara o onno value return kore. eta only object er jonno use kora hoy
// db.practice.find({ skills: 	{
//       $elemMatch: {name:"RUBY",level:"Expert"}}
             
//               }).project({skills:1})



///update query

//$set operator. It is used  in  both update and insert
//update gender from female to male 
// db.practice.updateOne(
//       {_id:ObjectId("6406ad64fc13ae5a40000086")},
//       {$set: {gender:"Male"}}
//       )

// add country  field
// db.practice.updateOne(
//       {_id:ObjectId("6406ad64fc13ae5a40000086")},
//       {$set: {country:"Bangladesh"}}
//       )

//$set operator one field update er jonno use kora hoy.eta array er jonno use kora jay na. eta kono filed er mutiple data update er jonno use korle ful data overrrite kore day. full data jate overrite na kore tar jonno $addToSet operator use kora hoy


//$addToSet ager kono vlaue k update kore na, value na thakle add kore.
//array er kno value add korte hole $each use korte hoy. eta use korle value gula separately add hoy array sign [] add   hoy na
// db.practice.updateOne(
//       {_id:ObjectId("6406ad64fc13ae5a40000086")},
//       {$addToSet: {languages:{$each :['newLanguage ',"uganda"] }}}
//       )


// $push operator $addToSet er moto kaj kore. but eta duplicate entry add kore maens age kono value thakle oita abar add korte cahile add niye nay.but $addToSet duplicate entry kore na. 
// db.practice.updateOne(
//       {_id:ObjectId("6406ad64fc13ae5a40000086")},
//       {$push: {languages:{$each :['newLanguage ',"uganda"] }}}
//       )


///delete 
//$unset operator kono field k delete korar jonno use kora hoy
// to delete a field use $unset operator
// db.practice.updateOne(
//       {_id:ObjectId("6406ad64fc13ae5a40000086")},
//      {$unset: {occupation: "" }}
//       )

// or
// db.practice.updateOne(
//       {_id:ObjectId("6406ad64fc13ae5a40000086")},
//      {$unset: {favoutiteColor: 1 }}
//       )


//$pop operator kono array theke last element k remove kore
// db.practice.updateOne(
//       {_id:ObjectId("6406ad64fc13ae5a40000086")},
//      {$pop: {interests: 1 }}
//       )


// 1 last element k remove kore and -1 first element theke rmove kore
// db.practice.updateOne(
//       {_id:ObjectId("6406ad64fc13ae5a40000086")},
//      {$pop: {interests: -1 }}
//       )


// $pull operator kono field theke data remove korte or ber kore ante use kora hoy
// db.practice.updateOne(
//       {_id:ObjectId("6406ad64fc13ae5a40000086")},
//      {$pull: {friends: "Mir Hussain" }}
//       )



//$PullAll use kora hoy kono field theke more than one element remove korar jonno
//  db.practice.updateOne(
      // {_id:ObjectId("6406ad64fc13ae5a40000086")},
      // {$pullAll: {friends:["Tanmoy Parvez","Rasel Ahmed"]}}
      //  )

//$updateMany te kono id pass korte hoy na {} diye shob filed k update kore fele

// db.practice.updateOne(
//       {},
//      {$pullAll: {friends:["Tanmoy Parvez","Rasel Ahmed"]}}
//       )


//deleteOne use for deleting the whole document
// db.practice.deleteOne( {_id:ObjectId("6406ad64fc13ae5a40000086")} )

//to create a collection
// db.createCollection('test')

//to insert document in the collection
// db.test.insertOne({name:'Jeba '})


//to get the data from the created collection
// db.test.find()


//to delete the collection
//db.test.drop()

///to increment number value
//{db.practice.updateOne({_id : ObjectId("6406ad63fc13ae5a40000064")}, {$inc: {age:1}})



//$rename value rename korte use 
// db.practice.updateMany({}, {$rename: {"favoutiteColor":"favouriteColor"}})


//$min use to get min value not grater than it




///mongoDB aggregation

//$match operator. here find() method and $match operator are same

// db.practice.aggregate(
//       [//stage Match
//       { $match: {gender: "Male"}}
//           ])



// db.practice.aggregate(
//       [//stage Match
//       { $match: {gender: "Male",age:{$gt:18}}}
//           ])
      


// or  db.practice.find({gender: "Male"})
// db.practice.find({gender: "Male" ,age:{$gt:18}})



// $project operator field filtering kore dekhay
// db.practice.aggregate(
//     [//stage Match
//     { $match: {gender: "Male",age:{$gt:18}}},
//     {$project: {gender:1, age: 1}}
//         ])
    

//to get all the document
// db.practice.aggregate([])


//$addFields stage. It will add a field
// db.practice.aggregate(
//       [//stage Match
//           {
//               $addFields: { salary: 4000 },
  
//           },
//           { $project: { salary: 1 } }
//       ])




// db.practice.aggregate(
//       [//stage Match
//           {
//               $addFields: {
//                   salary: {
//                       $toInt: {
//                           $floor: {
//                               $multiply: [{ $rand: {} }, 100]
//                           }
//                       }
//                   }
//               },
  
//           },
//           { $project: { salary: 1 } }
//       ])
//note: but here it does not modify the document . That means the new field will not be add in the document 
// for this $out will be used

//it will create a new collection, the in the new collection new field will be add 
// db.practice.aggregate(
//       [//stage Match
//           {
//               $addFields: {
//                   salary: {
//                       $toInt: {
//                           $floor: {
//                               $multiply: [{ $rand: {} }, 100]
//                           }
//                       }
//                   }
//               },
  
//           },
//           // { $project: { salary: 1 } }
//           {$out: "output-collection"}
//       ])





//to merge the new field in the existing document use $merge instead of using $out
// db.practice.aggregate(
//       [//stage Match
//           {
//               $addFields: {
//                   salary: {
//                       $toInt: {
//                           $floor: {
//                               $multiply: [{ $rand: {} }, 100]
//                           }
//                       }
//                   }
//               },
  
//           },
//           // { $project: { salary: 1 } }
//           {$merge: "practice"}
//       ])






//note: we can use $ in two case
// use case: 1. as a operator 2. as a reference. here $age use as a reference


//$group kono field er reference er distinct value return kore
// db.practice.aggregate([
    
//       {$group: { _id: {age:"$age", gender:"gender"}}}
//       ])



// db.practice.aggregate([
    
//       {$group: { _id: "$age"}}
//       ])
//$age is a reference of the age field. 


//null sob gula document gula k ekta document banay fele
// db.practice.aggregate([
    
//       {$group: { _id: null}}
//       ])




//here the result show the number of persons of the salary like 2 persons getting 45tk salary
// db.practice.aggregate([
//       //group stage
//       {
//           $group: {
//               _id: "$salary",
//               persons: { $sum: 1 } //accumulator
//           }
  
  
//       },
//       //project stage
//       {
//           $project: { _id: 0, salary: "$_id", persons: 1 }
//       },
//       //sort stage
//       {
//           $sort: { _id: 1 }
//       }
  
//   ])



///$limit will always used after the $sort. $limit will give 3 data here
// db.practice.aggregate([
//       //group stage
//       {
//           $group: {
//               _id: "$salary",
//               persons: { $sum: 1 } //accumulator
//           }
  
  
//       },
//       //project stage
//       {
//           $project: { _id: 0, salary: "$_id", persons: 1 }
//       },
//       //sort stage
//       {
//           $sort: { _id: 1 }
//       },
//   {
//       $limit:3
      
//   }
//   ])





// db.practice.aggregate([
    
//       //match stage
//       {
//           $match: {age: {$gt: 18}}
//       },
//       //group stage
//       {
//           $group: {
//               _id: "$salary",
//               persons: { $sum: 1 } //accumulator
//           }
  
  
//       },
//       //project stage
//       {
//           $project: { _id: 0, salary: "$_id", persons: 1 }
//       },
//       //sort stage
//       {
//           $sort: { _id: 1 }
//       },
//   {
//       $limit:3
      
//   }
//   ])





 
//here in $sort _id will show in a decending order
// db.practice.aggregate([
    
//       //match stage
//       {
//           $match: {age: {$gt: 18}}
//       },
//       //group stage
//       {
//           $group: {
//               _id: "$salary",
//               persons: { $sum: 1 } //accumulator
//           }
  
  
//       },
//       //project stage
//       {
//           $project: { _id: 0, salary: "$_id", persons: 1 }
//       },
//       //sort stage
//       {
//           $sort: { _id: -1 }
//       },
//   {
//       $limit:3
      
//   }
//   ])





//note: we can use group stage and match stage more than one
// db.practice.aggregate([
    
//       //match stage
//       {
//           $match: {age: {$gt: 18}}
//       },
//       {
          
//           $match: {gender:"Male"}
//       },
//       //group stage
//       {
//           $group: {
//               _id: "$salary",
//               persons: { $sum: 1 } //accumulator
//           }
  
  
//       },
//       //project stage
//       {
//           $project: { _id: 0, salary: "$_id", persons: 1 }
//       },
//       //sort stage
//       {
//           $sort: { _id: 1 }
//       },
//   // {
//   //     $limit:3
      
//   // }
//   ])





// company salary calculation of the whole document
// db.practice.aggregate([
//       {
//           $group: {
//               _id: null,
//               count:{$sum: "$salary"}
//             
//           }
  
  
//       },
    
//   ])






//the output will return maximum and minimum salary of the company
// db.practice.aggregate([  
//       {
//           $group: {
//               _id: null,
//               count:{$sum: "$salary"},
//               maxSalary:{$max: "$salary"},//$max accumulator operator 
// minSalary:{$min: "$salary"},//$min accumulator operator 
// averageSalary:{$avg: "$salary"}//$avg accumulator operator 

//           }
//       },
      
//   ])





// db.practice.aggregate([
    
     
//       //group stage
//       {
//           $group: {
//               _id: null,
//               count:{$sum: "$salary"},
//               maxSalary:{$max: "$salary"},
//                  minSalary:{$min: "$salary"},
//                   averageSalary:{$avg: "$salary"}
//               // persons: { $sum: 1 } //accumulator
//           }
  
  
//       },
//       //project stage
//       {
//           $project: {
//               count:1,
//               maxSalary:1,
//               minSalary: 1,
//               avgSalary: 1,
//               salaryRange:{$subtract: ["$maxSalary","$minSalary"]}
//           }
//       }
      
//   ])





//array theke kono element separate krte and sei element gulo distinct value create korte hole unwind use korte hobe

// db.practice.aggregate([
//       //unwind stage
//       {
//           $unwind: "$education"
//       },
//       //group stage
//       {
//           $group: {
//              _id:"$education"
//           }
//       },   
//   ])



// db.practice.aggregate([
//       //unwind stage
//       {
//           $unwind: "$friends"
//       },
//       //group stage
//       {
//           $group: {
//              _id:"$friends",
            //     count:{$sum:1}
//           }
//       },   
//   ])






///Multi Stage Pipeline use $facet 

// db.practice.aggregate([
//       //match stage
//       {
//           $match: {_id:ObjectId("6406ad65fc13ae5a400000c7")},
//       },
//       {
//           $facet:{
//               //Sub pipeline
//               "friendsCount":[
                  
//                   //stage
//                   {$project:{friendsCount:{$size:"$friends"}}}
//                   ],
//               //Sub pipeline
//               "interestsCount":[
                  
//                   //stage
//                   {$project:{interestsCount:{$size:"$interests"}}}
//                   ],
//                    //Sub pipeline
//               "skillsCount":[
                  
//                   //stage
//                   {$project:{skillsCount:{$size:"$skills"}}}
//                   ],
                
//           }
//       }
     
     
         
     
//   ])


//$lookup operator: video