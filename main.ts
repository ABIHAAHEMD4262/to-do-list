#! /usr/bin/env node

import inquirer from 'inquirer'


let todosList = [];
let conditions = true;

 while(conditions){
     let addTask = await inquirer.prompt([
         {
             name :"task",
             type: "input",
             message:"Enter your New Task: "
         }
     ]);
     todosList.push(addTask.task);
     console.log(`${addTask.task} Task added in Todo-List successfully`);

     let addMoreTask = await inquirer.prompt([
         {
             name: 'addMore',
             type:'confirm' ,           
             message:"Do you want to add more task ?",
             default: "false"
         }
     ]);
     conditions = addMoreTask.addMore
 }
 console.log("Your updated Todo-List:",todosList);


