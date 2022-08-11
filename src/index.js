// import React and ReactDOM
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { faker } from "@faker-js/faker";

// get ref to the div with id="root"
const el = document.getElementById('root');

// tell react to take control of that element
const root = ReactDOMClient.createRoot(el);

// create a component
function App (){
    return (
        <div className="ui container comments">
          <div className="comment">
            <a href="/" className="avatar">
              <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
              <a href="/" className="author">
                Sam
              </a>
              <div className="metadata">
                <span className="date">Today at 6:00PM</span>
              </div>
              <div className="text">Nice blog post!</div>
            </div>
          </div>
        </div>
      );
}

// render the component
root.render(<App />)