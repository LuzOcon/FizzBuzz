export function fizzbuzz(){
let x;
x=1;
  for (let i = 0; i < 100; i++) {
      if (x%3==0) {
        if(x%5==0)
        {
          console.log("FizzBuzz");
        }
        else 
        {console.log("Fizz");

        }
      }
      else if (x%5==0)
      {
        console.log("Buzz")
      }
      else
      {
        console.log(x);
      }
      x++;
    }
}
