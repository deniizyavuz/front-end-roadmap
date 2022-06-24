// this is the object that is executing the current function

// if function part of an object it is a method, method- this references object itself
//function is regular, function- this references global (window, global)

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.stop();

//that is anexample for method-obj

function playVideo() {
  console.log(this);
}

playVideo();

//it gives on the console window object

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("b"); //it doesnt gives on the console window object it gives an another empty object  when we consturct to function
