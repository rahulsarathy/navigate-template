$(document).ready(function() {


$("#content").append($("<div>").load("pages/page1.html"));

// $("#content").append($("#menu").clone())

// //$("#content").find("#menu").children().find('ol').contents().unwrap()
var lis = $("#menu").children().find('li').toArray()
 numbers = getNumbers();

// var offset = 1

for (var i = 0; i < lis.length; i++)
{
    lis[i].id = numbers[i]
    lis[i].addEventListener("click", changePage)
}

// for (var i = 0; i < lis.length; i++)
// {
//     if (isInt(numbers[i]))
//     {
//         lis[i].id = 'page' + offset
//         $("#page" + numbers[i]).prepend($("<div>").load('pages/page' + numbers[i] + '.html'));
//         offset++;
//     }

//     var numberBox = document.createElement('div');
//    // console.log(numberBox);
//     numberBox.className = 'numberbox-unselected';
//     numberBox.innerHTML = '<div>' + numbers[i] + '</div>';
//     lis[i].prepend(numberBox);
//     lis[i].className = "remove-before"

   
// }



});

function changePage(e) {
    var clean = Math.floor(e.target.id)
    console.log(e.target.nodeName)
    if (e.target.nodeName == 'OL')
    {
        return
    }
   // console.log("changing from " + e.target.id +  " to " + clean)
    $("#content").empty()
    $("#content").append($("<div>").load('pages/page' + clean + '.html'));

    var lis = $("#menu").children().find('li').toArray()

    for (var i = 0; i < lis.length; i++)
    {
        lis[i].classList.remove('highlighted');
        if (lis[i].id == clean)
        {
            lis[i].classList.add('highlighted')
        }
    }

}

// function isInt(n) {
//    return n % 1 === 0;
// }

// function createTitles() {
//     titles = getNumbers();
//     names = getTitles();

//     for (var i = 0; i < titles.length; i++)
//     {
//         var fullName = titles[i] + ' ' + names[i]
//        $("#content").append('<h1>' + fullName + '</h1>')
//     }
// }

// function getTitles() {
//     var menu = document.getElementById('content').getElementsByClassName('menu')[0];
//     var items = menu.getElementsByTagName("h2");
//     var i = 0;
//     var titles = [];
//     for (i = 0; i < items.length; i++)
//     {
//         var text = items[i].innerText
//         titles.push(text)
//     }
//     return titles;
// }

/* 
List numbers are created by css. Unfortunately JS cannot read css values so have to recalculate them in JS.
*/
function getNumbers() {
    var menu = document.getElementById('menu');
    var items = menu.getElementsByTagName("li");
    var titles = []
    var i = 0;
    var ones = 1;
    var tenths = 1;

    while (titles.length < items.length)
    {
        if (items[i].parentNode.className == 'inner-list')
        {
            if (tenths > 1)
            {
                titles.push(ones - 1 + tenths * 0.1)
                tenths++;
            }
            else {
                titles.push(ones - 1 + tenths * 0.1)
                tenths++;
            }
        }
        else {
            tenths = 1;
            titles.push(ones)
            ones++;
        }
        i++
    }

    return titles
}