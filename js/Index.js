import Main from "./Main.js";

export default class Index {
    constructor() {
        this.main = new Main();
        this.update();
    }

    update() {
        this.main.update();
        requestAnimationFrame(()=>{this.update();});
    }
}
new Index();