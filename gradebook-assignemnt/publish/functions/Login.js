exports =  function(args) {
  var collection = context.services.get("mongodb-atlas").db("info").collection("Teachers");
  collection.findOne({username: "Prem.Kattel"}).then((doc) => {
    
  })
  return "Found Document"
}