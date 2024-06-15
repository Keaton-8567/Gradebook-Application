exports = async function(context, request, collection) {
  const user = context.query["user"]; // Assuming user is sent in the request payload

  // Connect to the info database and teachers collection
  const realm = context.services.get("mongodb-atlas");
  const db = realm.db("info");
  const teachers = db.collection("Teachers");

  // Find the teacher document with the matching user
  const teacher = await teachers.find({ user: user }).limit(1).toArray();

  // Check if a teacher was found
  if (teacher.length === 0) {
    return {statusCode: 404, body: "user not found"}; // Set status code to 404 for Not Found
  }

  // Return the user if found
  return {statusCode: 200, body: { user: teacher[0].user }};
};