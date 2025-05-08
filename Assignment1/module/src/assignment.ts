


function formatString(input: string, toUpper?: boolean):string{
    if(toUpper || toUpper===undefined){
        return `${input.toUpperCase()}`
    }
   return `${input}`
}

const result1 = formatString("Hello");          // Output: "HELLO"
const result2= formatString("Hello", true);   // Output: "HELLO"
const resutl3 = formatString("Hello", false);  // Output: "hello"


// -----------------
type Input ={
    title:string;
    rating:number;
}

function filterByRating(items:Input[]): Input[]{
    const output = items.filter((item:Input)=> {
        if(item.rating>=4){
            return item;
        }
    })
    return output
    
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

const result = filterByRating(books); 
// ---------------

function concatenateArrays<T>(...arrays: T[][]):T[]{
    return ([] as T[]).concat(...arrays);  
}

// -----------

class Vehicle {
    private make:string;
    private year:number;

    constructor(make:string, year:number){
        this.make= make;
        this.year= year;

    }

    getInfo(){
        return `this vehicle is made by: ${this.make} in the year of: ${this.year}`;
    }
}

class Car extends Vehicle{
    private model:string;
    

    constructor(make:string, year:number, model:string){
        super(make, year);
        this.model=model;
    }

    getModel(){
        return this.model;;
    }
}

const car = new Car("bmw", 2012, "Bmw 7")
car.getModel();
car.getInfo()


// ------------

function processValue(value:string|number):number|undefined{
    if(typeof value ==="string"){
        return value.length;
    }
    if(typeof value ==="number"){
        return value*2;
    }
  
}

 processValue("asd")

//-----------

interface Product {
    name:string;
    price:number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
    if(products.length!==0){
        const highestPrice = products.reduce((prev,cur)=> {
            if(prev.price>cur.price){
                return prev;
            }
            return cur;
        })
        return highestPrice;
        
    }
    return null;
}

const products:Product[] = [
  { name: "Pen", price: 100 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

getMostExpensiveProduct(products)

// -----------

enum Day {
  Monday="Weekday",
  Tuesday="Weekday",
  Wednesday="Weekday",
  Thursday="Weekday",
  Friday="Weekday",
  Saturday="Weekend",
  Sunday="Weekend"
}

function getDayType(day: Day): string{
    return day;
}

// ------------

async function squareAsynce(value:number): Promise<number> {
    return new Promise((resolve, reject)=>{
        if(value>1){
            setTimeout(()=>{
                resolve(value*value);
            },1000)
            
        }else{
            
            reject("Error: Negative number not allowed")
          
        }
    })
}

squareAsynce(-5).then(console.log).catch(console.error)


