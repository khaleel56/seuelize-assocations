module.exports=(sequelize, DataTypes)=>{
    const Child= sequelize.define('Child',{
    childName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    childAge:{
        type:DataTypes.INTEGER,
    },
    mobileNo:{
        type:DataTypes.INTEGER,
    }
    },
    {
        freezeTableName:true,
        timestamps:false
    });

    return Child;
}