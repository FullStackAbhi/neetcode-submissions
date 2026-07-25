class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        function helper(num1, num2 , operator){
            switch (operator) {
                case  "+": 
                return num1 + num2;
                case "-":
                return num1 - num2

                case  "*":
                return num1 * num2;

                case  "/":
                return num1 / num2;

    
             }
        }

        for(let item of tokens ) {
            if(item === "+" || item === "-" || item === "*" || item === "/"){
                let num1 = Number(stack.pop())
                let num2 = Number(stack.pop())
                let res = Math.trunc(helper(num2 , num1 , item))
                stack.push(res)
            }else{
                stack.push(item)
            }
            console.log(stack)
        }
        return stack.pop()
    }
}
