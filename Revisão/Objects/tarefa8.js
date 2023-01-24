//1 /2 /3 /4 
const menu = {
    _meal: '',
    _price: 0,

    get meal (){
        return this._meal
    },

    get price (){
return this._price
    },
    get todaysSpecial(){
        if (this._meal && this._price){
           return `O especial de hoje é ${this._meal} por R$ ${this._price}!`
        }else{
            return `Refeição ou preço não foi definifo corretamente!`
        }
    },
    
    set meal(mealToCheck){
        if(typeof mealToCheck === 'string'){
            return this._meal = mealToCheck
        } 
    },
    set price (priceToCheck){
        if (typeof priceToCheck === 'number'){
            return this._price = priceToCheck
        }
    },

}

menu._meal = 'Coxinha';
menu._price = 21;

console.log(menu.meal);
console.log(menu.price);
console.log(menu.todaysSpecial)
console.log(menu)



