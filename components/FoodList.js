const FoodList = ({foods}) => {
    return (
        <div>
            {foods.map(food => <Food key={food.id} name={food.name} servings={food.servings} amount={food.amount}/>)}
        </div>
    );
};

export default FoodList;