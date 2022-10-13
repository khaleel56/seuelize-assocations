module.exports=(sequelize, DataTypes)=>{
    const VoucherMapping= sequelize.define('VoucherMapping',{
    productType:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    data:{
        type:DataTypes.JSONB,
    },
    },
    {
        freezeTableName:true,
        timestamps:false
    });

    return VoucherMapping;
}