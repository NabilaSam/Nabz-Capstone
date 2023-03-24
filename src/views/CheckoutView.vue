<template>
  <div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  
</style>

<!-- <template > -->
    <!-- <div>
        <div class="container checkout">
  <table id="cart" class="table table-hover table-condensed">
    <thead>
      <tr>
        <th style="width:50%">Image</th>
        <th style="width:10%" class="text-center">Product</th>
        <th style="width:22%">Description</th>
        <th style="width:8%">Price</th>
        <th style="width:10%"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-2 hidden-xs"><img  :src="product.imgURL" alt="prod.img" style="max-height: 60px;"/></div>
            <div class="col-sm-10"> -->
                <!-- <td><img :src="product.imgURL" alt="prod.img" style="max-height: 60px;"></td> -->
            <!-- </div>
          </div>
        </td>
        <td data-th="Name">{{product.prodName}}</td>
        <td data-th="Subtotal" class="text-center">{{product.prodDescription}}</td>
        <td class="actions" data-th="">
          <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
          <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
        </td>
        <td data-th="Price">{{product.price}}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="visible-xs">
        <td class="text-center" id="Total"><strong>Total $ 5.11</strong></td>
      </tr>
      <tr>
        <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
        <td colspan="2" class="hidden-xs"></td>
        <td class="hidden-xs text-center"><strong>Total $ 5.11</strong></td>
        <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
      </tr>
    </tfoot>
  </table>
</div>
    </div> -->
<!-- </template> -->

<!-- <script>

import {useStore} from 'vuex';

The total option
var cart = document.getElementById("cart"), sumTotal = 0;
for(var i = 1; i < cart.rows.length; i++)
{
    sumTotal = sumTotal + parseInt(cart.rows[i].cells[2].innerHTML);
}
console.log(sumTotal);

Displaying the sum total
document.getElementById("cart").innerHTML = "Total price = "+ sumTotal
console.log(sumTotal);

export default {
    
}
</script> -->

<!-- <style scoped>
    /* .checkout{
margin-top: 20px;
    } */
</style> -->