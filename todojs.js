

setTimeout(function () {
    var todo = ["hello"];
    var keepcalling = true;
    var option = prompt("Enter any option");
    while (option !== 'Quit') {
        if (option == 'New') {
            x = prompt('Enter the new task');
            todo.push(x);

        }
        else if (option == 'List') {
            todo.forEach(function (elem, i) {
                console.log(i + elem);
            });

        }
        else {
            delete todo[prompt('Enter the index')];
        }
        var option = prompt("Enter any option");
    }
}, 0);
