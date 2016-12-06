$('.wp-caption-text').click(function(){
  
    $('.overlay').show();
    $('.over-front').show();
    let div_id = $(this).data('thumb-id');
    $('.over-front .row').hide();
    $('.over-front > [data-option-id="'+div_id+'"]').show().addClass('selected');
    let nxt_div = div_id + 1;
    let prv_div = div_id - 1;
    $('.next').click(function(){
       
        if($('.over-front > [data-option-id="'+nxt_div+'"]').hasClass('selected') && nxt_div != 7){
            console.log('next click');
            console.log(nxt_div);
            nxt_div = nxt_div + 1;
            $('.over-front .row').hide().removeClass('selected');
            $('.over-front > [data-option-id="'+nxt_div+'"]').show().addClass('selected');
        }
        else if(nxt_div == 7){
            console.log('next 1 click');
            console.log(nxt_div);
            $('.over-front .row').hide().removeClass('selected');
            $('.over-front > [data-option-id="1"]').show().addClass('selected');
            nxt_div = 2;
        }
        else{
            console.log('first 1 click');
            console.log(nxt_div);
            $('.over-front .row').hide().removeClass('selected');
            $('.over-front > [data-option-id="'+nxt_div+'"]').show().addClass('selected');
            nxt_div = nxt_div + 1;
        }
         
    });
   $('.prev').click(function(){
       
        if($('.over-front > [data-option-id="'+prv_div+'"]').hasClass('selected') && nxt_div != 0){
            console.log('prev click');
            console.log(prv_div);
            prv_div = prv_div - 1;
            $('.over-front .row').hide().removeClass('selected');
            $('.over-front > [data-option-id="'+prv_div+'"]').show().addClass('selected');
        }
        else if(prv_div == 0){
            console.log('prev 1 click');
            console.log(prv_div);
            $('.over-front .row').hide().removeClass('selected');
            $('.over-front > [data-option-id="6"]').show().addClass('selected');
            prv_div = 2;
        }
        else{
            console.log('first 1 click');
            console.log(prv_div);
            $('.over-front .row').hide().removeClass('selected');
            $('.over-front > [data-option-id="'+prv_div+'"]').show().addClass('selected');
            prv_div = prv_div - 1;
        }
         
    });
});

$(document).mouseup(function (e)
{
    let container = $(".over-front");
    let overlay = $(".overlay");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        overlay.hide();
    }
});
