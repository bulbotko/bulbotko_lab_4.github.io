var elem = document.getElementById("disc");
var controls = document.getElementById("controls");
var work = document.getElementById("work");
var moving = true;
var button = document.getElementById("start");

function close()
{
    if(work.style.display == "block")
    work.style.display = "none";
}
function start ()
{
    work.style.display = "block";
    move();
    button.style.background = "green";
}
function move()
{
    moving = true;
    var height = 50;
    var width = 0;
    var len_ = 264.0625;
    var count = 0; 
    var cou = 0; 
    var id = setInterval(down, 10);
    function down()
    {
        if(height == 375)
        {
        clearInterval(id);
        id = setInterval(top, 10);
        width = 0;
        count++;
        }
        else if(moving == true){
            height++;
            width++;
            elem.style.top = height + "px";
            elem.style.left = count * len_ + width * width/400 + "px";
            if (count * len_ + width * width / 400 > 655)
            clearInterval(id);
        }
    }
    function top()
        {
            if(height == 55)
            {
                clearInterval(id);
                id = setInterval(down, 10);
                width = 0; 
                count++;
            }
            else if(moving == true){
            height--;
            width++;
            elem.style.top = height + "px";
            elem.style.left = count * len_ + width * width / 400 + "px";
            if (count * len_ + width * width / 400 > 655)
            clearInterval(id);
            }
        }
}
function stop()
    {
            var stop_ = document.getElementById("stop");
            stop_.style.display = "none"
            var reload_ = document.createElement('button');
            reload_.innerHTML = 'Reload!'; 
            reload_.id = "reload";
            controls.appendChild(reload_);
            reload_.onclick = () => reload();
            moving = false;
            clearInterval(id);
    }
function reload()
    {
        elem.style.left = 0 + "px";
        elem.style.top = 50 + "px";
        move();
    }
