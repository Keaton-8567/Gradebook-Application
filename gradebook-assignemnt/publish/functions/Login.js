exports =  function(args) {
  var collection = context.services.get("mongodb-atlas").db("info").collection("Teachers");
  return collection.findOne({user: args.query["username"]})
}