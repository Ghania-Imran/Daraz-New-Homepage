$(document).ready(function () {

    $("#mainContent").append(`

        <!-- CATEGORIES -->

        <div class="categories">

            <h2>Categories</h2>

            <div class="category-list">

                <div class="category">📱 Mobiles</div>
                <div class="category">💻 Electronics</div>
                <div class="category">👕 Fashion</div>
                <div class="category">🏠 Home & Living</div>
                <div class="category">💄 Beauty</div>
                <div class="category">🧸 Toys</div>
                <div class="category">👟 Shoes</div>
                <div class="category">🎮 Gaming</div>

            </div>

        </div>


        <!-- BANNER -->

        <div class="banner">

            <div class="banner-text">

                <h1>Big Shopping Sale</h1>

                <p>
                    Find amazing products at great prices.
                </p>

                <button onclick="shopNow()">
                    Shop Now
                </button>

            </div>

        </div>


        <!-- FLASH SALE -->

        <div class="section">

            <div class="section-title">
                <h2>Flash Sale</h2>
            </div>

            <div class="products">

                <!-- Product 1 -->

                <div class="product" data-product="Smart Apple Watch">

                    <div class="product-image">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStq6_alRG74BA3zXBNkBJ633iFeImvsl9XH8evq9UAzYJnlSmK1R-KK344&s=10"
                            alt="Smart Watch"
                        >

                    </div>

                    <h3>Smart Apple Watch</h3>

                    <div class="price">
                        Rs. 1,499
                    </div>

                    <span class="old-price">
                        Rs. 2,500
                    </span>

                    <span class="discount">
                        -40%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐☆
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>


                <!-- Product 2 -->

                <div class="product" data-product="Wireless Headphones">

                    <div class="product-image">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dHlaN02TySsAqdlx2ge-QimzwC1IJjm0IlynxJRkpQ&s=10"
                            alt="Wireless Headphones"
                        >

                    </div>

                    <h3>Wireless Headphones</h3>

                    <div class="price">
                        Rs. 2,199
                    </div>

                    <span class="old-price">
                        Rs. 3,500
                    </span>

                    <span class="discount">
                        -37%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐⭐
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>


                <!-- Product 3 -->

                <div class="product" data-product="Men T-Shirt">

                    <div class="product-image">

                        <img
                            src="https://5.imimg.com/data5/SELLER/Default/2023/12/367680764/KH/XH/OV/21769540/naruto-nagato-pain-design-round-neck-tshirt-500x500.jpg"
                            alt="Men T Shirt"
                        >

                    </div>

                    <h3>Men T-Shirt</h3>

                    <div class="price">
                        Rs. 799
                    </div>

                    <span class="old-price">
                        Rs. 1,200
                    </span>

                    <span class="discount">
                        -34%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐☆
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>


                <!-- Product 4 -->

                <div class="product" data-product="Mobile Phone">

                    <div class="product-image">

                        <img
                            src="https://i.ytimg.com/vi/3yYDIhlNe-w/sddefault.jpg"
                            alt="Mobile Phone"
                        >

                    </div>

                    <h3>Mobile Phone</h3>

                    <div class="price">
                        Rs. 25,999
                    </div>

                    <span class="old-price">
                        Rs. 30,000
                    </span>

                    <span class="discount">
                        -13%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐⭐
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>


                <!-- Product 5 -->

                <div class="product" data-product="Bluetooth Speaker">

                    <div class="product-image">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjybf_uCCojUFfQNxNGk6WO7ETwRzHy8snT3E-hZhVTkkKSk3xdf4eGG8&s=10"
                            alt="Bluetooth Speaker"
                        >

                    </div>

                    <h3>Bluetooth Speaker</h3>

                    <div class="price">
                        Rs. 1,299
                    </div>

                    <span class="old-price">
                        Rs. 2,000
                    </span>

                    <span class="discount">
                        -35%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐☆
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>


        <!-- JUST FOR YOU -->

        <div class="section just-for-you">

            <div class="section-title">
                <h2>Just For You</h2>
            </div>

            <div class="products">

                <!-- Product 6 -->

                <div class="product" data-product="Ladies Hand Bag">

                    <div class="product-image">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgh8c9hO2_vjNefdBmmk5-AdjnC3L8_mx_xnJ-cERvsbOzaVp3UEHxcDa&s=10"
                            alt="Ladies Hand Bag"
                        >

                    </div>

                    <h3>Ladies Hand Bag</h3>

                    <div class="price">
                        Rs. 1,599
                    </div>

                    <span class="old-price">
                        Rs. 2,500
                    </span>

                    <span class="discount">
                        -36%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐☆
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>


                <!-- Product 7 -->

                <div class="product" data-product="Running Shoes">

                    <div class="product-image">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUcapQ4NtqlZIVqZjS8vhfqJwznbUmycu-DN0yjmmUhLC-aVkyRD-Q6LT2&s=10"
                            alt="Running Shoes"
                        >

                    </div>

                    <h3>Running Shoes</h3>

                    <div class="price">
                        Rs. 2,499
                    </div>

                    <span class="old-price">
                        Rs. 3,500
                    </span>

                    <span class="discount">
                        -29%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐⭐
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>


                <!-- Product 8 -->

                <div class="product" data-product="Gaming Mouse">

                    <div class="product-image">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjKqu5WIF4_eu3tfspWZ73LKk9xd5ySDn_U4Ar6Bu0WaoMBvXLEbjyAn3&s=10"
                            alt="Gaming Mouse"
                        >

                    </div>

                    <h3>Gaming Mouse</h3>

                    <div class="price">
                        Rs. 999
                    </div>

                    <span class="old-price">
                        Rs. 1,500
                    </span>

                    <span class="discount">
                        -33%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐☆
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>


                <!-- Product 9 -->

                <div class="product" data-product="Power Bank">

                    <div class="product-image">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kcv4OlQUMpDaeUd5omZ2NaNw9MFqn5gB1lM_wZa55Q&s=10"
                            alt="Power Bank"
                        >

                    </div>

                    <h3>Power Bank</h3>

                    <div class="price">
                        Rs. 1,799
                    </div>

                    <span class="old-price">
                        Rs. 2,500
                    </span>

                    <span class="discount">
                        -28%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐☆
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>


                <!-- Product 10 -->

                <div class="product" data-product="LED Room Light">

                    <div class="product-image">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbldyUwc-h4l0CFnGTDPCjsIdz2l9IJYrH_MMfbqJjzhPUK1u1w3EPKk9z&s=10"
                            alt="LED Light"
                        >

                    </div>

                    <h3>LED Room Light</h3>

                    <div class="price">
                        Rs. 699
                    </div>

                    <span class="old-price">
                        Rs. 1,000
                    </span>

                    <span class="discount">
                        -30%
                    </span>

                    <div class="rating">
                        ⭐⭐⭐⭐☆
                    </div>

                    <button class="add-cart">
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>

    `);


    var cart = [];


    // dynamic Content

    $("#mainContent").on("click", ".add-cart", function (event) {

        event.stopPropagation();
    var productName = $(this).siblings("h3").text();

    var productPrice = $(this).siblings(".price").text();

    var productImage = $(this)
        .siblings(".product-image")
        .find("img")
        .attr("src");

    cart.push({
        name: productName,
        price: productPrice,
        image: productImage
    });

        $("#cartCount").text(cart.length);

        alert(productName + " - " + productPrice);

    });


    // SHOW PRODUCTS IN CART

    $("#cartButton").click(function () {

        $("#floatingCart").show();

        var cartItems = "";

        if (cart.length == 0) {

            cartItems = "<p>Your cart is empty.</p>";

        } else {

            for (var i = 0; i < cart.length; i++) {

                cartItems += `
                    <div class="cart-product">

                        <img src="${cart[i].image}" width="60">

                        <div>
                            <strong>${cart[i].name}</strong>
                            <p>${cart[i].price}</p>
                        </div>

                    </div>
                `;

            }

        }

    $("#cartItems").html(cartItems);

});
 // EMPTY CART / CHECKOUT  

    $("#floatingCheckoutBtn").click(function () {

        if (cart.length == 0) {

            alert("Your cart is already empty.");

        } else {

            cart = [];

            $("#cartCount").text("0");

             $("#cartItems").html("");

            alert("Checkout successful! Your cart is now empty.");

        }

    });

});

// SEARCH PRODUCT

function searchProduct() {

    var search =
        document.getElementById("searchInput").value;

    if (search == "") {

        alert("Please enter a product name.");

    } else {

        alert("You searched for: " + search);

    }

}

// SHOP NOW

function shopNow() {

    alert("Welcome to Daraz Shopping!");

}

