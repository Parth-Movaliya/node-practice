const fs = require("fs");

fs.mkdir('./npmMod',(err)=>
{
    console.log("folder completed")
});
// fs.writeFileSync('read.txt',"hello kem chho");

// fs.appendFileSync("read.txt"," ae majama ho");

// fs.unlike("read.txt");\
// fs.unlink("read.txt");
// fs.unlinkSync('read.txt');

// const buf_data = fs.readFileSync("read.txt");

// const final_ans = buf_data.toString();
// console.log(final_ans);

// fs.renameSync("read.txt","readwrite.txt");

// // fs.writeFileSync("thapa/bio.txt","my name is name1");

// const ans = fs.readFileSync("thapa/bio.txt","utf8");
// console.log(ans);