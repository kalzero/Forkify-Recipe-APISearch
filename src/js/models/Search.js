import axios from "axios";

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = "http://cors-anywhere.herokuapp.com/";
        const key = "f29b75702b4bbb64d569ee60ec5717bf";
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.results = res.data.recipes;            
        } catch (err) {
            alert(err);
        }  
    }    
}






