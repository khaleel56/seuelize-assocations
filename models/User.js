module.exports= (sequelize, Sequelize)=>{
    const User= sequelize.define('User',{
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            defaultValue:'test@gmail.com',
            allowNull:false
        },
        gender:{
            type:Sequelize.STRING,
        },
        age:{
            type:Sequelize.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps:false
    });
    return User;
}


