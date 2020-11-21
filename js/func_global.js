$(function () {
    $("header button").attr({               //Tekrar Modal Attribut saylarin Azaltmaq ucun Header button'larina Modal Atributlarini Set edirik.
        "data-toggle": "modal",
        "data-target": ".all_modal"
    });
    man();
    key_all($("header h1").eq(0), $("header h1").text());   //typing text
    $("header p").delay(3900).slideDown(1000);              // Header P effect
    all_modal_full();                                      //All Modal Function Click after import
    setTimeout(() => {
        progress_all(".html5 div", 100, 2);
        progress_all(".css3 div", 100, 5);
        progress_all(".javascript div", 80, 8);
        progress_all(".jquery div", 90, 11);
        progress_all(".bootstrap div", 100, 14);
        progress_all(".sass div", 100, 17);
        progress_all(".vuejs div", 30, 20);
        $(".social").animate({        //Left Social Box Animate
            left: "0px"
        }, 2000);
    }, 4500);
});

function all_modal_full() {                           //Sadece tek modal ile 7 html>modal evezine
    function all_modal_part(path_modal, title_modal) {            //Qarisiq Gorunum evezlemek ucun Part modal function
        $("#" + path_modal).click(function () {                    //id'si $path_modal  olanlar click  edildikde
            $("#modal-title").text(title_modal);                    //modal header text change
            $(".modal-body>div").removeAttr("style");                //modal daxilindeki div'lerin style remove edirki diger aktiv olan modallar display:none;
            $("." + path_modal).attr("style", "display:block!important;");      //Click etdiyimiz modal display block ederek melumati aktiv edir
        });                                                              //daha cox deyisken istifade edilmemesi ucun path_modal adi id +class eyni olur
    }
    //For Nav Menu
    all_modal_part("work", "WORK");                                                  //ID and Header Title
    all_modal_part("aboutme", "ABOUT ME");
    all_modal_part("contact", "CONTACT");
    //For Social
    all_modal_part("social-facebook", "FACEBOOK");
    all_modal_part("social-instagram", "INSTAGRAM");
    all_modal_part("social-twitter", "TWITTER");
    all_modal_part("social-linkedin", "LINKEDIN");
}


function progress_all(prg_name, limit, td_number) {
    var s = 0;                                       //Faizi 0 edir           
    function progress_bar() {                       //Elave function cagirisi qarisiqliq yaratmasin deye father ve child function 
        $(prg_name).css("width", s + "%");             //progresin styline width gonderir
        var size = $(prg_name).attr("style").replace(/width:|;/g, "");   //width: ve % null edir
        $("td:parent").eq(td_number).text(size);     //faizi yazdirmaq ucun td nomresi qeyd edilirki faiz textin yazsin
        if (s >= limit) {                                 //Elave isleyib performans itkisi olmasin deye setIntervali clear edir.
            clearInterval(progress_int);
            $(prg_name).removeClass("progress-bar-animated");
        }
        s++;
    }
    var progress_int = setInterval(progress_bar, 10);   //ve father child function olduqundan father child cagirisi edir intervalli sekilde
}


function man() {
    var man = $(".man");
    man.delay(2400).animate({                 //man animation
        height: "10rem"
    }, 1500);
    man.delay(5000).css({                   //man animation 2
        transform: "rotate(360deg)",
        transition: "transform 5s"
    });
}


function key_all(path, text) {                     //Deyiskenler qarisiqliq yaratmamasi ucun full function
    var say = 0, txtbox = "";
    path.removeClass("d-none");
    path.text("");
    function key_write() {                      //Esas interval ile cagiris ederek typing effecti yaradan function
        txtbox += text[say++];                     //textbox 
        var txt = path.text(txtbox);              // header h1-text gonderimi
        if (say >= text.length) {                    //invertval object(array) daxilinde herf biterse dayansin
            clearInterval(interval);
        }
        return txt;
    }
    var interval = setInterval(key_write, 200);  //Cagirisi eden esas interval
}