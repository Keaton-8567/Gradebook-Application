exports =  function(args) {
  var collection = context.services.get("mongodb-atlas").db("info").collection("Teachers");

  let data = JSON.strigify(collection.findOne({user: args.query["username"]}))
  
  return data
}