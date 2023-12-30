let cartData = JSON.parse(localStorage.getItem("cart"))||[];
    function displayCart(cart){
        cart.forEach((elem,index)=>{
            let count = 1;
            let main = document.querySelector(".main");
            let div = document.createElement("div");
            let imgdiv = document.createElement("div");
            let textdiv = document.createElement("div")
            let image = document.createElement("img");
            image.src=elem.image_url;
            let name = document.createElement("h4");
            name.innerText=elem.name;
            let price = document.createElement("h5");
            price.innerText="$"+elem.price;
            let strikePrice = document.createElement("strike");
            strikePrice.innerText="$"+elem.strikedoffprice;
            let addDiv = document.createElement("div");
            let add = document.createElement("button");
            add.innerText="+";
            add.style.marginLeft="10px";
            let number = document.createElement("span");
            number.innerText=count;
            let minus = document.createElement("button");
            minus.innerText="-";
            minus.style.marginRight="10px";
            add.addEventListener("click", function(){
                count++;
                number.innerText=count;
                price.innerText="$"+count*elem.price;
            })
            minus.addEventListener("click",function(){
                if(count<=1){
                    return;
                }else{
                    count--;
                    number.innerText=count;
                    price.innerText="$"+count*elem.price;
                }
            })
            addDiv.append(minus,number,add);
            addDiv.style.padding="10px"
            let remove = document.createElement("button");
            remove.innerText="Remove from cart";
            remove.style.border="none";
            remove.style.backgroundColor="red";
            remove.style.color="white";
            remove.style.padding="8px";
            remove.addEventListener("click",function(){
                removeItem(elem,index);
            });
            // Appending starts here
            imgdiv.append(image);
            textdiv.append(name,strikePrice,price,addDiv,remove);
            div.append(imgdiv,textdiv);
            main.append(div);
        })


        function cartTotal(){
            let total=0;
            let head = document.querySelector(".head")
            let totalPrice = document.createElement("h2");
            totalPrice.innerText="Total Price is:"+"  "+"$"+total;
            cart.forEach((elem)=>{
                total+=elem.price;
                totalPrice.innerText="Total Price is:"+"  "+"$"+total;
            })
            let discount = document.createElement("input");
            discount.style.height="20px";
            discount.style.marginTop="30px";
            discount.style.outline="none"
            discount.placeholder="Enter code for discount";
            let btn = document.createElement("button");
            btn.innerText="Submit";
            btn.style.height="20px";
            btn.style.marginTop="30px";
            btn.style.border="none";
            btn.style.color="white"
            btn.style.backgroundColor="red";
            btn.addEventListener("click", function(){
                if(discount.value==="masai30"){
                    let newPrice = total-total*0.3;
                    totalPrice.innerText="New Price:"+"  "+newPrice;
                    alert("Discount Applied!")
                } else{
                    alert("Invalid Code");
                }
            });
            head.append(totalPrice,discount,btn)
        }
        cartTotal();
    }
    displayCart(cartData)

    function removeItem(elem,index){
        cartData.splice(index,1);
        alert("Item Removed");
        console.log(cartData)
        displayCart(cartData);
    }
