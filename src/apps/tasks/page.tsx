


import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { Task, taskSchema } from "./data/schema"
import { useEffect, useState } from "react"



// Simulate a database read for tasks.
async function getTasks() {
    try {
      const response = await fetch("./data/tasks.json");
      if (!response.ok) {
        throw new Error(`Failed to fetch tasks: ${response.statusText}`);
      }
  
      const tasks = await response.json();
      return z.array(taskSchema).parse(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      // You might want to handle errors differently based on your requirements
      throw error;
    }
  }
  
export default function TaskPage() {
    const [tasks, setTasks]:[Task[],React.Dispatch<React.SetStateAction<Task[]>>]= useState([] as Task[]);
    useEffect(()=>{
        const fetchTasks =  async() => {
            try {
                const tasks = await getTasks();
                setTasks(tasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
                
            }
            
    
        }
        fetchTasks();
    },[])
    
  

  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <img
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}