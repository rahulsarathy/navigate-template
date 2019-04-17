$(document).ready(function() {


$("#content").append($("<div>").load("pages/page1.html"));


var lis = $("#menu").children().find('li').toArray()
 numbers = getNumbers();


for (var i = 0; i < lis.length; i++)
{
    lis[i].id = numbers[i]
    lis[i].addEventListener("click", changePage)
}

});

function changePage(e) {
    var clean = Math.floor(e.target.id)
    console.log(e.target.nodeName)
    if (e.target.nodeName == 'OL')
    {
        return
    }
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