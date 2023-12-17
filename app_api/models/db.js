var mongoose=require("mongoose");
var dbURI = 'mongodb://localhost/mekanbul';
//mongodb+srv://cagdasahin7:cagdasahin@cluster0.o98qdc7.mongodb.net/
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı");
});
mongoose.connection.on("error",function(){
    console.log(" Bağlantı sağlanamadı");
});
mongoose.connection.on("disconnect",function(){
    console.log(" Bağlantınız kesildi");
});

kapat = function(msg,callback){
    mongoose.connection.close(function(){
        console.log("Bağlantı kapatıldı:" +msg);
        callback();
    });

    process.on("SIGINT",function(){
        kapat("Uygulama Kapatıldı",function(){
            process.exit(0);
        });
    });

}