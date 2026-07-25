class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack  = []
       let map  = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
       }

        for(let i  = 0 ; i<s.length ; i++) {
            if(map[s[i]]){
                stack.push(s[i])
            }else{
                let open  = stack.pop()
                if(map[open] !== s[i])return false
            }
            
        }
    
        return stack.length == 0

    }
}
