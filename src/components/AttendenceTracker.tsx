import {useRef, useEffect, useState} from "react"
import { Card, CardHeader, CardDescription, CardTitle,CardContent,CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Input }from "@/components/ui/input"

function AttendenceTracker(){
    const[sessions,setsessions] = useState(0);
    const inputRef= useRef<HTMLInputElement >(null);
    useEffect( ()=>{
        document.title = 'study sessions:${sessions}';
    }, [sessions]
)
 function addSessions(){
                setsessions(sessions + 1)
            }
            function removeSessions(){
                setsessions( sessions - 1)
            }

            function resetSessions(){
                setsessions(0)
            }
            function focusinput(){
                inputRef.current?.focus()
            }
        return(
           <Card className="w-96 shadow-xl">
            <CardHeader className="text-cener ">
                <CardTitle className="text-3xl flex justify-center items-center">
                    Attendence Tracker 
                </CardTitle>
                <CardDescription className=" text-purple-200 elex justify-center items-center text-center" >
                    A System and easy-to-use student attendance tracking system.
                </CardDescription>
            </CardHeader>

            <CardContent>
              
                <div className="mb-6">
                    <p className="mb-2 font-medium text-center">
                        Student Name
                    </p>
                    <Input ref={inputRef} placeholder="Enter your name"></Input>
                </div>
                <div className="mb-6 text-center">
                    <p className=" text-sm text-slate-500 ">
                        Attendence Number
                    </p>

                    <h2 className="text-6xl font-bold text-purple-300">
                        {sessions}
                    </h2>

                </div>

              
                <div className="flex justify-center gap-3 flex-1">
                    <Button onClick={addSessions} className="bg-purple-500 hover:bg-purple-300 ">Add attendence +</Button>
                    <Button onClick={removeSessions} className="bg-purple-500 hover:bg-purple-300 ">Remove attendence -</Button>
                    <Button onClick={resetSessions} className="bg-purple-500 hover:bg-purple-300 ">Reset</Button>


                </div>

                <Button variant="outline" className="mt-4 w-full" onClick={focusinput} >
                    Focus Input Name
                </Button>
            </CardContent>

            <h1 className="flex justify-center items-center   font-bold-">No Attendence Recorded</h1>


           </Card>

    )
}
export default AttendenceTracker;