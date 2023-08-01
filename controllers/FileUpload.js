const Path = require('path');

exports.localFileUpload = async (req,res)=>{
    try{
        //parsing file from files folder in file
        const file = req.files.file;
        console.log(file);

        //defining the path at which file will be stored in server
        console.log("current dir: ",__dirname);
        // let currentDir = "D:/CodeHelp Web Dev Course/BackEnd Web Development/FileUpload/controllers"
        // let path = currentDir +  '/files/' + Date.now()+ `.${file.name.split('.')[1]}`;
        //__dirname points to the current directory we sre standing in
        // let path = `../files/`+ Date.now();
        // let path = __dirname + "./files/" + Date.now();
        // let path = Path.resolve(__dirname,"./files/",`${Date.now()}`);
        let path = __dirname + "/files/" + Date.now();
        console.log("Path-> ",path); 
        file.mv = (path,(err)=>{
            console.log(err);
        });

        res.status(200).json({
            success:true,
            message:"file received successfully"
        });

    } catch(err){
        res.status(500).json({
            success:false,
            message:"file not received"
        });
    }
}