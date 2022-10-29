const { userData } = require('../data');


const getData = async (req, res) => {
    try {
        const { params: { id } } = req;
        //for each
        const foundData = userData.find(x => x.id == id);
        //trae estos datos
        const { firstName, lastName, maidenName, email, age, address, company: { title } } = foundData;

        res.send({
            status: 200,
            user: {
                FullName: `${firstName} ${lastName} ${maidenName}`,
                email,
                age,
                address,
                jobTitle: title
            },
        })
    } catch (error) {
        res.send("505")
    }
}

const updateData = async (req, res) => {
    try {
        const { params: { id }, body: newAddress } = req;
        const foundData = userData.find(x => x.id == id);
        const user = { ...foundData, address: newAddress }

        res.send({
            status: 200,
            user
        })
    } catch (error) {
        res.send("505")
    }
}

const createUser = async (req, res) => {
    try {
        const { body: { email } } = req;
        const newUser = {
            id: userData[userData.length - 1].id + 1,
            email
        }
        userData.push(newUser)
        res.send({
            status: 200,
            user: userData.map(({ id, email }) => ({ id, email }))
        })

    } catch (error) {
        res.send("status: 505")
    }
}
const deleteUser = async (req, res) => {
    try {
        const { params: { id } } = req;
        const foundUser = userData.find(x => x.id == id);
        if (!foundUser) {
            res.send({
                status: 404,
                user: {}
            })
        }
        else {
            userData.splice(id - 1, 1)
            res.send({
                status: 200,
                user: userData.map(({ id, email }) => ({ id, email }))
            })
        }
    } catch (error) {
        res.send("Status:505")
    }
}


module.exports = {
    getData,
    updateData,
    createUser,
    deleteUser
}