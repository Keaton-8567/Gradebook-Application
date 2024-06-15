exports = function(data) {
  const username = data.query["user"]

  const realm = context.services.get("mongodb-atlas");
  const db = realm.db("info")
  const teachers = db.collection("Teachers");

  const teacher = teachers.find({ user: username}).limit(1).toArray();

  if (teacher.length === 0) {
    return {statusCode: 404, body: "Username not found"};
  }

  return {statusCode: 200, body: {user: teacher[0].username}}
}