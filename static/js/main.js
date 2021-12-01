$("#switch0_4").click(function() {
    $("#story0_5").hide();
    $(".story_piece").show();
    $("#story1").show();

})



$("#switch1_1").click(function() {
    $("#story1_2").hide();
    $("#story1_3").hide();
    $("#story1_4").hide();
    $("#story1_5").hide();
    $("#story2").show();

})
$("#switch2_4").click(function() {
    $("#story2_5").hide();
    $("#story3").show();
})


let page = document.getElementById("root");
let newPage = document.getElementById("newPage");


$("#switch2_3").click(function() {

    $("#story2_4").hide();
    $("#story2_5").hide();

    let cont = document.createElement("div");
    let div = document.createElement("div");
    let title = document.createElement("h1");
    let dec = document.createElement("p");


    cont.appendChild(div);
    div.appendChild(title);
    div.appendChild(dec);

    title = "books";
    dec = "books are good";

})








// var function1 = function(number, st_number) {
//     $("#switch" + number + "_" + st_number).click(function() {
//         $("#story" + number + "_" + st_number).hide();
//         $("#story" + (number + 1) + "_" + st_number).show();
//     });
// }

// function1(1, 1)
// function1(2, 2)
// function1(3, 3)
// function1(4, 4)


// let page = document.getElementById("root");
// let newPage = document.getElementById("newPage");
// let data = [{
//         id: "1",
//         name: "john",
//         title: "books",
//         decs: "books are good",
//         derived: "id",
//     },
//     {
//         id: "2",
//         name: "maggy",
//         title: "drugs",
//         decs: "books are good",
//         derived: "id",
//     },
//     {
//         id: "3",
//         name: "mike",
//         title: "cake",
//         decs: "books are good",
//         derived: "id",
//     },
// ];

// let = "";

// const storyPage = () => {
//     let cont = document.createElement("div");

//     for (let i = 0; i < data.length; i++) {
//         let div = document.createElement("div");
//         let title = document.createElement("h1");
//         let dec = document.createElement("p");
//         let btn = document.createElement("button");
//         title.innerText = data[i].title;
//         dec.innerText = data[i].decs;
//         btn.innerText = "more";
//         let func = "singleStory(" + data[i].id + ")";
//         btn.setAttribute("onClick", func);
//         cont.appendChild(div);
//         div.appendChild(title);
//         div.appendChild(dec);
//         div.appendChild(btn);
//     }
//     console.log(page);
//     page.appendChild(cont);
// };

// const singleStory = (id) => {
//     console.log(id);
//     let story = getStoryByid(id);
//     console.log(story);
//     storyToShow = story;
//     page.style.display = "none";

//     document.getElementById("newPageTitle").innerText = story.name;
//     document.getElementById("newPageDesc").innerText = story.decs;
//     newPage.style.display = "block";
// };

// const getStoryByid = (id) => {
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].id == id) {
//             return data[i];
//         }
//     }
//     return null;
// };

// const startUp = () => {
//     newPage.style.display = "none";
//     storyPage();
// };

// startUp();