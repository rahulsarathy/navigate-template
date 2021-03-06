let menu_clone;
let numbers;

$(document).ready(function() {

//Start with page 1
$("#content").append($("<div>").load("pages/page1.html"));

document.getElementById('search-bar').addEventListener('keyup', search)

numbers = getNumbers();
setEventListeners();

//use this to reset menu when search is empty string
menu_clone = $("#menu").clone(true);

});

/* Adds links to each menu item*/
function setEventListeners()
{
    var lis = $("#menu").children().find('li').toArray()
    for (var i = 0; i < lis.length; i++)
    {
        lis[i].id = numbers[i]
        lis[i].addEventListener("click", changePage)
    }
}

function changePage(e) {
    var clean = Math.floor(e.target.id)
    if (e.target.nodeName == 'OL')
    {
        return
    }

    $("#content").empty()
    $("#content").append($("<div>").load('pages/page' + clean + '.html',
        function() {
            var $container = $('div')
            var scrollTo = $(".page").find('h1:contains(' + e.target.id + ')')
            if (scrollTo.length)
            {
                $('html,body').animate({scrollTop: scrollTo.offset().top});
            }
        }

    ));

  //  $("h1:contains(" + e.target.id + ')')

    var lis = $("#menu").children().find('li').toArray()

    for (var i = 0; i < lis.length; i++)
    {
        lis[i].classList.remove('highlighted');
        if (lis[i].id == e.target.id)
        {
            lis[i].classList.add('highlighted')
        }
    }
}

function search() {
    var lis = $("#menu").children().find('li').toArray()

    var filter = document.getElementById('search-bar').value.toUpperCase();
    if (filter === "")
    {
        $("#menu").replaceWith(menu_clone.clone(true));
        setEventListeners();
    }
    else {
        $("#menu").find('.inner-list').children().unwrap()
        $("#menu").find('ol').attr('class', 'remove-before')

        for (var i = 0; i < lis.length; i++)
        {
            if (!(lis[i].firstChild.nodeValue.trim().toUpperCase().indexOf(filter) > -1))
            {
                lis[i].style.display = "none"
            }
            else {
                if (lis[i].parentElement.tagName === 'LI')
                {
                    lis[i].parentElement.style.display = ""
                }
                lis[i].style.display = ""
            }
            lis[i].classList.add('searching')
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