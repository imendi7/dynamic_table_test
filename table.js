var i = 0;
var counter = [];

function addElement(type) {

    var j = 0;

    i +=1;

    //Create an input type dynamically.
    var element1 = document.createElement("input");
    var element2 = document.createElement("button");
    var button_name = "button" + (i-counter.length)
    var elem_name = "elem" + (i-counter.length)

    //Assign different attributes to the element.

    element1.setAttribute("id", button_name)
    element1.setAttribute("type", "image")
    element1.setAttribute("onclick", "clickOnButton(this.id); return false")
    element1.setAttribute("src", "plus.png")

    element2.setAttribute("id", elem_name)
    element2.setAttribute("type", "button")
    element2.setAttribute("class", "element_button")
    element2.setAttribute("onclick", "clickOnButton(this.id); return false")
    element2.innerHTML = "Aaaaaa"

    while(j<(i-counter.length)){
        ////////////Bug - it is trying to set attribute minus.png to rows that are already deleted
        document.getElementById("button"+j).setAttribute("src", "minus.png")
        j +=1;
    }
    

    console.log("i-counter.length: " + (i-counter.length))

    var table = document.getElementById("myTable");
    var row = table.insertRow(i-counter.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.appendChild(element1);
    cell2.appendChild(element2);


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


    idx = parseInt(clicked_id.slice(6,clicked_id.length));

    console.log("index: ",idx)

    document.getElementById("myTable").rows[idx].style.display = "none";

    console.log(document.getElementById("myTable").rows[idx].style.display)

    /*
    counter.push(idx)
    
    while (k<idx){
        if (counter.some(x => x==k)){
            u +=1;
        }
        k +=1;
    }

    var table = document.getElementById("myTable");
    var row = table.deleteRow(idx-u);
    */

    return false;
};