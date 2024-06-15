exports = async function run() {
    // Get the database and collection on which to run the operation
    const database = client.db("info");
    const movies = database.collection("Teachers");

    // Query for a movie that has the title 'The Room'
    const query = { username: "Prem.Kattel" };

    // Execute query
    const user = await movies.findOne(query);

    // Print the document returned by findOne()
    return user;
}

