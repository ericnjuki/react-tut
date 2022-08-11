// import React and ReactDOM
import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import './style/App.css'


// get ref to the div with id="root"
const el = document.getElementById('root');

// tell react to take control of that element
const root = ReactDOMClient.createRoot(el);

// create a component
const App = () => {
	return (
		<div className="ui container comments" style={{ padding: '1em' }}>
			<ApprovalCard>
				<CommentDetail
					author='Eric'
					time='Today at 6:00PM'
					body='Nice blog post!'
					profilePic={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author='Shi'
					time='Yesterday at 6:00PM'
					body='Very awesome blog post!'
					profilePic={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
}

// render the component
root.render(<App />)