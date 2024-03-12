export  function FoodDetails({food}:any){
    console.log(food);
    return (
        <table className="table">
        <thead>
            <tr>
                <th>Calories</th>
                <th>Fat</th>
                <th>Carbohydrates</th>
                <th>Protein</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{food.calories}</td>
                <td>{food.nutrients.fat}</td>
                <td>{food.nutrients.carbohydrates}</td>
                <td>{food.nutrients.protein}</td>
            </tr>
        </tbody>
    </table>
    )
}