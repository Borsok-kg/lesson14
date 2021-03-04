'use strict'

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

let classBlock = new DomElement('.element', '100', '100', '808080', '20', 'По классу');
let classBlock2 = new DomElement('#element', '100', '100', '808080', '20', 'По id');

classBlock.add();
classBlock2.add();