class Slider {

    constructor() {
        this._slider = document.querySelector('.screenshots');
        this._image = this._slider.querySelector('img');
        this._i = 0;
    }

    addListeners() {
        this._slider.addEventListener('click', this._switch.bind(this));
    }

    _switch(event) {
        if (event.target.classList.contains('button-left')) {
            this._i = (this._i - 1 < 0) ? 3 : this._i - 1;
            this._image.src = `images/screenshot-0${(this._i)}.png`;
        }

        if (event.target.classList.contains('button-right')) {
            this._i = (this._i + 1 > 3) ? 0 : this._i + 1;
            this._image.src = `images/screenshot-0${(this._i)}.png`;
        }
    }
}

new Slider().addListeners();