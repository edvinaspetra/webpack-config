const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refineMoonstone: 4,
};

const elvenGountletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refineMoonstone: 4,
}

console.log(elvenShieldRecipe);
console.log(elvenGountletsRecipe);