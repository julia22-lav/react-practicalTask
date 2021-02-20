import Button from "./Button"
import Form from "./Form"

const HomePage = ({title, greeting}) => {
    return (
        <>
            <h1>{title} </h1>
           <p>{greeting}</p>
           <Form/>
           
        </>
    );
};

export default HomePage