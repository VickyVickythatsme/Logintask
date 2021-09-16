export const sidebar = [
    {
        buttonName:"Home",
        onclickhref: "/",
    },
    {
        buttonName:"User",
        onclickhref:"/user",
        children:[
            {
                buttonName:"Instruction",
                onclickhref:"/instruction", 
            },
            {
                buttonName:"Sign In",
                onclickhref:"/signin"

            }
        ]

    },
    {
        buttonName:"More Menu",
        onclickhref: "/moremenu",
        children:[
            {
                buttonName:"Animals",
                onclickhref:"/animals", 
            },
            {
                buttonName:"Food",
                onclickhref:"/food"

            }
        ]

    }
];