const Button =({onClick, text}) =>{
    //it actually looks like this
    // const props ={
    //     onClick: goodFunc,
    //     text: "good"
    // }
    // (props)
    // const onClick = props.onclick;
    //const text = props.text;

    //but it looks little length so 
    //using { taking property name inside the curly bracket makes it small}

    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    );
}

export default Button;