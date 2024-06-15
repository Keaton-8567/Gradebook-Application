exports = async function(context, request, collection) {
  const username = request.payload.username; // Assuming username is sent in the request payload

  // Connect to the info database and teachers collection
  const realm = context.services.get("mongodb-atlas");
  const db = realm.db("info");
  const teachers = db.collection("Teachers");

  // Find the teacher document with the matching username
  const teacher = await teachers.find({ username: username }).limit(1).toArray();

  // Check if a teacher was found
  if (teacher.length === 0) {
    return {statusCode: 404, body: "Username not found"}; // Set status code to 404 for Not Found
  }

  // Return the username if found
  return {statusCode: 200, body: { username: teacher[0].username }};
};