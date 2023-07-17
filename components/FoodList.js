const FoodList = ({foods}) => {
    return (
        <div>
            {foods.map(food => <Food key={food.id} name={food.name} servings={food.servings} calsPer={food.cals}/>)}
        </div>
    );
};

export default FoodList;