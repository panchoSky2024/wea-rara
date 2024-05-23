const {request , response } = require("express")

const {robots} = require("../robots");

const getRobot = (req = request, res = response) =>{
    
    return res.json({
        status:true,
        robots,
        statusCode:200
    })
}

const getRobotById = (req = request , res = response ) =>{
    let id = req.params.id;

    let robotABuscar = robots.find ((robot) => {
        return robot.id === id
    })

    if(robotABuscar){
        return res.json({
            ok:true,
            robotABuscar,
            statusCode:200
        });
    }else{
        return res.json({
            ok:false,
            msg:"No hay robots con ese id",
            statusCode:404
        })
    }
}

module.exports ={
    getRobot
}