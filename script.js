// quarySelectore

// // Example 1
// const tag1 = document.querySelector("h1");
// console.log("tag1");

// // Example 2 class

// const class1 = document.querySelector(".class1");
// console.log(class1);

// // Example 3 id
// const id1 = document.querySelector("#id1");
// console.log(id1);

// QuarySelectoreAll

// const tag1 = document.querySelectorAll("h1");
// console.log(tag1);
// console.log(tag1[0].innerText);

// const class1 = document.querySelectorAll(".class1");
// console.log(class1);

// // Html Colection
// const tag2 = document.getElementsByTagName("h1");
// console.log(tag2);

// const class2 = document.getElementsByClassName("class1");
// console.log(class2);

// // ChildNodes

// const id1 = document.getElementById("id1");
// console.log(id1);
// console.log(id1.childNodes);
// console.log(id1.children.length);
// console.log(id1.childElementCount);
// console.log(id1.firstChild);

// // Dom Element Children

// const id1 = document.getElementById("list-id");
// console.log(id1);
// console.log(id1.children);

// // Creat Element

// const newList = document.createElement("ul");
// console.log(newList);

// // appendChild

// const newList = document.createElement("li");
// newList.innerText = "List 5";
// const listId = document.getElementById("list-id");
// listId.appendChild(newList);

// Example 2

// const id1 = document.getElementById("div-text");
// const newHeading = document.createElement("h2");
// newHeading.innerText = "This is Heading Two";
// id1.appendChild(newHeading);

// // Example 3
// const id1 = document.getElementById("div-text2");
// const newHeading = document.createElement("p");
// newHeading.innerText = "This is Heading Three";
// id1.appendChild(newHeading);

// // Example 4
// const id1 = document.getElementById("div-text3");
// const newList = document.createElement("li");
// newList.innerText = "List 6";
// id1.appendChild(newList);

// const id2 = document.getElementById("div-text3");
// const newList = document.createElement("li");
// newList.innerText = "List 7";
// id2.appendChild(newList);

// const id1 = document.getElementById("div-text3");
// const newList = document.createElement("li");
// newList.innerText = "list 6";
// id1.appendChild(newList);

// RemoveChild

// const id1 = document.getElementById("list-id");

// const list1 = id1.children[0];
// id1.removeChild(list1);

// ReplaceChild

// const id1 = document.getElementById("list-id");
// const list3 = id1.children[2];
// // console.log(list3.innerHTML);
// const newList = document.createElement("li");
// newList.innerText = "NewList";
// id1.replaceChild(newList, list3);

// // Title
// console.log(document.title);
// document.title = "New title";

// // body
// console.log(document.body);
// document.body.innerHTML = "<h1>Congratulations</h1>";
