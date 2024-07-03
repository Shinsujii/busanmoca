        // 슬라이드1
        $(function () {
            var swiper = new Swiper('.flowslide_inner ', {
                slidesPerView: 2,//보여지는 갤러리 수
                spaceBetween: 60,//갤러리 사이 간격
                speed: 9000,//버튼을 슬라이드가 넘어가는 시간
                autoplay: {
                    delay: 0,//자동으로 넘어가기 전 머무르는 시간
                    disableOnInteraction: false,
                },
                loop: true,//슬라이드 무한반복
                breakpoints: {
                    // PC 사이즈 설정
                    1200: {
                        slidesPerView: 4, // PC에서 보여지는 갤러리 수
                        spaceBetween: 60, // 갤러리 사이 간격
                    }
                }
            });

            $('.flowslide .swiper-slide').on('mouseover', function () {
                swiper.autoplay.stop();
            });
            $('.flowslide .swiper-slide').on('mouseout', function () {
                swiper.autoplay.start();
            });
        });
        // 슬라이드2
        $(function () {
            var swiper = new Swiper('.flowslide_inner1 ', {
                slidesPerView: 2,//보여지는 갤러리 수
                spaceBetween: 60,//갤러리 사이 간격
                speed: 9000,//버튼을 슬라이드가 넘어가는 시간
                autoplay: {
                    delay: 0,//자동으로 넘어가기 전 머무르는 시간
                    disableOnInteraction: false,
                },
                loop: true,//슬라이드 무한반복
                breakpoints: {
                    // PC 사이즈 설정
                    1200: {
                        slidesPerView: 4, // PC에서 보여지는 갤러리 수
                        spaceBetween: 60, // 갤러리 사이 간격
                    }
                }
            });


            $('.flowslide .swiper-slide').on('mouseover', function () {
                swiper.autoplay.stop();
            });
            $('.flowslide .swiper-slide').on('mouseout', function () {
                swiper.autoplay.start();
            });
        });
        // tab
        $(function () {
            $('.tabcontent > div').hide();
            $('.tabnav a').click(function () {
                $('.tabcontent > div').hide().filter(this.hash).fadeIn();
                $('.tabnav a').removeClass('active');
                $(this).addClass('active');
                return false;
            }).filter(':eq(0)').click();
        });
        // AOS스크롤
        AOS.init({
            duration: 1200 //aos 나타나는 속도
        });

        // 메뉴
        document.addEventListener('DOMContentLoaded', function () {
            const h4Elements = document.querySelectorAll('.menu ul li a h4');

            h4Elements.forEach(h4 => {
                h4.addEventListener('mouseover', function () {
                    h4Elements.forEach(otherH4 => {
                        if (otherH4 !== h4) {
                            otherH4.classList.add('dimmed');
                        }
                    });
                });

                h4.addEventListener('mouseout', function () {
                    h4Elements.forEach(otherH4 => {
                        otherH4.classList.remove('dimmed');
                    });
                });
            });
        });