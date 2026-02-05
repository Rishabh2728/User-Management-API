// export const checkAuth = (req, res, next) =>{
//     console.log("Auth checked");
//     next();
// }

let success = true;

export const checkAuth = (req, res, next) => {
    if(success){
        console.log("Auth checked");
        next();
    }
    else{
        console.log("Auth failed");
         res.status(400).json({
            success: false,
            message: "Auth failed"
        });
    }
}


// export const vaildateUser = (req, res, next) =>{
//     const { name, email } = req.body;
//     if(!name || !email){
//         return res.status(400).json({
//             success: false,
//             message: "Name and email are required"
//         });
//     }
// }

export const vaildateUser = (req, res, next) =>{
    const { id } = req.params;
    if(!id || !id.length){
        return res.status(400).json({
            success: false,
            message: "ID validation failed"
        });
    }
    next();
}

// export const getUserByID = (req, res, next) => {
//     const {getUser} = req.body;
//         return res.status(500).json{

//         }
// }

export const getUserByID = (req, res, next) => {
  const { id } = req.params; 
  console.log("Fetching user");

  return res.status(200).json({
    success: true,
    message: "User fetched successfully",
    userId: id
  });
};
