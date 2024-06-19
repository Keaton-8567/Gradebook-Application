exports = async function(args) {
  var collection = context.services.get("mongodb-atlas").db("info").collection("Teachers");

  let data = await collection.findOne({user: args.query["username"]});

  let test = data.last_name;
  
  return test
}