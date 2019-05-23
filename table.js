var i = 0;
var counter = [];

function addElement(type) {

    var j = 0;

    i +=1;

    //Create an input type dynamically.
    var element = document.createElement("input");
    var button_name = "button" + (i-counter.length)
    console.log(button_name)

    //Assign different attributes to the element.

    element.setAttribute("id", button_name)
    element.setAttribute("type", "image")
    element.setAttribute("onclick", "clickOnButton(this.id); return false")
    element.setAttribute("src", "plus.png")




    while(j<(i-counter.length)){
        ////////////Bug - it is trying to set attribute minus.png to rows that are already deleted
        document.getElementById("button"+j).setAttribute("src", "minus.png")
        j +=1;
    }
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    console.log("aaaaaaaaaaaaaaa")
    

    console.log("i-counter.length: " + (i-counter.length))

    var table = document.getElementById("myTable");
    var row = table.insertRow(i-counter.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.appendChild(element);
    cell2.innerHTML = "NEW CELL"+i;


    //Append the element in page (in span).
    //foo.appendChild(element);

    return false;

}

function clickOnButton(clicked_id){

    if (clicked_id == "button"+i){
        console.log("Add element")
        addElement(document.forms[0].element.value)
    }
    else{
        removeElement(clicked_id)
    }
}

function removeElement(clicked_id) {

    var k = 0;
    var u = 0;

    idx = parseInt(clicked_id.slice(6,clicked_id.length));

    counter.push(idx)
    
    while (k<idx){
        if (counter.some(x => x==k)){
            u +=1;
        }
        k +=1;
    }

    var table = document.getElementById("myTable");
    var row = table.deleteRow(idx-u);

    return false;
};