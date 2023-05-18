function counter() {
    let count = 0; 
   return function increment() {
      count++;
      console.log(count);
    }
  
  }
  
  
   let  counter1 = new counter()
   counter1()
   counter1()
   counter1()
   let counter2= new counter()
   counter2()
   counter2()
   counter2()
   counter2()
   counter2()
  