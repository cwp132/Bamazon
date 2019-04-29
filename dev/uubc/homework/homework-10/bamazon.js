var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected to DB");
    start()
});

function start() {
    var query = "SELECT * from products1";
    connection.query(query, function (err, res) {
        for (let i = 0; i < res.length; i++) {
            console.log(res[i]);
        }
        firstQuestion();
    })
};

function firstQuestion() {
    inquirer
        .prompt([{
                name: "numOne",
                type: "input",
                message: "Enter the product ID that you would like to buy."
            },
            {
                name: "numTwo",
                type: "input",
                message: "How many would you like to buy?."
            }
        ])
        .then(function (answer) {
            var answerOne = answer.numOne;
            var answerTwo = answer.numTwo;
            var query = "SELECT * from products1 where item_id = " + answerOne;
            connection.query(query, function (err, res) {
                for (let i = 0; i < res.length; i++) {
                    console.log(res[i]);
                }

            })
            connection.query(query, function (err, res) {
                for (let i = 0; i < res.length; i++) {
                    var currentStock = res[i].stock_quantity;
                    if (answerTwo > res[i].stock_quantity) {
                        console.log("Insufficent quantity!")
                        firstQuestion();
                    } else {

                        inquirer.prompt({
                                type: "confirm",
                                name: "order",
                                message: "Would you like to place your order?"
                            })
                            .then(function (answer) {
                                if (answer.order === true) {
                                    var orderQuan = currentStock - answerTwo;
                                    var query1 = "UPDATE products1 SET stock_quantity = " + orderQuan + " WHERE item_id = " + answerOne;
                                    connection.query(query1, function (err, res) {
                                        console.log("Thank you for placing your order!");
                                        var query = "SELECT * from products1 where item_id = " + answerOne;
                                        connection.query(query, function (err, res) {
                                            console.log(res)
                                        })
                                    })



                                } else {
                                    console.log("No worries, come back when you need to order some products!");
                                    firstQuestion();
                                }
                            })
                    };
                }
            })
        })

};