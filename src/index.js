// import React and ReactDOM
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import CommentDetail from "./CommentDetail";


// get ref to the div with id="root"
const el = document.getElementById('root');

// tell react to take control of that element
const root = ReactDOMClient.createRoot(el);

// create a component
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author='Eric'
                time='Today at 6:00PM'
                body='Nice blog post!'
            />
        </div>
      );
}

// render the component
root.render(<App />)