module.exports = function(req, res, next){

    res.header('access-control-allow-origin', '*'); //$ <--- saying that requests from any location are allowed to communicate with the data base
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE'); //$ <--- Setting these 4 methods as the only allowed interactions with our server
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); //$ <--- only header types accepted from the client

    next(); //$ <--- sends the request to the next destination
};