exports = async function(args) {
  var collection = context.services.get("mongodb-atlas").db("info").collection("Teachers");
  var student_collection = context.services.get("mongodb-atlas").db("info").collection("Students");

  let data = await collection.findOne({user: args.query["username"]});
  let resonse = "Invalid Username or Password"
  
  if (data.user === args.query["username"] && data.password === args.query["password"]) {
    let student_information = {} 
    
    for(i in data.students) {
      //student_information[i] = await student_collection.findOne({user: i});
      student_information[i] = "test"
     }
    
    resonse = JSON.stringify({
       "Login": "accepted",
       "students": student_information
     });  
  }
  
  return resonse
}