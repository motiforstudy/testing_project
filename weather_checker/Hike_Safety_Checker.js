import express from "express";

const app = express();
app.use(express.json());

// app.listen(3000, ()=>{
//     console.log("the server is ready: ");
// })

app.post("/check-weather", async (req, res)=>{
    try {
        const getBody = req.body;
        const isSafe = isSafeToHike(getBody["temperature"], getBody["windSpeed"])
        res.json(isSafe)
    } catch (error){
        res.send(`the problem is in check weather: ${error}`)
    }
})

export function isSafeToHike(temperature, windSpeed ){
    try {
        if ((typeof temperature === "number") && (typeof windSpeed === "number")){
            if ((temperature < 0) || (temperature > 35)){
                return ({"safe": false, "message": "too hot ot too cold for hiking"})
            } else if (windSpeed > 50){
                return ({"safe": false, "message": "Too windy to hike!"});
            } else {
                return ({"safe": true, "message": "All conditions are good for hiking!"})
            }
        } else {
            throw new Error ("your input isn't a nmunber")
        }
    } catch (error){
        return (`the problem is in check isSafeToHike: ${error}`)
    }
}

export default app