<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <title>Eldaniz Guluzade</title>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Oswald', sans-serif;
        }
        
        .man {
            background-image: url("img/man.png");
            background-size: cover;
        }
        
        .lead {
            display: none;
        }
        
        .skills {
            width: 60%;
            height: 500px;
        }
        
        table,
        td,
        tr {
            vertical-align: middle!important;
        }
        
        table td:first-child {
            width: 15%;
            font-size: 1.3rem;
            text-align: center;
        }
        
        table td:last-child {
            width: 5%;
            font-size: 1.3rem;
            text-align: center;
        }
        
        .progress {
            height: 40px;
        }
        
        .progress span {
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-color: currentColor;
            border: 5px solid currentColor;
            margin-right: 1%;
            border-radius: 52%;
            padding: 15px;
        }
        
        .html5 span {
            background-image: url("img/svg-icon/html5.svg");
        }
        
        .css3 span {
            background-image: url("img/svg-icon/css3.svg");
        }
        
        .javascript span {
            background-image: url("img/svg-icon/js.svg");
        }
        
        .jquery span {
            background-image: url("img/svg-icon/jquery.svg");
        }
        
        .bootstrap span {
            background-image: url("img/svg-icon/bootstrap.svg");
        }
        
        .social {
            left: -50px;
        }
        
        .social .btn {
            background-size: 100% 100%;
            width: 50px;
            height: 50px;
            transition: 1s;
        }
        
        .social .btn:focus {
            outline: none!important;
            box-shadow: none;
        }
        
        .social .btn:hover,
        .social .btn:active {
            transform: rotate(360deg);
            transition: 1s;
        }
        
        .social .facebook {
            background-image: url("img/social/facebook.png");
        }
        
        .social .instagram {
            background-image: url("img/social/instagram.png");
        }
        
        .social .twitter {
            background-image: url("img/social/twitter.png");
        }
        
        .social .linkedin {
            background-image: url("img/social/linkedin.png");
        }
    </style>
</head>

<body>
    <div class="container-fluid">
        <header class="row">
            <div class="jumbotron jumbotron-fluid w-100 my-0">
                <div class="social btn-group-vertical position-absolute">
                    <button class="btn facebook" data-toggle="modal" data-target=".social_modal"></button>
                    <button class="btn instagram" data-toggle="modal" data-target=".social_modal"></button>
                    <button class="btn twitter" data-toggle="modal" data-target=".social_modal"></button>
                    <button class="btn linkedin" data-toggle="modal" data-target=".social_modal"></button>
                </div>
                <div class="container text-center">
                    <div class="man mx-auto w-25 rounded-circle"></div>
                    <h1 class="d-none">I AM ELDANIZ</h1>
                    <p class="lead">Front-End Developer</p>
                    <hr class="my-2">
                    <div class="btn-group m-2">
                        <button class="btn btn-dark btn-lg" data-toggle="modal" data-target=".nav_modal">WORK</button>
                        <button class="btn btn-dark btn-lg" data-toggle="modal" data-target=".nav_modal">ABOUT ME</button>
                        <button class="btn btn-dark btn-lg" data-toggle="modal" data-target=".nav_modal">CONTACT</button>
                    </div>
                </div>
            </div>
        </header>
        <main class="row">
            <div class="skills mx-auto col-12 col-md-7 mt-4">
                <table class="table border w-100 ">
                    <thead class="text-center">
                        <tr>
                            <th colspan="3">
                                <h3 class="text-center">My Programmer Skills</h3>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HTML5</td>
                            <td>
                                <div class="progress html5">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"><span class="ml-auto"></span></div>
                                </div>
                            </td>
                            <td><span>0</span></td>
                        </tr>
                        <tr>
                            <td>CSS3</td>
                            <td>
                                <div class="progress css3">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"><span class="ml-auto"></span></div>
                                </div>
                            </td>
                            <td><span>0</span></td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>
                                <div class="progress javascript">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"><span class="ml-auto"></span></div>
                                </div>
                            </td>
                            <td><span>0</span></td>
                        </tr>
                        <tr>
                            <td>JQuery</td>
                            <td>
                                <div class="progress jquery">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"><span class="ml-auto"></span></div>
                                </div>
                            </td>
                            <td><span>0</span></td>
                        </tr>
                        <tr>
                            <td>Bootstrap</td>
                            <td>
                                <div class="progress bootstrap">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"><span class="ml-auto"></span></div>
                                </div>
                            </td>
                            <td><span>0</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>

    <div class="modal fade social_modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>X</span></button>
                </div>
                <div class="modal-body">
                    TEST-EMBED
                    <!--   <iframe class="mx-auto d-block" width="320" height="440" src="http://instagram.com/p/qbq6fIJMVZ/embed" frameborder="0"></iframe>-->
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade nav_modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>X</span></button>
                </div>
                <div class="modal-body">
                    TEST-EMBED
                    <!--   <iframe class="mx-auto d-block" width="320" height="440" src="http://instagram.com/p/qbq6fIJMVZ/embed" frameborder="0"></iframe>-->
                </div>
            </div>
        </div>
    </div>


    <script>
        $(function() {
            man();
            key_all($("header h1").eq(0), $("header h1").text()); //typing text
            $("header p").delay(3900).slideDown(1000); // Header P effect

            setTimeout(() => {
                progress_all(".html5 div", 100, 2);
                progress_all(".css3 div", 100, 5);
                progress_all(".javascript div", 50, 8);
                progress_all(".jquery div", 80, 11);
                progress_all(".bootstrap div", 100, 14);
                $(".social").animate({
                    left: "0px"
                }, 2000);
            }, 4500);

        });


        function progress_all(prg_name, limit, td_number) {
            var s = 0; //Faizi 0 edir           

            function progress_bar() { //Elave function cagirisi qarisiqliq yaratmasin deye father ve child function 
                $(prg_name).css("width", s + "%"); //progresin styline width gonderir
                var size = $(prg_name).attr("style").replace(/width:|;/g, ""); //width: ve % null edir
                $("td:parent").eq(td_number).text(size); //faizi yazdirmaq ucun td nomresi qeyd edilirki faiz textin yazsin
                if (s >= limit) { //Elave isleyib performans itkisi olmasin deye setIntervali clear edir.
                    clearInterval(progress_int);
                    $(prg_name).removeClass("progress-bar-animated");
                }
                s++;
            }
            var progress_int = setInterval(progress_bar, 80); //ve father child function olduqundan father child cagirisi edir intervalli sekilde
        }


        function man() {
            var man = $(".man");
            man.delay(2400).animate({ //man animation
                height: "10rem"
            }, 1500);
            man.delay(5000).css({ //man animation 2
                transform: "rotate(360deg)",
                transition: "transform 5s"
            });
        }

        function key_all(path, text) { //Deyiskenler qarisiqliq yaratmamasi ucun full function
            var say = 0,
                txtbox = "";
            path.removeClass("d-none");
            path.text("");

            function key_write() { //Esas interval ile cagiris ederek typing effecti yaradan function
                txtbox += text[say++]; //textbox 
                var txt = path.text(txtbox); // header h1-text gonderimi
                if (say >= text.length) { //invertval object(array) daxilinde herf biterse dayansin
                    clearInterval(interval);
                }
                return txt;
            }
            var interval = setInterval(key_write, 200); //Cagirisi eden esas interval
        }
    </script>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

</body>

</html>
