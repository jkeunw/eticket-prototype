function popup(){
    var url = "reservation.html";
    var name = "Smart Ticket";
    var x = (window.screen.width/2) - (980/2);
    var y = (window.screen.height/2) - (700/2);
    var option = "width = 980, height = 650, top =" + y + ", left = " + x + ", location = no";
    window.open(url, name, option);
};

function popupTicket() {
    var url = "../ticket-token"
    name = "Smart Ticket Token";
    window.open(url, name);
}

$(document).ready(function(){    
    $('input[name="ticket-type"]').change(function() {
        var value = $('input[name="ticket-type"]:checked').val();
        
        if (value == 1) {            
            $(".smart-ticket-checked").hide();
            $(".delivery-checked").show(); 
        } else {
            $(".delivery-checked").hide(); 
            $(".smart-ticket-cost").hide();
            $(".smart-ticket-checked").show();
            $(".smart-ticket-cost").show();
        };
    });

    $('input[name="ticket-type"]').change(function(){
        $("#next").click(function(){
            var value = $('input[name="ticket-type"]:checked').val();
            if (value == 2) {
                $(".ticket-type-selection").hide();        
                $(".ticket-payment").show();
            };
        });
    });

    $("#previous").click(function(){
        $(".ticket-payment").hide();
        $(".ticket-type-selection").show(); 
        $(".ticket-type-selection.delivery-checked").hide();        
    });

    $("#payment").click(function(){
        swal({
            title: "결제완료!",
            text: "고객님의 휴대폰으로 스마트티켓이 전송되었습니다.",
            icon: "success",
            button: "확인",                
        }).then((value) => {
            window.open('ticket-token');
            window.close();
        });
        
    });


});


    