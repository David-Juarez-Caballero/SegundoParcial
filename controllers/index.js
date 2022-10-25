const data = require('../data');


const getData = async (req,res) =>{
    try{
        const{params:{id}} = req;
        const foundData = data.userData.finData(user => Number(id) === user.id);
        const {firstName, lastName, maidenName, email, age, address, company: {title}} = usersData[foundData];
        res.send({
            status:200,
            user: {
                Name: `${firstName} ${lastName} ${maidenName}`,
                email,
                age,
                address,
                jobTitle: title
            },  
        })
    }catch (error) {
        res.send("404")
    }
}

const updateData = async (req, res) => {
    try {
        const{params:{id}} = req;
        const found = data.userData[id]
        //enviar respuesta
        res.send({
            status:200,
            
        })
        } catch(error) {
            res.send("404")
    }
}

module.exports = {
    getData,
    updateData
}