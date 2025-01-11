

export const MovieIndex = (req, res) => {
     res.send("Get all Movies list");
 };

 export const MovieCreate = (req, res) => {
    // id, title, desc

    console.log(req.body)

    return res.json(req.body)

    // create the movie info
 };

 export const MovieUpdate = (req, res) => {
    res.send("Update a Movie");
};

export const MovieDelete = (req, res) => {
    res.send("Delete a Movie");
};

