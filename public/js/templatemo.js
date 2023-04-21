/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/

'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail

});

/**<!--div id="carousel-related-product">

                <div class="p-2 pb-3">
                    <div class="product-wap card rounded-0">
                        <div class="card rounded-0">
                            <img class="card-img rounded-0 img-fluid" src="img">
                            <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                <ul class="list-unstyled">
                                    <li><a class="btn btn-success text-white mt-2" href="/product/<%= item.id %>"><i class="far fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-body">
                            <a href="/product/<%= item.id %>" class="h3 text-decoration-none"><%=  %></a>
                            <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                <li class="pt-2">
                                    <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                    <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                    <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                    <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                    <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                </li>
                            </ul>
                            <ul class="list-unstyled d-flex justify-content-center mb-1">
                                <li>
                                    <li>
                                        <% if( item.rating >= 100-80 ){%>
                                            <i class="text-warning fa fa-star"></i>
                                        <% }else{ %>
                                            <i class="text-muted fa fa-star"></i>
                                        <% } %>
                                        <% if( item.rating >= 100-60 ){%>
                                            <i class="text-warning fa fa-star"></i>
                                        <% }else{ %>
                                            <i class="text-muted fa fa-star"></i>
                                        <% } %>
                                        <% if( item.rating >= 100-40 ){%>
                                            <i class="text-warning fa fa-star"></i>
                                        <% }else{ %>
                                            <i class="text-muted fa fa-star"></i>
                                        <% } %>
                                        <% if( item.rating >= 100-20 ){%>
                                            <i class="text-warning fa fa-star"></i>
                                        <% }else{ %>
                                            <i class="text-muted fa fa-star"></i>
                                        <% } %>
                                        <% if( item.rating >= 100-0 ){%>
                                            <i class="text-warning fa fa-star"></i>
                                        <% }else{ %>
                                            <i class="text-muted fa fa-star"></i>
                                        <% } %>
                                    </li>
                                </li>
                            </ul>
                            <p class="text-center mb-0"><%= item.price %> dh</p>
                        </div>
                    </div>
                </div>

                
                

                
            </div--> */

