export class product{
    quantity: String
    price: String
    available: String
    sublevel_id: String
    name: String
    id: String
    constructor(quantity: String, price: String,available: String,sublevel_id: String,name: String,id: String){
        this.quantity =quantity;
        this.price = price;
        this.available = available;
        this.sublevel_id = sublevel_id;
        this.name = name;
        this.id = id;        
    }
}