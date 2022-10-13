const db =require('../models/config')

//defining objects of model
 const User=db.User;
 const Post= db.Post;
 const UserEmail=db.UserEmail;
 const UserAccount=db.UserAccount;
 const {VoucherMapping, Child, Teams, Players, Movies, Actors,ActorMovies}=db;
 

const createRecord= async(req, res)=>{
    let response={}
    response.action='create'
    try{
        response.result2=await VoucherMapping.create({"productType":"bep_gate", "data":"{'productCombination':'byjus_exam_prep', 'course':'GATE}"})
    }catch(err){
        console.log('error->',err)
        res.status(400).json(err);
    }
    res.status(200).json(response);
}
const updateRecord= async(req, res)=>{
    let response={}
    response.action='update'
    try{
        response.result=await UserEmail.update(
            {mobileNo:'12345'},{
                where:{name:'shaik2'}
            });
    }catch(err){
    console.log('error->',err)
    res.status(400).json(err);
    }
    res.status(200).json(response);
}
const deleteRecord= async(req,res)=>{
        let response={}
        response.action='delete'
        try{
    response.result=await UserEmail.destroy({
        where:{
            name:'shaik2'
        }
    })
}catch(err){
    console.log('error->',err)
    res.status(400).json(err);
}
res.status(200).json(response);

}

const userOneToOne= async(req, res)=>{
    let response={}
    response.mapping='userOneToOne'
    try{
        response.result=await User.findOne({
            where:{name:"captain"},
            attributes:['name','email'],
            include:{
                model:Post,
                attributes:{ 
                    exclude:['createdAt', 'updatedAt','id']
                }
            }
    
        })
        res.status(200).json(response);
    }catch(err){
        console.log('error->',err)
    }
}

const emailUserOneToOne= async(req, resp)=>{
    let response={};
    response.mapping='OneToOne'
    try{
        response.emailUserOneToOne=await UserEmail.findAll({
            where:{mobileNo:'12345'},
            attributes:['name', 'mobileNo'],
            include:{
                model: UserAccount,
                as:'AccountDetails',
                attributes:{
                    exclude:['password','id']
                }
            }
         });

        resp.status(200).json(response)
    }catch(err){
        console.log('error->',err)
    }
}
const userAccountBelongsTo= async(req, resp)=>{
    let data={};
    data.mapping='BelongsTo'
    try{
         data.result=await UserAccount.findAll({
            where:{email:"shaik2@gmail.com"},
            attributes:{
                exclude:['pasword','id']
            },
            include:{
                model: UserEmail,
                as:'UserEmailDetails',
                attributes:['name','mobileNo'],
            }
         });
        resp.status(200).json(data)
    }catch(err){
        console.log('error->',err)
    }
}

const manytomany =async(req, res)=>{
    let response={
        mapping:'manytomany'
    }
    try{
        // response.MoviesBelongsToMany=await Movies.findAll({
        //     where:{name:'Avengers'},
        //     attributes:{
        //         exclude:['updatedAt','createdAt','id']
        //     },
        //     include:{
        //         model:Actors,
        //         as: 'ActorDetails',
        //         attributes:{
        //             exclude:['id','updatedAt','createdAt']
        //         }
        //     }
        // })
        response.ActorsBelongsToMany=await Actors.findAll({
            where:{name:'hulk'},
            attributes:{
                            exclude:['updatedAt','createdAt']
                        },
            include:{
                model:Movies,
                attributes:{
                    exclude:['updatedAt','createdAt']
                }
            }
        })

    }catch(err){
        console.log('error->',err)
    }
    res.status(200).json(response);
}

const lazyloading =async(req, res)=>{
    let response={
        action:'Lazyloading'
    }
    try{
        let userData=await UserEmail.findOne({
            where:{"mobileNo":'9876543210'},
        })
        //can do below stuff with fetched data
        console.log('user name->',userData.name)
        //we want the account informatoion of the above  user data
         let AccountData= await userData.getAccountDetails();
         console.log('Account type->', AccountData.accountType)
        response={
            userData:userData,
              AccountData:AccountData
        }

    }catch(err){
        console.log('error->',err)
    }
    res.status(200).json(response);
}

const eagerloading= async(req, resp)=>{
    let response={};
    response.action='EagerLoading'
    try{
        // will fetch entire data at once
        let data=await UserEmail.findOne({
            where:{mobileNo:'12345'},
            include:{
                model: UserAccount,
                as:'AccountDetails',
            }
         });
         console.log('username->', data.name);
         console.log('user account->', data.AccountDetails.accountType);


        resp.status(200).json(response)
    }catch(err){
        console.log('error->',err)
    }
}

const hooks= async(req, res)=>{
    let response={}
    response.action='hooks'
    try{
        UserEmail.beforeCreate(UserEmail=>{
            if (UserEmail.name=='shaik4') {
                console.log('created a new record ');
              }
        })
        response.result2=await UserEmail.create({name:"shaik4", mobileNo:'9876543210'});
    }catch(err){
        console.log('error->',err)
        res.status(400).json(err);
    }
    res.status(200).json(response);
}
const voucherMapping=async(req, res)=>{
    let response={}
    response.mapping='VoucherMapping'
    response.result=await VoucherMapping.findAll({
        where:{productType:'bep_gate'},
         attributes:['data']
    })
    res.status(200).json(response);
}

module.exports={
    createRecord,
    updateRecord,
    deleteRecord,
    userOneToOne,
    emailUserOneToOne,
    userAccountBelongsTo,
    voucherMapping,
    // teamHasMany,
    hooks,
    manytomany,
    lazyloading,
    eagerloading
}


// const teamHasMany =async(req, res)=>{
//     let response={
//         mapping:'teamHasMany'
//     }
//     try{
//         response.hasMany=await Teams.findAll({
//             where:{"teamName":"HyderabadTeam"},
//             include:{
//                 model:Players,
//                 as:'PlayerDetails',
//                 // where:{"playerName":"SubrataPal"}
//             }
//         })
//         response.belongsTo=await Players.findAll({
//             where:{teamNo:2},
//             include:{
//                 model:Teams,
//                 as:'TeamDetails',
//             }
//         })
//     }catch(err){
//         console.log('error->',err)
//     }
//     res.status(200).json(response);
// }




// const parentOneToOne=async(req, res)=>{
//     let response={}
//     response.mapping='parentOneToOne'
//     response.result=await Child.findAll({
//         where:{childName:'6c'},
//          attributes:['childName'],
//         include:{
//             model:Parent,
//             as: 'Parent',
//             attributes:{ 
//                 exclude:['id','parentAge']
//             }
//         }
//     })
//     res.status(200).json(response);
// }