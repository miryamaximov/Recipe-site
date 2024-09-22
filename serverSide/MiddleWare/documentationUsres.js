const myFunc = function (req, res, next) {
  var fs=require('fs')
  switch (req.url) {
    case "/addUser":
      {
        let str = "The date: "+new Date()+"\nThe name of the new user: "+req.body.name+
        "\nThe password of the new user: "+req.body.password+"\n*******************\n";
        fs.appendFile('F:/שנה ב/הפרויקט הסופי react + nodejs/nodejs/public/documentationAddUsers.txt', str,
         function(err){
        if (err) console.log(err)
        console.log("The user added successfully!");
      })
      } break;
    default:
      break;
  }
  next();
};
module.exports = myFunc;
