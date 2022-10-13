module.exports= (sequelize, DataTypes)=>{
    const UserEmail= sequelize.define('UserEmail',{
        name:{
            type:DataTypes.STRING,
        },
        mobileNo:{
            type:DataTypes.STRING,
            unique:true
        }
    },
    {
        tableName: 'UserEmail',
        timestamps:false
    }
    );
    return UserEmail;
}

