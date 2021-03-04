'use strict'

document.addEventListener("DOMContentLoaded", function() {

    const DomElement = function(selector, height, width, bg, fontSize, text) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.text = text;
    };
    
    DomElement.prototype.add = function() {
        let elem;
        if (this.selector.includes('.')) {
            elem = document.createElement('div');
            elem.classList.add(this.selector.slice(1));
            elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: #${this.bg}; font-size: ${this.fontSize}px;`;
            elem.innerHTML = this.text;
            document.body.append(elem);
        } 
        if (this.selector.includes('#')) {
            elem = document.createElement('div');
            elem.id = this.selector.slice(1);
            elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: #${this.bg}; font-size: ${this.fontSize}px;`;
            elem.innerHTML = this.text;
            document.body.append(elem);
        }
    };

    DomElement.prototype.move = function() {
        let elem = document.querySelector('div');
        elem.style.cssText += `position: absolute;`;
    };
    
    let classBlock = new DomElement('.element', '100', '100', '808080', '20', 'По классу');
    // let classBlock2 = new DomElement('#element', '100', '100', '808080', '20', 'По id');
    
    document.addEventListener('keydown', function(event) {
        let elem = document.querySelector('div'),
            up = elem.offsetTop,
            left = elem.offsetLeft;

        if (event.key === 'ArrowUp') {
            elem.style.top = up - 10 + 'px';
        } else if (event.key === 'ArrowLeft') {
            elem.style.left = left - 10 + 'px';
        } else if (event.key === 'ArrowRight') {
            elem.style.left = left + 10 + 'px';
        } else if (event.key === 'ArrowDown') {
            elem.style.top = up + 10 + 'px';
        }
    });

    classBlock.add();
    // classBlock2.add();
    classBlock.move();

});

