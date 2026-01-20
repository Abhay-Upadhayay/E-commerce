
module.exports.isAdmin = (req,res,next)=>{
    try {

        if(req.user.role !== "admin"){
            res.status(401).json({message : "Admin access denied"});
            return;
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal server error"});
    }

}