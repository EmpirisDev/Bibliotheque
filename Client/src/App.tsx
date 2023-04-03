import axios from "axios";
import React from "react";

const baseURL = "http://localhost:80/api";

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response)
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return (
        <div>
            <h1>Ma DATA :</h1>
            <h1>{post.msg}</h1>

        </div>
    );
}