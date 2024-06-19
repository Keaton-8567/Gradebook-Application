exports =  function(args) {
  var collection = context.services.get("mongodb-atlas").db("info").collection("Teachers");

  let data = collection.findOne({user: args.query["username"]});

  let test = JSON.stringify({"test": data});
  
  return test
}