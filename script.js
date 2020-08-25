
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function update(){

    var numsounds = $('#inputTextArea').val();
    var maxid = $('#inputhighest').val();
    var rand_first= getRandomInt(card1.length);
    while(card1[rand_first].id>maxid)
    {
        rand_first= getRandomInt(card1.length);
    }
    var firstchar=card1[rand_first].data;
    
    var rand_second= getRandomInt(card2.length);
    while(card2[rand_second].id>maxid)
    {
        rand_second= getRandomInt(card2.length);
    }
    var secondchar=card2[rand_second].data;
    
    var rand_third= getRandomInt(card3.length);
    while(card3[rand_third].id>maxid)
    {
        rand_third= getRandomInt(card3.length);
    }
    var thirdchar=card3[rand_third].data;
    var response='';
    var indicator='';
    for (var i = 0; i < numsounds; i++) {
        changeseed=getRandomInt(2);
        if (changeseed==1) 
        {
            rand_first= getRandomInt(card1.length);
            while(card1[rand_first].id>maxid)
            {
                rand_first= getRandomInt(card1.length);
            }
            firstchar=card1[rand_first].data;
        }
        if (changeseed==2)
        {
            rand_second= getRandomInt(card2.length);
            while(card2[rand_second].id>maxid)
            {
                rand_second= getRandomInt(card2.length);
            }
            secondchar=card2[rand_second].data;
        }
        if (changeseed==0)
        {
            rand_third= getRandomInt(card3.length);
            while(card3[rand_third].id>maxid)
            {
                rand_third= getRandomInt(card3.length);
            }
            thirdchar=card3[rand_third].data;
        }
        response += '<div class="item btn-toolbar"> ';
        response += '<button type="button" class="btn-primary btn-lg">'+firstchar + "</button>";        
        response += '<button type="button" class="btn-warning btn-lg">'+secondchar + "</button>";
        response += '<button type="button" class="btn-primary btn-lg">'+thirdchar + "</button>";                    
        response +=' </center></div>';
        indicator += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
    }
    $('#homepageItems').html(response);
    $('#indicators').html(indicator);
    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $("#myCarousel").carousel({
        keyboard: true,
        wrap: false
      });
    hide();
 };

 function hide(){
    if($('#btnhide').text()=="Hide")
    {
        $('#inputhighest').hide();
        
        $('#inputTextArea').hide();
        $('#btngenerate').hide()
        $('#instructions').hide()
        
        $('#btnhide').text("Show")
    }
    else
    {
        $('#inputhighest').show();
        $('#inputTextArea').show();
        $('#btngenerate').show();
        $('#instructions').show();
        $('#btnhide').text("Hide");
    }
 }

 $(document).bind('keyup', function(e) {
    if(e.which == 39){
        $("#myCarousel").carousel('next');
    }
    else if(e.which == 37){
        $("#myCarousel").carousel('prev');
    }
});