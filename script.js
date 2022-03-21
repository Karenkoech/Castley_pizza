$(document).ready(function() {
    $(".result").hide()
    $(".purchase").click(function() {
        var size = $("#size  option:selected").val();
        var crust = $("#crust  option:selected").val();
        var toppings = $("#toppings  option:selected").val()
        var quantity =  $(".quantity").val();
        var location = $("#location option:selected").val()
        var price = $("button#orderpiz").val();

        function quantityChanged() {

            // if (isNaN(quantity) || quantity <= 0) {
            //     quantity = 1
            // }
            
        }
        quantityChanged();
        var crustPrice;
        if (toppings === 'mushroom') {
            crustPrice = 100
        } else if (toppings === 'Bacon') {
            crustPrice =120 
        } else if (toppings === 'Extra Cheese') {

            crustPrice = 150;
        }
        var toppingPrice;
        if (crust === 'thick') {
            toppingPrice = 50
        } else if (crust === 'crispy') {
            toppingPrice = 80
        } else if (crust === 'glutten-free') {
            toppingPrice = 100
        }
        var price;
        if (size === 'large') {
            price = 1600
        } else if (size === 'medium') {
            price = 1200
        } else if (size === 'small') {
            price = 600
        } else if (size === 'You') {
            alert("Please select your size!")
            price = 0;
        }
        

        var totalCost =parseInt (quantity * (price + crustPrice + toppingPrice));
        var overalCost = parseInt(totalCost);

        $(".cart").append(
            `
                            <tr>
                                <td>${size}</td> 
                                <td>${crust}</td>
                                <td>${toppings}</td>
                                <td>${quantity}</td>
                                <td>${location}</td>
                                <td>${overalCost}</td>
                                <td><button class="btn remove">remove</button></td>
                            </tr>
                            `
        )


    })

    var value;
    var theTotal = 0;

    $(".checkout").click(function() {
        $("td:nth-child(6)").each(function() {
            value = $(this).html();

            theTotal += parseInt(value);
            $(".result").text(' Thank you for shopping with us. ' + ' Your payable order is: ' + theTotal + `.`).show();
        });

    })
    var deletebtn = $(".remove");
    deletebtn.addClass('Remove')
    deletebtn.click(function(e) {
        const btn = e.target;
        btn.closest('tr').remove();
    })

})
$('input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
        $(".location").show()
    } else if ($(this).prop("checked") == false) {
        $(".location").hide()
    }
});

