var http=require('http');  
//get 请求外网 
var html='';  
http.get('http://cn.bing.com/HPImageArchive.aspx?format=xml&idx=0&n=1',function(req,res){  
   
    req.on('data',function(data){  
        html+=data;  
    });  
    req.on('end',function(){  
        
    });
}); 
// var song='';
// http.get('http://music.163.com/api/song/detail/?id=437292039&ids=%5B437292039%5D',function(req,res){  
   
//     req.on('data',function(data){  
//         song+=data;
//         console.log(song); 
//     });  
//     req.on('end',function(){  
        
//     });
// }); 
var server=http.createServer(function(req,res){
    if(req.url!=="/favicon.ico"){
        res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin":"*"});
        res.write(html);
    }
    res.end();
});
server.listen(1337,"localhost",function(){
    console.log("开始监听...");
});