exports = async function(args) {
  var collection = context.services.get("mongodb-atlas").db("info").collection("Teachers");

  let data = await collection.findOne({user: args.query["username"]});
  let resonse = "Invalid Username or Password"
  
  if (data.user === args.query["username"]) {
     resonse = data.students;  
  }
  
  return resonse
}