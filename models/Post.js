module.exports=(sequelize, DataTypes)=>{
    const Post= sequelize.define('Post',{
    title:{
        type:DataTypes.STRING,
    },
    content:{
        type:DataTypes.STRING
    }
    },
    {
        freezeTableName:true,
        timestamps:false
    });
    return Post;
}