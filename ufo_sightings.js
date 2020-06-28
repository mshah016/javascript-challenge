// Level 1:

// select the data
var tableData = data;

// reference the tbody in html
var tbody = d3.select("tbody");

// check if connection was made
console.log(tableData);

// define function 
function ufoReports(ufo){
    console.log(ufo)
};

// check if function works
data.forEach(ufoReports);

// update function to add rows for each item
function ufoReports(ufo){
    console.log(ufo)

    var row = tbody.append("tr")

    // log each key and value onto console
    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);

        // append a new cell for each row
        var cell = row.append("td");

        // set value as text for each cell
        cell.text(value);
    });
};

tableData.forEach(ufoReports);


// select button
var button = d3.select("#filter-btn");

// select form
var form = d3.select("form");

// create event handlers
button.on("click", runFilter);
form.on("submit", runFilter);

// define runFilter function
// function runFilter() {

//     // test
//     console.log("button was clicked");

//     // select input element and get raw html node
//     var input = d3.select("#datetime");
    
//     // get input value
//     var inputValue = input.property("value");

//     // filter data so that date matches input value
//     var filteredData = tableData.filter(info => info.datetime === inputValue);

//     // DISPLAY INFORMATION ON TABLE:

//     var tbody = d3.select("tbody");

//     // refresh table so that it returns to full dataset
//     tbody.html("");
    
//     // call ufoReports function on filtered data so that it prints just the filtered data
//     filteredData.forEach(ufoReports);
// }


// Level 2:

    d3.selectAll("#selColumn").on("change", runFilter);

    function runFilter(){
        console.log("button was clicked");
        
        var dropdownMenu = d3.select("#selColumn")
        var dataOption = dropdownMenu.property("value")

        if (dataOption == 'select') {

            console.log("button was clicked");
            d3.select("label").text("");
            d3.select("input").attr("placeholder", "--");
        
            // select input element and get raw html node
            var input = d3.select("#filter-input");
                
            // get input value
            var inputValue = input.property("value");
                
            var filteredData = tableData;

        } else if (dataOption == 'date') {

            console.log("button was clicked");
            d3.select("label").text("Enter a date");
            d3.select("input").attr("placeholder", "1/11/2011");
            
            // select input element and get raw html node
            var input = d3.select("#filter-input");
            
            // get input value
            var inputValue = input.property("value");
        
            // filter data so that date matches input value
            var filteredData = tableData.filter(info => info.datetime === inputValue);

        } else if (dataOption == 'city') {

            console.log("button was clicked");
            d3.select("label").text("Enter a city");
            d3.select("input").attr("placeholder", "los angeles");

            // select input element and get raw html node
            var input = d3.select("#filter-input");
            
            // get input value
            var inputValue = input.property("value");
        
            // filter data so that date matches input value
            var filteredData = tableData.filter(info => info.city === inputValue);
        
        } else if (dataOption == 'state') {

            console.log("button was clicked");
            d3.select("label").text("Enter a state");
            d3.select("input").attr("placeholder", "ca");

            // select input element and get raw html node
            var input = d3.select("#filter-input");
            
            // get input value
            var inputValue = input.property("value");
        
            // filter data so that date matches input value
            var filteredData = tableData.filter(info => info.state === inputValue);
            
        } else if (dataOption == 'country') {

            console.log("button was clicked");
            d3.select("label").text("Enter a country");
            d3.select("input").attr("placeholder", "us");

            // select input element and get raw html node
            var input = d3.select("#filter-input");
            
            // get input value
            var inputValue = input.property("value");
        
            // filter data so that date matches input value
            var filteredData = tableData.filter(info => info.country === inputValue);

        } else if (dataOption == 'shape') {

            console.log("button was clicked");
            d3.select("label").text("Enter a shape");
            d3.select("input").attr("placeholder", "light");

            // select input element and get raw html node
            var input = d3.select("#filter-input");
            
            // get input value
            var inputValue = input.property("value");
        
            // filter data so that date matches input value
            var filteredData = tableData.filter(info => info.shape === inputValue);

        } else if (dataOption == 'durationMinutes') {

            console.log("button was clicked");
            d3.select("label").text("Enter a duration in minutes");
            d3.select("input").attr("placeholder", "13 minutes");

            // select input element and get raw html node
            var input = d3.select("#filter-input");
            
            // get input value
            var inputValue = input.property("value");
        
            // filter data so that date matches input value
            var filteredData = tableData.filter(info => info.durationMinutes === inputValue);
        }
        
        // DISPLAY INFORMATION ON TABLE:

        // refresh table so that it returns to full dataset
        tbody.html("");
            
        // call ufoReports function on filtered data so that it prints just the filtered data
        filteredData.forEach(ufoReports);


    }




















