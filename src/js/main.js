function helloConsole() {
    const staticText = 'Made with ❤️ by Demiweb';
    const staticUrl = '> https://demiweb.pro/';
    const hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let title = '%c';

        for (let i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        const title = 'demiweb';
        const banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        const styler = [];

        const symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}

helloConsole();

new Swiper('.swiper-hero', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    direction: 'horizontal',
    loop: true,
    thumbs: {
        swiper: {
            el: '.swiper-hero-thumb',
            slidesPerView: 3,
        }
    }
})

new Swiper('.swiper-gallery', {
    speed: 1000,
    direction: 'horizontal',

    centeredSlides: true,
    autoplay: {
        delay: 4000,
    },

    slideToClickedSlide: true,
    loop: false,

    navigation: {
        prevEl: '.swiper-gallery .swiper-button-prev',
        nextEl: '.swiper-gallery .swiper-button-next',
    },

    pagination: {
        el: '.swiper-gallery .swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return `  
                <div class="${className}">
                    <svg width="58" height="58">
                        <circle class="circle-bg" cx="29" cy="29"  r="28" stroke-width="1" fill="none" stroke="#4B4D52"/>
                        <circle class="circle-time" cx="29" cy="29"  r="28" stroke-width="1" fill="none" stroke="#fff"/>
                    </svg>
                    <span>
                        0${(index + 1)}
                    </span>
                </div>`
        },
    },
    on: {
        init: function () {
            const paginationActive = document.querySelector('.swiper-pagination-bullet-active');
            if (paginationActive) {
                paginationActive.classList.add('time-start');
            }
        },
        transitionStart: function () {
            const paginationActive = document.querySelector('.swiper-pagination-bullet-active');
            if (paginationActive) {
                paginationActive.classList.add('time-start');
            }
        },
        setTranslate: function () {
            const paginationActive = document.querySelector('.swiper-pagination-bullet-active');
            if (paginationActive) {
                paginationActive.classList.remove('time-start');
            }
        },
        // slideChange: function (swiper) {
        //     swiper.autoplay.start()
        // }

    },

    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 2,
        }
    }
})

new Swiper('.product-swiper', {
    speed: 1000,
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    thumbs: {
        swiper: {
            el: '.product-swiper-thumb',
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 10,
        }
    }
})

new Swiper('.recommendations-swiper', {
    speed: 1000,
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    watchOverflow: false,
    spaceBetween: 30,

    breakpoints: {
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
})


// Фикс header при скролле
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    if (window.pageYOffset >= 1) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
})


// Price фильтр
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 99999],
        step: 1,
        range: {
            min: [0],
            max: [99999],
        },
    })
    rangeSlider.noUiSlider.on('update', function (values) {
        let min = document.querySelector('.price-values .min-price span');
        let minInput = document.querySelector('.price-values .min-price input');
        let max = document.querySelector('.price-values .max-price span');
        let maxInput = document.querySelector('.price-values .max-price input');

        const resetBtn = document.getElementById('reset-form')

        minInput.value = Math.round(values[0])
        maxInput.value = Math.round(values[1])

        min.innerHTML = minInput.value
        max.innerHTML = maxInput.value
    })
}


// Обработка dropdown при клике
const dropdown = document.querySelectorAll('.dropdown-menu')

if (!dropdown.length) {

} else if (dropdown.length) {
    dropdown.forEach(menu => {
        const title = menu.querySelector('.dropdown-head')
        const content = menu.querySelector('.dropdown-content')

        window.addEventListener('click', function (e) {
            if (e.target.closest('.dropdown-head') || e.target.closest('.dropdown-content')) {
            } else {
                title.classList.remove('active');
                content.classList.remove('active');
            }
        })


        title.addEventListener('click', function () {
            this.classList.toggle('active')

            // dropdown.forEach(elem => elem.querySelector(content).classList.remove('active'))

            if (this.classList.contains('active')) {
                content.classList.add('active')
            } else {
                content.classList.remove('active')
            }
        })
    })
}


// Обработка dropdown при наведении
const dropdownHover = document.querySelectorAll('.dropdown-menu-hover')

if (!dropdownHover.length) {

} else if (dropdownHover.length && window.innerWidth > 991) {
    dropdownHover.forEach(menu => {
        const title = menu.querySelector('.dropdown-head-hover')
        const content = menu.querySelector('.dropdown-content-hover')


        title.addEventListener('mouseover', function () {
            this.classList.add('active');
            content.classList.add('active');
        })
        title.addEventListener('mouseleave', function (event) {
            this.classList.remove('active');
            content.classList.remove('active');
        })
        content.addEventListener('mouseover', function () {
            this.classList.add('active')
        });

        content.addEventListener('mouseleave', function () {
            this.classList.remove('active')
        });
    })
}


// Обработка accordion при ширине окна < 991px
const accordionMob = document.querySelectorAll('.accordion-menu-mob')

if (!accordionMob.length) {

} else if (accordionMob.length && window.innerWidth < 991) {
    accordionMob.forEach(menu => {
        const title = menu.querySelector('.accordion-head-mob')
        const content = menu.querySelector('.accordion-content-mob')

        title.addEventListener('click', function (elem) {
            elem.stopPropagation();

            if (title.classList.contains('active')) {
                title.classList.remove('active')
                content.style.maxHeight = null
            } else {
                title.classList.add('active')
                content.style.maxHeight = content.scrollHeight + 'px'
            }
        })
    })
}


// Обработка accordion при ширине окна > 991px
const accordionDesc = document.querySelectorAll('.accordion-menu')

if (!accordionDesc.length) {

} else {
    accordionDesc.forEach(menu => {
        const title = menu.querySelector('.accordion-head')
        const content = menu.querySelector('.accordion-content')

        title.addEventListener('click', function (elem) {
            elem.stopPropagation();

            if (title.classList.contains('active')) {
                title.classList.remove('active')
                content.style.maxHeight = null
            } else {
                title.classList.add('active')
                content.style.maxHeight = content.scrollHeight + 'px'
            }
        })
    })
}


// Навешивание обработчика событий кнопкам для всплытия popup окон
const showPopupBtn = document.querySelectorAll('.show-popup')

if (!showPopupBtn.length) {

} else {
    showPopupBtn.forEach(btn => {
        btn.addEventListener('click', function (elem) {
            elem.preventDefault()

            const id = this.getAttribute('href').replace('#', '')

            showPopup(id)
        })
    })
}


// Обработка всплытия popup окна
const popup = document.querySelectorAll('.popup');

if (!popup.length) {

} else {
    popup.forEach(elem => {
        const popupClose = elem.querySelector('.popup-close');
        const popupContent = elem.querySelector('.popup-content');
        const successBtn = elem.querySelector('input[type="submit"]');
        const popupForgot = elem.querySelector('.popup-forgot');

        popupClose.addEventListener('click', function (close) {
            close.preventDefault();

            const id = this.closest('.popup')

            id.classList.remove('show');

            document.querySelector('body').classList.remove('no-scroll')
        })

        popupContent.addEventListener('click', function (content) {
            content.stopPropagation();
        })


        if (successBtn) {
            successBtn.addEventListener('click', function (btn) {
                btn.preventDefault();

                const currentPopup = successBtn.closest('.popup');
                const successPopup = document.getElementById('popup-consultation-success');
                const popupMessage = successBtn.dataset.message;

                if (currentPopup.classList.contains('popup-login')) {
                    currentPopup.classList.remove('show');

                    successPopup.classList.add('show');
                    successPopup.querySelector('.popup-message').innerText = popupMessage;
                } else if (currentPopup.classList.contains('popup-login-forgot')) {
                    currentPopup.classList.remove('show');

                    document.getElementById('popup-login').classList.add('show')
                } else {
                    currentPopup.classList.remove('show');

                    successPopup.classList.add('show');
                    successPopup.querySelector('.popup-message').innerText = popupMessage;
                }
            })
        }

        if (popupForgot) {
            popupForgot.addEventListener('click', function (forgot) {
                forgot.preventDefault();

                popup.forEach(popup => {
                    popup.classList.remove('show')
                })

                const id = this.getAttribute('href').replace('#', '');

                showPopup(id)
            })
        }

        elem.addEventListener('click', function () {
            this.classList.remove('show')
            document.querySelector('body').classList.remove('no-scroll')
        })
    })
}


// Функция всплытия popup окна
function showPopup(id) {
    const popup = document.getElementById(id);
    popup.classList.add('show');
    document.querySelector('body').classList.add('no-scroll');
}


// Обработка кнопки burger
const burgerBtn = document.querySelector('.header-burger');

if (!burgerBtn) {

} else {
    const burgerMenu = document.querySelector('.header-burger-menu');
    const burgerClose = document.querySelector('.burger-menu-close');

    burgerBtn.addEventListener('click', function (btn) {
        burgerMenu.classList.add('open')
        document.querySelector('body').classList.add('no-scroll');
    })

    burgerClose.addEventListener('click', function (close) {
        close.preventDefault();
        burgerMenu.classList.remove('open');
        document.querySelector('body').classList.remove('no-scroll');
    })
}


// Обработка кнопок вызова панели навигации при ширине окна < 991px
const navBtn = document.querySelectorAll('.catalog-menu');

if (!navBtn.length) {

} else {
    const burgerMenu = document.querySelector('.header-burger-menu');
    const headerNav = document.querySelector('.header-nav');
    const headerClose = document.querySelector('.nav-close');

    navBtn.forEach(btn => {
        btn.addEventListener('click', function (button) {
            button.preventDefault();
            document.querySelector('body').classList.add('no-scroll');

            burgerMenu.classList.remove('open');
            headerNav.classList.add('open');
        })

        headerClose.addEventListener('click', function (close) {
            headerNav.classList.remove('open');
            document.querySelector('body').classList.remove('no-scroll');
        });
    })
}


const filterTitle = document.querySelectorAll('.ocf-slider-input-group');

if (!filterTitle.length) {

} else {
    if (window.innerWidth < 991) {
        filterTitle.forEach(row => {
            filterRename(row)
        })
    }
}

function filterRename(el) {
    const names = el.querySelectorAll('.ocf-input-group-addon')

    names.forEach((name, idx) => {
        if (idx) {
            name.innerHTML = 'До'
        } else {
            name.innerHTML = 'От'
        }
    })
}

const addToCartBtn = document.querySelectorAll('.add-to-cart')

if (!addToCartBtn.length) {

} else {
    if (window.innerWidth > 767) {
        addToCartBtn.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                this.innerHTML = 'Добавлено';
                this.classList.add('added');

                setTimeout(() => {
                    this.innerHTML = 'В корзину';
                    this.classList.remove('added');
                }, 3000)
            })
        })
    }
}