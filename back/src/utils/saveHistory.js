import uuidv4 from "uuidv4";
import History from "../modules/history.js";

export default async function saveHistory(data) {
    try {
        console.log('error');
        data.id = uuidv4();
        data.date = new Date();
        const history = new History(data);
        await history.save();
    } 
    catch (error) {
        return
    }
}