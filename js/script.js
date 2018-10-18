 var rIndex,
        table = document.getElementById("tabel");
            
            // Order price
        
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    item = document.getElementById("item").value,
                    price = document.getElementById("price").value,
                    quantity = document.getElementById("quantity").value;
                    order = document.getElementById("order").value;
            
                if(item === ""){
                    alert("Item's Name Cannot Be Empty");
                    isEmpty = true;
                }
                else if(price === ""){
                    alert("Price number Cannot Be Empty");
                    isEmpty = true;
                }
                else if(quantity === ""){
                    alert("Quantity Cannot Be Empty");
                    isEmpty = true;
                } else if (order === "" ) {
                    alert("Order Cannot Be Empty Please Enter Your Price and Quantity again")
                    isEmpty = true;
                }
                return isEmpty;
            };
            
            // add Row

            var total = 0;

            // document.getElementById('entry').onclick = enter;
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    item = document.getElementById("item").value,
                    price = document.getElementById("price").value,
                    quantity = document.getElementById("quantity").value;
                    entry = document.getElementById("order").value;

                    cell4.innerHTML = entry;
                  var entry = parseFloat(entry);
                  currency = currencyFormat(entry);
                  // document.getElementById('entries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
                  total += entry;
                  document.getElementById('total').innerHTML = currencyFormat(total);
                  document.getElementById('order').innerHTML = currencyFormat(entry);
                  
                  
                  
      
                document.getElementById('order').value = '';
                    cell1.innerHTML = item;
                    cell2.innerHTML = price;
                    cell3.innerHTML = quantity;

                
                    // call the function to set the event to the new row
                    selectedRowToInput();
                    return false;

            
            }
            };
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("item").value = this.cells[0].innerHTML;
                      document.getElementById("price").value = this.cells[1].innerHTML;
                      document.getElementById("quantity").value = this.cells[2].innerHTML;
                      document.getElementById("order").value = this.cells[3].innerHTML;
                    };
                }
            };
            selectedRowToInput();
            
            function editHtmlTableSelectedRow(){
            {
                var item = document.getElementById("item").value,
                    price = document.getElementById("price").value,
                    quantity = document.getElementById("quantity").value;
                    order = document.getElementById("order").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = item;
                table.rows[rIndex].cells[1].innerHTML = price;
                table.rows[rIndex].cells[2].innerHTML = quantity;
                table.rows[rIndex].cells[3].innerHTML = order;
              }
            }
        }
            
           function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("item").value = "";
                document.getElementById("price").value = "";
                document.getElementById("quantity").value = "";
                document.getElementById("order").value = "";
            }
          
          

        

        //Total order
        

        // function enter() {
          
        //     var entry = document.getElementById('order').value;
        //     var entry = parseFloat(entry);
        //     currency = currencyFormat(entry);
        //    document.getElementById('entries').innerHTML += '<tr><td></td><td></td><td></td><td>' + currency + '</td></tr>';
            
        //     total += entry;
        //     document.getElementById('total').innerHTML = currencyFormat(total);
      
        //     document.getElementById('order').value = '';
        //     return false;
        // }

        function currencyFormat(number) {
          var currency = parseFloat(number);
          currency = currency.toFixed(0);
          currency = currency;
          return currency;
        }

        document.addEventListener('DOMContentLoaded', function(){
            var price = document.getElementById('price');
            var quantity = document.getElementById('quantity');
            var order = document.getElementById('order');

            price.addEventListener('keyup' , function(mouseEvent){
            order.value = parseInt(price.value) * parseInt(quantity.value);
            });
            quantity.addEventListener('keyup' , function(mouseEvent){
            order.value = parseInt(price.value) * parseInt(quantity.value);
            });

        });

        var rIndex,
            tabel2 = document.getElementById('tabel2');
        // payment total
        function checkDiscount(){
            var isEmpty = false,
                discount = document.getElementById('discount').value;

            if (discount === "") {
                alert('Please input the discount');
                isEmpty = true
            }
            return isEmpty
        };

        function addTotal(){
            if(!checkDiscount()){
                var newRow = tabel2.insertRow(),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),

                total = document.getElementById('total').innerHTML,
                discount = document.getElementById('discount').value;
                // discount = document.getElementById('discount');

                // cell4.innerHTML = total;
                currency = currencyFormat(total);
                totalPrice = total - ((total * discount)/100);
                document.getElementById('totalPrice').innerHTML = currencyFormat(totalPrice);
            }

        };

        var rIndex,
            tabel3 = document.getElementById('tabel3');
        // payment total
        function checkPayment(){
            var isEmpty = false,
                payment = document.getElementById('payment').value;

            if (payment === "") {
                alert('Please input your payment total');
                isEmpty = true
            }
            return isEmpty
        };

        function remainderClick(){
            if(!checkPayment()){
                var newRow = tabel3.insertRow(),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),

                totalPrice = document.getElementById('totalPrice').innerHTML,
                payment = document.getElementById('payment').value;
                // discount = document.getElementById('discount');

                // cell4.innerHTML = total;
                currency = currencyFormat(totalPrice);
                remainder = payment - totalPrice;
                document.getElementById('remainder').innerHTML = currencyFormat(remainder);
            }

        };
         

          // function addHtmlTableRow()
          //   {
          //       // get the table by id
          //       // create a new row and cells
          //       // get value from input text
          //       // set the values into row cell's
          //       if(!checkEmptyInput()){
          //       var newRow = table.insertRow(table.length),
          //           cell1 = newRow.insertCell(0),
          //           cell2 = newRow.insertCell(1),
          //           cell3 = newRow.insertCell(2),
          //           cell4 = newRow.insertCell(3),
          //           item = document.getElementById("item").value,
          //           price = document.getElementById("price").value,
          //           quantity = document.getElementById("quantity").value;
          //           entry = document.getElementById("order").value;

          //           cell4.innerHTML = entry;
          //         var entry = parseFloat(entry);
          //         currency = currencyFormat(entry);
          //         // document.getElementById('entries').innerHTML += '<tr><td></td><td>' + currency + '</td></tr>';
          //         total += entry;
          //         document.getElementById('total').innerHTML = currencyFormat(total);
                  
                  
                  
      
          //       document.getElementById('order').value = '';
          //           cell1.innerHTML = item;
          //           cell2.innerHTML = price;
          //           cell3.innerHTML = quantity;

                
          //           // call the function to set the event to the new row
          //           selectedRowToInput();
          //           return false;

            
          //   }
          //   };
        



        // document.addEventListener('DOMContentLoaded', function(){
        //     var price = document.getElementById('price');
        //     var quantity = document.getElementById('quantity');
        //     var order = document.getElementById('order');
        //     var newRow = table.insertRow(table.length),
        //     cell1 = newRow.insertCell(3),
        //     order = document.getElementById("order").value;
        //     cell4.innerHTML = order;

        //     order.addEventListener('click' , function(mouseEvent){
        //     order.value = parseInt(order) + parseInt(order);
        //     });
           
            
        // })



         // var total = 0;
        // document.getElementById('entry').onclick = enter;
        // function enter(){
                // var item = document.getElementById('item').value,
                // var price = document.getElementById('price').value,
                // var quantity = document.getElementById('quantity').value;
        //     var entry = document.getElementById('order').value;
        //     currency = currencyFormat(order);
        //     // document.getElementById('entries').innerHTML += '<tr><td></td><td></td><td></td><td>' + currency + '</td></tr>';

        //     total += total
        //     document.getElementById('total').innerHTML = currencyFormat(total);
            
        //     document.getElementById('order').value = '';
        //     return false;
        // }

        // function currencyFormat(number) {
        // var currency = parseFloat(number);
        // currency = currency.toFixed(2);
        // currency = 'Rp' + " " + currency;
        // return currency;
        // }