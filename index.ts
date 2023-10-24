const express = require("express")
//transpilar 
//EcmaScript ES modules | import express from "express"
//CommonJS const express = require("express")

const app = express();
const example = function(){
    console.log("Spam")
}

app.listen(
    9000,
    example
)
