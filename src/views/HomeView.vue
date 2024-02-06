<template>
  <div>

    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="row">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">کوپا کافه</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav main-nav  clear navbar-right ">
              <li><a class="color_animation" href="#contact">تماس با ما</a></li>
              <li><a class="color_animation" href="#reservation">وزرو</a></li>
              <li><a class="color_animation" href="#featured">ویژه</a></li>
              <li><a class="color_animation" href="#bread">نان</a></li>
              <li><a class="color_animation" href="#beer">نوشیدنی</a></li>
              <li><a class="color_animation" href="#pricing">قیمتها</a></li>
              <li><a class="color_animation" href="#story">درباره ما</a></li>
              <li><a class="navactive color_animation" href="#top">خانه</a></li>

            </ul>
          </div><!-- /.navbar-collapse -->
        </div>
      </div><!-- /.container-fluid -->
    </nav>

    <div id="top" class="starter_container bg">
      <div class="follow_container">
        <div class="col-md-6 col-md-offset-3">
          <h2 class="top-title"> کوپا کافه</h2>
          <h2 class="white second-title">" بهترین در شهر "</h2>
          <hr>
        </div>
      </div>
    </div>

    <!-- ============ About Us ============= -->

    <section id="story" class="description_content">
      <div class="text-content container">
        <div class="col-md-6">
          <h1>درباره ما</h1>
          <div class="fa fa-cutlery fa-2x"></div>
          <p class="desc-text">رستوران مکانی برای سادگی است. غذای خوب، آبجو خوب و خدمات خوب. نام بازی است و ما به
            خوبی می‌توانیم آن را در همه مکان‌های مناسب پیدا کنیم، حتی در تجربه غذاخوری شما. ما یک گروه کوچک از دنور،
            کلرادو هستیم که غذای ساده را ممکن می‌کنیم. به ما بپیوندید و ببینید سادگی چه طعمی دارد.</p>
        </div>
        <div class="col-md-6">
          <div class="img-section">
            <img src="images/kabob.jpg" width="250" height="220">
            <img src="images/limes.jpg" width="250" height="220">
            <div class="img-section-space"></div>
            <img src="images/radish.jpg" width="250" height="220">
            <img src="images/corn.jpg" width="250" height="220">
          </div>
        </div>
      </div>
    </section>


    <!-- ============ Pricing  ============= -->


    <section id="pricing" class="description_content">
      <div class="pricing background_content">
        <h1><span>قیمتهای</span> مناسب</h1>
      </div>
      <div class="text-content container">
        <div class="container">
          <div class="row">
            <div id="w">
              <ul id="filter-list" class="clearfix" dir="rtl">
                <li class="filter" data-filter="all">همه</li>
                <li class="filter" data-filter="breakfast">صبحانه</li>
                <li class="filter" data-filter="special">ویژه</li>
                <li class="filter" data-filter="desert">دسر</li>
                <li class="filter" data-filter="dinner">شام</li>
              </ul><!-- @end #filter-list -->
              <ul id="portfolio">
                <li class="item breakfast"><img src="images/food_icon01.jpg" alt="Food">
                  <h2 class="white">20 ت </h2>
                </li>

                <li class="item dinner special"><img src="images/food_icon02.jpg" alt="Food">
                  <h2 class="white">20 ت </h2>
                </li>
                <li class="item dinner breakfast"><img src="images/food_icon03.jpg" alt="Food">
                  <h2 class="white">18 ت </h2>
                </li>
                <li class="item special"><img src="images/food_icon04.jpg" alt="Food">
                  <h2 class="white">15 ت </h2>
                </li>
                <li class="item dinner"><img src="images/food_icon05.jpg" alt="Food">
                  <h2 class="white">20 ت </h2>
                </li>
                <li class="item special"><img src="images/food_icon06.jpg" alt="Food">
                  <h2 class="white">22 ت </h2>
                </li>
                <li class="item desert"><img src="images/food_icon07.jpg" alt="Food">
                  <h2 class="white">32 ت </h2>
                </li>
                <li class="item desert breakfast"><img src="images/food_icon08.jpg" alt="Food">
                  <h2 class="white">38 ت </h2>
                </li>
              </ul><!-- @end #portfolio -->
            </div><!-- @end #w -->
          </div>
        </div>
      </div>
    </section>


    <!-- ============ Our Beer  ============= -->


    <section id="beer" class="description_content">
      <div class="beer background_content">
        <h1>مکان <span>عالی </span> برای شادی </h1>
      </div>
      <div class="text-content container">
        <div class="col-md-5">
          <div class="img-section">
            <img src="images/beer_spec.jpg" width="100%">
          </div>
        </div>
        <br>
        <div class="col-md-6 col-md-offset-1">
          <h1>نوشیدنی های دست ساز</h1>
          <div class="icon-beer fa-2x"></div>
          <p class="desc-text">اینجا در کوپا کافه  همه ما در مورد عشق نوشیدنی هستیم. طعم های جدید و جسورانه وارد درهای ما می شود
            هر هفته، و ما نمی توانیم آنها را نشان دهیم. در حالی که ما از کلاسیک لذت می بریم، همیشه به آن علاقه داریم
            در حال کشف چیز جدیدی هستید، پس بایستید و هنر ما را در بهترین حالت خود تجربه کنید.</p>
        </div>
      </div>
    </section>


    <!-- ============ Our Bread  ============= -->


    <section id="bread" class=" description_content">
      <div class="bread background_content">
        <h1>منوی <span>صبحانه </span></h1>
      </div>
      <div class="text-content container">
        <div class="col-md-6">
          <h1>نان تازه</h1>
          <div class="icon-bread fa-2x"></div>
          <p class="desc-text">ما عاشق بوی نان تازه پخته شده هستیم. هر نان در هنگام سحر با استفاده از دست ساخته می شود
            فقط ساده ترین مواد برای به نمایش گذاشتن بوها و طعم هایی که به کل بلوک می افزایند. توقف کن
            در هر زمان و سادگی را در بهترین حالت خود تجربه کنید.</p>
        </div>
        <div class="col-md-6">
          <img src="images/bread1.jpg" width="260" alt="Bread">
          <img src="images/bread1.jpg" width="260" alt="Bread">
        </div>
      </div>
    </section>


    <!-- ============ Featured Dish  ============= -->

    <section id="featured" class="description_content">
      <div class="featured background_content">
        <h1>منوی  <span>غذای ویژه </span></h1>
      </div>
      <div class="text-content container">
        <div class="col-md-6">
          <h1>نگاهی به این غذا ها بیندازید!</h1>
          <div class="icon-hotdog fa-2x"></div>
          <p class="desc-text">هر غذا در سحر و تنها با استفاده از ساده ترین مواد اولیه، دست ساز است
            بوها و طعم‌هایی را که کل بلوک را به صدا در می‌آورد بیرون بیاورید. در هر زمان توقف کنید و سادگی را در آن تجربه کنید
            بهترین</p>
        </div>
        <div class="col-md-6">
          <ul class="image_box_story2">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>

              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                <div class="item active">
                  <img src="images/slider1.jpg" alt="...">
                  <div class="carousel-caption">

                  </div>
                </div>
                <div class="item">
                  <img src="images/slider2.jpg" alt="...">
                  <div class="carousel-caption">

                  </div>
                </div>
                <div class="item">
                  <img src="images/slider3.JPG" alt="...">
                  <div class="carousel-caption">

                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>

    <!-- ============ Reservation  ============= -->

    <section id="reservation" class="description_content">
      <div class="featured background_content">
        <h1>یک میز رزرو کنید!</h1>
      </div>
      <div class="text-content container">
        <div class="inner contact">
          <!-- Form Area -->
          <div class="contact-form">
            <!-- Form -->
            <form id="contact-us" method="post" action="reserve.php">
              <!-- Left Inputs -->
              <div class="container">
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-xs-12">
                    <!-- Message -->
                    <div class="right-text">
                      <h2>Hours</h2>
                      <hr>
                      <p>شنبه تا چهارشنبه : 7:30  - 11:30 </p>
                      <p>پنجشنبه و جمعه : 8:00  - 9:00 </p>
                      <p>شنبه تا چهارشنبه : 12:00  - 5:00 </p>
                      <p>پنجشنبه : 6:00  - 1:00 </p>
                      <p>جمعه : 5:30  - 12:00 </p>
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-6 col-xs-12" style="padding-top: 60px">
                    <div class="row">

                      <div class="col-lg-6 col-md-6 col-xs-6">
                        <!-- Name -->
                        <input type="text" name="last_name" id="last_name" required="required" class="form"
                                              placeholder="نام خانوادگی"/>
                        <input type="text" name="datepicker" id="datepicker" required="required" class="form"
                               placeholder="تاریخ"/>
                        <input type="text" name="state" id="state" required="required" class="form"
                               placeholder="ساعت"/>

                      </div>
                      <div class="col-lg-6 col-md-6 col-xs-6">
                        <!-- Name -->
                        <input type="text" name="first_name" id="first_name" required="required" class="form"
                               placeholder="نام"/>
                        <input type="text" name="phone" id="phone" required="required" class="form"
                               placeholder="موبایل"/>
                        <input type="text" name="subject" id="subject" required="required" class="form"
                               placeholder="موضوع"/>

                      </div>

                      <div class="col-xs-6 ">
                        <!-- Send Button -->
                        <button type="submit" id="submit" name="submit" class="text-center form-btn form-btn">رزرو کنید
                        </button>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
              <!-- Clear -->
              <div class="clear"></div>
            </form>
          </div><!-- End Contact Form Area -->
        </div><!-- End Inner -->
      </div>
    </section>

    <!-- ============ Social Section  ============= -->

    <section class="social_connect">
      <div class="text-content container">
        <div class="col-md-6">
          <span class="social_heading">دنبال کنید</span>
          <ul class="social_icons">
            <li><a class="icon-twitter color_animation" href="#" target="_blank"></a></li>
            <li><a class="icon-github color_animation" href="#" target="_blank"></a></li>
            <li><a class="icon-linkedin color_animation" href="#" target="_blank"></a></li>
            <li><a class="icon-mail color_animation" href="#"></a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <span class="social_heading">یا تماس بگیرید</span>
          <span class="social_info"><a class="color_animation" href="tel:883-335-6524">(941) 883-335-6524</a></span>
        </div>
      </div>
    </section>

    <!-- ============ Contact Section  ============= -->

    <section id="contact">
      <div class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.664063989472!2d91.8316103150038!3d24.909437984030877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505558dd0be6a1%3A0x65c7e47c94b6dc45!2sTechnext!5e0!3m2!1sen!2sbd!4v1444461079802"
            width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="inner contact">
              <!-- Form Area -->
              <div class="contact-form">
                <!-- Form -->
                <form id="contact-us" method="post" >
                  <!-- Left Inputs -->
                  <div class="col-md-6 ">
                    <!-- Name -->
                    <input type="text" name="name" id="name" required="required" class="form" placeholder="نام"/>
                    <!-- Email -->
                    <input type="email" name="email" id="email" required="required" class="form" placeholder="ایمیل"/>
                    <!-- Subject -->
                    <input type="text" name="subject" id="subject" required="required" class="form"
                           placeholder="موضوع"/>
                  </div><!-- End Left Inputs -->
                  <!-- Right Inputs -->
                  <div class="col-md-6">
                    <!-- Message -->
                    <textarea name="message" id="message" class="form textarea" placeholder="پیام"></textarea>
                  </div><!-- End Right Inputs -->
                  <!-- Bottom Submit -->
                  <div class="relative fullwidth col-xs-12">
                    <!-- Send Button -->
                    <button type="submit" id="submit" name="submit" class="form-btn">ارسال پیام</button>
                  </div><!-- End Bottom Submit -->
                  <!-- Clear -->
                  <div class="clear"></div>
                </form>
              </div><!-- End Contact Form Area -->
            </div><!-- End Inner -->
          </div>
        </div>
      </div>
    </section>

    <!-- ============ Footer Section  ============= -->

    <footer class="sub_footer">
      <div class="container">
        <div class="col-md-4"><p class="sub-footer-text text-center">&copy; Restaurant 2014, Theme by <a
            href="https://themewagon.com/">ThemeWagon</a></p></div>
        <div class="col-md-4"><p class="sub-footer-text text-center">Back to <a href="#top">TOP</a></p>
        </div>
        <div class="col-md-4"><p class="sub-footer-text text-center">Built With Care By <a href="#"
                                                                                           target="_blank">Us</a></p>
        </div>
      </div>
    </footer>


  </div>


</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {}
}
</script>
