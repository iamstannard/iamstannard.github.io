(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/assets_0000_lockupsomething.png", id:"assets_0000_lockupsomething"},
		{src:"images/assets_0001_lockuphauntingyou.png", id:"assets_0001_lockuphauntingyou"},
		{src:"images/assets_0002_dosomething.png", id:"assets_0002_dosomething"},
		{src:"images/assets_0003_icons.png", id:"assets_0003_icons"},
		{src:"images/assets_0004_textfindouthow.png", id:"assets_0004_textfindouthow"},
		{src:"images/assets_0005_textlikeazombie.png", id:"assets_0005_textlikeazombie"},
		{src:"images/assets_0006_textexamstress.png", id:"assets_0006_textexamstress"},
		{src:"images/assets_0007_blood.png", id:"assets_0007_blood"},
		{src:"images/assets_0008_zombie.png", id:"assets_0008_zombie"},
		{src:"images/assets_0009_bg2.jpg", id:"assets_0009_bg2"},
		{src:"images/assets_0010_bg1.jpg", id:"assets_0010_bg1"}
	]
};



// symbols:



(lib.assets_0000_lockupsomething = function() {
	this.initialize(img.assets_0000_lockupsomething);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,91);


(lib.assets_0001_lockuphauntingyou = function() {
	this.initialize(img.assets_0001_lockuphauntingyou);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,110);


(lib.assets_0002_dosomething = function() {
	this.initialize(img.assets_0002_dosomething);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,38);


(lib.assets_0003_icons = function() {
	this.initialize(img.assets_0003_icons);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,50);


(lib.assets_0004_textfindouthow = function() {
	this.initialize(img.assets_0004_textfindouthow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,63);


(lib.assets_0005_textlikeazombie = function() {
	this.initialize(img.assets_0005_textlikeazombie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,91);


(lib.assets_0006_textexamstress = function() {
	this.initialize(img.assets_0006_textexamstress);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,76);


(lib.assets_0007_blood = function() {
	this.initialize(img.assets_0007_blood);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.assets_0008_zombie = function() {
	this.initialize(img.assets_0008_zombie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.assets_0009_bg2 = function() {
	this.initialize(img.assets_0009_bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.assets_0010_bg1 = function() {
	this.initialize(img.assets_0010_bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.zombie = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0008_zombie();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.something = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0000_lockupsomething();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,91);


(lib.likeazombie = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0005_textlikeazombie();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176,91);


(lib.icons = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0003_icons();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,50);


(lib.haunting = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0001_lockuphauntingyou();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176,110);


(lib.findouthow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0004_textfindouthow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235,63);


(lib.examstress = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0006_textexamstress();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,193,76);


(lib.dosomething = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0002_dosomething();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,191,38);


(lib.btnInvisi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().dr(-85,-53,170,106);
	this.shape.setTransform(150,125,1.765,2.358);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bloodred = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A73538").s().dr(-116.5,-66.5,233,133);
	this.shape.setTransform(150,125,1.288,1.88);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.blood = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0007_blood();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0009_bg2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.assets_0010_bg1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.btnCTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dosomething();
	this.instance.setTransform(0.1,0,0.833,0.833,0,0,0,95.5,18.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().dr(-100,-20,200,40);
	this.shape.setTransform(0,0,1,1.002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:18.9,scaleX:0.833,scaleY:0.833,x:0.1}}]}).to({state:[{t:this.instance,p:{regY:19,scaleX:0.9,scaleY:0.9,x:0}}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.5,-15.8,159.1,31.7);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:1});

	// timeline functions:
	this.frame_0 = function() {
		this.btnMain.addEventListener("click", clickHandler);
		
		this.btnCTA.addEventListener("click", clickHandler);
		//this.btnCTA.addEventListener("mouseover", overHandler);
		//this.btnCTA.addEventListener("mouseout", outHandler);
		
		function clickHandler(event){
			console.log('clickHandler');
		}
		
		/*
		function overHandler(event){
			console.log('overHandler');
			this.btnCTA.gotoAndPlay('over');
		}
		
		function outHandler(event){
			console.log('outHandler');
			this.btnCTA.gotoAndPlay('out');
		}
		*/
	}
	this.frame_332 = function() {
		//this.stop();
	}
	this.frame_422 = function() {
		this.gotoAndPlay('loop');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(332).call(this.frame_332).wait(90).call(this.frame_422).wait(1));

	// cta
	this.btnCTA = new lib.btnCTA();
	this.btnCTA.setTransform(156,278);
	new cjs.ButtonHelper(this.btnCTA, 0, 1, 2, false, new lib.btnCTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnCTA).wait(317).to({scaleX:0.9,scaleY:0.9,y:208,alpha:0},0).to({scaleX:1,scaleY:1,alpha:1},15,cjs.Ease.get(1)).wait(80).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// main
	this.btnMain = new lib.btnInvisi();
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.btnInvisi(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(423));

	// haunting
	this.instance = new lib.haunting();
	this.instance.setTransform(165.4,135.2,0.9,0.9,0,0,0,88,55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(287).to({_off:false},0).to({scaleX:1,scaleY:1,x:166,y:116,alpha:1},30,cjs.Ease.get(1)).wait(95).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// something
	this.instance_1 = new lib.something();
	this.instance_1.setTransform(146.5,101.3,0.9,0.9,0,0,0,80,45.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(272).to({_off:false},0).to({scaleX:1,scaleY:1,x:145,y:89.5,alpha:1},30,cjs.Ease.get(1)).wait(110).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// bg2
	this.instance_2 = new lib.bg2();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(261).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(140).to({alpha:0},10,cjs.Ease.get(1)).wait(1));

	// icons
	this.instance_3 = new lib.icons();
	this.instance_3.setTransform(155,186.5,0.9,0.9,0,0,0,125,32.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(196).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},20,cjs.Ease.get(1)).to({_off:true},56).wait(151));

	// findouthow
	this.instance_4 = new lib.findouthow();
	this.instance_4.setTransform(149.5,94.5,0.9,0.9,0,0,0,117.5,31.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(186).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},20,cjs.Ease.get(1)).to({_off:true},66).wait(151));

	// Layer 20
	this.instance_5 = new lib.bg1();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(175).to({_off:false},0).to({alpha:1},20,cjs.Ease.get(1)).to({_off:true},1).wait(227));

	// likeazombie
	this.instance_6 = new lib.likeazombie();
	this.instance_6.setTransform(149,127.5,0.9,0.9,0,0,0,88,45.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(120).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},20,cjs.Ease.get(1)).to({_off:true},56).wait(227));

	// blood
	this.instance_7 = new lib.blood();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},4,cjs.Ease.get(1)).to({_off:true},121).wait(227));

	// bloodred
	this.instance_8 = new lib.bloodred();
	this.instance_8.setTransform(150,125.1,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).to({_off:true},1).wait(352));

	// zombie
	this.instance_9 = new lib.zombie();
	this.instance_9.setTransform(187.5,125,1.5,1.5,0,0,0,175,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(71).to({_off:false},0).wait(1).to({regX:150,scaleX:1.14,scaleY:1.14,x:150.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:150,y:125.1},0).wait(1).to({regX:175,scaleX:1,scaleY:1,x:175,y:125},0).wait(1).to({regX:150,scaleX:1.06,scaleY:1.06,x:150},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:150.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:125.1},0).wait(1).to({regX:175,scaleX:1.1,scaleY:1.1,x:177.5,y:125},0).wait(1).to({regX:150,scaleX:1.07,scaleY:1.07,x:150.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:125.1},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150,y:125},0).wait(1).to({scaleX:1,scaleY:1,x:150.1},0).wait(1).to({scaleX:1,scaleY:1,x:150,y:125.1},0).wait(1).to({regX:175,scaleX:1,scaleY:1,x:175,y:125},0).wait(25).to({alpha:0.352},10,cjs.Ease.get(1)).to({_off:true},76).wait(227));

	// examstress
	this.instance_10 = new lib.examstress();
	this.instance_10.setTransform(150.5,130,0.9,0.9,0,0,0,96.5,38);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},20,cjs.Ease.get(1)).to({_off:true},41).wait(352));

	// bg1
	this.instance_11 = new lib.bg1();
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(423));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,295.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;