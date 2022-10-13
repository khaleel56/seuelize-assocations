module.exports=(sequelize, DataTypes)=>{
    const Teams= sequelize.define('Teams',{
    teamName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    teamNo:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        Unique:true,
        allowNull:false
    }
    },
    {
        timestamps:false
    });

    return Teams;
}