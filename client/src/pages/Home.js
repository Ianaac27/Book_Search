import React, {useRef, useState} from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
// import API from "../utils/API";
import Search from "../components/Search";
import BookResults from "../components/BookResults";

function Home () {
    const [result, setResult] = useState([]);
    
    return (
        <div>
            <Search setResult={setResult}/>
            <BookResults result={result}/>
        </div>
)
}

export default Home;