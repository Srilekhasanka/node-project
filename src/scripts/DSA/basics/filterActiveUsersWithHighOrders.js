// 🧩 Problem 7: Filter Active Users with High Orders
// 📌 Description

// You are given an array of user objects. Each user has:

// id
// name
// isActive (boolean)
// orders (number)

// 👉 Return a new array of users who:

// are active
// have orders greater than a target value


//Example:
// Input:
// users = [
//   { id: 1, name: "A", isActive: true, orders: 5 },
//   { id: 2, name: "B", isActive: false, orders: 10 },
//   { id: 3, name: "C", isActive: true, orders: 2 },
//   { id: 4, name: "D", isActive: true, orders: 8 }
// ]

// target = 4

// Output:
// [
//   { id: 1, name: "A", isActive: true, orders: 5 },
//   { id: 4, name: "D", isActive: true, orders: 8 }
// ]


// 💡 Explanation
// Create an empty result array
// Loop through each user
// For every user:
// Check if isActive === true
// Check if orders > target
// If both conditions pass → add user to result
// Return the result array



function filterActiveHighOrders(users){
    const target = 4;
    let result=[]
    let index =0
    for(let i=0;i<users.length;i++){
        if(users[i].isActive === true){
            if(users[i].orders > target){
                result[index] = {
                    Value : users[i]
                };
                index++
            }
        }
    }
    return result
}

const users =[
  { id: 1, name: "A", isActive: true, orders: 5 },
  { id: 2, name: "B", isActive: false, orders: 10 },
  { id: 3, name: "C", isActive: true, orders: 2 },
  { id: 4, name: "D", isActive: true, orders: 8 }
]
console.log(filterActiveHighOrders(users))