exports =  function(args) {
  var collection = context.services.get("mongodb-atlas").db("info").collection("Teachers");
  
  if (collection.findOne({user: args.query["username"]})["first_name"] === "Prem") {
    return "working"
  }
}