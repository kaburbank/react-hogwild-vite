import {useState} from "react";

export default function HogForm({ onFormSubmission, ...props }) {

    const [ newPig, setNewPig ] = useState({
        name: "",
        specialty: "",
        weight: "",
        greased: false,
        image: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        const payload = {
            ...newPig,
            weight: newPig.weight === "" ? "" : Number(newPig.weight)
        };

        onFormSubmission(payload);

        setNewPig({
            name: "",
            specialty: "",
            weight: "",
            greased: false,
            image: ""
        });
    };

    function handleChange(e) {
        setNewPig((previous) => ({
            ...previous,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }));
    };

    return (
        <>
            <form className="ui small form" onSubmit={handleSubmit}>
                <h4 className="fields"> Add a New Hog </h4>
                <div className="field">
                    <label htmlFor="name"> Name: </label>
                    <input type="text" id="name" name="name" placeholder="Please enter hog name..." value={newPig.name} onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="specialty"> Specialty: </label>
                    <input type="text" id="specialty" name="specialty" placeholder="Please enter hog specialty..." value={newPig.specialty} onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="weight"> Weight: </label>
                    <input type="number" id="weight" name="weight" placeholder="Please enter hog weight..." value={newPig.weight} onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="greased"> Greased? </label>
                    <input type="checkbox" id="greased" name="greased" checked={newPig.greased} onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="image"> Image URL: </label>
                    <input type="text" id="image" name="image" placeholder="Please enter hog image URL..." value={newPig.image} onChange={handleChange}/>
                </div>
                <button className="ui submit button" type="submit"> Add Hog </button>
            </form>
        </>
    );
};