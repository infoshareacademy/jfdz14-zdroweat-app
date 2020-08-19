import React from 'react';
import RecipeCardProvider from './RecipeCardProvider';
import RecipeData from './RecipeData';

const RecipeCardProviderIndex = () => {
    return (
        <RecipeCardProvider
            renderComponent={RecipeData}
            url={'https://zdroweat-7d0b0.firebaseio.com/recipes.json'}
        />
    )
}

export default RecipeCardProviderIndex;