module.exports= (sequelize, DataTypes)=>{
    const UserAccount= sequelize.define('UserAccount',{
        email:{
            type:DataTypes.STRING,
        },
        accountType:{
            type:DataTypes.STRING,
        },
        password:{
            type:DataTypes.STRING
        },
        mobileNo:{
            type:DataTypes.STRING,
        }},
        {
            timestamps:false
        }
    );
    return UserAccount;
}
