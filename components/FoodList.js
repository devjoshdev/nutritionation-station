const FoodList = ({foods}) => {
    return (
        <div>
            {foods.map(food => <Food key={food.id} name={food.name} desc={food.desc} servings={food.servings} calsPer={food.cals}/>)}
        </div>
    );
};

export default FoodList;