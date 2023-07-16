const Food = (props) => {
    return (
        <div>
            <p>{props.name ? props.name : "No name given"}</p>
        </div>
    );
}

export default Food;