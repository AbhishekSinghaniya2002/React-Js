import { createSlice, nanoid } from "@reduxjs/toolkit";
/* 
1:- yaha pe clice create karne ke liye method to ek hi chahiye jisse ki hamara kaam ho jayega lekin redux ko pata hai ki ye kaam hote rahenge kuchh arrays aur value aate jayenge isliye ek nanoid naam se ek method  provided hota hai ye hamesa ek uniqe id generate karta hai.iska itna hi kaam hai .

2:- ab store define karenge aur store mai jaruri chij kya hai initial state ki store starting mai kaisa dikhega.(empty , value , ya hum kahi detabase se fetch karke value dalenge ) usi ke liye sabse pahle ek initial state banate hai. initial state kya rakhni hai totally hamare upar hai. vo array[] and object{} dono ho sakte hai. Mai yaha object{} rakhta hu kyunki object ke under multipele chije aa sakti hai.

*/
const initialState = {
    todos:[{id: 1, text:"Hello World"}]
}

// Now WE make slice. slice almost ek reduser ki hi bada version hai.
// Reduser kya hai kuchh bhi nahi ek functionalyty hai .
// Har slice ka ek initial state bhi banta hai.
// Multiple slices bhi banti hai 
// reducers mai function aur properties aati hai.
// contextapi me bhi hum hamesha function ka decalaration kar rahe the uska defination nahi likh rahhe the. lekin yaha par redux toolkit me ham decalaration nahi likhte uska defination likhte hai pura.
// useState Aur useEffect ki tarah hi yaha par bhi hamesha 2 chije milingi ek State And Ek Action.in dono ka access hamesha HI HAMARE pass hoga.
// abhi kya sitution hai state ki uski hands to hand situation vala kaam vo state aapko deta hai.
// State means current State jo bhi state hai.
// Aur action means Action ke under jo bhi data pass ho raha hai.
// id unique honi chahiye.
// ab text kaise dalenge kyunki har baar hallo world to nahi dalenge na kya pata vo kuchh bhej raha ho. Aur hum hello worlld hi dale ja rahe hai. to ye kaha se nikalenge hum action se nikalenge Payload use karke aur yeh ek object hi hai.
//Aur ha ye todo abhi state ke under to gay nahi  hai kyunki state ko update karan padega na.
// / yaha par array hai isliye push kar rahe hai. Agar object hota to add karte.
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => { 
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

<<<<<<< HEAD
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        }
=======
         updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        },
>>>>>>> f3826d2f380e45731bbaea337cafcdab4d8fdf87
        
        // other method 
                // updateTodo: (state, action) => {
                //     const { id, text } = action.payload;
                //     const todo = state.todos.find(todo => todo.id === id);
                //     if (todo) {
                //         todo.text = text;
                //     }
                // }

                // updatetodo: (state, action)=> {

                //     const id = action.payload.id;
                //     const text = action.payload.text;
                //     state.todos = state.todos.map((todo) => {
                //         if (todo.id === id) {
                //           todo.text = text;
                //         }
                //         return todo;
                //     });

<<<<<<< HEAD
                
=======
>>>>>>> f3826d2f380e45731bbaea337cafcdab4d8fdf87
    }
})

// Abhi tak hamne puri todoSlice export kar diya hai. lekin yeh is tarah export nahi kiya jata hai actually me iske two part hame export karna padta hai.
// yeh bhi syntex hai. This is the next step ------------

/*
1. ek to jitni bhi functionality hai unko export karenge.
2. kyo export krenge kyunki ye jo reducer hai inhi ke through hi ham hamesha state ko update karenge. to ye functionallity indivisualy kaam aayengi.
3. Store:- bahi ye jo ekele ghum raha hai is store ko bhi to awaerness chahiye in sare reducer ke bare me agar isko awaerness nahi hogi to yeh store manage nahi kar payega. kyunki iske under jitne reducer register hote hai unki hi valu leke update karta hai. isliye isko sari reducer ka list as export de denge. 
*/
export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer

