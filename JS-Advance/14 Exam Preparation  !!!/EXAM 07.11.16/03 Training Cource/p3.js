class TrainingCourse {

    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date) {
        this.topics.push({title:title, date:date});
        this.topics.sort((a,b) => a.date - b.date); // sort dates asccending
        return this;
    }

    get firstTopic() { //           •	Accessor property firstTopic – returns the earliest
        return this.topics[0];
    }

    get lastTopic() {  // •	Accessor property lastTopic – returns the latest (by date) topic from the course
        return this.topics[this.topics.length - 1];
    }

    // toString() {  // mustafov
    //     let topicsStr = this.topics.map(m =>
    //     ' * ' + m.title + ' - ' + m.date)
    //         .join("\n");
    //     return 'Course "' + this.title + '" by ' +
    //         this.trainer + '\n' + topicsStr;
    // }

    toString() {
       let result = `Cource "${this.title}" by ${this.trainer}`;
        for(let topic of this.topics) {
            result += `\n * ${topic.title} - ${topic.date}`;
        }

        if(this.topics.length === 0){
            result += "\n";
        }

        return result
    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
console.log("" + php);







