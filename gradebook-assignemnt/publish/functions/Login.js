exports = async function(args) {
  var collection = context.services.get("mongodb-atlas").db("info").collection("Teachers");
  var student_collection = context.services.get("mongodb-atlas").db("info").collection("Students");

  let data = await collection.findOne({user: args.query["username"]});
  let resonse = JSON.stringify({"Login": "failed", "Error": "Incorrect Username or Password"})
  
  if (data.user === args.query["username"] && data.password === args.query["password"]) {
    let student_information = {} 
    
    for(i in data.students) {
      student_information[data.students[i]] = await student_collection.findOne({user: data.students[i]});
     }
    
    resonse = JSON.stringify({
       "Login": "accepted",
       "students": student_information
     });  
  }
  
  return resonse
}