
exports = async function run() {
    const uri = "mongodb+srv://Keaton-Kuykendall:KkGM1999*@grade-book-assignment.rwrxncz.mongodb.net/?retryWrites=true&w=majority&appName=Grade-Book-Assignment";

    const client = new MongoClient(uri);

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

