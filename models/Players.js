module.exports=(sequelize, DataTypes)=>{
    const Players= sequelize.define('Players',{
    playerName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    teamNo:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:false,
        primaryKey:false
    }
    },
    {
        timestamps:false
    });

    return Players;
}