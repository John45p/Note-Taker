const userNotes = require('../db/db.json');
const fs = require('fs');
const uniqid = require('uniqid');


module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(userNotes));
  
    app.post('/api/notes', (req, res) => {
      req.body['id'] = uniqid();
      userNotes.push(req.body);
      res.json(true);
      fs.writeFileSync('./db/db.json', JSON.stringify(userNotes))


      res.end();
    })

    app.delete('/api/notes/:id', (req, res) =>{
        console.log(req.params);
        var deleteid;
        for (var i =0; i<userNotes.length; i++) {
            console.log(userNotes[i])
            if (userNotes[i].id === req.params.id){
                deleteid = i
            }


        }
        userNotes.splice(deleteid, 1)
        console.log(userNotes);
        fs.writeFileSync('./db/db.json', JSON.stringify(userNotes))
        res.end();
    })

}  