/*
    Convert the Function here into a JavaScript Class called 'Person'

    ```
        function createNewPerson(name) {
            const obj = {};
            obj.name = name;
            obj.greeting = function() {
                alert('Hi! I\'m ' + obj.name + '.');
            };
            return obj;
        }

        const simon = createNewPerson('simon');
        simon.name;
        simon.greeting()
    ```

<<<<<<< HEAD
    When you run this code using `node 2-convertion.js` you should be able to
=======
    When you run this code using `node 2-convertion.js`, what should you see?
>>>>>>> e15d669e2e78b26b816181101842bf2137b17fd5
    

*/

// Write your code here

// Do not edit this section
const simon = new Person("simon");
console.log(simon.name);
simon.greeting();
// Do not edit this section
