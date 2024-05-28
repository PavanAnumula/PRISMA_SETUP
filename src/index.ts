import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

interface User {
  username: string,
  password: string,
  firstName?: string,
  lastName?: string
}

interface Todo {
userId:number,
title:string,
description:string
}

async function insertUser(user:User) {
  const response = await prisma.user.create({
    data: user
  })
console.log(response)
}

// insertUser({ firstName: "pavan", password: "123456", username: "pavan2", lastName: "kumar" })

async function insertTodo(todo:Todo){
  const response = await prisma.todo.create({
data:todo
})
}

insertTodo({userId:1,title:"new todo",description:"description"})