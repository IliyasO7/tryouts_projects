const Location = require('../models/locationModels')


exports.addLocation = async(req,res,next)=>{

    //const {location} = req.body;
    const loc = req.params.location;
    console.log('>>>>>>>>>>>>>>>');

    const limittodaysDate = new Date().setTime(1999900000000)

 /*   console.log(limittodaysDate);
    console.log('?///');*/

    const now = new Date().getTime();
  //  console.log(now)

    console.log(loc);

    if(now <= limittodaysDate){
        console.log('true');
        await Location.create({
            location: loc
        })
    }
    

    res.status(200).json('created');





}
