(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#E6E6E6",
	manifest: [
		{src:"images/aus.png", id:"aus"},
		{src:"images/btn.png", id:"btn"},
		{src:"images/entourage.jpg", id:"entourage"},
		{src:"images/get.png", id:"get"},
		{src:"images/grad.jpg", id:"grad"},
		{src:"images/modernfamily.jpg", id:"modernfamily"},
		{src:"images/mrrobot.jpg", id:"mrrobot"},
		{src:"images/ondemand.png", id:"ondemand"},
		{src:"images/shadow.png", id:"shadow"}
	]
};



// symbols:



(lib.aus = function() {
	this.initialize(img.aus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,53);


(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,43);


(lib.entourage = function() {
	this.initialize(img.entourage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.get = function() {
	this.initialize(img.get);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,73);


(lib.grad = function() {
	this.initialize(img.grad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.modernfamily = function() {
	this.initialize(img.modernfamily);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.mrrobot = function() {
	this.initialize(img.mrrobot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.ondemand = function() {
	this.initialize(img.ondemand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,33);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,130);


(lib.terms_mc = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("*Terms & Conditions apply.", "7px 'Arial'", "#CCCCCC");
	this.text.textAlign = "center";
	this.text.lineHeight = 7;
	this.text.lineWidth = 296;
	this.text.setTransform(148,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,11.9);


(lib.shadow_mc = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,234,130);


(lib.presto_mc = function() {
	this.initialize();

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6CNIAAjUIgxAAQggAAABgiIAAgPQgBgiAgABIAxAAIAAhLQgBgMAGgIQAFgGAOgEIAmgLIAIgCQAKAAAFAGQAGAHAAAJIAABgIBLAAQAfgBABAiIAAAPQgBAigfAAIhLAAIAADJQAAAiASAPQARANAhAAIANgBQAagDAAAWIAAAhQAAAUgaAHQgMACgQAAQiQAAAAiDg");
	this.shape.setTransform(160.1,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhADOQgogOgZgdQgqgxgJhXQgIhRAbg0QAVgqAggaQAggZAvgNQAYgGAUAAQAfAAAmANQAuAQAcAzQARAfADATQAIAcgFALQgEALgWANIjtB1QADAIAMALQAXAXAyADQAwACAogPIAfgPQAMgGAKAEQAJAEACALIAFAdQADAMgEAIQgEAIgLAGIgXALQgSAIgbAGQghAIgfABIgEAAQgoAAgjgNgAgJiGQgdAIgTAPQgTAPgNAaQgIAPgCAaQgDAZADAZQA3gdCKhCIgGgSQgEgJgHgJQgWgcglAAQgMAAgPAEg");
	this.shape_1.setTransform(87.7,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMDbQhMgDg4gfQgLgGgEgIQgEgIACgMIAGgdQACgLAJgEQAJgEAMAGIAZANIAJADQAjANAsgBQBRgDAAgxQAAgYgOgLQgPgNgogDQhZgIgjgcQgfgbAAg5QAAg6AngjQAsgnBUAAQA+AAAtAMQAaAIAAAbIAAATQAAAPgKAHQgLAIgSgFIghgHQgdgGgeAAQhOAAAAA0QAAAWAOAKQAPALAmADQBaAIAjAeQAgAZAAA9QAAArgUAeQgYAigwAPQglAPgmAAIgHAAg");
	this.shape_2.setTransform(126.4,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiSCdQglgzAAhqQAAhpAlgzQArg+BnAAQBoAAArA+QAlAzAABpQAABqglAzQgrA+hoAAQhnAAgrg+gAhKhmQgPAdAABJQAABKAPAdQAUAlA2AAQA3AAAUglQAPgdAAhKQAAhJgPgdQgUglg3AAQg2AAgUAlg");
	this.shape_3.setTransform(196.4,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaDbQgfAAAAgiIAAltQAAgcAaAAIAJAAQANAAAGAGQAFAEAGAPIAEAJQA0gsBOAAIATACQAZAEAAAXIAAAiQAAAXgZgEIgVgBQhDAAglAZIAAEpQAAAiggAAg");
	this.shape_4.setTransform(55.7,32.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiYE+QggAAAAgiIAAozQAAgcAbAAIAJAAQAMAAAHAFQAFAFAGAOIAEAJQA7grBKAAQBXAAApA6QAmA2AABrQAABpgmA2QgpA6hXAAQg6AAg0ghIAADGQAAAigfAAgAg4jlQgPAFgUALIAADkQAsAZAugBQA2ABAVgoQARgfAAhDQAAhEgRgfQgVgpg2AAQgdAAgaAJg");
	this.shape_5.setTransform(18.5,42.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.9,74.4);


(lib.p_mc = function() {
	this.initialize();

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B066A4","#250C33"],[0,1],0,-19,0,19).s().p("AiOi9ICOAAQA7AAApAqQAqAqABA7QgBA5gqApQgpArg7AAIguAAIhgBeg");
	this.shape.setTransform(15,-20,1.049,1.053);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-40,30,40);


(lib.more_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5B5D6").s().p("AhxA3QgWgWAAghQAAghAWgWQAXgWAkAAQAiAAAVAWQAXAWAAAhQAAAhgXAWQgVAXgiAAQgkAAgXgXgAhZgiQgOAOAAAUQAAAVAOAOQANAOAWAAQAVAAAOgOQANgOAAgVQAAgUgNgOQgOgOgVAAQgWAAgNAOgADrBLIAAiVIByAAIAAAcIhTAAIAAAhIBPAAIAAAaIhPAAIAAAiIBUAAIAAAcgACaBLIgtg8IgKAAIAAA8IgeAAIAAiVIBBAAQAbAAAOAMQAPAMAAAWQAAATgMAJQgNAMgWACIAvA9gABjgJIAjAAQAZAAAAgTQAAgSgZAAIgjAAgAjTBLIAAhwIgmBhIgfAAIgnhgIAABvIgeAAIAAiVIAtAAIAnBkIAohkIAtAAIAACVg");
	this.shape.setTransform(35.1,7.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.1,15.7);


(lib.image3_mc = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.entourage();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.image2_mc = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.mrrobot();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.image1_mc = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.modernfamily();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.gradient_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.grad();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.demand_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5B5D6").s().p("AGPBLIAAiVIA/AAQAkAAAWAVQAVAVAAAgQAAAigVAUQgWAVgkAAgAGtAvIAgAAQAYAAAMgOQAMgMAAgVQAAgUgMgMQgMgOgYAAIggAAgAE+BLIhOhjIAABjIgfAAIAAiVIAdAAIBOBjIAAhjIAeAAIAACVgACLBLIgNgjIhBAAIgOAjIggAAIA8iVIAlAAIA8CVgABzAMIgWg4IgWA4IAsAAgAgyBLIAAhwIgmBhIghAAIgmhgIAABvIgeAAIAAiVIAtAAIAoBkIAnhkIAtAAIAACVgAlgBLIAAiVIBxAAIAAAcIhTAAIAAAhIBPAAIAAAaIhPAAIAAAiIBUAAIAAAcgAocBLIAAiVIA/AAQAkAAAWAVQAWAVAAAgQAAAigWAUQgWAVgkAAgAn+AvIAhAAQAXAAANgOQAMgMAAgVQAAgUgMgMQgNgOgXAAIghAAg");
	this.shape.setTransform(54.2,7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108.4,15.1);


(lib.copyright3_mc = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AARAKIAAgPIgGAPIgDAAIgGgPIAAAPIgCAAIAAgSIAEAAIAFAOIAHgOIADAAIAAASgAgPAJIgDgDIAAgDIACAAIABACIACACIADAAIADAAIABgCIABgBIgBgBIgBgCIgEAAIgEgBIgCgBIgBgCIABgDIACgCIAFgBIADABIAEADIAAACIgDAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAIgDgBIgEABIgBACIAAABIAFACIAEAAIADABIABADIgBACIgDADIgEABIgFgBg");
	this.shape.setTransform(37,4);

	// Entourage   (MA15+) ©2015 Home Box Office, Inc. HBO and related service marks are the property of Home Box Office, Inc. Watch seasons 1-8 now on Presto.
	this.text = new cjs.Text("Entourage   (MA15+) ©2015 Home Box Office, Inc. HBO and\nrelated service marks are the property of Home Box Office, Inc.\nWatch seasons 1-8 now on Presto.", "6px 'Arial'", "#CCCCCC");
	this.text.lineHeight = 6;
	this.text.lineWidth = 296;

	this.addChild(this.text,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,30);


(lib.copyright2_mc = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Mr Robot (MA15+) ©2015 Universal Studios.\nAll Rights Reserved. Watch now on Presto.", "6px 'Arial'", "#CCCCCC");
	this.text.lineHeight = 6;
	this.text.lineWidth = 296;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,30);


(lib.copy3_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.get();
	this.instance.setTransform(0,-73);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-73,129,73);


(lib.copy2_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ondemand();
	this.instance.setTransform(0,-33);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-33,141,33);


(lib.copy1_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.aus();
	this.instance.setTransform(0,-53);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-53,125,53);


(lib.copright1_mc = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Modern Family (PG) © 2013-2014 Twentieth Century Fox Film Corporation.\nAll rights reserved. Artwork © 2013 American Broadcasting Companies.\nAll rights reserved. Watch seasons 1 - 5 now on Presto.", "6px 'Arial'", "#CCCCCC");
	this.text.lineHeight = 6;
	this.text.lineWidth = 296;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


(lib.btn_mc = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.btn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,210,43);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{endframe:342});

	// timeline functions:
	this.frame_342 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(342).call(this.frame_342).wait(1));

	// terms
	this.instance = new lib.terms_mc();
	this.instance.setTransform(150,239,1,1,0,0,0,150,7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(1));

	// btn
	this.instance_1 = new lib.btn_mc();
	this.instance_1.setTransform(139,206.5,1,1,0,0,0,94,25.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(324).to({_off:false},0).to({y:176.5,alpha:1},12,cjs.Ease.get(1)).wait(7));

	// more_mc
	this.instance_2 = new lib.more_mc();
	this.instance_2.setTransform(332.3,126.2,2.643,2.684,0,0,0,35,7.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(306).to({_off:false},0).to({scaleX:0.88,scaleY:0.9,x:210.1,y:125.1,alpha:1},12,cjs.Ease.get(1)).wait(25));

	// demand_mc
	this.instance_3 = new lib.demand_mc();
	this.instance_3.setTransform(248,125.2,2.643,2.684,0,0,0,54.1,7.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(294).to({_off:false},0).to({scaleX:0.88,scaleY:0.9,x:122.7,y:124.7,alpha:1},12,cjs.Ease.get(1)).wait(37));

	// presto
	this.instance_4 = new lib.presto_mc();
	this.instance_4.setTransform(149.5,113,0.88,0.887,0,0,0,107.4,37.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(276).to({_off:false},0).to({y:83,alpha:1},12,cjs.Ease.get(1)).wait(55));

	// grad
	this.instance_5 = new lib.gradient_mc();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(264).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(67));

	// copyright3
	this.instance_6 = new lib.copyright3_mc();
	this.instance_6.setTransform(110,231,1,1,0,0,0,100,7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(204).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).to({_off:true},60).wait(67));

	// copyright2
	this.instance_7 = new lib.copyright2_mc();
	this.instance_7.setTransform(110,238,1,1,0,0,0,100,7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(48).to({alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// copyright1
	this.instance_8 = new lib.copright1_mc();
	this.instance_8.setTransform(110,231,1,1,0,0,0,100,7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(36).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(48).to({alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(234));

	// copy3
	this.instance_9 = new lib.copy3_mc();
	this.instance_9.setTransform(134,249,1,1,0,0,0,95,32);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(192).to({_off:false},0).to({x:104,alpha:1},24,cjs.Ease.get(1)).to({_off:true},60).wait(67));

	// copy2
	this.instance_10 = new lib.copy2_mc();
	this.instance_10.setTransform(134,249,1,1,0,0,0,95,32);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(108).to({_off:false},0).to({x:104,alpha:1},24,cjs.Ease.get(1)).wait(48).to({alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(150));

	// copy1
	this.instance_11 = new lib.copy1_mc();
	this.instance_11.setTransform(126,225,1,1,0,0,0,87,8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({x:96,alpha:1},24,cjs.Ease.get(1)).wait(48).to({alpha:0},12,cjs.Ease.get(1)).to({_off:true},1).wait(234));

	// p
	this.instance_12 = new lib.p_mc();
	this.instance_12.setTransform(241.5,138.5,0.767,0.725,0,0,0,15,-20);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({alpha:0.898},24,cjs.Ease.get(1)).wait(295));

	// shadow
	this.instance_13 = new lib.shadow_mc();
	this.instance_13.setTransform(137.5,173,1,1,0,0,0,140.5,53);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24).to({_off:false},0).to({alpha:0.898},24,cjs.Ease.get(1)).to({_off:true},228).wait(67));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_192 = new cjs.Graphics().p("AoTTkMgePgnHMAu2AAAMAePAnHg");
	var mask_graphics_193 = new cjs.Graphics().p("ApiTkMgbxgnHMAu2AAAMAbxAnHg");
	var mask_graphics_194 = new cjs.Graphics().p("AqtTkMgZbgnGMAu3AAAMAZZAnGg");
	var mask_graphics_195 = new cjs.Graphics().p("Ar2TkMgXJgnGMAu2AAAMAXJAnGg");
	var mask_graphics_196 = new cjs.Graphics().p("As7TjMgU/gnFMAu2AAAMAU/AnFg");
	var mask_graphics_197 = new cjs.Graphics().p("At8TjMgS9gnFMAu2AAAMAS9AnFg");
	var mask_graphics_198 = new cjs.Graphics().p("Au6TjMgRBgnFMAu2AAAMARBAnFg");
	var mask_graphics_199 = new cjs.Graphics().p("Av1TjMgPLgnFMAu2AAAMAPLAnFg");
	var mask_graphics_200 = new cjs.Graphics().p("AwtTjMgNbgnEMAu1AAAMANdAnEg");
	var mask_graphics_201 = new cjs.Graphics().p("AxhTjMgLzgnEMAu2AAAMALzAnEg");
	var mask_graphics_202 = new cjs.Graphics().p("AyRTiMgKTgnDMAu3AAAMAKSAnDg");
	var mask_graphics_203 = new cjs.Graphics().p("Ay/TiMgI4gnDMAu2AAAMAI5AnDg");
	var mask_graphics_204 = new cjs.Graphics().p("AzpTiMgHjgnDMAu2AAAMAHjAnDg");
	var mask_graphics_205 = new cjs.Graphics().p("A0PTiMgGXgnDMAu2AAAMAGXAnDg");
	var mask_graphics_206 = new cjs.Graphics().p("A0zTiMgFPgnDMAu1AAAMAFQAnDg");
	var mask_graphics_207 = new cjs.Graphics().p("A1TTiMgEPgnDMAu1AAAMAEQAnDg");
	var mask_graphics_208 = new cjs.Graphics().p("A1vTiMgDXgnDMAu2AAAMADXAnDg");
	var mask_graphics_209 = new cjs.Graphics().p("A2ITiMgClgnDMAu2AAAMAClAnDg");
	var mask_graphics_210 = new cjs.Graphics().p("A2eTiMgB5gnDMAu2AAAMAB5AnDg");
	var mask_graphics_211 = new cjs.Graphics().p("A2wTiMgBVgnDMAu3AAAMABUAnDg");
	var mask_graphics_212 = new cjs.Graphics().p("A3ATiMgA1gnDMAu2AAAMAA1AnDg");
	var mask_graphics_213 = new cjs.Graphics().p("A3LTiMgAfgnDMAu3AAAMAAdAnDg");
	var mask_graphics_214 = new cjs.Graphics().p("A3UTiMgANgnDMAu2AAAMAANAnDg");
	var mask_graphics_215 = new cjs.Graphics().p("A3ZTiMgADgnDMAu2AAAMAADAnDg");
	var mask_graphics_216 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(192).to({graphics:mask_graphics_192,x:-246.7,y:124.8}).wait(1).to({graphics:mask_graphics_193,x:-214.4,y:124.8}).wait(1).to({graphics:mask_graphics_194,x:-183.4,y:124.8}).wait(1).to({graphics:mask_graphics_195,x:-153.8,y:124.8}).wait(1).to({graphics:mask_graphics_196,x:-125.5,y:124.8}).wait(1).to({graphics:mask_graphics_197,x:-98.6,y:124.9}).wait(1).to({graphics:mask_graphics_198,x:-73.2,y:124.9}).wait(1).to({graphics:mask_graphics_199,x:-49,y:124.9}).wait(1).to({graphics:mask_graphics_200,x:-26.3,y:124.9}).wait(1).to({graphics:mask_graphics_201,x:-5,y:124.9}).wait(1).to({graphics:mask_graphics_202,x:15,y:124.9}).wait(1).to({graphics:mask_graphics_203,x:33.6,y:124.9}).wait(1).to({graphics:mask_graphics_204,x:50.8,y:125}).wait(1).to({graphics:mask_graphics_205,x:66.7,y:125}).wait(1).to({graphics:mask_graphics_206,x:81.1,y:125}).wait(1).to({graphics:mask_graphics_207,x:94.2,y:125}).wait(1).to({graphics:mask_graphics_208,x:105.9,y:125}).wait(1).to({graphics:mask_graphics_209,x:116.3,y:125}).wait(1).to({graphics:mask_graphics_210,x:125.2,y:125}).wait(1).to({graphics:mask_graphics_211,x:132.8,y:125}).wait(1).to({graphics:mask_graphics_212,x:139,y:125}).wait(1).to({graphics:mask_graphics_213,x:143.8,y:125}).wait(1).to({graphics:mask_graphics_214,x:147.2,y:125}).wait(1).to({graphics:mask_graphics_215,x:149.3,y:125}).wait(1).to({graphics:mask_graphics_216,x:150,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(126));

	// image3
	this.instance_14 = new lib.image3_mc();
	this.instance_14.setTransform(52,101,1,1,0,0,0,52,101);
	this.instance_14._off = true;

	this.instance_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(192).to({_off:false},0).to({_off:true},84).wait(67));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_108 = new cjs.Graphics().p("AoTTkMgePgnHMAu2AAAMAePAnHg");
	var mask_1_graphics_109 = new cjs.Graphics().p("ApiTkMgbxgnHMAu2AAAMAbxAnHg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AqtTkMgZbgnGMAu3AAAMAZZAnGg");
	var mask_1_graphics_111 = new cjs.Graphics().p("Ar2TkMgXJgnGMAu2AAAMAXJAnGg");
	var mask_1_graphics_112 = new cjs.Graphics().p("As7TjMgU/gnFMAu2AAAMAU/AnFg");
	var mask_1_graphics_113 = new cjs.Graphics().p("At8TjMgS9gnFMAu2AAAMAS9AnFg");
	var mask_1_graphics_114 = new cjs.Graphics().p("Au6TjMgRBgnFMAu2AAAMARBAnFg");
	var mask_1_graphics_115 = new cjs.Graphics().p("Av1TjMgPLgnFMAu2AAAMAPLAnFg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AwtTjMgNbgnEMAu1AAAMANdAnEg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AxhTjMgLzgnEMAu2AAAMALzAnEg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AyRTiMgKTgnDMAu3AAAMAKSAnDg");
	var mask_1_graphics_119 = new cjs.Graphics().p("Ay/TiMgI4gnDMAu2AAAMAI5AnDg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AzpTiMgHjgnDMAu2AAAMAHjAnDg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A0PTiMgGXgnDMAu2AAAMAGXAnDg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A0zTiMgFPgnDMAu1AAAMAFQAnDg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A1TTiMgEPgnDMAu1AAAMAEQAnDg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A1vTiMgDXgnDMAu2AAAMADXAnDg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A2ITiMgClgnDMAu2AAAMAClAnDg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A2eTiMgB5gnDMAu2AAAMAB5AnDg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A2wTiMgBVgnDMAu3AAAMABUAnDg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A3ATiMgA1gnDMAu2AAAMAA1AnDg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A3LTiMgAfgnDMAu3AAAMAAdAnDg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A3UTiMgANgnDMAu2AAAMAANAnDg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A3ZTiMgADgnDMAu2AAAMAADAnDg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(108).to({graphics:mask_1_graphics_108,x:-246.7,y:124.8}).wait(1).to({graphics:mask_1_graphics_109,x:-214.4,y:124.8}).wait(1).to({graphics:mask_1_graphics_110,x:-183.4,y:124.8}).wait(1).to({graphics:mask_1_graphics_111,x:-153.8,y:124.8}).wait(1).to({graphics:mask_1_graphics_112,x:-125.5,y:124.8}).wait(1).to({graphics:mask_1_graphics_113,x:-98.6,y:124.9}).wait(1).to({graphics:mask_1_graphics_114,x:-73.2,y:124.9}).wait(1).to({graphics:mask_1_graphics_115,x:-49,y:124.9}).wait(1).to({graphics:mask_1_graphics_116,x:-26.3,y:124.9}).wait(1).to({graphics:mask_1_graphics_117,x:-5,y:124.9}).wait(1).to({graphics:mask_1_graphics_118,x:15,y:124.9}).wait(1).to({graphics:mask_1_graphics_119,x:33.6,y:124.9}).wait(1).to({graphics:mask_1_graphics_120,x:50.8,y:125}).wait(1).to({graphics:mask_1_graphics_121,x:66.7,y:125}).wait(1).to({graphics:mask_1_graphics_122,x:81.1,y:125}).wait(1).to({graphics:mask_1_graphics_123,x:94.2,y:125}).wait(1).to({graphics:mask_1_graphics_124,x:105.9,y:125}).wait(1).to({graphics:mask_1_graphics_125,x:116.3,y:125}).wait(1).to({graphics:mask_1_graphics_126,x:125.2,y:125}).wait(1).to({graphics:mask_1_graphics_127,x:132.8,y:125}).wait(1).to({graphics:mask_1_graphics_128,x:139,y:125}).wait(1).to({graphics:mask_1_graphics_129,x:143.8,y:125}).wait(1).to({graphics:mask_1_graphics_130,x:147.2,y:125}).wait(1).to({graphics:mask_1_graphics_131,x:149.3,y:125}).wait(1).to({graphics:mask_1_graphics_132,x:150,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(210));

	// image2
	this.instance_15 = new lib.image2_mc();
	this.instance_15.setTransform(67.5,76,1,1,0,0,0,67.5,76);
	this.instance_15._off = true;

	this.instance_15.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(108).to({_off:false},0).to({_off:true},108).wait(127));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_12 = new cjs.Graphics().p("AoTTkMgePgnHMAu2AAAMAePAnHg");
	var mask_2_graphics_13 = new cjs.Graphics().p("ApiTkMgbxgnHMAu2AAAMAbxAnHg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AqtTkMgZbgnGMAu3AAAMAZZAnGg");
	var mask_2_graphics_15 = new cjs.Graphics().p("Ar2TkMgXJgnGMAu2AAAMAXJAnGg");
	var mask_2_graphics_16 = new cjs.Graphics().p("As7TjMgU/gnFMAu2AAAMAU/AnFg");
	var mask_2_graphics_17 = new cjs.Graphics().p("At8TjMgS9gnFMAu2AAAMAS9AnFg");
	var mask_2_graphics_18 = new cjs.Graphics().p("Au6TjMgRBgnFMAu2AAAMARBAnFg");
	var mask_2_graphics_19 = new cjs.Graphics().p("Av1TjMgPLgnFMAu2AAAMAPLAnFg");
	var mask_2_graphics_20 = new cjs.Graphics().p("AwtTjMgNbgnEMAu1AAAMANdAnEg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AxhTjMgLzgnEMAu2AAAMALzAnEg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AyRTiMgKTgnDMAu3AAAMAKSAnDg");
	var mask_2_graphics_23 = new cjs.Graphics().p("Ay/TiMgI4gnDMAu2AAAMAI5AnDg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AzpTiMgHjgnDMAu2AAAMAHjAnDg");
	var mask_2_graphics_25 = new cjs.Graphics().p("A0PTiMgGXgnDMAu2AAAMAGXAnDg");
	var mask_2_graphics_26 = new cjs.Graphics().p("A0zTiMgFPgnDMAu1AAAMAFQAnDg");
	var mask_2_graphics_27 = new cjs.Graphics().p("A1TTiMgEPgnDMAu1AAAMAEQAnDg");
	var mask_2_graphics_28 = new cjs.Graphics().p("A1vTiMgDXgnDMAu2AAAMADXAnDg");
	var mask_2_graphics_29 = new cjs.Graphics().p("A2ITiMgClgnDMAu2AAAMAClAnDg");
	var mask_2_graphics_30 = new cjs.Graphics().p("A2eTiMgB5gnDMAu2AAAMAB5AnDg");
	var mask_2_graphics_31 = new cjs.Graphics().p("A2wTiMgBVgnDMAu3AAAMABUAnDg");
	var mask_2_graphics_32 = new cjs.Graphics().p("A3ATiMgA1gnDMAu2AAAMAA1AnDg");
	var mask_2_graphics_33 = new cjs.Graphics().p("A3LTiMgAfgnDMAu3AAAMAAdAnDg");
	var mask_2_graphics_34 = new cjs.Graphics().p("A3UTiMgANgnDMAu2AAAMAANAnDg");
	var mask_2_graphics_35 = new cjs.Graphics().p("A3ZTiMgADgnDMAu2AAAMAADAnDg");
	var mask_2_graphics_36 = new cjs.Graphics().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_2_graphics_12,x:-246.7,y:124.8}).wait(1).to({graphics:mask_2_graphics_13,x:-214.4,y:124.8}).wait(1).to({graphics:mask_2_graphics_14,x:-183.4,y:124.8}).wait(1).to({graphics:mask_2_graphics_15,x:-153.8,y:124.8}).wait(1).to({graphics:mask_2_graphics_16,x:-125.5,y:124.8}).wait(1).to({graphics:mask_2_graphics_17,x:-98.6,y:124.9}).wait(1).to({graphics:mask_2_graphics_18,x:-73.2,y:124.9}).wait(1).to({graphics:mask_2_graphics_19,x:-49,y:124.9}).wait(1).to({graphics:mask_2_graphics_20,x:-26.3,y:124.9}).wait(1).to({graphics:mask_2_graphics_21,x:-5,y:124.9}).wait(1).to({graphics:mask_2_graphics_22,x:15,y:124.9}).wait(1).to({graphics:mask_2_graphics_23,x:33.6,y:124.9}).wait(1).to({graphics:mask_2_graphics_24,x:50.8,y:125}).wait(1).to({graphics:mask_2_graphics_25,x:66.7,y:125}).wait(1).to({graphics:mask_2_graphics_26,x:81.1,y:125}).wait(1).to({graphics:mask_2_graphics_27,x:94.2,y:125}).wait(1).to({graphics:mask_2_graphics_28,x:105.9,y:125}).wait(1).to({graphics:mask_2_graphics_29,x:116.3,y:125}).wait(1).to({graphics:mask_2_graphics_30,x:125.2,y:125}).wait(1).to({graphics:mask_2_graphics_31,x:132.8,y:125}).wait(1).to({graphics:mask_2_graphics_32,x:139,y:125}).wait(1).to({graphics:mask_2_graphics_33,x:143.8,y:125}).wait(1).to({graphics:mask_2_graphics_34,x:147.2,y:125}).wait(1).to({graphics:mask_2_graphics_35,x:149.3,y:125}).wait(1).to({graphics:mask_2_graphics_36,x:150,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(306));

	// image1
	this.instance_16 = new lib.image1_mc();
	this.instance_16.setTransform(108,125,1,1,0,0,0,108,125);
	this.instance_16._off = true;

	this.instance_16.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(12).to({_off:false},0).to({_off:true},120).wait(211));

	// grad
	this.instance_17 = new lib.gradient_mc();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},276).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,252);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;