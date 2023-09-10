
const parent= React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"l1")]),React.createElement("div", {id:"child2"},"hi")
]);

const heading= React.createElement("h1",{id :"heading"},"Hello React");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);

