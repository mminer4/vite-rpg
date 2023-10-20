
export const rpgData = {
    name: "Test RPG",
    pages: [
        {
            page: 1,
            title: "The First Page",
            text: "You find yourself in a tunnel that ends in an intersection. You can either go right or left. Which way do you go?",
            choices: [
                {
                    text: "go left",
                    modifier: "none",
                    nextPage: 2
                },
                {
                    text: "go right",
                    modifier: "none",
                    nextPage: 3
                }
            ]
        },
        {
            page: 2,
            title: "",
            text: "The left branch of the tunnel ends in a solid wall.",
            choices: null
        },
        {
            page: 3,
            title: "",
            text: "You take the right branch of the tunnel. The ground opens up beneath you and you fall into a pit of spikes. RIP.",
            choices: null
        }
    ]
}