(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.asteroid = function() {
	this.initialize(img.asteroid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4032,3024);


(lib.asteroidpngcopy = function() {
	this.initialize(img.asteroidpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4032,3024);


(lib.backgroundpngcopy = function() {
	this.initialize(img.backgroundpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1051,1259);


(lib.earth11 = function() {
	this.initialize(img.earth11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,172);


(lib.earth21 = function() {
	this.initialize(img.earth21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,190);


(lib.earth31 = function() {
	this.initialize(img.earth31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,174);


(lib.jupmars = function() {
	this.initialize(img.jupmars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,910,953);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4032,3024);


(lib.psychecraft1 = function() {
	this.initialize(img.psychecraft1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,209);


(lib.spacecraft1 = function() {
	this.initialize(img.spacecraft1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,137,412);


(lib.sxpngcopy = function() {
	this.initialize(img.sxpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4032,3024);


(lib.Tween48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sxpngcopy();
	this.instance.setTransform(-802.8,-602.1,0.3982,0.3982);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-802.8,-602.1,1605.5,1204.2);


(lib.Tween47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroidpngcopy();
	this.instance.setTransform(-263.4,-197.55,0.1307,0.1307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.4,-197.5,526.9,395.1);


(lib.Tween46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroidpngcopy();
	this.instance.setTransform(-263.4,-197.55,0.1307,0.1307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.4,-197.5,526.9,395.1);


(lib.Tween45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.asteroid();
	this.instance.setTransform(-238.1,-178.6,0.1181,0.1181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238.1,-178.6,476.2,357.2);


(lib.Tween42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(-519.05,-383.5,0.9903,0.9756);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519,-383.5,1038.1,767.1);


(lib.Tween40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape.setTransform(-212.425,11.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAXBPIgkg7IgPAQIAAArIgSAAIAAidIASAAIAABbIAwgwIAZAAIgsAqIAuBIg");
	this.shape_1.setTransform(-223.25,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_2.setTransform(-231.85,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_3.setTransform(-236.675,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXBPIgjg7IgQAQIAAArIgSAAIAAidIASAAIAABbIAwgwIAZAAIgsAqIAuBIg");
	this.shape_4.setTransform(-250.05,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_5.setTransform(-262.425,11.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_6.setTransform(-274.625,11.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_7.setTransform(-283.025,9.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkBRIgFgCIAAgRIAHACIAEAAQAFAAADgCIAEgEIAEgJIAFgLIgrh2IAXAAIAdBdIAfhdIAWAAIgSAyIgSAwQgRAsgGAJQgHAKgQAAg");
	this.shape_8.setTransform(235.3,-9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_9.setTransform(223.925,-12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA6A7IAAhPQAAgMgHgEQgFgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgDgFQgEgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAGgIAHgEQAJgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAIgFALAAQAYAAAIARQAFAJgBAPIAABMg");
	this.shape_10.setTransform(208.45,-12.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_11.setTransform(186.975,-12.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_12.setTransform(177.95,-12.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_13.setTransform(167.475,-12.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNAAQgSgBgIATQgFALAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNALQgNALgUAAQgWAAgNgRg");
	this.shape_14.setTransform(156.075,-12.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKASAAQALAAAHgFQAJgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAHAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgZAAgLgLg");
	this.shape_15.setTransform(138.9,-12.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAgIgEg/IATAAIgEA/g");
	this.shape_16.setTransform(131.875,-19.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_17.setTransform(123.1,-14.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAggIASAAIAAAgIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_18.setTransform(113.825,-13.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_19.setTransform(107.85,-12.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_20.setTransform(97.725,-12.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag5BPIAAidIBxAAIAAAUIhcAAIAAAvIBVAAIAAARIhVAAIAAA2IBeAAIAAATg");
	this.shape_21.setTransform(84.45,-14.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAggIASAAIAAAgIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_22.setTransform(67.475,-13.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_23.setTransform(58.675,-12.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_24.setTransform(46.25,-14.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAXA6IgXhYIgWBYIgUAAIgihzIAWAAIAWBaIAXhaIAUAAIAWBaIAYhaIATAAIghBzg");
	this.shape_25.setTransform(32.15,-12.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_26.setTransform(11.975,-12.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgCAGAAALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_27.setTransform(-0.1,-12.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_28.setTransform(-8.65,-14.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgfBLQgNgJgCgRIAUAAQABAHAFAEQAGAHAOAAQAVAAAHgQQAEgJAAgYQgGAJgIAEQgIAFgNAAQgSAAgOgOQgOgNAAgeQAAgcAOgRQAOgQAUAAQAMAAAKAHQAGAEAGAHIAAgPIARAAIAABoQAAAWgGAMQgMAYggAAQgTAAgMgIgAgZguQgEALAAAQQAAATAIAKQAHAKAOAAQATAAAJgTQAFgKAAgOQAAgVgJgKQgJgLgOAAQgTAAgHATg");
	this.shape_29.setTransform(-17.575,-9.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_30.setTransform(-29.125,-12.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AA5A7IAAhPQAAgMgFgEQgGgEgJAAQgLAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgUAAIAAhyIAUAAIAAAQQAGgIAHgEQAJgHAMAAQAOAAAIAHQAEAEAEAHQAGgJAJgEQAJgFALAAQAWAAAJARQAFAJAAAPIAABMg");
	this.shape_31.setTransform(-44.6,-12.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_32.setTransform(-56.2,-14.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkBRIgFgCIAAgRIAHACIAEAAQAFAAADgCIAEgEIAEgJIAFgLIgqh2IAVAAIAeBdIAfhdIAVAAIgSAyIgRAwQgRAsgGAJQgHAKgRAAg");
	this.shape_33.setTransform(-70.2,-9.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_34.setTransform(-78.125,-14.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgGAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_35.setTransform(-86.65,-12.375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_36.setTransform(-98.975,-12.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgFAGgCAGQgCAGABALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_37.setTransform(-117.15,-12.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgCADgEIABgIQAAgKgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHABQgKgBgEgGQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLABgFADQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_38.setTransform(-129.125,-12.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNAAQgSgBgIATQgFALAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNALQgNALgUAAQgWAAgNgRg");
	this.shape_39.setTransform(-140.875,-12.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_40.setTransform(-158.775,-12.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAXA6IgXhYIgWBYIgVAAIgghzIAVAAIAWBaIAXhaIAUAAIAXBaIAXhaIAUAAIgiBzg");
	this.shape_41.setTransform(-172.75,-12.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgLASQAIgBACgKQACgEAAgEIAAgBIgBgBIgLAAIAAgYIAXAAIAAAWQgBAMgFAJQgFAKgMACg");
	this.shape_42.setTransform(-189.8,-6.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAcA7IAAhIQAAgKgEgHQgFgKgOAAIgKABQgHACgHAHQgFAGgBAGQgCAGAAALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_43.setTransform(-198.9,-12.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_44.setTransform(-211.225,-12.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_45.setTransform(-223.3,-14.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAggIASAAIAAAgIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_46.setTransform(-232.575,-13.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_47.setTransform(-244.025,-14.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_48.setTransform(-248.9,-14.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAggIASAAIAAAgIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_49.setTransform(-254.475,-13.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgGAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_50.setTransform(-263.5,-12.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag2A1QgHgQAAgdIAAhYIAVAAIAABhQAAARAHAMQAJARAXAAQAagBAKgSQAGgKAAgRIAAhhIAVAAIAABYQAAAdgIAQQgOAcgoAAQgnAAgPgcg");
	this.shape_51.setTransform(-277.375,-14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.4,-25.4,574.9,74);


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAJQgDgEAAgFQAAgFAEgEQADgDAFAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgDAFgGAAQgFAAgEgFg");
	this.shape.setTransform(80.475,46.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjAoQgMgRAAgVQAAgXAOgRQAOgRAVgBQARAAAMAMQANALAAAWIhKAAQABAaALAMQAMANAOAAQAMgBAJgGQAIgHAHgLIAEABQgFAPgNAMQgNAOgSAAQgWAAgMgRgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAGgBAKIAwAAIAAAAg");
	this.shape_1.setTransform(71.175,42.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOA6QgDgGAAgMIAAhGIgNAAIgBgBIAAgBIAAgBIAEgDIAMgMIAQgVIABAAIABABIAAAdIAXAAIAAAJIgYAAIAABDQAAAIABAFQAEAIAHAAQAEAAAEgCIAHgHIADADIgCAEQgHAIgGADQgHADgHABQgNAAgEgNg");
	this.shape_2.setTransform(62.75,41.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAoQgMgRAAgVQAAgXAOgRQAOgRAVgBQARAAAMAMQANALAAAWIhKAAQABAaALAMQAMANAOAAQAMgBAJgGQAIgHAHgLIAEABQgFAPgNAMQgNAOgSAAQgWAAgMgRgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAGgBAKIAwAAIAAAAg");
	this.shape_3.setTransform(53.875,42.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbBSIAAgDQALgBAEgDQADgEAAgJIAAhyIgBgLQgCgFgHAAIgDABIgGABIAAgEIAlgLIABAAIAAADIAACMQAAAKAEADQAEADAKABIAAADg");
	this.shape_4.setTransform(45.25,39.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3BSIAAgFQALgBADgDQADgFAAgIIAAhvQAAgJgCgCQgCgEgGAAIgCABIgEAAIAAgDIALgEIAYgIIABABIAAABIAAAQQAIgJAGgDQAJgHALABQARAAALANQAMAOAAAXQAAAYgOASQgOATgVAAQgHAAgEgBQgHgDgGgGIAAAmQAAAMADADQAEACAMABIAAAFgAgKg9QgHAGAAAFIAAA5QADAIAGAFQAGADAHAAQANAAAJgMQAIgMAAgWQAAgWgJgLQgJgKgMgBQgIABgHAFg");
	this.shape_5.setTransform(35.625,45.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAmA3IAAgEQALAAACgEQAEgDAAgKIAAgxQAAgLgDgGQgEgJgMAAQgIAAgHAFIgLAJIAAA7QgBAKAEAEQADAFALABIAAADIg0AAIAAgDQAKgCADgEQADgEABgPIAAggQAAgSgDgHQgDgLgNAAQgIAAgGAEQgHADgFAHIAAA/QAAAJADADQADAEAKAAIAAADIg1AAIAAgDQAJgBADgCQAFgEgBgKIAAg8QAAgIgCgDQgCgDgFAAIgDABIgDAAIAAgEIAIgCIAPgGIALgEIAAABIAAACIAAAQQAMgLAJgEQAIgEAJAAQAMAAAGAIQAEAFACAHQAJgIAGgFQAMgHAMAAQASAAAGAPQAEAJAAATIAAAvQAAAJAEADQAEADAJABIAAADg");
	this.shape_6.setTransform(20.8,42.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_7.setTransform(5.225,42.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAqQgOgOAAgZQAAgXAQgSQAPgRAWAAQAPAAALAHQAKAIAAAJQAAAEgCADQgDADgGAAQgEAAgDgCQgDgDgBgGIgCgFQgBgHgEgCQgEgDgGAAQgNAAgJAMQgJAMAAATQAAARAKAOQAKAOAQAAQANAAAJgIIAMgOIAEACQgHAOgIAIQgOAPgSAAQgSAAgOgOg");
	this.shape_8.setTransform(-6.125,42.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_9.setTransform(-21.875,42.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcBSIAAgEQANgBAEgDQADgDAAgOIAAg4QAAgGgCgDQgBgFgGAAIgCAAIgIACIAAgDIAGgCIAcgKIADgCIABACIAABTQAAAOADADQAEAEAKAAIAAAEgAgJg8QgDgEAAgFQAAgFADgDQAEgEAFAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEAEgEAAQgFAAgEgEg");
	this.shape_10.setTransform(-30,39.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAGA3IAAgDQAJgBADgEQADgDAAgMIAAgxQAAgKgDgHQgEgHgKAAQgGAAgHAFIgKAJIAABBQAAAIADADQAEADAIAAIAAADIgzAAIAAgDQAIgBAEgDQADgDAAgLIAAg7QAAgHgBgDQgDgEgGAAIgDAAIgCAAIAAgEIAWgHIALgEIABABIABABIAAARQAKgKAGgDQAJgGAJAAQAIAAAHAEQAMAJAAAXIAAA2QAAAIAEAEQADAEAIAAIAAADg");
	this.shape_11.setTransform(-45.275,42.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_12.setTransform(-57.375,42.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbBSIAAgEQAMgBAEgDQADgDAAgOIAAg4QAAgGgBgDQgCgFgGAAIgCAAIgHACIAAgDIAFgCIAcgKIADgCIABACIAABTQAAAOADADQADAEALAAIAAAEgAgIg8QgEgEAAgFQAAgFAEgDQADgEAFAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEAEgEAAQgFAAgDgEg");
	this.shape_13.setTransform(-66.65,39.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_14.setTransform(-74.475,42.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_15.setTransform(-83.775,42.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgcBSIAAgEQANgBADgDQAEgDAAgOIAAg4QAAgGgCgDQgBgFgGAAIgCAAIgIACIAAgDIAGgCIAbgKIAFgCIAAACIAABTQAAAOADADQAEAEALAAIAAAEgAgJg8QgDgEAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQAEADAAAFQAAAFgEAEQgDAEgEAAQgFAAgEgEg");
	this.shape_16.setTransform(-91.9,39.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAmA3IAAgEQALAAADgEQADgDAAgKIAAgxQAAgLgCgGQgFgJgNAAQgHAAgIAFIgLAJIAAA7QABAKADAEQADAFALABIAAADIg1AAIAAgDQALgCAEgEQACgEAAgPIAAggQAAgSgCgHQgEgLgMAAQgHAAgIAEQgGADgGAHIAAA/QAAAJADADQAEAEAKAAIAAADIg1AAIAAgDQAJgBADgCQAEgEABgKIAAg8QAAgIgCgDQgDgDgFAAIgEABIgDAAIAAgEIAJgCIAPgGIALgEIABABIAAACIAAAQQALgLAIgEQAJgEAJAAQAMAAAGAIQAEAFADAHQAIgIAHgFQAKgHAMAAQATAAAHAPQADAJAAATIAAAvQAAAJAEADQADADAKABIAAADg");
	this.shape_17.setTransform(-104.35,42.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgjAoQgMgRAAgVQAAgXAOgSQAOgQAVgBQARAAAMAMQANAMAAAUIhKAAQABAaALANQAMANAOAAQAMgBAJgGQAIgHAHgMIAEACQgFAPgNAMQgNANgSABQgWgBgMgQgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAGgBAKIAwAAIAAAAg");
	this.shape_18.setTransform(41.175,16.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAHBSIAAgEQAKgBACgDQAEgEAAgNIAAgvQAAgKgEgHQgEgIgKAAQgIAAgJAHQgJAHAAABIAAA5QAAAOADADQADADALABIAAAEIg0AAIAAgEQAJgBADgDQADgEAAgNIAAhvQAAgHgCgDQgBgDgHAAIgCAAIgDABIAAgFIAMgDIALgDIAMgEIAAABIAABIQAHgJAGgDQAJgIAMAAQATAAAHAQQADAJABANIAAAvQAAANACAEQADADAKABIAAAEg");
	this.shape_19.setTransform(29.85,13.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgPA6QgCgGAAgMIAAhGIgNAAIAAgBIgBgBIABgCIADgCIALgMIAQgVIACAAIAAABIAAAdIAYAAIAAAJIgYAAIAABDQAAAJABAEQAEAIAIAAQAEAAADgCIAHgHIADADIgDAEQgGAIgGADQgIAEgGAAQgMAAgGgNg");
	this.shape_20.setTransform(20.75,15.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgjAoQgMgRAAgVQAAgXAOgSQAOgQAVgBQARAAAMAMQANAMAAAUIhKAAQABAaALANQAMANAOAAQAMgBAJgGQAIgHAHgMIAEACQgFAPgNAMQgNANgSABQgWgBgMgQgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAGgBAKIAwAAIAAAAg");
	this.shape_21.setTransform(5.875,16.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggAqQgOgOAAgZQAAgXAQgSQAPgRAWAAQAPAAALAHQAKAIAAAJQAAAEgCADQgDADgGAAQgEAAgDgCQgDgDgBgGIgCgFQgBgHgEgCQgEgDgGAAQgNAAgJAMQgJAMAAATQAAARAKAOQAKAOAQAAQANAAAJgIIAMgOIAEACQgHAOgIAIQgOAPgSAAQgSAAgOgOg");
	this.shape_22.setTransform(-4.825,16.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAGA3IAAgDQAJgBADgEQADgDAAgMIAAgxQAAgKgDgHQgEgHgKAAQgGAAgHAFIgKAJIAABBQAAAIADADQAEADAIAAIAAADIgzAAIAAgDQAIgBAEgDQADgDAAgLIAAg7QAAgHgBgDQgDgEgGAAIgDAAIgCAAIAAgEIAWgHIALgEIABABIABABIAAARQAKgKAGgDQAJgGAJAAQAIAAAHAEQAMAJAAAXIAAA2QAAAIAEAEQADAEAIAAIAAADg");
	this.shape_23.setTransform(-16.025,16.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_24.setTransform(-28.125,16.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjAoQgMgRAAgVQAAgXAOgSQAOgQAVgBQARAAAMAMQANAMAAAUIhKAAQABAaALANQAMANAOAAQAMgBAJgGQAIgHAHgMIAEACQgFAPgNAMQgNANgSABQgWgBgMgQgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAGgBAKIAwAAIAAAAg");
	this.shape_25.setTransform(-45.425,16.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgnA3IAAgEQALgBAEgCQADgDAAgKIAAg0QAAgLgCgFQgCgFgGAAIgDAAIgEABIAAgEIAOgFIAJgDIAMgFIABAAIAAADIAAATQAHgKAHgGQAHgGAIAAQAFAAAEADQAEAEAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEQgFgEgCAAQgEAAgGAGQgFAHAAAHIAAA0QAAAKADAEQAFAEALgBIAAAEg");
	this.shape_26.setTransform(-54.575,16.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWA3IAAgCIAAgTQgIAKgGAEQgJAHgLAAQgKAAgJgHQgJgHAAgRIAAg8QAAgJgFgDQgCgCgJgBIAAgDIAjAAIAABKQABAIACAFQAEAIAMAAQAHAAAIgFIAIgIIAAg/QAAgJgEgDQgDgDgKAAIAAgEIAlAAIAABRQAAAIADADQADADAKAAIAAADIgKADIgKADIgOAFIgBAAg");
	this.shape_27.setTransform(-64.8,16.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_28.setTransform(-75.175,16.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnA3IAAgEQALgBAEgCQADgDAAgKIAAg0QAAgLgCgFQgCgFgGAAIgDAAIgEABIAAgEIAOgFIAJgDIAMgFIABAAIAAADIAAATQAHgKAHgGQAHgGAIAAQAFAAAEADQAEAEAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEQgFgEgCAAQgEAAgGAGQgFAHAAAHIAAA0QAAAKADAEQAFAEALgBIAAAEg");
	this.shape_29.setTransform(-89.825,16.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_30.setTransform(-99.975,16.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgrBSIAAgDQANgBAEgEQAEgEAAgNIAAhKIgUAAIAAgIIAUAAQAAgTAFgNQAJgYAZAAQAKAAAJAEQAIAFAAAGQAAAEgDADQgDAEgEAAQgDgBgDgCIgFgHIgCgDIgEgEQgDgCgEAAQgIAAgCAJQgCAFAAAHIAAAcIAcAAIAAAIIgcAAIAABKQAAANACAEQAEADAPACIAAADg");
	this.shape_31.setTransform(-109.025,13.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAfA4IgBgBIgdhGIgcBGIAAABIgBAAIgCgBIgjhWIgHgRQgCgDgGAAIAAgEIAsAAIAAAEQgGAAgDACQgCACAAAEQAAADAEAOIAIATIANAfIAVgsIAAgBIgDgJIgEgLQgDgGgDgCQgDgCgFAAIAAgEIAwAAIAAAEQgHAAgDACQgEACAAAFIABAEIACAHIAVA2IAVgxIADgJIACgIQAAgEgDgCQgDgCgFAAIAAgEIAeAAIAAAEQgDAAgCACIgFALIgmBcIgBACg");
	this.shape_32.setTransform(93.225,-9.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_33.setTransform(78.575,-9.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAGA3IAAgDQAJgBADgEQADgDAAgMIAAgxQAAgKgDgHQgEgHgKAAQgGAAgHAFIgKAJIAABBQAAAIADADQAEADAIAAIAAADIgzAAIAAgDQAIgBAEgDQADgDAAgLIAAg7QAAgHgBgDQgDgEgGAAIgDAAIgCAAIAAgEIAWgHIALgEIABABIABABIAAARQAKgKAGgDQAJgGAJAAQAIAAAHAEQAMAJAAAXIAAA2QAAAIAEAEQADAEAIAAIAAADg");
	this.shape_34.setTransform(66.675,-9.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAHBSIAAgEIAFAAIADgBQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgBgDIgkgwIAAAsQAAAIAGADQAEABAIAAIAAAEIg4AAIAAgEQALgBAEgCQAEgDAAgKIAAh1QAAgIgDgCQgDgDgFABIgEAAIgEAAIAAgDIALgDIAUgGIAGgCIABAAIAAACIAABiIAggcIAFgFIABgEQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgJgBIAAgDIAxAAIAAADQgOABgIAFQgHAEgXATIgGAHIAUAcQARAVAJAHQAIAIAKAAIAAAEg");
	this.shape_35.setTransform(54.675,-12.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgtBNQgGgEAAgGQAAgFADgEQAEgCAFAAQADAAAGACIAJACQAGAAAHgQQAHgQAAgFIAAgCIgBgDIglhPQgEgIgDgEQgDgCgFgBIAAgDIAxAAIAAADIgJABQgFACAAAEIABAEIACAFIAaA6IAWg6IABgFIABgEQAAgBAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgDAAIAAgDIAgAAIAAADQgFAAgCADQgDAEgBAEIglBhQgJAZgJALQgIAMgOAAQgGAAgGgDg");
	this.shape_36.setTransform(36.525,-6.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgbBSIAAgDQALgBADgDQAFgEAAgJIAAhyIgBgLQgDgFgHAAIgEABIgEABIAAgEIAlgLIABAAIAAADIAACMQAAAKADADQADADAMABIAAADg");
	this.shape_37.setTransform(27.3,-12.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAGA3IAAgDQAJgBADgEQADgDAAgMIAAgxQAAgKgDgHQgEgHgKAAQgGAAgHAFIgKAJIAABBQAAAIADADQAEADAIAAIAAADIgzAAIAAgDQAIgBAEgDQADgDAAgLIAAg7QAAgHgBgDQgDgEgGAAIgDAAIgCAAIAAgEIAWgHIALgEIABABIABABIAAARQAKgKAGgDQAJgGAJAAQAIAAAHAEQAMAJAAAXIAAA2QAAAIAEAEQADAEAIAAIAAADg");
	this.shape_38.setTransform(18.025,-9.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_39.setTransform(5.925,-9.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgbBSIAAgDQALgBADgDQAEgEABgJIAAhyIgCgLQgCgFgHAAIgDABIgGABIAAgEIAmgLIABAAIAAADIAACMQgBAKAEADQADADAMABIAAADg");
	this.shape_40.setTransform(-9.35,-12.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgbBSIAAgDQALgBADgDQAFgEAAgJIAAhyIgBgLQgDgFgHAAIgEABIgEABIAAgEIAlgLIABAAIAAADIAACMQAAAKADADQADADAMABIAAADg");
	this.shape_41.setTransform(-16,-12.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbBSIAAgEQAMgBADgDQAEgDAAgOIAAg4QAAgGgBgDQgCgFgFAAIgDAAIgHACIAAgDIAFgCIAcgKIADgCIABACIAABTQAAAOADADQADAEALAAIAAAEgAgIg8QgEgEAAgFQAAgFAEgDQADgEAFAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEAEgEAAQgFAAgDgEg");
	this.shape_42.setTransform(-22.65,-12.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAfA4IgBgBIgdhGIgcBGIAAABIgBAAIgCgBIgjhWIgHgRQgCgDgGAAIAAgEIAsAAIAAAEQgGAAgDACQgCACAAAEQAAADAEAOIAIATIANAfIAVgsIAAgBIgDgJIgEgLQgDgGgDgCQgDgCgFAAIAAgEIAwAAIAAAEQgHAAgDACQgEACAAAFIABAEIACAHIAVA2IAVgxIADgJIACgIQAAgEgDgCQgDgCgFAAIAAgEIAeAAIAAAEQgDAAgCACIgFALIgmBcIgBACg");
	this.shape_43.setTransform(-34.675,-9.35);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgjAnQgMgQAAgVQAAgXAOgSQAOgRAVAAQARAAAMAMQANAMAAAUIhKAAQABAaALANQAMANAOgBQAMAAAJgGQAIgHAHgMIAEACQgFAPgNAMQgNANgSABQgWgBgMgRgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_44.setTransform(-54.625,-9.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAfA4IgBgBIgdhGIgcBGIAAABIgBAAIgCgBIgjhWIgHgRQgCgDgGAAIAAgEIAsAAIAAAEQgGAAgDACQgCACAAAEQAAADAEAOIAIATIANAfIAVgsIAAgBIgDgJIgEgLQgDgGgDgCQgDgCgFAAIAAgEIAwAAIAAAEQgHAAgDACQgEACAAAFIABAEIACAHIAVA2IAVgxIADgJIACgIQAAgEgDgCQgDgCgFAAIAAgEIAeAAIAAAEQgDAAgCACIgFALIgmBcIgBACg");
	this.shape_45.setTransform(-68.625,-9.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgPA6QgCgGAAgMIAAhGIgNAAIAAgBIgBgBIABgCIADgCIALgLIAQgXIACABIAAABIAAAeIAYAAIAAAIIgYAAIAABCQAAAKABAEQAEAIAIAAQAEAAADgCIAHgHIADADIgDADQgGAJgGADQgIAEgGAAQgMgBgGgMg");
	this.shape_46.setTransform(-86.35,-10.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAWA3IAAgCIAAgTQgHAKgHAEQgJAHgLAAQgKAAgJgHQgKgHAAgRIAAg8QAAgJgDgDQgDgCgIgBIAAgDIAiAAIAABKQAAAIADAFQAEAIAMAAQAHAAAHgFIAJgIIAAg/QAAgJgDgDQgEgDgLAAIAAgEIAmAAIAABRQABAIADADQACADAJAAIAAADIgJADIgKADIgOAFIgBAAg");
	this.shape_47.setTransform(-96,-9.325);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgbBOQgMgFAAgFIAAh7QAAgHgBgDQgCgDgHAAIgGABIAAgEQANgDAMgEIALgEIAAACIAABHQADgGAGgFQAKgJAOAAQASAAALAPQAMAOAAAXQAAAZgPARQgQASgZAAQgNAAgNgFgAgLgIQgIAFAAAHIAAA8QABAGAIACQAIADAFAAQARAAAHgMQAIgNAAgRQAAgSgHgOQgIgOgQAAQgHAAgIAFg");
	this.shape_48.setTransform(-108.2,-12.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMAZQAMgHADgHQAFgHgBgEIgBgCIgCgBIgHABQgFAAgEgDQgEgDAAgHQAAgEAEgFQADgEAHAAQAHAAAGAGQAGAFAAALQAAALgJAKQgIAKgJAEg");
	this.shape_49.setTransform(94.05,-29.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_50.setTransform(85.325,-35.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgbBSIAAgDQALgBAEgDQADgEAAgJIAAhyIgBgLQgCgFgHAAIgDABIgGABIAAgEIAlgLIABAAIAAADIAACMQAAAKAEADQAEADAKABIAAADg");
	this.shape_51.setTransform(77.2,-38.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgoAxQgIgHABgLQgBgRASgLQAKgGAfgMIAAgKQAAgMgCgFQgEgHgMAAQgFAAgGACQgGAEAAAFIACAFIAAAEQAAAHgFACQgCABgEAAQgEAAgDgDQgEgDAAgFQAAgHALgKQAKgIAUgBQAWAAAHAPQAEAIABAQIAAAuIABAJQABAFAFgBIAFAAIAGgEIAAAGQgEAEgEADQgHAFgHAAQgIAAgDgFQgEgGgBgGIgNALQgLAGgKABQgKgBgHgHgAgKAAQgRAKAAANQAAALAHAFQAFADAGAAQAHAAAHgEQAGgFAAgGIAAglQgMAFgJAFg");
	this.shape_52.setTransform(69,-35.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgOA7QgDgIAAgLIAAhGIgNAAIAAgBIgBgBIABgCIADgCIALgLIAQgXIACABIABABIAAAeIAXAAIAAAIIgYAAIAABCQAAAKACAEQACAIAJAAQADAAAEgCIAHgGIADACIgCADQgHAJgHAEQgGADgGAAQgNgBgFgLg");
	this.shape_53.setTransform(60.1,-36.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgjAnQgMgQAAgVQAAgXAOgSQAOgRAVAAQARAAAMAMQANAMAAAUIhKAAQABAaALANQAMAMAOAAQAMAAAJgGQAIgHAHgMIAEACQgFAPgNANQgNANgSgBQgWAAgMgRgAATgTQgBgMgDgFQgGgLgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_54.setTransform(51.225,-35.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAmA3IAAgEQALAAACgEQAEgDAAgKIAAgxQAAgLgDgGQgEgJgNAAQgHAAgHAFIgMAJIAAA7QAAAKAEAEQAEAFAKABIAAADIg1AAIAAgDQAMgCACgEQADgEAAgPIAAggQAAgSgCgHQgEgLgMAAQgIAAgGAEQgHADgGAHIAAA/QAAAJAEADQADAEAKAAIAAADIg1AAIAAgDQAJgBADgCQAEgEAAgKIAAg8QAAgIgBgDQgDgDgFAAIgDABIgEAAIAAgEIAJgCIAPgGIALgEIAAABIAAACIAAAQQAMgLAIgEQAJgEAJAAQAMAAAGAIQAEAFACAHQAJgIAHgFQALgHALAAQATAAAGAPQAEAJAAATIAAAvQAAAJAEADQADADAKABIAAADg");
	this.shape_55.setTransform(36.8,-35.475);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgnA3IAAgEQALgBAEgCQADgDAAgKIAAg0QAAgLgCgFQgCgFgGAAIgDAAIgEABIAAgEIAOgFIAJgDIAMgFIABAAIAAADIAAATQAHgKAHgGQAHgGAIAAQAFAAAEADQAEAEAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEQgFgEgCAAQgEAAgGAGQgFAHAAAHIAAA0QAAAKADAEQAFAEALgBIAAAEg");
	this.shape_56.setTransform(17.425,-35.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgjAnQgMgQAAgVQAAgXAOgSQAOgRAVAAQARAAAMAMQANAMAAAUIhKAAQABAaALANQAMAMAOAAQAMAAAJgGQAIgHAHgMIAEACQgFAPgNANQgNANgSgBQgWAAgMgRgAATgTQgBgMgDgFQgGgLgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_57.setTransform(7.975,-35.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAGBSIAAgEQALgBACgDQAEgEAAgNIAAgvQgBgKgDgHQgEgIgKAAQgJAAgIAHQgJAHAAABIAAA5QAAAOADADQADADALABIAAAEIg0AAIAAgEQAJgBADgDQADgEAAgNIAAhvQAAgHgCgDQgBgDgHAAIgCAAIgDABIAAgFIAMgDIALgDIAMgEIAAABIAABIQAHgJAGgDQAJgIAMAAQATAAAHAQQADAJABANIAAAvQAAANACAEQAEADAJABIAAAEg");
	this.shape_58.setTransform(-3.35,-38.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgPA7QgCgIAAgLIAAhGIgNAAIAAgBIgBgBIABgCIADgCIALgLIAQgXIACABIAAABIAAAeIAYAAIAAAIIgYAAIAABCQAAAKACAEQACAIAJAAQAEAAADgCIAHgGIADACIgDADQgGAJgHAEQgHADgFAAQgNgBgGgLg");
	this.shape_59.setTransform(-12.45,-36.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_60.setTransform(-22.025,-35.325);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgtBMQgGgCAAgIQAAgEADgEQAEgCAFAAQADgBAGADIAJACQAGAAAHgQQAHgQAAgFIAAgCIgBgDIglhPQgEgIgDgEQgDgCgFgBIAAgDIAxAAIAAADIgJABQgFACAAAEIABAEIACAFIAaA6IAWg6IABgFIABgEQAAgBAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEgBIgDAAIAAgDIAgAAIAAADQgFABgCACQgDADgBAFIglBhQgJAZgJALQgIAMgOAAQgGAAgGgEg");
	this.shape_61.setTransform(-40.075,-32.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgbBSIAAgDQALgBADgDQAFgEAAgJIAAhyIgBgLQgDgFgHAAIgEABIgEABIAAgEIAlgLIABAAIAAADIAACMQAAAKADADQADADAMABIAAADg");
	this.shape_62.setTransform(-49.3,-38.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgbBOQgMgFAAgFIAAh7QAAgHgBgDQgDgDgGAAIgGABIAAgEQANgDALgEIAMgEIAAACIAABHQADgGAGgFQAKgJAOAAQARAAAMAPQANAOAAAXQAAAZgQARQgQASgZAAQgNAAgNgFgAgLgIQgIAFAAAHIAAA8QABAGAIACQAIADAFAAQARAAAIgMQAHgNAAgRQAAgSgHgOQgHgOgRAAQgIAAgHAFg");
	this.shape_63.setTransform(-58.95,-38.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgcBSIAAgEQANgBADgDQAEgDAAgOIAAg4QAAgGgCgDQgBgFgFAAIgDAAIgIACIAAgDIAGgCIAbgKIAFgCIAAACIAABTQAAAOADADQAEAEALAAIAAAEgAgJg8QgDgEAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQAEADAAAFQAAAFgEAEQgDAEgEAAQgFAAgEgEg");
	this.shape_64.setTransform(-67.95,-38.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_65.setTransform(-75.775,-35.425);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_66.setTransform(-85.075,-35.425);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_67.setTransform(-95.925,-35.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("Ag3BRIAAgDQALgCADgEQADgDAAgJIAAhwQAAgIgCgCQgCgDgGAAIgCAAIgEABIAAgFIALgDIAYgIIABAAIAAABIAAARQAIgJAGgDQAJgGALAAQARAAALANQAMAOAAAYQAAAXgOASQgOATgVAAQgHAAgEgCQgHgCgGgHIAAAnQAAAMADACQAEADAMABIAAAEgAgKg9QgHAGAAAEIAAA7QADAHAGAEQAGAEAHAAQANAAAJgNQAIgLAAgXQAAgVgJgKQgJgMgMAAQgIAAgHAGg");
	this.shape_68.setTransform(-108.175,-32.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAGBSIAAgEQALgBADgDQADgEAAgNIAAgvQgBgKgDgHQgEgIgKAAQgJAAgIAHQgJAHAAABIAAA5QAAAOADADQAEADAKABIAAAEIg1AAIAAgEQAKgBADgDQADgEAAgNIAAhvQAAgHgBgDQgCgDgHAAIgCAAIgDABIAAgFIAMgDIALgDIAMgEIAAABIAABIQAHgJAGgDQAJgIAMAAQATAAAHAQQADAJAAANIAAAvQAAANADAEQAEADAJABIAAAEg");
	this.shape_69.setTransform(73.25,-64.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgOA7QgDgIAAgLIAAhGIgNAAIAAgBIgBAAIABgDIADgCIALgLIAQgXIACABIABACIAAAdIAXAAIAAAIIgYAAIAABCQAAAKACAEQACAIAJAAQADAAAEgCIAHgGIADACIgCADQgHAJgHAEQgGACgGAAQgNABgFgMg");
	this.shape_70.setTransform(64.15,-62.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgbBSIAAgEQAMgBAEgDQADgDAAgOIAAg4QAAgGgBgDQgCgFgGAAIgCAAIgIACIAAgDIAGgCIAcgKIADgCIABACIAABTQAAAOADADQAEAEAKAAIAAAEgAgJg8QgDgEAAgFQAAgFADgDQAEgEAFAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEAEgEAAQgFAAgEgEg");
	this.shape_71.setTransform(57.3,-64.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAfA3IgBAAIgdhGIgcBGIAAAAIgBAAIgCAAIgjhWIgHgRQgCgCgGgBIAAgDIAsAAIAAADQgGABgDABQgCACAAAEQAAAEAEANIAIATIANAfIAVgrIAAgCIgDgJIgEgLQgDgGgDgCQgDgBgFgBIAAgDIAwAAIAAADQgHABgDABQgEACAAAEIABAGIACAGIAVA2IAVgxIADgJIACgIQAAgEgDgCQgDgBgFgBIAAgDIAeAAIAAADQgDABgCABIgFAMIgmBbIgBABg");
	this.shape_72.setTransform(45.275,-61.35);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgpBJQgLgHAAgJQAAgEADgEIALgMIAIgHIABgCIgIgDQgEgEAAgFQAAgEAEgFQAEgGANgKQgLgEgFgJQgGgJAAgLQAAgOALgMQALgNATAAQAIAAAKAEQAKAFAKAAIAHAAIAIgBIABAAIAAAKIgUAAIADAJQACAGAAAGQAAAOgLALQgLALgSAAIgKgBQgDAAgGAGQgGAEAAAEQAAAEAIABIANACQAcAAALADQASAFAAATQAAASgUAMQgVALgVgBQgSABgMgJgAgdAlQgGAHAAAHQAAAJALAEQALAEANAAQAUAAAMgGQAMgIAAgKQAAgHgKgCQgFgCgRAAIgKAAIgHgBIgJgBIgIgCQgCAAgFAIgAgUg/QgDAGABAJQgBAOAIALQAGAMALAAQAGAAAFgEQAGgGABgOQgBgLgFgOQgGgOgMAAQgMAAgEALg");
	this.shape_73.setTransform(24.65,-58.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAGA3IAAgDQAJgBADgEQADgDAAgMIAAgxQAAgKgDgHQgEgHgKAAQgGAAgHAFIgKAJIAABBQAAAIADADQAEADAIAAIAAADIgzAAIAAgDQAIgBAEgDQADgDAAgLIAAg7QAAgHgBgDQgDgEgGAAIgDAAIgCAAIAAgEIAWgHIALgEIABABIABABIAAARQAKgKAGgDQAJgGAJAAQAIAAAHAEQAMAJAAAXIAAA2QAAAIAEAEQADAEAIAAIAAADg");
	this.shape_74.setTransform(12.725,-61.525);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_75.setTransform(0.625,-61.325);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgbBSIAAgDQALgBAEgDQADgEAAgJIAAhyIgBgLQgCgFgHAAIgDABIgGABIAAgEIAlgLIACAAIAAADIAACMQAAAKADADQAEADALABIAAADg");
	this.shape_76.setTransform(-8.65,-64.225);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgoAxQgIgHABgLQAAgRARgLQAKgGAggMIAAgKQAAgMgDgFQgEgHgMgBQgGAAgFADQgGADABAGIABAFIAAAEQAAAGgFADQgCACgDAAQgGgBgCgDQgEgDAAgFQAAgHALgKQAKgIAUgBQAVAAAIAPQAFAIAAAQIAAAuIABAJQABAFAFgBIAEAAIAHgEIAAAGQgEAEgEADQgHAFgHAAQgIAAgEgFQgDgGAAgHIgOAMQgLAGgKAAQgKAAgHgHgAgKAAQgRAKAAANQAAALAHAFQAFADAFAAQAIAAAHgEQAGgEABgHIAAgkQgNAEgJAFg");
	this.shape_77.setTransform(-16.85,-61.45);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgMAZQAMgHADgHQAFgHAAgEIgCgCIgCgBIgHABQgEAAgFgDQgEgDAAgHQAAgEADgFQAEgEAHAAQAHAAAGAGQAGAFAAALQAAALgIAKQgJAKgJAEg");
	this.shape_78.setTransform(-30.4,-55.525);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAGA3IAAgDQAJgBADgEQADgDAAgMIAAgxQAAgKgDgHQgEgHgKAAQgGAAgHAFIgKAJIAABBQAAAIADADQAEADAIAAIAAADIgzAAIAAgDQAIgBAEgDQADgDAAgLIAAg7QAAgHgBgDQgDgEgGAAIgDAAIgCAAIAAgEIAWgHIALgEIABABIABABIAAARQAKgKAGgDQAJgGAJAAQAIAAAHAEQAMAJAAAXIAAA2QAAAIAEAEQADAEAIAAIAAADg");
	this.shape_79.setTransform(-40.575,-61.525);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_80.setTransform(-52.675,-61.325);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgnA3IAAgEQALgBAEgCQADgDAAgKIAAg0QAAgLgCgFQgCgFgGAAIgDAAIgEABIAAgEIAOgFIAJgDIAMgFIABAAIAAADIAAATQAHgKAHgGQAHgGAIAAQAFAAAEADQAEAEAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEQgFgEgCAAQgEAAgGAGQgFAHAAAHIAAA0QAAAKADAEQAFAEALgBIAAAEg");
	this.shape_81.setTransform(-62.475,-61.525);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgbBSIAAgEQAMgBADgDQAEgDAAgOIAAg4QAAgGgBgDQgCgFgFAAIgDAAIgHACIAAgDIAFgCIAcgKIAEgCIAAACIAABTQAAAOADADQADAEALAAIAAAEgAgIg8QgEgEAAgFQAAgFAEgDQADgEAFAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEAEgEAAQgFAAgDgEg");
	this.shape_82.setTransform(-69.9,-64.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAUBSIAAgOQgHAHgFADQgIAFgKAAQgUAAgNgPQgMgPAAgVQAAgaAPgRQAPgRAVgBQAIABAHADQAEACAFAFIAAgmQAAgHgCgCQgBgDgGAAIgDAAIgEABIAAgFIAJgCIALgCIAJgEIAGgCIABAAIAAAMIgBAOIAAAPIAABeQAAAIACADQACADAIAAIACAAIADAAIAAADIgRAHIgSAGgAgagJQgIAMAAATQAAATAIAPQAJAOARAAQAJAAAFgFQAGgFAAgFIAAgyQAAgOgIgHQgIgGgHAAQgPAAgIANg");
	this.shape_83.setTransform(-85.025,-64.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAGA3IAAgDQAJgBADgEQADgDAAgMIAAgxQAAgKgDgHQgEgHgKAAQgGAAgHAFIgKAJIAABBQAAAIADADQAEADAIAAIAAADIgzAAIAAgDQAIgBAEgDQADgDAAgLIAAg7QAAgHgBgDQgDgEgGAAIgDAAIgCAAIAAgEIAWgHIALgEIABABIABABIAAARQAKgKAGgDQAJgGAJAAQAIAAAHAEQAMAJAAAXIAAA2QAAAIAEAEQADAEAIAAIAAADg");
	this.shape_84.setTransform(-97.175,-61.525);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgoAxQgIgHAAgLQABgRARgLQAKgGAggMIAAgKQAAgMgDgFQgEgHgLgBQgHAAgFADQgGADABAGIABAFIAAAEQAAAGgFADQgCACgDAAQgGgBgCgDQgDgDgBgFQAAgHALgKQAKgIAUgBQAWAAAHAPQAFAIAAAQIAAAuIABAJQABAFAFgBIAEAAIAHgEIAAAGQgEAEgEADQgHAFgHAAQgIAAgEgFQgDgGAAgHIgPAMQgLAGgJAAQgKAAgHgHgAgKAAQgRAKAAANQAAALAHAFQAFADAFAAQAIAAAHgEQAGgEABgHIAAgkQgNAEgJAFg");
	this.shape_85.setTransform(-108.1,-61.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgbBSIAAgDQALgBADgDQAFgEAAgJIAAhyIgBgLQgDgFgHAAIgEABIgEABIAAgEIAlgLIAAAAIAAADIAACMQABAKADADQADADALABIAAADg");
	this.shape_86.setTransform(70.6,-90.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgjAnQgMgQAAgWQAAgWAOgRQAOgSAVABQARAAAMALQANALAAAWIhKAAQABAaALAMQAMAMAOAAQAMABAJgHQAIgHAHgLIAEABQgFAPgNANQgNANgSgBQgWABgMgSgAATgTQgBgMgDgFQgGgLgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_87.setTransform(61.925,-87.35);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAHBSIAAgDIAFgBIADgBQABAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgCIgBgDIgkgwIAAAsQAAAIAGACQAEACAIABIAAADIg4AAIAAgDQALgCAEgDQAEgCAAgKIAAh0QAAgJgDgCQgDgCgFgBIgEAAIgEABIAAgDIALgDIAUgGIAGgBIABAAIAAABIAABiIAggcIAFgFIABgDQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgJgBIAAgDIAxAAIAAADQgOABgIAFQgHADgXAVIgGAGIAUAcQARAWAJAHQAIAGAKACIAAADg");
	this.shape_88.setTransform(50.675,-90.15);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AggAqQgOgOAAgZQAAgXAQgSQAPgRAWAAQAPAAALAHQAKAIAAAJQAAAEgCADQgDADgGAAQgEAAgDgCQgDgDgBgGIgCgFQgBgHgEgCQgEgDgGAAQgNAAgJAMQgJAMAAATQAAARAKAOQAKAOAQAAQANAAAJgIIAMgOIAEACQgHAOgIAIQgOAPgSAAQgSAAgOgOg");
	this.shape_89.setTransform(39.225,-87.425);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgbBSIAAgEQAMgBAEgDQADgDAAgOIAAg4QAAgGgBgDQgCgFgGAAIgCAAIgHACIAAgDIAFgCIAcgKIADgCIABACIAABTQAAAOADADQADAEALAAIAAAEgAgIg8QgEgEAAgFQAAgFAEgDQADgEAFAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEAEgEAAQgFAAgDgEg");
	this.shape_90.setTransform(30.65,-90.175);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAGA3IAAgDQAJgBADgEQADgDAAgMIAAgxQAAgKgDgHQgEgHgKAAQgGAAgHAFIgKAJIAABBQAAAIADADQAEADAIAAIAAADIgzAAIAAgDQAIgBAEgDQADgDAAgLIAAg7QAAgHgBgDQgDgEgGAAIgDAAIgCAAIAAgEIAWgHIALgEIABABIABABIAAARQAKgKAGgDQAJgGAJAAQAIAAAHAEQAMAJAAAXIAAA2QAAAIAEAEQADAEAIAAIAAADg");
	this.shape_91.setTransform(21.375,-87.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgrBSIAAgDQANgBAEgEQAEgEAAgNIAAhKIgUAAIAAgIIAUAAQAAgSAFgNQAJgZAZAAQAKAAAJAFQAIADAAAIQAAADgDADQgDADgEAAQgDAAgDgBIgFgIIgCgDIgEgEQgDgCgEAAQgIAAgCAJQgCAFAAAHIAAAcIAcAAIAAAIIgcAAIAABKQAAAOACADQAEADAPACIAAADg");
	this.shape_92.setTransform(6.225,-90.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_93.setTransform(-4.675,-87.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAUBSIAAgOQgHAHgFADQgIAFgKAAQgUAAgNgPQgMgPAAgVQAAgZAPgSQAPgRAVgBQAIABAHADQAEACAFAFIAAgmQAAgGgCgEQgBgCgGAAIgDAAIgEABIAAgFIAJgCIALgCIAJgEIAGgCIABAAIAAANIgBANIAAAPIAABeQAAAIACADQACADAIAAIACAAIADAAIAAADIgRAHIgSAGgAgagJQgIAMAAATQAAATAIAPQAJAOARAAQAJABAFgGQAGgFAAgFIAAgyQAAgOgIgGQgIgHgHAAQgPAAgIANg");
	this.shape_94.setTransform(-22.425,-90.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgjAnQgMgQAAgWQAAgWAOgRQAOgSAVABQARAAAMALQANALAAAWIhKAAQABAaALAMQAMAMAOAAQAMABAJgHQAIgHAHgLIAEABQgFAPgNANQgNANgSgBQgWABgMgSgAATgTQgBgMgDgFQgGgLgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_95.setTransform(-33.975,-87.35);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_96.setTransform(-43.775,-87.425);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_97.setTransform(-54.625,-87.325);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ag3BRIAAgDQALgBADgFQADgDAAgJIAAhwQAAgIgCgDQgCgCgGAAIgCAAIgEABIAAgFIALgDIAYgJIABABIAAABIAAAQQAIgHAGgEQAJgGALgBQARAAALAOQAMAOAAAYQAAAXgOASQgOATgVAAQgHAAgEgCQgHgCgGgHIAAAnQAAAMADACQAEADAMABIAAAEgAgKg9QgHAFAAAFIAAA6QADAJAGADQAGAEAHAAQANAAAJgNQAIgLAAgXQAAgVgJgKQgJgLgMAAQgIgBgHAGg");
	this.shape_98.setTransform(-66.875,-84.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAmA3IAAgEQAKAAADgEQAEgDAAgKIAAgxQAAgLgCgGQgFgJgMAAQgIAAgIAFIgKAJIAAA7QgBAKAEAEQADAFALABIAAADIg0AAIAAgDQALgCACgEQAEgEAAgPIAAggQAAgSgDgHQgDgLgNAAQgHAAgIAEQgGADgFAHIAAA/QAAAJADADQADAEAKAAIAAADIg1AAIAAgDQAJgBADgCQAFgEgBgKIAAg8QAAgIgCgDQgCgDgFAAIgEABIgCAAIAAgEIAIgCIAPgGIALgEIABABIAAACIAAAQQALgLAJgEQAIgEAJAAQAMAAAGAIQAEAFADAHQAIgIAGgFQAMgHAMAAQASAAAHAPQADAJAAATIAAAvQAAAJAEADQAEADAJABIAAADg");
	this.shape_99.setTransform(-81.7,-87.475);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_100.setTransform(-97.275,-87.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AggAqQgOgOAAgZQAAgXAQgSQAPgRAWAAQAPAAALAHQAKAIAAAJQAAAEgCADQgDADgGAAQgEAAgDgCQgDgDgBgGIgCgFQgBgHgEgCQgEgDgGAAQgNAAgJAMQgJAMAAATQAAARAKAOQAKAOAQAAQANAAAJgIIAMgOIAEACQgHAOgIAIQgOAPgSAAQgSAAgOgOg");
	this.shape_101.setTransform(-108.625,-87.425);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgtBMQgGgCAAgIQAAgEADgEQAEgDAFAAQADABAGACIAJACQAGAAAHgQQAHgQAAgFIAAgDIgBgCIglhPQgEgJgDgCQgDgDgFgBIAAgDIAxAAIAAADIgJABQgFACAAAEIABAEIACAFIAaA7IAWg8IABgEIABgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgEAAIgDAAIAAgDIAgAAIAAADQgFABgCADQgDADgBAEIglBhQgJAagJALQgIALgOAAQgGAAgGgEg");
	this.shape_102.setTransform(81.925,-110.75);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgbBSIAAgDQALgBAEgDQADgEAAgJIAAhyIgBgLQgCgFgHAAIgDABIgGABIAAgEIAlgLIABAAIAAADIAACMQAAAKAEADQAEADAKABIAAADg");
	this.shape_103.setTransform(72.7,-116.225);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgjAnQgMgQAAgWQAAgWAOgRQAOgSAVABQARAAAMALQANALAAAWIhKAAQABAaALAMQAMAMAOAAQAMABAJgHQAIgGAHgMIAEABQgFAPgNANQgNAMgSAAQgWABgMgSgAATgTQgBgMgDgFQgGgLgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_104.setTransform(64.025,-113.35);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgpBJQgLgHAAgJQAAgEADgEIAMgMIAHgHIACgCIgIgEQgFgDAAgFQAAgEAEgFQAEgFAOgMQgLgDgGgJQgGgJAAgLQAAgOAKgMQALgNAVAAQAHAAALAFQAKADAJAAIAIAAIAHAAIABAAIAAAJIgUAAIADAJQACAHAAAGQAAANgLAMQgLALgRAAIgLgBQgDAAgGAFQgGAFAAAEQAAAEAJACIALABQAdgBAMAEQARAFAAATQAAASgVALQgVALgTAAQgUAAgLgIgAgdAlQgGAHAAAHQAAAKALADQALAEANAAQAUAAAMgHQANgGAAgLQAAgHgKgDQgGgBgSAAIgJAAIgIgBIgIgBIgJgBQgBgBgFAIgAgUg/QgDAGAAAJQABANAGAMQAIAMAJAAQAHgBAEgDQAIgGgBgOQAAgLgFgOQgGgOgMAAQgLAAgFALg");
	this.shape_105.setTransform(52.7,-110.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgnA3IAAgEQALgBAEgCQADgDAAgKIAAg0QAAgLgCgFQgCgFgGAAIgDAAIgEABIAAgEIAOgFIAJgDIAMgFIABAAIAAADIAAATQAHgKAHgGQAHgGAIAAQAFAAAEADQAEAEAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEQgFgEgCAAQgEAAgGAGQgFAHAAAHIAAA0QAAAKADAEQAFAEALgBIAAAEg");
	this.shape_106.setTransform(43.275,-113.525);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgoAxQgIgHAAgLQABgRAQgLQALgGAggNIAAgJQgBgMgCgFQgEgIgLAAQgHAAgFAEQgFADAAAFIABAFIAAAEQAAAHgEACQgDABgDABQgFAAgDgEQgDgDAAgEQAAgJAKgIQAKgJATAAQAXAAAIAOQAEAIAAAQIAAAtIAAAKQACAFAFAAIAEgBIAHgEIAAAGQgEAEgFAEQgGAEgHAAQgIAAgEgFQgDgFAAgIIgPAMQgLAGgJAAQgKAAgHgHgAgKAAQgRAKAAANQAAALAHAFQAFADAFAAQAIAAAGgFQAIgEAAgGIAAgkQgNAEgJAFg");
	this.shape_107.setTransform(34.3,-113.45);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgbBSIAAgDQALgBAEgDQADgEAAgJIAAhyIgBgLQgCgFgHAAIgDABIgGABIAAgEIAmgLIABAAIAAADIAACMQgBAKAEADQAEADALABIAAADg");
	this.shape_108.setTransform(25.2,-116.225);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgtBMQgGgCAAgIQAAgEADgEQAEgDAFAAQADABAGACIAJACQAGAAAHgQQAHgQAAgFIAAgDIgBgCIglhPQgEgJgDgCQgDgDgFgBIAAgDIAxAAIAAADIgJABQgFACAAAEIABAEIACAFIAaA7IAWg8IABgEIABgFQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgCgEAAIgDAAIAAgDIAgAAIAAADQgFABgCADQgDADgBAEIglBhQgJAagJALQgIALgOAAQgGAAgGgEg");
	this.shape_109.setTransform(9.775,-110.75);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgbBSIAAgDQALgBADgDQAEgEABgJIAAhyIgCgLQgCgFgHAAIgEABIgFABIAAgEIAmgLIABAAIAAADIAACMQgBAKAEADQADADAMABIAAADg");
	this.shape_110.setTransform(0.55,-116.225);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgjAnQgMgQAAgWQAAgWAOgRQAOgSAVABQARAAAMALQANALAAAWIhKAAQABAaALAMQAMAMAOAAQAMABAJgHQAIgGAHgMIAEABQgFAPgNANQgNAMgSAAQgWABgMgSgAATgTQgBgMgDgFQgGgLgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_111.setTransform(-8.125,-113.35);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAHBSIAAgDIAFgBIADAAQABgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIgBgDIgBgCIgkgwIAAAsQAAAIAGACQAEADAIAAIAAADIg4AAIAAgDQALgCAEgDQAEgCAAgKIAAh0QAAgJgDgCQgDgDgFAAIgEAAIgEABIAAgDIALgDIAUgGIAGgBIABAAIAAABIAABhIAggbIAFgFIABgDQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIgJgBIAAgDIAxAAIAAADQgOABgIAEQgHAEgXAVIgGAGIAUAcQARAVAJAIQAIAGAKACIAAADg");
	this.shape_112.setTransform(-19.375,-116.15);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgbBSIAAgEQAMgBAEgDQADgDAAgOIAAg4QAAgGgBgDQgCgFgGAAIgCAAIgIACIAAgDIAGgCIAcgKIADgCIABACIAABTQAAAOADADQADAEALAAIAAAEgAgJg8QgDgEAAgFQAAgFADgDQAEgEAFAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEAEgEAAQgFAAgEgEg");
	this.shape_113.setTransform(-28.75,-116.175);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgbBSIAAgDQALgBAEgDQADgEAAgJIAAhyIgBgLQgCgFgHAAIgDABIgGABIAAgEIAlgLIABAAIAAADIAACMQAAAKAEADQAEADAKABIAAADg");
	this.shape_114.setTransform(-35.4,-116.225);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgjAnQgMgQAAgWQAAgWAOgRQAOgSAVABQARAAAMALQANALAAAWIhKAAQABAaALAMQAMAMAOAAQAMABAJgHQAIgGAHgMIAEABQgFAPgNANQgNAMgSAAQgWABgMgSgAATgTQgBgMgDgFQgGgLgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_115.setTransform(-50.075,-113.35);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AggAqQgOgOAAgZQAAgXAQgSQAPgRAWAAQAPAAALAHQAKAIAAAJQAAAEgCADQgDADgGAAQgEAAgDgCQgDgDgBgGIgCgFQgBgHgEgCQgEgDgGAAQgNAAgJAMQgJAMAAATQAAARAKAOQAKAOAQAAQANAAAJgIIAMgOIAEACQgHAOgIAIQgOAPgSAAQgSAAgOgOg");
	this.shape_116.setTransform(-60.775,-113.425);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgpAxQgGgHgBgLQAAgRARgLQALgGAggNIAAgJQgBgMgCgFQgEgIgLAAQgGAAgGAEQgFADAAAFIAAAFIABAEQAAAHgEACQgDABgDABQgFAAgEgEQgCgDAAgEQAAgJAKgIQAKgJATAAQAWAAAJAOQADAIAAAQIAAAtIABAKQACAFAFAAIAEgBIAGgEIAAAGQgDAEgFAEQgGAEgHAAQgIAAgEgFQgDgFAAgIIgPAMQgKAGgKAAQgKAAgIgHgAgKAAQgRAKAAANQAAALAHAFQAFADAGAAQAHAAAGgFQAIgEAAgGIAAgkQgNAEgJAFg");
	this.shape_117.setTransform(-70.9,-113.45);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgrBSIAAgEQANAAAEgEQAEgEAAgNIAAhKIgUAAIAAgIIAUAAQAAgSAFgOQAJgYAZAAQAKAAAJAFQAIADAAAHQAAAEgDADQgDADgEAAQgDAAgDgBIgFgIIgCgDIgEgEQgDgCgEAAQgIAAgCAJQgCAEAAAIIAAAcIAcAAIAAAIIgcAAIAABKQAAAOACADQAEADAPABIAAAEg");
	this.shape_118.setTransform(-79.775,-116.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgnA3IAAgEQALgBAEgCQADgDAAgKIAAg0QAAgLgCgFQgCgFgGAAIgDAAIgEABIAAgEIAOgFIAJgDIAMgFIABAAIAAADIAAATQAHgKAHgGQAHgGAIAAQAFAAAEADQAEAEAAAFQAAAFgDADQgDAEgEAAQgFAAgEgEQgFgEgCAAQgEAAgGAGQgFAHAAAHIAAA0QAAAKADAEQAFAEALgBIAAAEg");
	this.shape_119.setTransform(-88.475,-113.525);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAWA3IAAgCIAAgTQgHAKgHAEQgJAHgLAAQgKAAgJgHQgKgHAAgRIAAg8QAAgJgDgDQgDgCgIgBIAAgDIAiAAIAABKQAAAIADAFQAEAIAMAAQAHAAAHgFIAJgIIAAg/QAAgJgDgDQgEgDgLAAIAAgEIAmAAIAABRQABAIADADQACADAJAAIAAADIgJADIgKADIgOAFIgBAAg");
	this.shape_120.setTransform(-98.7,-113.325);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_121.setTransform(-109.075,-113.425);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgpAxQgGgHAAgLQgBgRASgLQAKgGAfgNIAAgJQAAgMgCgFQgEgIgMAAQgFABgGADQgGADAAAFIABAFIABAEQAAAHgEACQgDABgEABQgEAAgEgDQgDgEAAgEQAAgJALgIQAKgKAUABQAVAAAJAOQADAJAAAOIAAAuIACAKQABAEAFABIAFgBIAFgEIAAAGQgDAFgEADQgHAEgHAAQgIAAgDgFQgEgFgBgIIgNAMQgLAHgKgBQgKABgIgIgAgKAAQgRAKAAANQAAALAHAFQAFADAGAAQAHAAAHgFQAGgDAAgIIAAgjQgMAEgJAFg");
	this.shape_122.setTransform(100.4,-139.45);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgjAoQgMgRAAgWQAAgWAOgRQAOgRAVAAQARAAAMALQANAMAAAVIhKAAQABAaALAMQAMANAOAAQAMAAAJgHQAIgGAHgMIAEABQgFAPgNAMQgNANgSAAQgWAAgMgQgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_123.setTransform(83.275,-139.35);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAAA2IAAgDIgkhVQgFgKgEgEQgDgCgGgBIAAgEIAvAAIAAAEIgJACQgCABAAAEIABAEIABAFIAYA6IAUgzIADgJIACgGQAAgFgFgBIgHgCIAAgEIAiAAIAAAEQgGAAgDAEQgCAEgFAMIghBTIgCADIgCAAg");
	this.shape_124.setTransform(71.95,-139.35);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgoAxQgIgHAAgLQABgRARgLQAKgGAggNIAAgJQAAgMgDgFQgEgIgLAAQgHABgFADQgGADABAFIABAFIAAAEQAAAHgFACQgCABgDABQgGAAgCgDQgDgEgBgEQAAgJALgIQAKgKAUABQAWAAAHAOQAFAJAAAOIAAAuIABAKQABAEAFABIAEgBIAHgEIAAAGQgEAFgEADQgHAEgHAAQgIAAgEgFQgDgFAAgIIgPAMQgLAHgJgBQgKABgHgIgAgKAAQgRAKAAANQAAALAHAFQAFADAFAAQAIAAAHgFQAGgDABgIIAAgjQgNAEgJAFg");
	this.shape_125.setTransform(61.1,-139.45);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAHBSIAAgEQAKgBACgDQAEgEAAgNIAAgvQgBgKgDgHQgEgIgKAAQgJAAgIAHQgJAHAAABIAAA5QAAAOADADQADADALABIAAAEIg0AAIAAgEQAJgBADgDQADgEAAgNIAAhvQAAgHgCgDQgBgDgHAAIgCAAIgDABIAAgFIAMgDIALgDIAMgEIAAABIAABIQAHgJAGgDQAJgIAMAAQATAAAHAQQADAJABANIAAAvQAAANACAEQAEADAJABIAAAEg");
	this.shape_126.setTransform(49.3,-142.175);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_127.setTransform(31.275,-139.325);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgPA7QgCgIAAgLIAAhGIgNAAIAAgBIgBAAIABgCIADgEIALgLIAQgVIACAAIAAACIAAAcIAYAAIAAAJIgYAAIAABDQAAAIACAFQACAIAJAAQAEAAADgCIAHgHIADADIgDAEQgGAIgGADQgIADgFAAQgNAAgGgLg");
	this.shape_128.setTransform(22.2,-140.85);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAUBSIAAgOQgHAHgFADQgIAFgKAAQgUAAgNgPQgMgPAAgVQAAgZAPgSQAPgSAVAAQAIAAAHAEQAEACAFAFIAAgmQAAgHgCgDQgBgCgGAAIgDAAIgEABIAAgEIAJgDIALgDIAJgCIAGgDIABAAIAAANIgBANIAAAPIAABeQAAAIACADQACADAIAAIACAAIADAAIAAADIgRAGIgSAHgAgagJQgIAMAAATQAAATAIAPQAJAOARAAQAJABAFgGQAGgFAAgFIAAgzQAAgOgIgFQgIgHgHAAQgPAAgIANg");
	this.shape_129.setTransform(6.875,-142.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgjAoQgMgRAAgWQAAgWAOgRQAOgRAVAAQARAAAMALQANAMAAAVIhKAAQABAaALAMQAMANAOAAQAMAAAJgHQAIgGAHgMIAEABQgFAPgNAMQgNANgSAAQgWAAgMgQgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_130.setTransform(-4.675,-139.35);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AguA2IAAgDIA/hhIgeAAQgNAAgEAFQgDAEgCAMIgEAAIAAgcIBTAAIAAADIhABgIAhAAQAQAAAFgEQAEgEAFgSIAEABIgDAhg");
	this.shape_131.setTransform(-15.3,-139.375);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgcBSIAAgEQANgBADgDQAEgDAAgOIAAg4QAAgGgCgDQgBgFgGAAIgCAAIgIACIAAgDIAGgCIAbgKIAFgCIAAACIAABTQAAAOADADQAEAEALAAIAAAEgAgJg8QgDgEAAgFQAAgFADgDQAEgEAFAAQAEAAADAEQAEADAAAFQAAAFgEAEQgDAEgEAAQgFAAgEgEg");
	this.shape_132.setTransform(-23.95,-142.175);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_133.setTransform(-31.775,-139.425);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgjAoQgMgRAAgWQAAgWAOgRQAOgRAVAAQARAAAMALQANAMAAAVIhKAAQABAaALAMQAMANAOAAQAMAAAJgHQAIgGAHgMIAEABQgFAPgNAMQgNANgSAAQgWAAgMgQgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAHgBAJIAwAAIAAAAg");
	this.shape_134.setTransform(-41.925,-139.35);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAHBSIAAgEQAKgBACgDQADgEAAgNIAAgvQABgKgEgHQgEgIgLAAQgHAAgJAHQgJAHAAABIAAA5QAAAOAEADQACADAKABIAAAEIg0AAIAAgEQAKgBAEgDQACgEAAgNIAAhvQAAgHgCgDQgBgDgHAAIgCAAIgDABIAAgFIANgDIAKgDIALgEIAAABIAABIQAIgJAGgDQAJgIAMAAQATAAAHAQQAEAJAAANIAAAvQAAANADAEQADADAIABIAAAEg");
	this.shape_135.setTransform(-53.25,-142.175);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgPA7QgCgIAAgLIAAhGIgNAAIgBgBIAAAAIAAgCIAEgEIAMgLIAQgVIABAAIAAACIAAAcIAYAAIAAAJIgYAAIAABDQAAAIABAFQAEAIAHAAQAEAAAEgCIAHgHIADADIgDAEQgGAIgGADQgHADgHAAQgNAAgFgLg");
	this.shape_136.setTransform(-62.35,-140.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AglAoQgPgQAAgYQAAgXAPgQQAOgRAXAAQAXAAAPAQQAPAPAAAZQAAAWgOASQgPARgXAAQgWAAgQgRgAgTgrQgLALAAAaQAAAUAJASQAKASAPAAQAOAAAHgMQAHgMAAgUQAAgTgJgSQgJgSgRAAQgJAAgHAGg");
	this.shape_137.setTransform(-71.925,-139.325);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("Ag3BRIAAgEQALAAADgFQADgEAAgIIAAhvQAAgJgCgDQgCgDgGAAIgCABIgEAAIAAgDIALgEIAYgJIABABIAAACIAAAPQAIgHAGgEQAJgHALAAQARAAALAOQAMAOAAAYQAAAXgOASQgOATgVAAQgHAAgEgBQgHgDgGgGIAAAmQAAAMADADQAEACAMABIAAAEgAgKg9QgHAFAAAGIAAA5QADAIAGAFQAGADAHAAQANAAAJgMQAIgMAAgWQAAgWgJgLQgJgLgMABQgIAAgHAFg");
	this.shape_138.setTransform(-84.175,-136.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgtBNQgGgEAAgHQAAgEADgDQAEgEAFAAQADABAGACIAJACQAGAAAHgQQAHgQAAgFIAAgDIgBgCIglhPQgEgJgDgCQgDgDgFgBIAAgDIAxAAIAAADIgJABQgFACAAAEIABAEIACAFIAaA7IAWg8IABgEIABgFQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAQgCgBgEAAIgDgBIAAgDIAgAAIAAADQgFABgCADQgDADgBAEIglBhQgJAagJALQgIALgOAAQgGAAgGgDg");
	this.shape_139.setTransform(-95.975,-136.75);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAGBSIAAgEQALgBADgDQACgEAAgNIAAgvQAAgKgDgHQgEgIgLAAQgIAAgIAHQgJAHAAABIAAA5QAAAOAEADQACADAKABIAAAEIg0AAIAAgEQAKgBAEgDQACgEAAgNIAAhvQAAgHgBgDQgCgDgHAAIgCAAIgDABIAAgFIANgDIAKgDIALgEIAAABIAABIQAIgJAGgDQAJgIAMAAQATAAAHAQQAEAJgBANIAAAvQAAANAEAEQACADAJABIAAAEg");
	this.shape_140.setTransform(-107.9,-142.175);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_141.setTransform(1.475,-165.425);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgcBSIAAgEQANgBADgDQAEgDAAgOIAAg4QAAgGgCgDQgBgFgFAAIgDAAIgHACIAAgDIAFgCIAbgKIAFgCIAAACIAABTQAAAOADADQADAEAMAAIAAAEgAgIg8QgEgEAAgFQAAgFAEgDQADgEAFAAQAEAAADAEQAEADAAAFQAAAFgEAEQgDAEgEAAQgFAAgDgEg");
	this.shape_142.setTransform(-6.65,-168.175);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgiBAQgRgTAAggQAAgpAhgdQAcgZAlAAIAAAEQgOACgLAFQgLAFgIAIQgIAIgHANQgIANgCANIAMgHQAKgDAIAAQATAAAMANQANAMAAAXQAAAWgOARQgOARgWAAQgTAAgRgTgAgZAAQgEAGAAAPQAAATAIASQAIASARAAQAOAAAGgMQAHgMAAgQQAAgPgFgMQgJgTgSAAQgSAAgGAKg");
	this.shape_143.setTransform(-21.925,-168.075);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AggBQIAAgDQAPgBAEgDQAFgDAAgKIAAhsQgBgFgBgDQgBgDgFAAIgIABIgJADIAAgCIAqgXIABAAIABABIAAACIAACMQAAAJAFADQAEACAOAAIAAADg");
	this.shape_144.setTransform(-33.9,-168.05);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgjAoQgMgRAAgWQAAgWAOgRQAOgRAVgBQARAAAMAMQANALAAAWIhKAAQABAaALAMQAMANAOAAQAMAAAJgHQAIgGAHgMIAEABQgFAPgNAMQgNAOgSAAQgWAAgMgRgAATgTQgBgMgDgGQgGgKgNAAQgNAAgHAMQgEAGgBAKIAwAAIAAAAg");
	this.shape_145.setTransform(-51.325,-165.35);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAGBSIAAgEQALgBADgDQADgEAAgNIAAgvQgBgKgDgHQgEgIgKAAQgJAAgIAHQgJAHAAABIAAA5QAAAOADADQAEADAKABIAAAEIg1AAIAAgEQAKgBADgDQADgEAAgNIAAhvQAAgHgBgDQgCgDgHAAIgCAAIgDABIAAgFIAMgDIALgDIAMgEIAAABIAABIQAHgJAGgDQAJgIAMAAQATAAAHAQQADAJAAANIAAAvQAAANADAEQAEADAJABIAAAEg");
	this.shape_146.setTransform(-62.65,-168.175);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AggAqQgOgOAAgZQAAgXAQgSQAPgRAWAAQAPAAALAHQAKAIAAAJQAAAEgCADQgDADgGAAQgEAAgDgCQgDgDgBgGIgCgFQgBgHgEgCQgEgDgGAAQgNAAgJAMQgJAMAAATQAAARAKAOQAKAOAQAAQANAAAJgIIAMgOIAEACQgHAOgIAIQgOAPgSAAQgSAAgOgOg");
	this.shape_147.setTransform(-74.025,-165.425);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgtBNQgGgEAAgGQAAgGADgCQAEgEAFAAQADAAAGADIAJACQAGAAAHgQQAHgQAAgFIAAgDIgBgCIglhPQgEgJgDgDQgDgCgFgBIAAgDIAxAAIAAADIgJABQgFACAAAEIABAEIACAFIAaA7IAWg8IABgEIABgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgBgEAAIgDgBIAAgDIAgAAIAAADQgFABgCACQgDADgBAFIglBhQgJAZgJAMQgIALgOAAQgGAAgGgDg");
	this.shape_148.setTransform(-85.375,-162.75);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgRA2IgKgCIgDABIgBACIgDAAIAAgmIAEAAQACAOAFAHQAIANAPAAQAJAAAFgFQAFgFAAgHQAAgFgDgFQgDgFgHgEIgNgHQgOgIgHgHQgHgIAAgKQAAgOAKgIQAJgIAOAAQAGAAAHACIAIACIADAAIACgCIADAAIABAgIgEAAQgCgLgEgGQgIgMgMAAQgIAAgFAFQgFAFAAAHQAAALAQAIIAPAIQAZANAAASQAAAOgLAJQgKAIgQAAQgHAAgJgCg");
	this.shape_149.setTransform(-95.775,-165.425);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("Ag+BPIAAgEQANgBAEgFQAEgDgBgQIAAhnQAAgMgDgEQgEgEgNgBIAAgEIA+AAQAeAAARAMQAQAMAAASQAAAZgSALQgSAKgbAAIgIAAIgJAAIAAArQAAAOADADQAFAEANABIAAAEgAgQhEQgCABABAFIAAA+IAIABIADAAQAQAAAJgEQASgJAAgXQAAgWgTgIQgKgFgPABQgHAAgCABg");
	this.shape_150.setTransform(-107.15,-167.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-180,231.7,236);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(-30.725,46.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_1.setTransform(-36.675,40.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgXAAQgOAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_2.setTransform(-49.55,40.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_3.setTransform(-60.825,38.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLBhIAAiMIAXAAIAACMgAgLhFIAAgbIAXAAIAAAbg");
	this.shape_4.setTransform(-67.4,38.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag9BlIAAjFIAXAAIAAATQAHgJAIgGQANgHAPAAQAYAAARASQAQASAAAiQAAAugYATQgPAMgVAAQgPAAgKgGQgHgEgIgKIAABJgAgig2QgFANAAAUQAAARAFAKQAKAWAYAAQAQAAALgOQALgOAAgaQAAgSgFgMQgJgXgYAAQgZAAgJAZg");
	this.shape_5.setTransform(-77.575,43.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyA0QgFgLAAgSIAAhfIAYAAIAABdQAAALADAHQAHANARgBQAXABAJgXQAEgLAAgVIAAhFIAYAAIAACMIgXAAIAAgUQgEAHgHAGQgNAMgSAAQgdgBgMgUg");
	this.shape_6.setTransform(-93.05,40.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBYQgQgMAAgeIAAgOIAZAAIAAAOQAAAPAHAIQAHAIAPAAQAUAAAHgOQAEgJAAgYIAAiAIAaAAIAACHQAAAYgIAOQgNAYglAAQgWAAgPgLg");
	this.shape_7.setTransform(-107.825,38.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsBQQgRgUAAghQAAgeAPgWQAQgXAdAAQAPAAALAHQAHAEAIAKIAAhIIAWAAIAADCIgVAAIAAgUQgIANgMAGQgLAGgNAAQgYAAgRgUgAgZgOQgLAOAAAaQAAAWAJAQQAKAPAUAAQAQAAALgOQAKgOAAgbQAAgagKgMQgLgNgQAAQgRAAgLANg");
	this.shape_8.setTransform(99.975,9.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAhBIIAAhYQAAgNgDgIQgHgNgRAAQgHAAgFACQgKADgHAJQgGAHgCAHQgCAHAAAOIAABJIgYAAIAAiMIAXAAIAAAUQAKgMALgGQALgFANAAQAeAAAKAVQAHALAAAWIAABZg");
	this.shape_9.setTransform(85.5,11.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgBACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTAAgIAKQgEAFgBALIgXAAQABgaAQgLQARgJAVgBQAYAAAPAKQAQAKAAAUIAABQQAAADACACQABADAFAAIADAAIAFgBIAAARIgJADIgIAAQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOACQgNACgGAEQgLAGAAANQAAALAHAFQAIAGAKABQANAAAKgGQAUgKAAgVIAAgTIgLAEg");
	this.shape_10.setTransform(70.775,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsA9QgNgOgBgWIAXAAQABAMAFAHQAJALAWAAQANAAALgGQAKgFgBgMQABgJgJgFQgEgDgQgEIgSgFQgTgEgIgFQgQgJAAgRQAAgUAPgNQAOgMAZAAQAfAAAOATQAKALgBAOIgWAAQgBgIgFgGQgIgKgUAAQgOAAgGAFQgIAGABAIQgBAJAKAGQAFADALACIAOAEQAbAGAIAFQAOAJAAAUQAAATgPANQgOAOgeAAQgeAAgOgOg");
	this.shape_11.setTransform(48.75,11.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_12.setTransform(38.275,11.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgBACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTAAgIAKQgEAFgBALIgXAAQABgaAQgLQARgJAVgBQAYAAAPAKQAQAKAAAUIAABQQAAADACACQABADAFAAIADAAIAFgBIAAARIgJADIgIAAQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOACQgNACgGAEQgLAGAAANQAAALAHAFQAIAGAKABQANAAAKgGQAUgKAAgVIAAgTIgLAEg");
	this.shape_13.setTransform(25.825,11.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABEBhIAAhyIAAgTIABgeIg4CjIgZAAIg4ijIAAAGIABAWIAAAVIAAByIgZAAIAAjBIAmAAIA2CjIA3ijIAmAAIAADBg");
	this.shape_14.setTransform(6.9,9.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAiBIIAAhYQAAgNgFgIQgGgNgQAAQgIAAgFACQgKADgIAJQgFAHgCAHQgCAHAAAOIAABJIgXAAIAAiMIAWAAIAAAUQAKgMALgGQAMgFAMAAQAeAAALAVQAFALAAAWIAABZg");
	this.shape_15.setTransform(-19.4,11.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgLALgPAEQgJACgKAAQgaAAgSgTgAAngLQgBgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBMAAIAAAAg");
	this.shape_16.setTransform(-34.55,11.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgXAAQgOAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_17.setTransform(-49.55,11.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAcBHIgchtIgbBtIgZAAIgpiNIAaAAIAbBvIAchvIAaAAIAbBuIAdhuIAYAAIgpCNg");
	this.shape_18.setTransform(-66.725,11.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_19.setTransform(-80.275,9.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANATAAQASAAALgMQAGgHACgKIAYAAQgBAIgFAKQgFAJgHAGQgLALgPAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgJgRgXAAQgPAAgLAMQgMAMAAASIBMAAIAAAAg");
	this.shape_20.setTransform(-91.5,11.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZBcQgHgFgHgKIAAASIgWAAIAAjBIAXAAIAABGQAIgKAKgFQALgGAMAAQAaAAARASQAQATAAAhQAAAigQAWQgQAXgdAAQgPAAgLgIgAgbgPQgNAMAAAaQAAAUAFAMQAKAYAZAAQATgBAJgPQAKgPAAgZQAAgXgKgNQgJgOgTAAQgPAAgMAMg");
	this.shape_21.setTransform(-106.075,9.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_22.setTransform(29.075,-19.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_23.setTransform(22.55,-19.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhmAAQABAVAKANQAJANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgFAJgHAGQgLALgPAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgWAAQgPAAgLAMQgMAMAAASIBMAAIAAAAg");
	this.shape_24.setTransform(11.9,-17.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZBcQgHgFgHgKIAAASIgWAAIAAjBIAXAAIAABGQAIgKAKgFQALgGAMAAQAaAAARASQAQASAAAiQAAAigQAWQgQAXgdAAQgPgBgLgHgAgbgPQgNAMAAAaQAAAUAFAMQAKAXAZAAQATAAAJgPQAKgPAAgZQAAgWgKgOQgJgPgTAAQgPAAgMANg");
	this.shape_25.setTransform(-2.675,-19.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgsBQQgRgUAAghQAAgeAPgWQAQgXAdAAQAPAAALAHQAHAEAIAKIAAhIIAWAAIAADCIgVAAIAAgUQgIANgMAGQgLAGgNAAQgYAAgRgUgAgZgOQgLAOAAAaQAAAWAJAQQAKAPAUAAQAQAAALgOQAKgOAAgbQAAgagKgMQgLgNgQAAQgRAAgLANg");
	this.shape_26.setTransform(-25.975,-19.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLBhIAAiMIAXAAIAACMgAgLhFIAAgbIAXAAIAAAbg");
	this.shape_27.setTransform(-35.95,-19.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_28.setTransform(-46.575,-17.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_29.setTransform(-57.625,-17.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQATgWAcAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgLALgQAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgJgRgYAAQgOAAgMAMQgLAMAAASIBNAAIAAAAg");
	this.shape_30.setTransform(-70.5,-17.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_31.setTransform(-81.775,-19.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgsA9QgNgOgBgWIAXAAQABAMAFAHQAJALAWAAQANAAAKgGQALgFgBgMQABgJgJgFQgEgDgQgEIgSgFQgTgEgIgFQgQgJAAgRQAAgUAPgNQAOgMAZAAQAfAAAOATQAKALgBAOIgWAAQgBgIgFgGQgIgKgUAAQgOAAgGAFQgIAGABAIQgBAJAKAGQAFADALACIAOAEQAbAGAIAFQAOAJAAAUQAAATgPANQgOAOgeAAQgeAAgOgOg");
	this.shape_32.setTransform(-92.1,-17.175);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgCACgFQACgEAAgFQAAgMgJgGQgIgGgPAAQgTABgIAJQgEAGgBALIgXAAQABgaAQgLQARgKAVAAQAYAAAPAKQAQAJAAAUIAABQQAAAFACABQABADAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAHgQAAQgUAAgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAANQAAAKAHAHQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_33.setTransform(-106.075,-17.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhmAAQABAVAKANQAJANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgFAJgHAGQgLALgPAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgWAAQgPAAgLAMQgMAMAAASIBMAAIAAAAg");
	this.shape_34.setTransform(38.9,-46.175);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgGgLgSAAQgOAAgMAKQgMAKAAAbIAABLIgYAAIAAjBIAYAAIAABIQAIgLAIgEQALgHAQAAQAfAAAKAVQAHAMgBAUIAABag");
	this.shape_35.setTransform(24.05,-48.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_36.setTransform(12.625,-48.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAhBIIAAhYQAAgNgDgIQgHgNgRAAQgHAAgFACQgKADgHAJQgHAHgBAHQgCAHAAAOIAABJIgXAAIAAiMIAWAAIAAAUQAKgMALgGQALgFANAAQAeAAAKAVQAHALAAAWIAABZg");
	this.shape_37.setTransform(-5.95,-46.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgLBhIAAiMIAXAAIAACMgAgLhFIAAgbIAXAAIAAAbg");
	this.shape_38.setTransform(-16.45,-48.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgsBQQgRgUAAghQAAgeAPgWQAQgXAdAAQAPAAALAHQAHAEAIAKIAAhIIAWAAIAADCIgVAAIAAgUQgIANgMAGQgLAGgNAAQgYAAgRgUgAgZgOQgLAOAAAaQAAAWAJAQQAKAPAUAAQAQAAALgOQAKgOAAgbQAAgagKgMQgLgNgQAAQgRAAgLANg");
	this.shape_39.setTransform(-34.925,-48.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgXAAQgOAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_40.setTransform(-49.55,-46.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_41.setTransform(-60.825,-48.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJgBACgFQACgEAAgFQAAgMgJgGQgIgFgPgBQgTAAgIAKQgEAGgBALIgXAAQABgaAQgLQARgKAVABQAYAAAPAJQAQAKAAATIAABQQAAAFACACQABACAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAHgQgBQgUABgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAAOQAAAKAHAGQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_42.setTransform(-71.625,-46.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_43.setTransform(-86.075,-46.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_44.setTransform(-100.575,-46.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_45.setTransform(-110.85,-48.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgsBQQgRgUAAghQAAgeAPgWQAQgXAdAAQAPAAALAHQAHAEAIAKIAAhIIAWAAIAADCIgVAAIAAgUQgIANgMAGQgLAGgNAAQgYAAgRgUgAgZgOQgLAOAAAaQAAAWAJAQQAKAPAUAAQAQAAALgOQAKgOAAgbQAAgagKgMQgLgNgQAAQgRAAgLANg");
	this.shape_46.setTransform(93.975,-77.675);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgLBhIAAiMIAXAAIAACMgAgLhFIAAgbIAXAAIAAAbg");
	this.shape_47.setTransform(84,-77.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_48.setTransform(73.375,-75.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_49.setTransform(62.325,-75.425);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgXAAQgOAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_50.setTransform(49.45,-75.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_51.setTransform(38.175,-77.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgsA9QgNgOgBgWIAXAAQABAMAFAHQAJALAWAAQAOAAAKgGQAKgFAAgMQAAgJgIgFQgFgDgQgEIgSgFQgTgEgIgFQgQgJAAgRQAAgUAPgNQAPgMAYAAQAgAAAOATQAJALgBAOIgWAAQAAgIgGgGQgIgKgUAAQgNAAgIAFQgGAGAAAIQAAAJAJAGQAFADAKACIAPAEQAaAGAKAFQANAJAAAUQAAATgOANQgPAOgdAAQgfAAgOgOg");
	this.shape_52.setTransform(27.85,-75.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJAAACgHQACgCAAgHQAAgLgJgGQgIgFgPAAQgTgBgIAKQgEAGgBALIgXAAQABgaAQgKQARgKAVAAQAYAAAPAJQAQAKAAAUIAABPQAAAFACACQABACAFAAIADAAIAFgBIAAASIgJABIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAGgQAAQgUAAgMgLgAAQADIgNADIgOACQgNABgGAEQgLAGAAAOQAAAJAHAGQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_53.setTransform(13.875,-75.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgXAAQgOAAgLAMQgMAMAAASIBMAAIAAAAg");
	this.shape_54.setTransform(-9.05,-75.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgHgLgRAAQgOAAgMAKQgMAKAAAbIAABLIgXAAIAAjBIAXAAIAABIQAIgLAIgEQALgHAQAAQAfAAALAVQAFAMAAAUIAABag");
	this.shape_55.setTransform(-23.9,-77.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_56.setTransform(-35.325,-77.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgGgLgSAAQgOAAgMAKQgMAKAAAbIAABLIgYAAIAAjBIAYAAIAABIQAIgLAIgEQALgHAQAAQAfAAAKAVQAHAMgBAUIAABag");
	this.shape_57.setTransform(-53.9,-77.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_58.setTransform(-68.075,-75.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJAAACgHQACgCAAgHQAAgLgJgGQgIgFgPAAQgTgBgIAKQgEAGgBALIgXAAQABgaAQgKQARgKAVAAQAYAAAPAJQAQAKAAAUIAABPQAAAFACACQABACAFAAIADAAIAFgBIAAASIgJABIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAGgQAAQgUAAgMgLgAAQADIgNADIgOACQgNABgGAEQgLAGAAAOQAAAJAHAGQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_59.setTransform(-82.125,-75.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgLALgPAEQgJACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_60.setTransform(-97.55,-75.175);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_61.setTransform(-108.625,-75.425);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAhBIIAAhYQAAgNgDgIQgHgNgRAAQgHAAgFACQgKADgHAJQgHAHgBAHQgCAHAAAOIAABJIgYAAIAAiMIAXAAIAAAUQAKgMALgGQALgFANAAQAeAAAKAVQAHALAAAWIAABZg");
	this.shape_62.setTransform(54.1,-104.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgLQANgJATgCIAlgFQAJgBACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTAAgIAKQgEAFgBALIgXAAQABgaAQgKQARgLAVAAQAYAAAPAKQAQAJAAAVIAABQQAAADACACQABADAFAAIADAAIAFgBIAAASIgJACIgIAAQgMAAgGgIQgCgFgCgJQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOADQgNABgGAEQgLAGAAANQAAALAHAFQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_63.setTransform(39.375,-104.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_64.setTransform(24.925,-104.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_65.setTransform(6.675,-106.125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNBiIAAh5IgUAAIAAgSIAUAAIAAgWQABgPAFgHQAHgMAXAAIAFAAIAFAAIAAAWIgFAAIgDAAQgLAAgCAFQgCAGAAAXIAXAAIAAASIgXAAIAAB5g");
	this.shape_66.setTransform(-0.7,-107.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgLQANgJATgCIAlgFQAJgBACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTAAgIAKQgEAFgBALIgXAAQABgaAQgKQARgLAVAAQAYAAAPAKQAQAJAAAVIAABQQAAADACACQABADAFAAIADAAIAFgBIAAASIgJACIgIAAQgMAAgGgIQgCgFgCgJQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOADQgNABgGAEQgLAGAAANQAAALAHAFQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_67.setTransform(-11.625,-104.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_68.setTransform(-23.125,-104.425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_69.setTransform(-35.025,-104.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_70.setTransform(-49.5,-104.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_71.setTransform(-63.525,-104.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgLQANgJATgCIAlgFQAJgBACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTAAgIAKQgEAFgBALIgXAAQABgaAQgKQARgLAVAAQAYAAAPAKQAQAJAAAVIAABQQAAADACACQABADAFAAIADAAIAFgBIAAASIgJACIgIAAQgMAAgGgIQgCgFgCgJQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOADQgNABgGAEQgLAGAAANQAAALAHAFQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_72.setTransform(-77.575,-104.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ag9BlIAAjEIAXAAIAAASQAHgJAIgGQANgHAPgBQAYABARASQAQASAAAiQAAAugYATQgPAMgVAAQgPAAgKgGQgHgEgIgKIAABJgAgig2QgFANAAAUQAAAQAFALQAKAWAYAAQAQAAALgOQALgOAAgaQAAgSgFgMQgJgXgYAAQgZAAgJAZg");
	this.shape_73.setTransform(-92.575,-101.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgrA9QgOgOgBgWIAXAAQABAMAFAHQAJALAWAAQAOAAAJgGQAKgFAAgMQAAgJgHgFQgGgDgPgEIgTgFQgRgEgKgFQgPgJAAgRQAAgUAPgNQAPgMAYAAQAfAAAPATQAIALABAOIgXAAQgBgIgFgGQgIgKgUAAQgOAAgGAFQgIAGAAAIQAAAJAJAGQAGADALACIAPAEQAaAGAJAFQANAJAAAUQAAATgPANQgOAOgdAAQgfAAgNgOg");
	this.shape_74.setTransform(-107.1,-104.175);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQATgWAcAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgLALgQAEQgIACgJAAQgbAAgSgTgAAogLQgCgQgFgJQgJgRgYAAQgOAAgMAMQgLAMAAASIBNAAIAAAAg");
	this.shape_75.setTransform(105,-133.175);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgGgLgSAAQgOAAgMAKQgMAKAAAbIAABLIgXAAIAAjBIAXAAIAABIQAJgLAGgEQAMgHAQAAQAeAAAMAVQAFAMABAUIAABag");
	this.shape_76.setTransform(90.15,-135.925);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_77.setTransform(75.975,-133.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgsBjIgHgCIAAgVIAJACIAFABQAGAAAEgCIAFgGIAFgLIAFgPIgziQIAbAAIAkBzIAmhzIAaAAIgWA+IgWA7QgUA2gHAMQgJAMgUgBg");
	this.shape_78.setTransform(62.4,-130.35);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgrA9QgOgOgBgWIAXAAQABAMAFAHQAJALAWAAQAOAAAKgGQAJgFABgMQgBgJgHgFQgFgDgQgEIgTgFQgRgEgKgFQgPgJAAgRQAAgUAPgNQAOgMAZAAQAgAAAOATQAJALAAAOIgXAAQAAgIgGgGQgIgKgUAAQgNAAgIAFQgGAGgBAIQABAJAIAGQAGADAKACIAQAEQAZAGAKAFQANAJAAAUQAAATgOANQgPAOgdAAQgfAAgNgOg");
	this.shape_79.setTransform(48.9,-133.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhHBhIAAjBIBWAAQAaAAAPAPQAQAOAAAbQAAAWgOARQgOAQgdAAIg8AAIAABSgAgtgGIAzAAQARAAALgIQALgHAAgTQAAgWgPgHQgJgEgPAAIgzAAg");
	this.shape_80.setTransform(33.65,-135.875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_81.setTransform(9,-133.175);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgGgLgSAAQgOAAgMAKQgMAKAAAbIAABLIgYAAIAAjBIAYAAIAABIQAJgLAGgEQAMgHAQAAQAeAAALAVQAHAMAAAUIAABag");
	this.shape_82.setTransform(-5.85,-135.925);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_83.setTransform(-17.275,-135.125);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_84.setTransform(-32.275,-135.125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgCACgFQACgEAAgGQAAgMgJgFQgIgGgPAAQgTAAgIALQgEAFgBALIgXAAQABgaAQgLQARgJAVgBQAYAAAPAKQAQAJAAAVIAABQQAAADACACQABADAFAAIADAAIAFgBIAAARIgJADIgIAAQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOACQgNACgGAEQgLAGAAANQAAAKAHAHQAIAFAKABQANAAAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_85.setTransform(-43.075,-133.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgGgLgSAAQgOAAgMAKQgMAKAAAbIAABLIgXAAIAAjBIAXAAIAABIQAJgLAGgEQAMgHAQAAQAeAAAMAVQAFAMABAUIAABag");
	this.shape_86.setTransform(-58.35,-135.925);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_87.setTransform(-69.775,-135.125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_88.setTransform(-88.525,-133.225);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("Ag3BTQgUgRABggIAYAAQABARAHAKQAMATAfAAQAPAAALgEQAXgJAAgVQAAgPgKgHQgJgGgVgGIgZgFQgZgGgKgGQgSgNAAgYQAAgaASgQQARgRAhAAQAcAAAVAOQAVAPAAAhIgZAAQgCgQgGgIQgMgQgaAAQgWABgKAJQgKAKAAANQAAAOAMAHQAHAEAaAGIAaAGQATAFAKAHQASAOAAAaQAAAfgWAPQgXANgeAAQgjAAgUgTg");
	this.shape_89.setTransform(-105.0256,-135.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-149,231.7,205);


(lib.Tween35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(-0.725,46.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBQQgRgUAAghQAAgeAPgWQAQgXAdAAQAPAAALAHQAHAEAIAKIAAhIIAWAAIAADCIgVAAIAAgUQgIANgMAGQgLAGgNAAQgYAAgRgUgAgZgOQgLAOAAAaQAAAWAJAQQAKAPAUAAQAQAAALgOQAKgOAAgbQAAgagKgMQgLgNgQAAQgRAAgLANg");
	this.shape_1.setTransform(-12.425,38.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANATAAQASAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgWAAQgPAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_2.setTransform(-27.05,40.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgHgLgRAAQgOAAgMAKQgMAKAAAbIAABLIgXAAIAAjBIAXAAIAABIQAIgLAIgEQALgHAQAAQAfAAALAVQAFAMAAAUIAABag");
	this.shape_3.setTransform(-41.9,38.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_4.setTransform(-56.075,40.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhBIIAAhYQAAgNgDgIQgHgNgQAAQgIAAgFACQgKADgHAJQgHAHgBAHQgCAHAAAOIAABJIgXAAIAAiMIAWAAIAAAUQAKgMALgGQALgFANAAQAeAAALAVQAFALABAWIAABZg");
	this.shape_5.setTransform(-70.4,40.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxA0QgGgLAAgSIAAhfIAYAAIAABdQAAALADAHQAHANARgBQAXABAIgXQAFgLAAgVIAAhFIAYAAIAACMIgXAAIAAgUQgEAHgGAGQgOAMgSAAQgdgBgLgUg");
	this.shape_6.setTransform(-85.6,40.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJAAACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTgBgIALQgEAFgBALIgXAAQABgaAQgKQARgKAVAAQAYgBAPAKQAQAJAAAVIAABQQAAADACADQABACAFAAIADAAIAFgBIAAASIgJACIgIAAQgMAAgGgIQgCgFgCgIQgHAJgNAHQgNAGgQAAQgUAAgMgLgAAQADIgNACIgOADQgNABgGAEQgLAGAAANQAAALAHAFQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_7.setTransform(-100.125,40.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_8.setTransform(-110.85,38.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrA9QgOgOgBgWIAXAAQABAMAFAHQAJALAWAAQAOAAAKgGQAJgFABgMQgBgJgHgFQgFgDgQgEIgTgFQgRgEgKgFQgPgJAAgRQAAgUAPgNQAOgMAZAAQAgAAAOATQAJALAAAOIgXAAQAAgIgGgGQgIgKgUAAQgNAAgIAFQgGAGgBAIQABAJAIAGQAGADAKACIAQAEQAZAGAKAFQANAJAAAUQAAATgOANQgPAOgdAAQgfAAgNgOg");
	this.shape_9.setTransform(99.75,11.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgBACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTAAgIAKQgEAFgBALIgXAAQABgaAQgLQARgJAVgBQAYAAAPAKQAQAKAAAUIAABQQAAADACACQABADAFAAIADAAIAFgBIAAARIgJADIgIAAQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOACQgNACgGAEQgLAGAAANQAAALAHAFQAIAGAKABQANAAAKgGQAUgKAAgVIAAgTIgLAEg");
	this.shape_10.setTransform(85.775,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcBHIgchtIgbBtIgZAAIgpiNIAaAAIAbBvIAchvIAaAAIAbBuIAdhuIAYAAIgpCNg");
	this.shape_11.setTransform(68.175,11.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNAWQAJgCAEgLQABgGgBgEIAAgCIAAgCIgNAAIAAgcIAbAAIAAAaQAAAPgGAMQgGAMgPACg");
	this.shape_12.setTransform(47.2,19.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_13.setTransform(39.625,9.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQATgWAcAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgJgRgYAAQgOAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_14.setTransform(28.4,11.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAcBhIgshIIgTATIAAA1IgWAAIAAjBIAWAAIAABwIA8g7IAeAAIg2AzIA6BZg");
	this.shape_15.setTransform(15.1,9.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_16.setTransform(0.875,11.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_17.setTransform(-13.625,11.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_18.setTransform(-24.675,11.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgsBjIgHgCIAAgVIAJACIAFABQAHAAADgCIAFgGIAFgLIAGgPIg0iQIAbAAIAkBzIAmhzIAaAAIgWA+IgWA7QgUA2gHALQgJAMgUAAg");
	this.shape_19.setTransform(-44.15,14.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBHIg0iNIAbAAIAlBzIAnhzIAaAAIg1CNg");
	this.shape_20.setTransform(-57.725,11.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgBACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTAAgIAKQgEAFgBALIgXAAQABgaAQgLQARgJAVgBQAYAAAPAKQAQAKAAAUIAABQQAAADACACQABADAFAAIADAAIAFgBIAAARIgJADIgIAAQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOACQgNACgGAEQgLAGAAANQAAALAHAFQAIAGAKABQANAAAKgGQAUgKAAgVIAAgTIgLAEg");
	this.shape_21.setTransform(-71.625,11.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQATgWAcAAQAPAAAOAIQAOAGAHAMQAHAKADAPQACAJAAAVIhmAAQABAVAJANQAKANASAAQATAAALgMQAGgHADgKIAXAAQgBAIgFAKQgFAJgHAGQgLALgQAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgJgRgYAAQgPAAgLAMQgKAMgBASIBNAAIAAAAg");
	this.shape_22.setTransform(-87.05,11.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAyBhIAAhbIhjAAIAABbIgbAAIAAjBIAbAAIAABQIBjAAIAAhQIAaAAIAADBg");
	this.shape_23.setTransform(-104.1,9.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAhBIIAAhYQAAgNgDgIQgHgNgRAAQgHAAgFACQgKADgHAJQgHAHgBAHQgCAHAAAOIAABJIgXAAIAAiMIAWAAIAAAUQAKgMALgGQALgFANAAQAeAAAKAVQAHALAAAWIAABZg");
	this.shape_24.setTransform(61.55,-17.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_25.setTransform(46.375,-17.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_26.setTransform(32.375,-17.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_27.setTransform(22.6,-19.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgCACgFQACgEAAgFQAAgMgJgGQgIgGgPAAQgTABgIAJQgEAGgBALIgXAAQABgaAQgLQARgKAVAAQAYAAAPAKQAQAJAAAUIAABQQAAAFACABQABADAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAHgQAAQgUAAgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAANQAAAKAHAHQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_28.setTransform(12.375,-17.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhCBhIAAjBICFAAIAAAYIhrAAIAAA7IBeAAIAAAWIheAAIAABYg");
	this.shape_29.setTransform(-2.825,-19.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AA0BhIg0hQIg0BQIgfAAIBEhjIhAheIAhAAIAvBKIAxhKIAfAAIhABeIBDBjg");
	this.shape_30.setTransform(-28.375,-19.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_31.setTransform(-45,-17.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_32.setTransform(-59.025,-17.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgCACgFQACgEAAgFQAAgMgJgGQgIgGgPAAQgTABgIAJQgEAGgBALIgXAAQABgaAQgLQARgKAVAAQAYAAAPAKQAQAJAAAUIAABQQAAAFACABQABADAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAHgQAAQgUAAgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAANQAAAKAHAHQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_33.setTransform(-73.075,-17.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag9BkIAAjDIAXAAIAAASQAHgKAIgFQANgIAPAAQAYAAARATQAQASAAAiQAAAtgYAUQgPANgVAAQgPAAgKgHQgHgEgIgKIAABIgAgig2QgFANAAAVQAAAQAFAKQAKAWAYAAQAQAAALgOQALgOAAgbQAAgQgFgNQgJgXgYAAQgZAAgJAZg");
	this.shape_34.setTransform(-88.075,-14.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag3BTQgUgRABggIAYAAQABAQAHALQAMATAfAAQAPAAALgEQAXgIAAgWQAAgPgKgHQgJgGgVgGIgZgFQgZgGgKgGQgSgMAAgZQAAgZASgSQARgQAhAAQAcAAAVAOQAVAPAAAgIgZAAQgCgPgGgIQgMgQgaAAQgWAAgKAKQgKAKAAANQAAAOAMAHQAHAEAaAGIAaAHQATAEAKAHQASAOAAAaQAAAggWAOQgXANgeAAQgjAAgUgTg");
	this.shape_35.setTransform(-105.0256,-19.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJgBACgFQACgEAAgFQAAgMgJgGQgIgFgPgBQgTAAgIAKQgEAGgBALIgXAAQABgaAQgLQARgKAVABQAYAAAPAJQAQAKAAATIAABQQAAAFACACQABACAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAHgQgBQgUABgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAAOQAAAKAHAGQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_36.setTransform(66.375,-46.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag9BkIAAjEIAXAAIAAATQAHgKAIgEQANgJAPABQAYAAARASQAQASAAAjQAAAsgYAUQgPAMgVAAQgPABgKgHQgHgEgIgKIAABIgAgig2QgFANAAAVQAAAPAFALQAKAWAYAAQAQAAALgOQALgOAAgbQAAgQgFgMQgJgYgYAAQgZAAgJAZg");
	this.shape_37.setTransform(43.875,-43.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_38.setTransform(28.425,-46.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_39.setTransform(17.175,-48.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJgBACgFQACgEAAgFQAAgMgJgGQgIgFgPgBQgTAAgIAKQgEAGgBALIgXAAQABgaAQgLQARgKAVABQAYAAAPAJQAQAKAAATIAABQQAAAFACACQABACAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAHgQgBQgUABgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAAOQAAAKAHAGQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_40.setTransform(6.375,-46.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgsBQQgRgUAAghQAAgeAPgWQAQgXAdAAQAPAAALAHQAHAEAIAKIAAhIIAWAAIAADCIgVAAIAAgUQgIANgMAGQgLAGgNAAQgYAAgRgUgAgZgOQgLAOAAAaQAAAWAJAQQAKAPAUAAQAQAAALgOQAKgOAAgbQAAgagKgMQgLgNgQAAQgRAAgLANg");
	this.shape_41.setTransform(-16.925,-48.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANATAAQASAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgWAAQgPAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_42.setTransform(-31.55,-46.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_43.setTransform(-42.825,-48.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAhBIIAAhYQAAgNgDgIQgHgNgRAAQgHAAgFACQgKADgHAJQgHAHgBAHQgCAHAAAOIAABJIgYAAIAAiMIAXAAIAAAUQAKgMALgGQALgFANAAQAeAAAKAVQAHALgBAWIAABZg");
	this.shape_44.setTransform(-53.9,-46.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgyA0QgFgKAAgTIAAheIAYAAIAABcQAAALAEAGQAGAOAQAAQAXgBAKgWQAEgLAAgVIAAhEIAYAAIAACLIgXAAIAAgVQgEAJgHAFQgNAMgSAAQgdAAgMgVg");
	this.shape_45.setTransform(-69.1,-46.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_46.setTransform(-84.075,-46.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABGBIIAAhhQAAgOgHgFQgHgFgKAAQgOAAgKAJQgKAJAAAWIAABRIgYAAIAAhbQAAgOgCgHQgGgKgPAAQgNAAgLALQgLAKAAAbIAABKIgYAAIAAiMIAYAAIAAAUQAIgKAGgFQAMgIAPAAQARAAAKAIQAGAFAEAJQAIgLAKgGQALgFANAAQAdAAAKAUQAGAMAAASIAABdg");
	this.shape_47.setTransform(-102.6,-46.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgNAWQAJgCAEgLQABgGAAgEIAAgCIAAgCIgOAAIAAgcIAbAAIAAAaQAAAPgGAMQgGAMgPACg");
	this.shape_48.setTransform(14.25,-67.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_49.setTransform(6.675,-77.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNBiIAAh5IgUAAIAAgSIAUAAIAAgWQABgPAFgHQAHgMAXAAIAFAAIAFAAIAAAWIgFAAIgDAAQgLAAgCAFQgCAGAAAXIAXAAIAAASIgXAAIAAB5g");
	this.shape_50.setTransform(-0.7,-78.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJAAACgHQACgCAAgHQAAgLgJgGQgIgFgPAAQgTgBgIAKQgEAGgBALIgXAAQABgaAQgKQARgKAVAAQAYAAAPAJQAQAKAAAUIAABPQAAAFACACQABACAFAAIADAAIAFgBIAAASIgJABIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAGgQAAQgUAAgMgLgAAQADIgNADIgOACQgNABgGAEQgLAGAAAOQAAAJAHAGQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_51.setTransform(-11.625,-75.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_52.setTransform(-23.125,-75.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_53.setTransform(-35.025,-75.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_54.setTransform(-49.5,-75.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_55.setTransform(-63.525,-75.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJAAACgHQACgCAAgHQAAgLgJgGQgIgFgPAAQgTgBgIAKQgEAGgBALIgXAAQABgaAQgKQARgKAVAAQAYAAAPAJQAQAKAAAUIAABPQAAAFACACQABACAFAAIADAAIAFgBIAAASIgJABIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAGgQAAQgUAAgMgLgAAQADIgNADIgOACQgNABgGAEQgLAGAAAOQAAAJAHAGQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_56.setTransform(-77.575,-75.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag9BkIAAjEIAXAAIAAATQAHgKAIgEQANgIAPAAQAYAAARASQAQASAAAjQAAAtgYATQgPAMgVAAQgPAAgKgGQgHgEgIgKIAABIgAgig2QgFANAAAUQAAARAFAKQAKAWAYAAQAQAAALgOQALgOAAgaQAAgSgFgLQgJgYgYAAQgZAAgJAZg");
	this.shape_57.setTransform(-92.575,-72.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgrA9QgOgOgBgWIAXAAQABAMAFAHQAJALAWAAQAOAAAJgGQAKgFAAgMQAAgJgHgFQgGgDgPgEIgTgFQgRgEgKgFQgPgJAAgRQAAgUAPgNQAPgMAYAAQAfAAAPATQAIALABAOIgXAAQgBgIgFgGQgIgKgUAAQgOAAgGAFQgIAGAAAIQAAAJAJAGQAGADALACIAPAEQAaAGAJAFQANAJAAAUQAAATgPANQgOAOgdAAQgfAAgNgOg");
	this.shape_58.setTransform(-107.1,-75.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQATgWAcAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgLALgQAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgJgRgYAAQgOAAgMAMQgLAMAAASIBNAAIAAAAg");
	this.shape_59.setTransform(87,-104.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgGgLgSAAQgOAAgMAKQgMAKAAAbIAABLIgXAAIAAjBIAXAAIAABIQAJgLAGgEQAMgHAQAAQAeAAAMAVQAFAMABAUIAABag");
	this.shape_60.setTransform(72.15,-106.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_61.setTransform(57.975,-104.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgsBjIgHgCIAAgVIAJACIAFAAQAGAAAEgBIAFgGIAFgLIAFgPIgziQIAbAAIAkByIAmhyIAbAAIgXA+IgWA7QgUA1gHAMQgJAMgUAAg");
	this.shape_62.setTransform(44.4,-101.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgrA9QgOgOgBgWIAXAAQABAMAFAHQAJALAWAAQAOAAAKgGQAJgFABgMQgBgJgHgFQgFgDgQgEIgTgFQgRgEgKgFQgPgJAAgRQAAgUAPgNQAOgMAZAAQAgAAAOATQAJALAAAOIgXAAQAAgIgGgGQgIgKgUAAQgNAAgIAFQgGAGgBAIQABAJAIAGQAGADAKACIAQAEQAZAGAKAFQANAJAAAUQAAATgOANQgPAOgdAAQgfAAgNgOg");
	this.shape_63.setTransform(30.9,-104.175);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhHBhIAAjBIBWAAQAaAAAPAPQAQAOAAAbQAAAWgOARQgOAQgdAAIg8AAIAABSgAgtgGIAzAAQARAAALgIQALgHAAgTQAAgWgPgHQgJgEgPAAIgzAAg");
	this.shape_64.setTransform(15.65,-106.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_65.setTransform(-9,-104.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgGgLgSAAQgOAAgMAKQgMAKAAAbIAABLIgYAAIAAjBIAYAAIAABIQAJgLAGgEQAMgHAQAAQAeAAALAVQAHAMAAAUIAABag");
	this.shape_66.setTransform(-23.85,-106.925);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_67.setTransform(-35.275,-106.125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgNAWQAJgCAEgLQABgGAAgEIAAgCIAAgCIgOAAIAAgcIAbAAIAAAaQAAAPgGAMQgGAMgPACg");
	this.shape_68.setTransform(-50.2,-96.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgyBPQgPgTAAgaIAYAAQADASAEAIQAKAQAYAAQASgBALgJQAMgKAAgQQAAgUgNgHQgMgJgTABIgGAAIgFAAIAAgUIAGABIAGAAQAMgBAJgEQAPgHAAgTQAAgOgKgIQgKgHgOAAQgWgBgJARQgFAIgBAQIgYAAQAAgVAJgPQAPgaAkAAQAcAAAQANQAPAMABAZQgBARgIALQgGAHgJAEQAOAEAIAKQAJAMAAARQAAAbgSARQgRARggAAQgiAAgPgSg");
	this.shape_69.setTransform(-61.6,-106.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhABfQABgZAJgSQAJgSAZgPIAYgOQARgJAHgHQALgLAAgOQAAgRgKgJQgKgKgQAAQgYAAgJASQgFAKgBASIgYAAQABgZAIgPQAQgcAmAAQAgAAAPASQAPARAAAWQAAAXgQAPQgJAJgYANIgRAKQgNAHgHAHQgNALgEAOIBmAAIAAAXg");
	this.shape_70.setTransform(-76.475,-106.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgyBEQgOgZAAgqQAAgeAIgYQAQgrAoAAQAkAAARAfQAMAXAAAoQAAAmgLAZQgRAkglAAQgiAAgQgdgAgcg3QgLAUAAAmQABAcAFASQAKAbAXAAQASAAAKgRQAMgQgBgsQABgggJgVQgHgUgXAAQgUAAgJATg");
	this.shape_71.setTransform(-91.5,-106.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhABfQABgZAJgSQAJgSAZgPIAYgOQARgJAHgHQALgLAAgOQAAgRgKgJQgKgKgQAAQgYAAgJASQgFAKgBASIgYAAQABgZAIgPQAQgcAmAAQAgAAAPASQAPARAAAWQAAAXgQAPQgJAJgYANIgRAKQgNAHgHAHQgNALgEAOIBmAAIAAAXg");
	this.shape_72.setTransform(-106.475,-106.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgNAWQAJgCADgLQABgGAAgEIAAgCIAAgCIgNAAIAAgcIAbAAIAAAaQAAAPgGAMQgHAMgOACg");
	this.shape_73.setTransform(66.75,-125.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgyBPQgPgTAAgaIAZAAQABATAGAIQAJAOAYAAQARAAAMgKQAMgJAAgRQAAgTgMgIQgMgHgUAAIgGAAIgEAAIAAgUIAGAAIAFAAQAMAAAJgDQAPgIAAgTQAAgOgKgIQgKgIgNABQgXAAgJAPQgFAJgBAQIgXAAQgBgVAJgPQAOgaAlAAQAcAAAQANQAQANAAAYQAAASgJALQgGAGgKAEQAPAEAJALQAIALAAARQAAAbgSARQgRARghAAQghAAgPgSg");
	this.shape_74.setTransform(55.35,-135.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAKBeIAAiFIgsAAIAAgSQAagDAJgFQAKgGAFgWIATAAIAAC7g");
	this.shape_75.setTransform(39.175,-135.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_76.setTransform(21.875,-133.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_77.setTransform(9,-133.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZBcQgHgFgHgKIAAASIgWAAIAAjBIAXAAIAABGQAIgKAKgFQALgGAMAAQAaAAARASQAQATAAAhQAAAigQAWQgQAXgdAAQgPgBgLgHgAgbgPQgNAMAAAaQAAAUAFAMQAKAXAZAAQATAAAJgPQAKgPAAgZQAAgXgKgNQgJgOgTAAQgPAAgMAMg");
	this.shape_78.setTransform(-5.575,-135.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_79.setTransform(-21.025,-133.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_80.setTransform(-32.275,-135.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_81.setTransform(-42.525,-133.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhGBJQgYgdAAgrQAAgmAUgcQAZgkAxAAQAzAAAYAhQAUAZgBApQAAAqgVAdQgaAhgwAAQgsAAgZgdgAgwg5QgSAUAAAoQgBAgARAWQARAWAjAAQAjAAAPgZQAPgZAAgfQAAgigSgVQgRgVgfAAQgdAAgUAVg");
	this.shape_82.setTransform(-59.85,-135.875);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAiBIIAAhYQAAgNgFgIQgGgNgQAAQgIAAgFACQgKADgIAJQgGAHgBAHQgCAHAAAOIAABJIgXAAIAAiMIAWAAIAAAUQAKgMALgGQAMgFAMAAQAeAAALAVQAFALABAWIAABZg");
	this.shape_83.setTransform(-85.35,-133.425);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AhHBJQgWgdAAgrQAAgmATgcQAZgkAxAAQAyAAAZAhQATAZABApQAAAqgXAdQgZAhgwAAQgsAAgagdgAgvg5QgUAUABAoQAAAgAQAWQAQAWAkAAQAiAAAQgZQAQgZAAgfQAAgigSgVQgSgVggAAQgdAAgSAVg");
	this.shape_84.setTransform(-103.35,-135.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-149,231.7,205);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(-0.725,46.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsBQQgRgUAAghQAAgeAPgWQAQgXAdAAQAPAAALAHQAHAEAIAKIAAhIIAWAAIAADCIgVAAIAAgUQgIANgMAGQgLAGgNAAQgYAAgRgUgAgZgOQgLAOAAAaQAAAWAJAQQAKAPAUAAQAQAAALgOQAKgOAAgbQAAgagKgMQgLgNgQAAQgRAAgLANg");
	this.shape_1.setTransform(-12.425,38.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANATAAQASAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgWAAQgPAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_2.setTransform(-27.05,40.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgHgLgRAAQgOAAgMAKQgMAKAAAbIAABLIgXAAIAAjBIAXAAIAABIQAIgLAIgEQALgHAQAAQAfAAALAVQAFAMAAAUIAABag");
	this.shape_3.setTransform(-41.9,38.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_4.setTransform(-56.075,40.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAhBIIAAhYQAAgNgDgIQgHgNgQAAQgIAAgFACQgKADgHAJQgHAHgBAHQgCAHAAAOIAABJIgXAAIAAiMIAWAAIAAAUQAKgMALgGQALgFANAAQAeAAALAVQAFALABAWIAABZg");
	this.shape_5.setTransform(-70.4,40.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxA0QgGgLAAgSIAAhfIAYAAIAABdQAAALADAHQAHANARgBQAXABAIgXQAFgLAAgVIAAhFIAYAAIAACMIgXAAIAAgUQgEAHgGAGQgOAMgSAAQgdgBgLgUg");
	this.shape_6.setTransform(-85.6,40.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJAAACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTgBgIALQgEAFgBALIgXAAQABgaAQgKQARgKAVAAQAYgBAPAKQAQAJAAAVIAABQQAAADACADQABACAFAAIADAAIAFgBIAAASIgJACIgIAAQgMAAgGgIQgCgFgCgIQgHAJgNAHQgNAGgQAAQgUAAgMgLgAAQADIgNACIgOADQgNABgGAEQgLAGAAANQAAALAHAFQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_7.setTransform(-100.125,40.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_8.setTransform(-110.85,38.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgrA9QgOgOgBgWIAXAAQABAMAFAHQAJALAWAAQAOAAAKgGQAJgFABgMQgBgJgHgFQgFgDgQgEIgTgFQgRgEgKgFQgPgJAAgRQAAgUAPgNQAOgMAZAAQAgAAAOATQAJALAAAOIgXAAQAAgIgGgGQgIgKgUAAQgNAAgIAFQgGAGgBAIQABAJAIAGQAGADAKACIAQAEQAZAGAKAFQANAJAAAUQAAATgOANQgPAOgdAAQgfAAgNgOg");
	this.shape_9.setTransform(99.75,11.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgBACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTAAgIAKQgEAFgBALIgXAAQABgaAQgLQARgJAVgBQAYAAAPAKQAQAKAAAUIAABQQAAADACACQABADAFAAIADAAIAFgBIAAARIgJADIgIAAQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOACQgNACgGAEQgLAGAAANQAAALAHAFQAIAGAKABQANAAAKgGQAUgKAAgVIAAgTIgLAEg");
	this.shape_10.setTransform(85.775,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcBHIgchtIgbBtIgZAAIgpiNIAaAAIAbBvIAchvIAaAAIAbBuIAdhuIAYAAIgpCNg");
	this.shape_11.setTransform(68.175,11.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNAWQAJgCAEgLQABgGgBgEIAAgCIAAgCIgNAAIAAgcIAbAAIAAAaQAAAPgGAMQgGAMgPACg");
	this.shape_12.setTransform(47.2,19.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_13.setTransform(39.625,9.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQATgWAcAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgJgRgYAAQgOAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_14.setTransform(28.4,11.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAcBhIgshIIgTATIAAA1IgWAAIAAjBIAWAAIAABwIA8g7IAeAAIg2AzIA6BZg");
	this.shape_15.setTransform(15.1,9.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_16.setTransform(0.875,11.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_17.setTransform(-13.625,11.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_18.setTransform(-24.675,11.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgsBjIgHgCIAAgVIAJACIAFABQAHAAADgCIAFgGIAFgLIAGgPIg0iQIAbAAIAkBzIAmhzIAaAAIgWA+IgWA7QgUA2gHALQgJAMgUAAg");
	this.shape_19.setTransform(-44.15,14.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMBHIg0iNIAbAAIAlBzIAnhzIAaAAIg1CNg");
	this.shape_20.setTransform(-57.725,11.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgBACgHQACgCAAgHQAAgMgJgFQgIgGgPABQgTAAgIAKQgEAFgBALIgXAAQABgaAQgLQARgJAVgBQAYAAAPAKQAQAKAAAUIAABQQAAADACACQABADAFAAIADAAIAFgBIAAARIgJADIgIAAQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAGgQABQgUAAgMgMgAAQADIgNACIgOACQgNACgGAEQgLAGAAANQAAALAHAFQAIAGAKABQANAAAKgGQAUgKAAgVIAAgTIgLAEg");
	this.shape_21.setTransform(-71.625,11.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQATgWAcAAQAPAAAOAIQAOAGAHAMQAHAKADAPQACAJAAAVIhmAAQABAVAJANQAKANASAAQATAAALgMQAGgHADgKIAXAAQgBAIgFAKQgFAJgHAGQgLALgQAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgJgRgYAAQgPAAgLAMQgKAMgBASIBNAAIAAAAg");
	this.shape_22.setTransform(-87.05,11.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAyBhIAAhbIhjAAIAABbIgbAAIAAjBIAbAAIAABQIBjAAIAAhQIAaAAIAADBg");
	this.shape_23.setTransform(-104.1,9.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAhBIIAAhYQAAgNgDgIQgHgNgRAAQgHAAgFACQgKADgHAJQgHAHgBAHQgCAHAAAOIAABJIgXAAIAAiMIAWAAIAAAUQAKgMALgGQALgFANAAQAeAAAKAVQAHALAAAWIAABZg");
	this.shape_24.setTransform(61.55,-17.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_25.setTransform(46.375,-17.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_26.setTransform(32.375,-17.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLBhIAAjBIAXAAIAADBg");
	this.shape_27.setTransform(22.6,-19.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgCACgFQACgEAAgFQAAgMgJgGQgIgGgPAAQgTABgIAJQgEAGgBALIgXAAQABgaAQgLQARgKAVAAQAYAAAPAKQAQAJAAAUIAABQQAAAFACABQABADAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAHgQAAQgUAAgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAANQAAAKAHAHQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_28.setTransform(12.375,-17.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhCBhIAAjBICFAAIAAAYIhrAAIAAA7IBeAAIAAAWIheAAIAABYg");
	this.shape_29.setTransform(-2.825,-19.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AA0BhIg0hQIg0BQIgfAAIBEhjIhAheIAhAAIAvBKIAxhKIAfAAIhABeIBDBjg");
	this.shape_30.setTransform(-28.375,-19.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_31.setTransform(-45,-17.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_32.setTransform(-59.025,-17.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgUAMgKQANgKATgDIAlgEQAJgCACgFQACgEAAgFQAAgMgJgGQgIgGgPAAQgTABgIAJQgEAGgBALIgXAAQABgaAQgLQARgKAVAAQAYAAAPAKQAQAJAAAUIAABQQAAAFACABQABADAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgIQgCgGgCgIQgHAKgNAHQgNAHgQAAQgUAAgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAANQAAAKAHAHQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_33.setTransform(-73.075,-17.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag9BkIAAjDIAXAAIAAASQAHgKAIgFQANgIAPAAQAYAAARATQAQASAAAiQAAAtgYAUQgPANgVAAQgPAAgKgHQgHgEgIgKIAABIgAgig2QgFANAAAVQAAAQAFAKQAKAWAYAAQAQAAALgOQALgOAAgbQAAgQgFgNQgJgXgYAAQgZAAgJAZg");
	this.shape_34.setTransform(-88.075,-14.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag3BTQgUgRABggIAYAAQABAQAHALQAMATAfAAQAPAAALgEQAXgIAAgWQAAgPgKgHQgJgGgVgGIgZgFQgZgGgKgGQgSgMAAgZQAAgZASgSQARgQAhAAQAcAAAVAOQAVAPAAAgIgZAAQgCgPgGgIQgMgQgaAAQgWAAgKAKQgKAKAAANQAAAOAMAHQAHAEAaAGIAaAHQATAEAKAHQASAOAAAaQAAAggWAOQgXANgeAAQgjAAgUgTg");
	this.shape_35.setTransform(-105.0256,-19.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJgBACgFQACgEAAgFQAAgMgJgGQgIgFgPgBQgTAAgIAKQgEAGgBALIgXAAQABgaAQgLQARgKAVABQAYAAAPAJQAQAKAAATIAABQQAAAFACACQABACAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAHgQgBQgUABgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAAOQAAAKAHAGQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_36.setTransform(66.375,-46.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag9BkIAAjEIAXAAIAAATQAHgKAIgEQANgJAPABQAYAAARASQAQASAAAjQAAAsgYAUQgPAMgVAAQgPABgKgHQgHgEgIgKIAABIgAgig2QgFANAAAVQAAAPAFALQAKAWAYAAQAQAAALgOQALgOAAgbQAAgQgFgMQgJgYgYAAQgZAAgJAZg");
	this.shape_37.setTransform(43.875,-43.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_38.setTransform(28.425,-46.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_39.setTransform(17.175,-48.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJgBACgFQACgEAAgFQAAgMgJgGQgIgFgPgBQgTAAgIAKQgEAGgBALIgXAAQABgaAQgLQARgKAVABQAYAAAPAJQAQAKAAATIAABQQAAAFACACQABACAFAAIADAAIAFgBIAAARIgJACIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAHgQgBQgUABgMgMgAAQADIgNADIgOABQgNACgGAEQgLAGAAAOQAAAKAHAGQAIAFAKAAQANABAKgGQAUgKAAgWIAAgSIgLAEg");
	this.shape_40.setTransform(6.375,-46.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgsBQQgRgUAAghQAAgeAPgWQAQgXAdAAQAPAAALAHQAHAEAIAKIAAhIIAWAAIAADCIgVAAIAAgUQgIANgMAGQgLAGgNAAQgYAAgRgUgAgZgOQgLAOAAAaQAAAWAJAQQAKAPAUAAQAQAAALgOQAKgOAAgbQAAgagKgMQgLgNgQAAQgRAAgLANg");
	this.shape_41.setTransform(-16.925,-48.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANATAAQASAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgKALgQAEQgJACgJAAQgbAAgSgTgAAngLQgBgQgFgJQgKgRgWAAQgPAAgMAMQgLAMAAASIBMAAIAAAAg");
	this.shape_42.setTransform(-31.55,-46.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_43.setTransform(-42.825,-48.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAhBIIAAhYQAAgNgDgIQgHgNgRAAQgHAAgFACQgKADgHAJQgHAHgBAHQgCAHAAAOIAABJIgYAAIAAiMIAXAAIAAAUQAKgMALgGQALgFANAAQAeAAAKAVQAHALgBAWIAABZg");
	this.shape_44.setTransform(-53.9,-46.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgyA0QgFgKAAgTIAAheIAYAAIAABcQAAALAEAGQAGAOAQAAQAXgBAKgWQAEgLAAgVIAAhEIAYAAIAACLIgXAAIAAgVQgEAJgHAFQgNAMgSAAQgdAAgMgVg");
	this.shape_45.setTransform(-69.1,-46.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_46.setTransform(-84.075,-46.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABGBIIAAhhQAAgOgHgFQgHgFgKAAQgOAAgKAJQgKAJAAAWIAABRIgYAAIAAhbQAAgOgCgHQgGgKgPAAQgNAAgLALQgLAKAAAbIAABKIgYAAIAAiMIAYAAIAAAUQAIgKAGgFQAMgIAPAAQARAAAKAIQAGAFAEAJQAIgLAKgGQALgFANAAQAdAAAKAUQAGAMAAASIAABdg");
	this.shape_47.setTransform(-102.6,-46.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgNAWQAJgCAEgLQABgGAAgEIAAgCIAAgCIgOAAIAAgcIAbAAIAAAaQAAAPgGAMQgGAMgPACg");
	this.shape_48.setTransform(14.25,-67.625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_49.setTransform(6.675,-77.125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNBiIAAh5IgUAAIAAgSIAUAAIAAgWQABgPAFgHQAHgMAXAAIAFAAIAFAAIAAAWIgFAAIgDAAQgLAAgCAFQgCAGAAAXIAXAAIAAASIgXAAIAAB5g");
	this.shape_50.setTransform(-0.7,-78.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJAAACgHQACgCAAgHQAAgLgJgGQgIgFgPAAQgTgBgIAKQgEAGgBALIgXAAQABgaAQgKQARgKAVAAQAYAAAPAJQAQAKAAAUIAABPQAAAFACACQABACAFAAIADAAIAFgBIAAASIgJABIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAGgQAAQgUAAgMgLgAAQADIgNADIgOACQgNABgGAEQgLAGAAAOQAAAJAHAGQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_51.setTransform(-11.625,-75.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_52.setTransform(-23.125,-75.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_53.setTransform(-35.025,-75.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_54.setTransform(-49.5,-75.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_55.setTransform(-63.525,-75.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag1A/QgNgMAAgSQAAgTAMgMQANgJATgCIAlgGQAJAAACgHQACgCAAgHQAAgLgJgGQgIgFgPAAQgTgBgIAKQgEAGgBALIgXAAQABgaAQgKQARgKAVAAQAYAAAPAJQAQAKAAAUIAABPQAAAFACACQABACAFAAIADAAIAFgBIAAASIgJABIgIABQgMAAgGgJQgCgFgCgHQgHAJgNAHQgNAGgQAAQgUAAgMgLgAAQADIgNADIgOACQgNABgGAEQgLAGAAAOQAAAJAHAGQAIAHAKAAQANgBAKgFQAUgKAAgVIAAgSIgLADg");
	this.shape_56.setTransform(-77.575,-75.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag9BkIAAjEIAXAAIAAATQAHgKAIgEQANgIAPAAQAYAAARASQAQASAAAjQAAAtgYATQgPAMgVAAQgPAAgKgGQgHgEgIgKIAABIgAgig2QgFANAAAUQAAARAFAKQAKAWAYAAQAQAAALgOQALgOAAgaQAAgSgFgLQgJgYgYAAQgZAAgJAZg");
	this.shape_57.setTransform(-92.575,-72.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgrA9QgOgOgBgWIAXAAQABAMAFAHQAJALAWAAQAOAAAJgGQAKgFAAgMQAAgJgHgFQgGgDgPgEIgTgFQgRgEgKgFQgPgJAAgRQAAgUAPgNQAPgMAYAAQAfAAAPATQAIALABAOIgXAAQgBgIgFgGQgIgKgUAAQgOAAgGAFQgIAGAAAIQAAAJAJAGQAGADALACIAPAEQAaAGAJAFQANAJAAAUQAAATgPANQgOAOgdAAQgfAAgNgOg");
	this.shape_58.setTransform(-107.1,-75.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQATgWAcAAQAPAAAOAIQAOAGAIAMQAGAKADAPQACAJAAAVIhlAAQAAAVAKANQAJANASAAQATAAALgMQAGgHACgKIAYAAQgBAIgFAKQgGAJgGAGQgLALgQAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgJgRgYAAQgOAAgMAMQgLAMAAASIBNAAIAAAAg");
	this.shape_59.setTransform(87,-104.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgGgLgSAAQgOAAgMAKQgMAKAAAbIAABLIgXAAIAAjBIAXAAIAABIQAJgLAGgEQAMgHAQAAQAeAAAMAVQAFAMABAUIAABag");
	this.shape_60.setTransform(72.15,-106.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_61.setTransform(57.975,-104.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgsBjIgHgCIAAgVIAJACIAFAAQAGAAAEgBIAFgGIAFgLIAFgPIgziQIAbAAIAkByIAmhyIAbAAIgXA+IgWA7QgUA1gHAMQgJAMgUAAg");
	this.shape_62.setTransform(44.4,-101.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgrA9QgOgOgBgWIAXAAQABAMAFAHQAJALAWAAQAOAAAKgGQAJgFABgMQgBgJgHgFQgFgDgQgEIgTgFQgRgEgKgFQgPgJAAgRQAAgUAPgNQAOgMAZAAQAgAAAOATQAJALAAAOIgXAAQAAgIgGgGQgIgKgUAAQgNAAgIAFQgGAGgBAIQABAJAIAGQAGADAKACIAQAEQAZAGAKAFQANAJAAAUQAAATgOANQgPAOgdAAQgfAAgNgOg");
	this.shape_63.setTransform(30.9,-104.175);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhHBhIAAjBIBWAAQAaAAAPAPQAQAOAAAbQAAAWgOARQgOAQgdAAIg8AAIAABSgAgtgGIAzAAQARAAALgIQALgHAAgTQAAgWgPgHQgJgEgPAAIgzAAg");
	this.shape_64.setTransform(15.65,-106.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_65.setTransform(-9,-104.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAhBhIAAhZQAAgOgEgIQgGgLgSAAQgOAAgMAKQgMAKAAAbIAABLIgYAAIAAjBIAYAAIAABIQAJgLAGgEQAMgHAQAAQAeAAALAVQAHAMAAAUIAABag");
	this.shape_66.setTransform(-23.85,-106.925);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_67.setTransform(-35.275,-106.125);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgNAWQAJgCAEgLQABgGAAgEIAAgCIAAgCIgOAAIAAgcIAbAAIAAAaQAAAPgGAMQgGAMgPACg");
	this.shape_68.setTransform(-50.2,-96.625);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgyBPQgPgTAAgaIAYAAQADASAEAIQAKAQAYAAQASgBALgJQAMgKAAgQQAAgUgNgHQgMgJgTABIgGAAIgFAAIAAgUIAGABIAGAAQAMgBAJgEQAPgHAAgTQAAgOgKgIQgKgHgOAAQgWgBgJARQgFAIgBAQIgYAAQAAgVAJgPQAPgaAkAAQAcAAAQANQAPAMABAZQgBARgIALQgGAHgJAEQAOAEAIAKQAJAMAAARQAAAbgSARQgRARggAAQgiAAgPgSg");
	this.shape_69.setTransform(-61.6,-106.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AhABfQABgZAJgSQAJgSAZgPIAYgOQARgJAHgHQALgLAAgOQAAgRgKgJQgKgKgQAAQgYAAgJASQgFAKgBASIgYAAQABgZAIgPQAQgcAmAAQAgAAAPASQAPARAAAWQAAAXgQAPQgJAJgYANIgRAKQgNAHgHAHQgNALgEAOIBmAAIAAAXg");
	this.shape_70.setTransform(-76.475,-106.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgyBEQgOgZAAgqQAAgeAIgYQAQgrAoAAQAkAAARAfQAMAXAAAoQAAAmgLAZQgRAkglAAQgiAAgQgdgAgcg3QgLAUAAAmQABAcAFASQAKAbAXAAQASAAAKgRQAMgQgBgsQABgggJgVQgHgUgXAAQgUAAgJATg");
	this.shape_71.setTransform(-91.5,-106.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhABfQABgZAJgSQAJgSAZgPIAYgOQARgJAHgHQALgLAAgOQAAgRgKgJQgKgKgQAAQgYAAgJASQgFAKgBASIgYAAQABgZAIgPQAQgcAmAAQAgAAAPASQAPARAAAWQAAAXgQAPQgJAJgYANIgRAKQgNAHgHAHQgNALgEAOIBmAAIAAAXg");
	this.shape_72.setTransform(-106.475,-106.675);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgNAWQAJgCADgLQABgGAAgEIAAgCIAAgCIgNAAIAAgcIAbAAIAAAaQAAAPgGAMQgHAMgOACg");
	this.shape_73.setTransform(66.75,-125.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgyBPQgPgTAAgaIAZAAQABATAGAIQAJAOAYAAQARAAAMgKQAMgJAAgRQAAgTgMgIQgMgHgUAAIgGAAIgEAAIAAgUIAGAAIAFAAQAMAAAJgDQAPgIAAgTQAAgOgKgIQgKgIgNABQgXAAgJAPQgFAJgBAQIgXAAQgBgVAJgPQAOgaAlAAQAcAAAQANQAQANAAAYQAAASgJALQgGAGgKAEQAPAEAJALQAIALAAARQAAAbgSARQgRARghAAQghAAgPgSg");
	this.shape_74.setTransform(55.35,-135.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAKBeIAAiFIgsAAIAAgSQAagDAJgFQAKgGAFgWIATAAIAAC7g");
	this.shape_75.setTransform(39.175,-135.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AghBIIAAiMIAWAAIAAAYQADgHAKgKQALgKAOAAIACAAIAFABIAAAZIgDgBIgEAAQgSAAgJAMQgJALAAAPIAABQg");
	this.shape_76.setTransform(21.875,-133.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgtA4QgSgUAAgiQAAghASgVQASgWAdAAQAPAAAOAIQAOAGAHAMQAIAKACAPQACAJAAAVIhmAAQABAVAJANQAKANATAAQASAAALgMQAGgHADgKIAXAAQgBAIgFAKQgGAJgGAGQgKALgRAEQgIACgKAAQgaAAgSgTgAAogLQgCgQgFgJQgKgRgWAAQgQAAgKAMQgLAMgBASIBNAAIAAAAg");
	this.shape_77.setTransform(9,-133.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZBcQgHgFgHgKIAAASIgWAAIAAjBIAXAAIAABGQAIgKAKgFQALgGAMAAQAaAAARASQAQATAAAhQAAAigQAWQgQAXgdAAQgPgBgLgHgAgbgPQgNAMAAAaQAAAUAFAMQAKAXAZAAQATAAAJgPQAKgPAAgZQAAgXgKgNQgJgOgTAAQgPAAgMAMg");
	this.shape_78.setTransform(-5.575,-135.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgvA4QgRgUAAghQAAgjARgVQASgVAeAAQAbAAASASQATASAAAkQAAAhgQAWQgRAWghAAQgdAAgRgTgAgeglQgKARAAAWQAAAXAKAPQAJAPAVAAQAXAAAJgSQAIgSAAgVQAAgTgGgNQgKgTgYAAQgVAAgJAQg");
	this.shape_79.setTransform(-21.025,-133.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgHBTQgGgJAAgNIAAhdIgTAAIAAgTIATAAIAAgnIAXAAIAAAnIAXAAIAAATIgXAAIAABcQAAAHAFACQADACAHAAIADAAIAFgBIAAATIgJACIgJAAQgQAAgGgIg");
	this.shape_80.setTransform(-32.275,-135.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgrA3QgQgVAAgeQAAgkASgVQASgVAbAAQAXAAAPAMQAPAMADAcIgXAAQgCgNgHgJQgIgIgQAAQgWAAgKAWQgGAOAAAUQAAAVAJAPQAJAOASAAQAPAAAIgJQAJgJADgPIAXAAQgEAcgPANQgQANgZAAQgbAAgQgUg");
	this.shape_81.setTransform(-42.525,-133.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhGBJQgYgdAAgrQAAgmAUgcQAZgkAxAAQAzAAAYAhQAUAZgBApQAAAqgVAdQgaAhgwAAQgsAAgZgdgAgwg5QgSAUAAAoQgBAgARAWQARAWAjAAQAjAAAPgZQAPgZAAgfQAAgigSgVQgRgVgfAAQgdAAgUAVg");
	this.shape_82.setTransform(-59.85,-135.875);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAiBIIAAhYQAAgNgFgIQgGgNgQAAQgIAAgFACQgKADgIAJQgGAHgBAHQgCAHAAAOIAABJIgXAAIAAiMIAWAAIAAAUQAKgMALgGQAMgFAMAAQAeAAALAVQAFALABAWIAABZg");
	this.shape_83.setTransform(-85.35,-133.425);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AhHBJQgWgdAAgrQAAgmATgcQAZgkAxAAQAyAAAZAhQATAZABApQAAAqgXAdQgZAhgwAAQgsAAgagdgAgvg5QgUAUABAoQAAAgAQAWQAQAWAkAAQAiAAAQgZQAQgZAAgfQAAgigSgVQgSgVggAAQgdAAgSAVg");
	this.shape_84.setTransform(-103.35,-135.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-149,231.7,205);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAOIAAgbIAcAAIAAAbg");
	this.shape.setTransform(71,-17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAeAAQAQAAAPAHQAPAGAHALQAIALACAOQACAJABAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAYAAQAAAHgGAKQgFAJgHAGQgLAKgRAEQgJACgKAAQgcAAgTgTgAAqgLQgBgPgGgJQgLgRgXAAQgRAAgLAMQgLALgBASIBRAAIAAAAg");
	this.shape_1.setTransform(59,-22.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjBHIAAiKIAYAAIAAAYQADgHAKgKQALgKAPAAIADAAIAFABIAAAYIgEAAIgEAAQgTAAgJALQgKALAAAPIAABPg");
	this.shape_2.setTransform(47.325,-22.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAdAAATASQAUASAAAjQAAAggRAWQgSAWgjAAQgfAAgSgUgAgggkQgKAQAAAWQAAAWAKAPQALAPAVAAQAZAAAJgSQAJgRAAgVQAAgTgGgMQgLgUgaAAQgWAAgKARg");
	this.shape_3.setTransform(33.7,-22.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtA1QgSgTAAgeQAAgkATgUQAUgUAcAAQAZAAAQALQAPALAEAcIgZAAQgBgNgJgIQgHgJgSAAQgXAAgKAWQgHAOAAAUQAAAVAKAOQAJAOATAAQAQAAAJgJQAJgIADgQIAZAAQgEAcgRANQgQAMgbAAQgcAAgRgUg");
	this.shape_4.setTransform(18.95,-22.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AguA8QgOgPgCgUIAZAAQABALAFAHQAKALAWAAQAPAAALgGQALgFgBgMQAAgJgIgFQgGgDgQgDIgTgFQgTgEgKgFQgQgJAAgRQAAgUAPgMQAQgMAaAAQAhAAAPASQAJAMAAAOIgXAAQgBgIgGgHQgJgJgUAAQgPAAgHAFQgIAFAAAIQAAAJAKAGQAGADALADIAQADQAcAGAIAFQAPAJABATQAAATgQANQgPAOggAAQggAAgOgOg");
	this.shape_5.setTransform(-8.15,-22.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHAmIgFhLIAZAAIgFBLg");
	this.shape_6.setTransform(-17.225,-31);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMBfIAAi9IAZAAIAAC9g");
	this.shape_7.setTransform(-23.75,-25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag5A+QgNgMABgSQgBgTANgKQANgKAVgCIAngFQAJgBADgGQABgDABgGQAAgMgJgFQgKgGgQAAQgTAAgIAKQgFAGgCALIgXAAQABgaARgKQARgKAXAAQAZAAARAJQAQAJAAAUIAABPQAAAEACACQABACAFAAIAEAAIAEgBIAAARIgJACIgIABQgNAAgGgJQgCgEgCgJQgHAKgPAHQgOAGgRAAQgVAAgNgLgAARADIgOACIgPACQgNACgGAEQgMAGAAANQAAAKAIAGQAHAGAMAAQANAAALgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_8.setTransform(-34.55,-22.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABKBHIAAhgQAAgNgHgGQgIgFgKAAQgPAAgLAJQgKAKAAAVIAABQIgZAAIAAhaQAAgOgEgGQgFgKgQAAQgOAAgMAKQgLAKAAAbIAABJIgZAAIAAiKIAYAAIAAAUQAJgKAIgFQAMgIAQAAQARAAALAIQAFAFAFAJQAJgLALgGQALgFAOAAQAeAAALAUQAGALAAASIAABcg");
	this.shape_9.setTransform(-54.575,-22.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhDIAAgbIAZAAIAAAbg");
	this.shape_10.setTransform(-69.575,-25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AguA8QgOgPgBgUIAYAAQABALAFAHQAKALAWAAQAPAAALgGQALgFgBgMQAAgJgIgFQgGgDgQgDIgTgFQgUgEgJgFQgQgJAAgRQAAgUAPgMQAQgMAaAAQAhAAAPASQAJAMAAAOIgXAAQgBgIgFgHQgJgJgVAAQgPAAgHAFQgIAFAAAIQAAAJAKAGQAGADALADIAQADQAbAGAJAFQAPAJABATQAAATgQANQgQAOgeAAQghAAgOgOg");
	this.shape_11.setTransform(-79.8,-22.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgwA2QgSgSAAgiQAAghASgVQAUgUAfAAQAPAAAPAHQAPAGAIALQAHALADAOQACAJAAAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAZAAQgBAHgGAKQgFAJgHAGQgMAKgQAEQgJACgLAAQgbAAgUgTgAAqgLQgCgPgFgJQgKgRgYAAQgQAAgMAMQgMALAAASIBRAAIAAAAg");
	this.shape_12.setTransform(-95.05,-22.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_13.setTransform(-106.925,-24.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwA2QgSgSgBgiQABghASgVQAUgUAfAAQAPAAAPAHQAPAGAIALQAHALADAOQABAJAAAUIhrAAQABAVAKANQAKANAUAAQATAAAMgMQAGgHADgJIAZAAQgBAHgGAKQgFAJgHAGQgMAKgQAEQgJACgLAAQgbAAgUgTgAAqgLQgCgPgFgJQgKgRgYAAQgQAAgMAMQgLALgBASIBRAAIAAAAg");
	this.shape_14.setTransform(-118.8,-22.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_15.setTransform(-134.425,-22.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag5A+QgNgMAAgSQAAgTANgKQAOgKAUgCIAogFQAIgBADgGQACgDgBgGQABgMgKgFQgJgGgQAAQgTAAgJAKQgEAGgCALIgXAAQABgaARgKQASgKAWAAQAZAAARAJQAQAJAAAUIAABPQAAAEACACQABACAFAAIAEAAIAFgBIAAARIgJACIgJABQgNAAgFgJQgEgEgBgJQgIAKgOAHQgOAGgRAAQgUAAgOgLgAARADIgOACIgPACQgNACgHAEQgMAGABANQgBAKAJAGQAHAGAMAAQAMAAAMgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_16.setTransform(-150,-22.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLBfIAAi9IAYAAIAAC9g");
	this.shape_17.setTransform(-161.3,-25.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhBBjIAAjBIAZAAIAAATQAHgKAJgFQANgIAQAAQAZAAASASQASASAAAiQAAAsgaAUQgQAMgWAAQgPAAgMgHQgHgEgIgJIAABHgAgkg1QgFANAAAUQAAAQAFAKQAKAWAaAAQARAAALgOQAMgOAAgaQAAgQgFgMQgKgXgZAAQgaAAgKAYg");
	this.shape_18.setTransform(-172.075,-20.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgvBhIgHgBIAAgVIAKACIAFAAQAHAAADgCIAGgFIAFgLIAGgOIg3iOIAcAAIAnBwIAohwIAcAAIgXA9IgXA5QgWA1gIAMQgJAMgWAAg");
	this.shape_19.setTransform(105.225,-61.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLBfIAAi9IAXAAIAAC9g");
	this.shape_20.setTransform(95,-67.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgjBHIAAiKIAYAAIAAAYQADgHAKgKQALgKAPAAIADAAIAFABIAAAYIgEAAIgEAAQgTAAgJALQgKALAAAPIAABPg");
	this.shape_21.setTransform(87.975,-64.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag5A+QgNgMABgSQgBgTANgKQANgKAWgCIAmgFQAJgBADgGQABgDABgGQAAgMgJgFQgKgGgPAAQgUAAgIAKQgFAGgCALIgXAAQABgaARgKQARgKAXAAQAZAAARAJQAQAJAAAUIAABPQAAAEACACQABACAFAAIAEAAIAEgBIAAARIgJACIgIABQgNAAgGgJQgCgEgCgJQgHAKgPAHQgOAGgQAAQgWAAgNgLgAARADIgOACIgPACQgNACgGAEQgMAGAAANQAAAKAIAGQAHAGAMAAQANAAALgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_22.setTransform(74.8,-64.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgwA2QgSgSgBgiQABghASgVQAUgUAfAAQAPAAAPAHQAPAGAIALQAHALADAOQACAJAAAUIhsAAQABAVAKANQAKANAUAAQATAAAMgMQAGgHADgJIAZAAQgBAHgGAKQgFAJgHAGQgMAKgQAEQgJACgLAAQgbAAgUgTgAAqgLQgBgPgGgJQgKgRgYAAQgQAAgMAMQgLALgBASIBRAAIAAAAg");
	this.shape_23.setTransform(58.5,-64.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_24.setTransform(34.925,-64.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag5A+QgMgMAAgSQAAgTAMgKQANgKAWgCIAmgFQAJgBADgGQABgDABgGQgBgMgIgFQgKgGgPAAQgUAAgIAKQgFAGgCALIgXAAQABgaARgKQASgKAWAAQAZAAARAJQAQAJAAAUIAABPQAAAEACACQABACAFAAIAEAAIAEgBIAAARIgJACIgIABQgNAAgGgJQgDgEgBgJQgHAKgPAHQgOAGgQAAQgWAAgNgLgAARADIgOACIgPACQgNACgGAEQgMAGAAANQAAAKAHAGQAJAGALAAQANAAALgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_25.setTransform(19.35,-64.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgOBgIAAh2IgUAAIAAgTIAUAAIAAgVQABgOAFgIQAIgMAZABIAFAAIAFAAIAAAVIgFAAIgEAAQgLAAgDAGQgCAFAAAWIAZAAIAAATIgZAAIAAB2g");
	this.shape_26.setTransform(-0.725,-67.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAcAAAVASQATASAAAjQAAAggRAWQgSAWgkAAQgeAAgSgUgAgfgkQgLAQAAAWQAAAWALAPQAJAPAWAAQAZAAAJgSQAJgRAAgVQAAgTgHgMQgKgUgaAAQgWAAgJARg");
	this.shape_27.setTransform(-12.8,-64.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_28.setTransform(-32.575,-66.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_29.setTransform(-44.275,-64.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag4A+QgNgMgBgSQABgTANgKQANgKAUgCIAogFQAIgBADgGQABgDAAgGQAAgMgJgFQgIgGgRAAQgTAAgJAKQgEAGgBALIgYAAQABgaARgKQARgKAXAAQAZAAAQAJQARAJAAAUIAABPQAAAEABACQACACAFAAIAEAAIAFgBIAAARIgJACIgJABQgNAAgFgJQgDgEgCgJQgHAKgPAHQgNAGgSAAQgUAAgNgLgAARADIgOACIgOACQgOACgHAEQgLAGgBANQAAAKAIAGQAJAGAKAAQAOAAALgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_30.setTransform(-59.8,-64.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_31.setTransform(-75.925,-64.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ABKBHIAAhgQAAgNgHgGQgIgFgKAAQgPAAgLAJQgKAKAAAVIAABQIgZAAIAAhaQAAgOgEgGQgFgKgQAAQgOAAgMAKQgLAKAAAbIAABJIgZAAIAAiKIAYAAIAAAUQAJgKAIgFQAMgIAQAAQARAAALAIQAFAFAFAJQAJgLALgGQALgFAOAAQAeAAALAUQAGALAAASIAABcg");
	this.shape_32.setTransform(-95.675,-64.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAeAAQAQAAAPAHQAPAGAHALQAIALACAOQACAJABAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAYAAQAAAHgGAKQgGAJgGAGQgMAKgQAEQgJACgKAAQgcAAgTgTgAAqgLQgBgPgGgJQgLgRgXAAQgRAAgLAMQgLALgBASIBRAAIAAAAg");
	this.shape_33.setTransform(-115.6,-64.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgjBHIAAiKIAYAAIAAAYQADgHAKgKQALgKAPAAIADAAIAFABIAAAYIgEAAIgEAAQgTAAgJALQgKALAAAPIAABPg");
	this.shape_34.setTransform(-127.275,-64.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAeAAQAQAAAPAHQAPAGAHALQAIALACAOQADAJAAAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAYAAQAAAHgGAKQgGAJgGAGQgMAKgQAEQgJACgKAAQgcAAgTgTgAAqgLQgCgPgFgJQgKgRgYAAQgRAAgLAMQgMALAAASIBRAAIAAAAg");
	this.shape_35.setTransform(-148.8,-64.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAjBfIAAhXQAAgOgEgHQgHgLgTAAQgOgBgNALQgNAKAAAaIAABJIgZAAIAAi+IAZAAIAABHQAJgKAHgEQAMgIARABQAhgBALAWQAHALAAATIAABZg");
	this.shape_36.setTransform(-164.475,-67.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_37.setTransform(-176.525,-66.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAeAAQAQAAAPAHQAPAGAHALQAIALACAOQACAJABAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAYAAQAAAHgGAKQgGAJgGAGQgLAKgRAEQgJACgKAAQgcAAgTgTgAAqgLQgBgPgGgJQgLgRgXAAQgRAAgLAMQgLALgBASIBRAAIAAAAg");
	this.shape_38.setTransform(162.95,-94.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbBaQgHgFgIgJIAAARIgXAAIAAi+IAYAAIAABFQAJgJALgGQAMgFAMAAQAcAAARASQASASAAAhQAAAhgRAWQgSAWgeAAQgQAAgMgIgAgdgPQgNALAAAaQAAAUAFAMQAKAXAbAAQAUAAAKgPQAKgPAAgZQAAgVgKgOQgKgOgUAAQgQAAgNAMg");
	this.shape_39.setTransform(147.575,-96.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgvBOQgSgTAAghQAAgcARgXQAQgWAfAAQAQAAALAHQAHADAJAKIAAhGIAYAAIAAC+IgXAAIAAgUQgJAOgLAFQgMAGgPAAQgZAAgSgUgAgbgNQgMANAAAZQAAAXALAOQAKAPAVABQARAAALgOQAMgOAAgaQAAgagMgMQgLgNgRAAQgSABgMANg");
	this.shape_40.setTransform(122.975,-96.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMBfIAAi9IAZAAIAAC9g");
	this.shape_41.setTransform(112.5,-96.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag0AzQgGgKAAgSIAAhdIAaAAIAABbQgBAKAEAHQAHAMASAAQAYAAAJgVQAFgMAAgTIAAhEIAZAAIAACJIgYAAIAAgUQgEAIgHAFQgOALgUAAQgeAAgMgUg");
	this.shape_42.setTransform(101.25,-93.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAcAAAVASQATASAAAjQAAAggRAWQgSAWgkAAQgeAAgSgUgAgfgkQgLAQAAAWQAAAWALAPQAKAPAVAAQAZAAAJgSQAJgRAAgVQAAgTgHgMQgKgUgaAAQgVAAgKARg");
	this.shape_43.setTransform(85.4,-94.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AguA1QgRgTAAgeQAAgkAUgUQASgUAdAAQAZAAAQALQAQALADAcIgYAAQgDgNgHgIQgIgJgSAAQgXAAgLAWQgGAOAAAUQAAAVAJAOQAKAOATAAQAQAAAJgJQAJgIAEgQIAYAAQgEAcgRANQgQAMgbAAQgcAAgSgUg");
	this.shape_44.setTransform(70.65,-94.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_45.setTransform(51.375,-95.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhEIAAgaIAZAAIAAAag");
	this.shape_46.setTransform(44.475,-96.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAeAAQAQAAAPAHQAPAGAHALQAIALACAOQADAJAAAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAYAAQAAAHgGAKQgGAJgGAGQgMAKgQAEQgJACgKAAQgcAAgTgTgAAqgLQgCgPgFgJQgKgRgYAAQgRAAgLAMQgMALAAASIBRAAIAAAAg");
	this.shape_47.setTransform(25.35,-94.025);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag9BFIAAgSIBYhjIhRAAIAAgUIByAAIAAATIhXBhIBaAAIAAAVg");
	this.shape_48.setTransform(10.3,-94.125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhEIAAgaIAZAAIAAAag");
	this.shape_49.setTransform(0.225,-96.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AguA8QgOgPgBgUIAYAAQABALAFAHQAKALAWAAQAPAAALgGQALgFgBgMQAAgJgIgFQgGgDgQgDIgTgFQgUgEgJgFQgQgJAAgRQAAgUAPgMQAQgMAaAAQAhAAAPASQAJAMAAAOIgXAAQgBgIgFgHQgJgJgVAAQgPAAgHAFQgIAFAAAIQAAAJAKAGQAGADALADIAQADQAbAGAJAFQAPAJABATQAAATgQANQgQAOgeAAQghAAgOgOg");
	this.shape_50.setTransform(-10.05,-94.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgvA2QgUgSAAgiQAAghAUgVQATgUAeAAQAQAAAPAHQAPAGAHALQAIALACAOQACAJAAAUIhrAAQABAVAKANQAKANATAAQAUAAAMgMQAGgHADgJIAYAAQgBAHgFAKQgFAJgHAGQgLAKgRAEQgJACgKAAQgcAAgTgTgAAqgLQgBgPgGgJQgKgRgYAAQgRAAgLAMQgMALAAASIBRAAIAAAAg");
	this.shape_51.setTransform(-25.25,-94.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAjBfIAAhXQAAgOgEgHQgHgLgTAAQgOAAgNAKQgNAKAAAaIAABJIgZAAIAAi9IAZAAIAABHQAJgLAHgEQAMgIARAAQAhAAALAWQAHALAAATIAABZg");
	this.shape_52.setTransform(-40.925,-96.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_53.setTransform(-52.975,-95.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAcAAAVASQATASAAAjQAAAggRAWQgSAWgkAAQgeAAgSgUgAgfgkQgLAQAAAWQAAAWALAPQAKAPAVAAQAZAAAJgSQAJgRAAgVQAAgTgHgMQgKgUgaAAQgVAAgKARg");
	this.shape_54.setTransform(-64.9,-94.075);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhBBjIAAjBIAZAAIAAATQAHgKAJgFQANgIAQAAQAZAAASASQASASAAAiQAAAsgaAUQgQAMgWAAQgPAAgMgHQgHgEgIgJIAABHgAgkg1QgFANAAAUQAAAQAFAKQAKAWAaAAQARAAALgOQAMgOAAgaQAAgQgFgMQgKgXgZAAQgaAAgKAYg");
	this.shape_55.setTransform(-80.225,-91.525);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgvBhIgHgBIAAgVIAKACIAFAAQAHAAADgCIAGgFIAFgLIAGgOIg3iOIAcAAIAnBwIAohwIAcAAIgXA9IgXA5QgWA1gIAMQgJAMgWAAg");
	this.shape_56.setTransform(-95.575,-91.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAjBfIAAhXQAAgOgEgHQgHgLgTAAQgOAAgNAKQgNAKAAAaIAABJIgZAAIAAi9IAZAAIAABHQAJgLAHgEQAMgIARAAQAhAAALAWQAHALAAATIAABZg");
	this.shape_57.setTransform(-110.625,-96.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgvBhIgHgBIAAgVIAKACIAFAAQAHAAADgCIAGgFIAFgLIAGgOIg3iOIAcAAIAnBwIAohwIAcAAIgXA9IgXA5QgWA1gIAMQgJAMgWAAg");
	this.shape_58.setTransform(-133.575,-91.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAeAAQAQAAAPAHQAPAGAHALQAIALACAOQADAJAAAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAYAAQAAAHgGAKQgGAJgGAGQgMAKgQAEQgJACgKAAQgcAAgTgTgAAqgLQgCgPgFgJQgKgRgYAAQgRAAgLAMQgMALAAASIBRAAIAAAAg");
	this.shape_59.setTransform(-148.8,-94.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAjBfIAAhXQAAgOgEgHQgHgLgTAAQgOAAgNAKQgNAKAAAaIAABJIgZAAIAAi9IAZAAIAABHQAJgLAHgEQAMgIARAAQAhAAALAWQAHALAAATIAABZg");
	this.shape_60.setTransform(-164.475,-96.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_61.setTransform(-176.525,-95.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AguA8QgPgPgBgUIAZAAQABALAFAHQAKALAWAAQAPAAAKgGQALgFAAgMQABgJgJgFQgFgDgRgDIgTgFQgUgEgIgFQgRgJAAgRQAAgUAQgMQAPgMAaAAQAhAAAPASQAKAMAAAOIgZAAQAAgIgGgHQgIgJgVAAQgPAAgHAFQgIAFABAIQAAAJAJAGQAGADALADIAQADQAbAGAKAFQAPAJgBATQAAATgPANQgPAOggAAQggAAgOgOg");
	this.shape_62.setTransform(161.35,-123.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ag5A+QgNgMAAgSQAAgTANgKQAOgKAUgCIAogFQAIgBADgGQACgDgBgGQABgMgKgFQgJgGgQAAQgTAAgJAKQgEAGgCALIgXAAQABgaARgKQASgKAWAAQAZAAARAJQAQAJAAAUIAABPQAAAEACACQABACAFAAIAEAAIAFgBIAAARIgJACIgJABQgNAAgFgJQgEgEgBgJQgIAKgOAHQgOAGgRAAQgUAAgOgLgAARADIgOACIgPACQgNACgHAEQgMAGABANQgBAKAJAGQAHAGAMAAQAMAAAMgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_63.setTransform(146.55,-123.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgOAVQAKgBADgLQACgGAAgFIAAgBIgBgCIgOAAIAAgcIAdAAIAAAaQAAAPgHALQgHAMgPADg");
	this.shape_64.setTransform(126.35,-116.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgwA2QgSgSgBgiQABghASgVQAUgUAfAAQAPAAAPAHQAPAGAIALQAHALADAOQABAJAAAUIhrAAQABAVAKANQAKANAUAAQATAAAMgMQAGgHADgJIAZAAQgCAHgFAKQgGAJgGAGQgMAKgQAEQgJACgLAAQgbAAgUgTgAAqgLQgCgPgFgJQgLgRgXAAQgQAAgMAMQgLALgBASIBRAAIAAAAg");
	this.shape_65.setTransform(114.4,-123.475);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgjBHIAAiKIAYAAIAAAYQADgHAKgKQALgKAPAAIADAAIAFABIAAAYIgEAAIgEAAQgTAAgJALQgKALAAAPIAABPg");
	this.shape_66.setTransform(102.775,-123.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAdAAAUASQATASAAAjQAAAggRAWQgSAWgkAAQgeAAgSgUgAgfgkQgLAQAAAWQAAAWALAPQAKAPAVAAQAZAAAJgSQAJgRAAgVQAAgTgGgMQgLgUgZAAQgWAAgKARg");
	this.shape_67.setTransform(89.1,-123.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AguA1QgRgTAAgeQAAgkAUgUQASgUAdAAQAZAAAQALQAPALAEAcIgYAAQgDgNgHgIQgJgJgRAAQgXAAgLAWQgGAOAAAUQAAAVAKAOQAJAOATAAQAQAAAJgJQAJgIAEgQIAYAAQgEAcgRANQgQAMgbAAQgcAAgSgUg");
	this.shape_68.setTransform(74.35,-123.575);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AguA8QgOgPgBgUIAYAAQABALAFAHQAKALAWAAQAPAAALgGQALgFgBgMQAAgJgIgFQgGgDgQgDIgTgFQgTgEgKgFQgQgJAAgRQAAgUAPgMQAQgMAaAAQAhAAAPASQAJAMAAAOIgXAAQgBgIgFgHQgJgJgVAAQgPAAgHAFQgIAFAAAIQAAAJAKAGQAGADALADIAQADQAcAGAIAFQAPAJABATQAAATgQANQgPAOgfAAQghAAgOgOg");
	this.shape_69.setTransform(52.15,-123.475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHAmIgFhLIAZAAIgFBLg");
	this.shape_70.setTransform(43.025,-131.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAjBgIAAhYQAAgOgEgHQgHgMgTAAQgOAAgNALQgNAJAAAbIAABKIgZAAIAAi+IAZAAIAABHQAJgLAHgEQAMgHARgBQAhABALAUQAHAMAAATIAABag");
	this.shape_71.setTransform(31.675,-126.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_72.setTransform(19.625,-125.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgjBHIAAiKIAYAAIAAAYQADgHAKgKQALgKAPAAIADAAIAFABIAAAYIgEAAIgEAAQgTAAgJALQgKALAAAPIAABPg");
	this.shape_73.setTransform(11.925,-123.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("Ag4A+QgOgMAAgSQAAgTAOgKQANgKAVgCIAngFQAIgBADgGQABgDAAgGQAAgMgJgFQgIgGgQAAQgUAAgJAKQgEAGgBALIgYAAQABgaARgKQARgKAXAAQAZAAAQAJQARAJAAAUIAABPQAAAEABACQACACAFAAIAEAAIAEgBIAAARIgIACIgJABQgNAAgFgJQgDgEgCgJQgIAKgOAHQgOAGgQAAQgVAAgNgLgAARADIgOACIgOACQgOACgGAEQgMAGgBANQABAKAHAGQAIAGALAAQAOAAALgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_74.setTransform(-1.2,-123.525);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AhKBfIAAi9ICTAAIAAAXIh4AAIAAA6IBvAAIAAAVIhvAAIAABBIB6AAIAAAWg");
	this.shape_75.setTransform(-18.425,-126.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_76.setTransform(-40.475,-125.425);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("Ag0AzQgGgKAAgSIAAhdIAaAAIAABbQAAAKADAHQAGAMATAAQAYAAAJgVQAFgMAAgTIAAhEIAZAAIAACJIgYAAIAAgUQgEAIgHAFQgOALgUAAQgeAAgMgUg");
	this.shape_77.setTransform(-52.4,-123.375);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAcAAAVASQATASAAAjQAAAggRAWQgRAWgkAAQgfAAgSgUgAgfgkQgLAQAAAWQAAAWALAPQAJAPAWAAQAYAAAKgSQAJgRAAgVQAAgTgHgMQgKgUgaAAQgVAAgKARg");
	this.shape_78.setTransform(-68.25,-123.525);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgbBaQgHgFgIgJIAAARIgXAAIAAi+IAYAAIAABFQAJgJALgGQAMgFAMAAQAcAAARASQASASAAAhQAAAhgRAWQgSAWgeAAQgQAAgMgIgAgdgPQgNALAAAaQAAAUAFAMQAKAXAbAAQAUAAAKgPQAKgPAAgZQAAgVgKgOQgKgOgUAAQgQAAgNAMg");
	this.shape_79.setTransform(-83.525,-125.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("Ag4A+QgNgMgBgSQABgTANgKQANgKAUgCIAogFQAIgBADgGQABgDAAgGQAAgMgJgFQgIgGgRAAQgTAAgJAKQgEAGgBALIgYAAQABgaARgKQARgKAXAAQAZAAAQAJQARAJAAAUIAABPQAAAEABACQACACAFAAIAEAAIAFgBIAAARIgJACIgJABQgNAAgFgJQgDgEgCgJQgHAKgPAHQgNAGgSAAQgUAAgNgLgAARADIgOACIgOACQgOACgHAEQgLAGgBANQAAAKAIAGQAJAGAKAAQAOAAALgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_80.setTransform(-99.4,-123.525);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAeAAQAQAAAPAHQAPAGAHALQAIALACAOQADAJAAAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAYAAQAAAHgGAKQgGAJgGAGQgMAKgQAEQgJACgLAAQgbAAgTgTgAAqgLQgCgPgFgJQgKgRgYAAQgRAAgLAMQgMALAAASIBRAAIAAAAg");
	this.shape_81.setTransform(-123.6,-123.475);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgjBHIAAiKIAYAAIAAAYQADgHAKgKQALgKAPAAIADAAIAFABIAAAYIgEAAIgEAAQgTAAgJALQgKALAAAPIAABPg");
	this.shape_82.setTransform(-135.275,-123.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAcAAAVASQATASAAAjQAAAggRAWQgRAWgkAAQgfAAgSgUgAgggkQgKAQAAAWQAAAWAKAPQAKAPAWAAQAYAAAKgSQAJgRAAgVQAAgTgHgMQgKgUgaAAQgWAAgKARg");
	this.shape_83.setTransform(-148.9,-123.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("ABKBHIAAhgQAAgNgHgGQgIgFgKAAQgPAAgLAJQgKAKAAAVIAABQIgZAAIAAhaQAAgOgEgGQgFgKgQAAQgOAAgMAKQgLAKAAAbIAABJIgZAAIAAiKIAYAAIAAAUQAJgKAIgFQAMgIAQAAQARAAALAIQAFAFAFAJQAJgLALgGQALgFAOAAQAeAAALAUQAGALAAASIAABcg");
	this.shape_84.setTransform(-168.425,-123.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_85.setTransform(156.725,-153.175);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgjBHIAAiKIAYAAIAAAYQADgHAKgKQALgKAPAAIADAAIAFABIAAAYIgEAAIgEAAQgTAAgJALQgKALAAAPIAABPg");
	this.shape_86.setTransform(144.875,-153.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("Ag5A+QgMgMAAgSQAAgTAMgKQANgKAWgCIAmgFQAJgBADgGQACgDAAgGQgBgMgIgFQgKgGgPAAQgUAAgIAKQgFAGgBALIgYAAQABgaARgKQASgKAWAAQAZAAARAJQAQAJAAAUIAABPQAAAEACACQABACAFAAIAEAAIAEgBIAAARIgJACIgIABQgNAAgGgJQgDgEgBgJQgHAKgPAHQgNAGgRAAQgWAAgNgLgAARADIgOACIgPACQgNACgGAEQgNAGAAANQABAKAHAGQAJAGAKAAQANAAAMgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_87.setTransform(131.75,-152.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAfAAQAPAAAPAHQAPAGAHALQAIALADAOQACAJAAAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAZAAQgCAHgFAKQgGAJgGAGQgMAKgQAEQgJACgLAAQgbAAgTgTgAAqgLQgCgPgFgJQgKgRgYAAQgQAAgMAMQgMALAAASIBRAAIAAAAg");
	this.shape_88.setTransform(115.45,-152.925);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgMBfIAAi9IAYAAIAAC9g");
	this.shape_89.setTransform(104.6,-155.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAcAAAVASQATASAAAjQAAAggRAWQgSAWgkAAQgeAAgSgUgAgfgkQgLAQAAAWQAAAWALAPQAKAPAVAAQAZAAAJgSQAJgRAAgVQAAgTgHgMQgKgUgaAAQgVAAgKARg");
	this.shape_90.setTransform(85.4,-152.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_91.setTransform(73.525,-154.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgvBLQgVgTABgvQAAghAJgZQARgtAuAAQAhAAANAQQANAPAAARIgYAAQgDgKgFgGQgJgMgSAAQgUAAgNASQgMASgBAiQAIgMANgGQAMgFAOAAQAZAAATAOQATAOAAAeQgBAZgRAUQgSATghAAQgbAAgUgUgAgaADQgMAKAAAUQAAASALAMQALALATABQAUgBAJgLQAKgNAAgRQAAgOgJgNQgJgMgWAAQgQAAgMAJg");
	this.shape_92.setTransform(53.9,-155.15);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAKBcIAAiCIguAAIAAgSQAbgCAKgGQALgGAFgVIAUAAIAAC3g");
	this.shape_93.setTransform(36.625,-155.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgwA2QgSgSgBgiQABghASgVQAUgUAfAAQAPAAAPAHQAPAGAIALQAHALADAOQABAJAAAUIhrAAQABAVAKANQAKANAUAAQATAAAMgMQAHgHACgJIAZAAQgCAHgFAKQgGAJgGAGQgLAKgRAEQgJACgKAAQgcAAgUgTgAAqgLQgBgPgGgJQgLgRgXAAQgQAAgMAMQgMALAAASIBRAAIAAAAg");
	this.shape_94.setTransform(14.15,-152.925);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAjBgIAAhYQAAgOgEgHQgHgMgTAAQgOABgNAJQgNALAAAaIAABKIgZAAIAAi/IAZAAIAABHQAJgKAHgEQAMgHARAAQAhAAALAUQAHAMAAAUIAABZg");
	this.shape_95.setTransform(-1.475,-155.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgtA1QgSgTAAgeQAAgkAUgUQASgUAdAAQAZAAAQALQAPALAEAcIgZAAQgBgNgIgIQgJgJgRAAQgXAAgLAWQgGAOAAAUQAAAVAKAOQAJAOATAAQAQAAAJgJQAJgIADgQIAZAAQgFAcgQANQgQAMgbAAQgcAAgRgUg");
	this.shape_96.setTransform(-16.45,-153.025);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgvBhIgHgBIAAgVIAKACIAFAAQAHAAADgCIAGgFIAFgLIAGgOIg3iOIAcAAIAnBwIAohwIAcAAIgXA9IgXA5QgWA1gIAMQgJAMgWAAg");
	this.shape_97.setTransform(-30.775,-150.175);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AguA8QgOgPgCgUIAZAAQABALAFAHQAKALAWAAQAPAAALgGQALgFgBgMQAAgJgIgFQgGgDgQgDIgTgFQgTgEgKgFQgQgJAAgRQAAgUAPgMQAQgMAaAAQAhAAAPASQAJAMAAAOIgXAAQgBgIgFgHQgKgJgUAAQgPAAgHAFQgIAFAAAIQAAAJAKAGQAGADALADIAQADQAcAGAIAFQAPAJABATQAAATgQANQgPAOggAAQggAAgOgOg");
	this.shape_98.setTransform(-45.05,-152.925);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AhLBfIAAi9IBbAAQAbAAAQAPQARAOAAAZQAAAXgPAQQgPAPgeAAIg/AAIAABRgAgvgGIA2AAQASAAALgIQAMgHAAgTQAAgUgQgIQgKgEgPAAIg2AAg");
	this.shape_99.setTransform(-61.15,-155.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgvBPQgSgUAAggQAAgdARgXQAQgWAfAAQAQAAALAGQAHAFAJAKIAAhHIAYAAIAAC+IgXAAIAAgUQgJANgLAGQgMAGgPAAQgZAAgSgTgAgbgOQgMAOAAAaQAAAVALAQQAKAOAVAAQARAAALgNQAMgOAAgaQAAgZgMgNQgLgMgRAAQgSgBgMANg");
	this.shape_100.setTransform(-87.575,-155.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhDIAAgbIAZAAIAAAbg");
	this.shape_101.setTransform(-98.075,-155.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAdAAATASQAUASAAAjQAAAggRAWQgSAWgkAAQgeAAgSgUgAgfgkQgLAQAAAWQAAAWALAPQAJAPAWAAQAZAAAJgSQAJgRAAgVQAAgTgGgMQgLgUgZAAQgWAAgKARg");
	this.shape_102.setTransform(-109.35,-152.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgjBHIAAiKIAYAAIAAAYQADgHAKgKQALgKAPAAIADAAIAFABIAAAYIgEAAIgEAAQgTAAgJALQgKALAAAPIAABPg");
	this.shape_103.setTransform(-120.925,-153.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgwA2QgSgSgBgiQABghASgVQAUgUAfAAQAPAAAPAHQAPAGAIALQAHALADAOQABAJAAAUIhrAAQABAVAKANQAKANAUAAQATAAAMgMQAGgHADgJIAZAAQgBAHgGAKQgFAJgHAGQgMAKgQAEQgJACgLAAQgbAAgUgTgAAqgLQgCgPgFgJQgKgRgYAAQgQAAgMAMQgLALgBASIBRAAIAAAAg");
	this.shape_104.setTransform(-134.55,-152.925);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_105.setTransform(-146.425,-154.875);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgvA8QgOgPAAgUIAYAAQABALAFAHQAKALAXAAQAOAAALgGQAKgFABgMQAAgJgJgFQgGgDgQgDIgTgFQgUgEgJgFQgQgJAAgRQAAgUAPgMQAQgMAaAAQAhAAAPASQAJAMAAAOIgYAAQAAgIgFgHQgKgJgUAAQgPAAgHAFQgHAFgBAIQAAAJAKAGQAGADALADIAQADQAbAGAJAFQAQAJAAATQAAATgQANQgQAOgeAAQghAAgPgOg");
	this.shape_106.setTransform(-157.3,-152.925);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("Ag4A+QgOgMAAgSQAAgTAOgKQAMgKAWgCIAmgFQAJgBADgGQACgDAAgGQgBgMgIgFQgKgGgPAAQgUAAgIAKQgFAGgBALIgYAAQABgaARgKQASgKAWAAQAZAAAQAJQARAJAAAUIAABPQAAAEABACQACACAFAAIAEAAIAEgBIAAARIgJACIgIABQgNAAgGgJQgDgEgBgJQgHAKgPAHQgNAGgRAAQgWAAgMgLgAARADIgOACIgOACQgOACgGAEQgNAGAAANQABAKAHAGQAJAGAKAAQANAAAMgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_107.setTransform(-172.1,-152.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgtA1QgSgTAAgeQAAgkAUgUQASgUAdAAQAZAAAQALQAQALADAcIgZAAQgBgNgJgIQgHgJgSAAQgXAAgKAWQgHAOAAAUQAAAVAKAOQAJAOATAAQAQAAAJgJQAJgIADgQIAZAAQgFAcgQANQgRAMgaAAQgcAAgRgUg");
	this.shape_108.setTransform(163.75,-182.475);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhDIAAgbIAZAAIAAAbg");
	this.shape_109.setTransform(153.425,-185.05);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgLBfIAAi9IAXAAIAAC9g");
	this.shape_110.setTransform(147.2,-185.05);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgMBfIAAi9IAYAAIAAC9g");
	this.shape_111.setTransform(140.95,-185.05);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("Ag5A+QgNgMABgSQgBgTANgKQANgKAWgCIAmgFQAJgBADgGQABgDABgGQAAgMgJgFQgKgGgPAAQgUAAgIAKQgFAGgCALIgXAAQABgaARgKQARgKAXAAQAZAAARAJQAQAJAAAUIAABPQAAAEACACQABACAFAAIAEAAIAEgBIAAARIgJACIgIABQgNAAgGgJQgCgEgCgJQgHAKgPAHQgOAGgQAAQgWAAgNgLgAARADIgOACIgPACQgNACgGAEQgMAGAAANQAAAKAIAGQAHAGAMAAQANAAALgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_112.setTransform(130.15,-182.425);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_113.setTransform(117.825,-184.325);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgwA2QgSgSgBgiQABghASgVQAUgUAfAAQAPAAAPAHQAPAGAIALQAHALACAOQACAJAAAUIhrAAQABAVAKANQAKANAUAAQATAAAMgMQAHgHACgJIAYAAQgBAHgFAKQgGAJgGAGQgLAKgRAEQgJACgKAAQgcAAgUgTgAAqgLQgBgPgGgJQgLgRgXAAQgQAAgMAMQgMALAAASIBRAAIAAAAg");
	this.shape_114.setTransform(105.95,-182.375);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("ABKBHIAAhgQAAgNgHgGQgIgFgKAAQgPAAgLAJQgKAKAAAVIAABQIgZAAIAAhaQAAgOgEgGQgFgKgQAAQgOAAgMAKQgLAKAAAbIAABJIgZAAIAAiKIAYAAIAAAUQAJgKAIgFQAMgIAQAAQARAAALAIQAFAFAFAJQAJgLALgGQALgFAOAAQAeAAALAUQAGALAAASIAABcg");
	this.shape_115.setTransform(86.375,-182.625);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgwA2QgSgSgBgiQABghASgVQAUgUAfAAQAPAAAPAHQAPAGAIALQAHALADAOQACAJAAAUIhsAAQABAVAKANQAKANAUAAQATAAAMgMQAGgHADgJIAZAAQgBAHgGAKQgFAJgHAGQgMAKgQAEQgJACgLAAQgbAAgUgTgAAqgLQgBgPgGgJQgKgRgYAAQgQAAgMAMQgLALgBASIBRAAIAAAAg");
	this.shape_116.setTransform(58.5,-182.375);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("Ag0AzQgGgKAAgSIAAhdIAaAAIAABbQgBAKAEAHQAGAMATAAQAXAAAKgVQAFgMAAgTIAAhEIAZAAIAACJIgYAAIAAgUQgEAIgHAFQgPALgTAAQgeAAgMgUg");
	this.shape_117.setTransform(42.65,-182.275);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AApBiIAAhHQgHAJgLAGQgLAGgPgBQgYAAgTgRQgTgSAAghQAAgiASgVQASgWAcAAQARAAANAJQAHAEAGAKIAAgTIAYAAIAADAgAgbhAQgLANAAAbQAAATAFALQAKAVAXAAQAaAAAKgWQAGgMAAgUQAAgRgGgMQgKgVgaAAQgPAAgMANg");
	this.shape_118.setTransform(26.475,-179.85);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhDIAAgbIAZAAIAAAbg");
	this.shape_119.setTransform(15.975,-185.05);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_120.setTransform(4.925,-182.625);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("Ag0AzQgGgKAAgSIAAhdIAaAAIAABbQAAAKADAHQAHAMASAAQAYAAAJgVQAFgMAAgTIAAhEIAZAAIAACJIgXAAIAAgUQgFAIgHAFQgOALgUAAQgeAAgMgUg");
	this.shape_121.setTransform(-11.15,-182.275);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAfAAQAPAAAPAHQAPAGAHALQAIALADAOQACAJAAAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAZAAQgCAHgFAKQgGAJgGAGQgMAKgQAEQgJACgLAAQgbAAgTgTgAAqgLQgCgPgFgJQgKgRgYAAQgQAAgMAMQgMALAAASIBRAAIAAAAg");
	this.shape_122.setTransform(-34.85,-182.375);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAjBfIAAhXQAAgOgEgHQgHgMgTAAQgOAAgNAKQgNALAAAaIAABJIgZAAIAAi+IAZAAIAABHQAJgKAHgEQAMgIARABQAhgBALAVQAHAMAAAUIAABYg");
	this.shape_123.setTransform(-50.525,-185.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_124.setTransform(-62.575,-184.325);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgpBaQgRgKgCgWIAaAAQACAKAFAFQAIAIATAAQAbAAAJgTQAFgLAAgdQgIALgKAFQgLAFgQAAQgYAAgSgQQgSgQAAgkQAAgjASgTQASgUAaAAQAQAAANAIQAIAFAHAIIAAgRIAXAAIAAB9QAAAagIAQQgQAcgqAAQgYAAgQgKgAghg3QgGAMAAAUQAAAXALAMQAKAMARAAQAaAAALgXQAGgMAAgRQAAgZgLgNQgMgMgRAAQgaAAgJAXg");
	this.shape_125.setTransform(-82.725,-179.675);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_126.setTransform(-98.025,-182.625);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhDIAAgbIAZAAIAAAbg");
	this.shape_127.setTransform(-109.075,-185.05);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgvBhIgHgBIAAgVIAKACIAFAAQAHAAADgCIAGgFIAFgLIAGgOIg3iOIAcAAIAnBwIAohwIAcAAIgXA9IgXA5QgWA1gIAMQgJAMgWAAg");
	this.shape_128.setTransform(-119.325,-179.625);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgvBOQgSgTAAggQAAgeARgWQAQgWAfAAQAQAAALAHQAHADAJALIAAhHIAYAAIAAC+IgXAAIAAgTQgJANgLAFQgMAGgPAAQgZAAgSgUgAgbgOQgMAOAAAZQAAAWALAQQAKAPAVgBQARAAALgNQAMgOAAgaQAAgagMgMQgLgMgRAAQgSAAgMAMg");
	this.shape_129.setTransform(-134.925,-184.85);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("Ag0AzQgGgKAAgSIAAhdIAZAAIAABbQABAKADAHQAGAMASAAQAYAAAKgVQAFgMAAgTIAAhEIAZAAIAACJIgXAAIAAgUQgFAIgHAFQgPALgSAAQggAAgLgUg");
	this.shape_130.setTransform(-150.45,-182.275);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_131.setTransform(-162.275,-184.325);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgvA8QgOgPAAgUIAYAAQABALAFAHQAKALAXAAQAOAAALgGQAKgFABgMQAAgJgJgFQgFgDgRgDIgTgFQgUgEgJgFQgQgJAAgRQAAgUAQgMQAPgMAaAAQAhAAAPASQAJAMAAAOIgYAAQAAgIgFgHQgKgJgUAAQgPAAgHAFQgHAFgBAIQAAAJAKAGQAGADALADIAQADQAbAGAKAFQAPAJAAATQgBATgPANQgQAOgeAAQghAAgPgOg");
	this.shape_132.setTransform(-173.15,-182.375);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgwA2QgTgSAAgiQAAghATgVQAUgUAeAAQAQAAAPAHQAPAGAIALQAHALACAOQACAJAAAUIhrAAQABAVAKANQAKANAUAAQATAAAMgMQAGgHADgJIAYAAQgBAHgFAKQgGAJgGAGQgLAKgRAEQgJACgKAAQgcAAgUgTgAAqgLQgBgPgGgJQgLgRgXAAQgQAAgMAMQgMALAAASIBRAAIAAAAg");
	this.shape_133.setTransform(58.35,-211.825);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgjBHIAAiKIAYAAIAAAYQADgHAKgKQALgKAPAAIADAAIAFABIAAAYIgEAAIgEAAQgTAAgJALQgKALAAAPIAABPg");
	this.shape_134.setTransform(46.725,-212.075);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("Ag4A+QgOgMAAgSQAAgTAOgKQAMgKAWgCIAmgFQAJgBADgGQACgDAAgGQgBgMgIgFQgKgGgPAAQgUAAgIAKQgFAGgBALIgYAAQABgaARgKQASgKAWAAQAZAAAQAJQARAJAAAUIAABPQAAAEABACQACACAFAAIAEAAIAEgBIAAARIgJACIgIABQgNAAgGgJQgDgEgBgJQgHAKgPAHQgNAGgRAAQgWAAgMgLgAARADIgOACIgOACQgOACgGAEQgNAGAAANQABAKAHAGQAJAGAKAAQANAAAMgGQAVgKAAgVIAAgSQgFACgHACg");
	this.shape_135.setTransform(33.55,-211.875);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_136.setTransform(9.525,-212.075);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAcAAAUASQAUASAAAjQAAAggRAWQgRAWglAAQgeAAgSgUgAgggkQgKAQAAAWQAAAWAKAPQALAPAVAAQAYAAAKgSQAJgRAAgVQAAgTgGgMQgLgUgZAAQgWAAgLARg");
	this.shape_137.setTransform(-6.55,-211.875);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhDIAAgbIAZAAIAAAbg");
	this.shape_138.setTransform(-17.375,-214.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AguA8QgOgPgBgUIAYAAQABALAFAHQAKALAWAAQAPAAALgGQALgFgBgMQAAgJgIgFQgGgDgQgDIgTgFQgUgEgJgFQgQgJAAgRQAAgUAPgMQAQgMAaAAQAhAAAPASQAJAMAAAOIgXAAQgBgIgFgHQgJgJgVAAQgPAAgHAFQgIAFAAAIQAAAJAKAGQAGADALADIAQADQAbAGAJAFQAPAJABATQAAATgQANQgQAOgeAAQghAAgOgOg");
	this.shape_139.setTransform(-27.6,-211.825);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgvA8QgNgPgBgUIAYAAQABALAFAHQAKALAXAAQAOAAAKgGQAMgFAAgMQAAgJgJgFQgFgDgRgDIgTgFQgTgEgJgFQgRgJAAgRQAAgUAQgMQAPgMAaAAQAhAAAPASQAKAMAAAOIgZAAQAAgIgFgHQgKgJgUAAQgPAAgHAFQgHAFAAAIQAAAJAJAGQAGADALADIAQADQAbAGAKAFQAOAJAAATQAAATgPANQgPAOgfAAQghAAgPgOg");
	this.shape_140.setTransform(-41.85,-211.825);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhDIAAgbIAZAAIAAAbg");
	this.shape_141.setTransform(-52.125,-214.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("ABIBfIAAhvIAAgUIAAgcIg6CfIgbAAIg7ifIAAAGIABAVIAAAVIAABvIgaAAIAAi9IAnAAIA6CfIA7ifIAnAAIAAC9g");
	this.shape_142.setTransform(-67.025,-214.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgwA2QgSgSgBgiQABghASgVQAUgUAfAAQAPAAAPAHQAPAGAIALQAHALADAOQABAJAAAUIhrAAQABAVAKANQAKANAUAAQATAAAMgMQAGgHADgJIAZAAQgBAHgGAKQgFAJgHAGQgMAKgQAEQgJACgLAAQgbAAgUgTgAAqgLQgCgPgFgJQgKgRgYAAQgQAAgMAMQgLALgBASIBRAAIAAAAg");
	this.shape_143.setTransform(-94.95,-211.825);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAjBfIAAhXQAAgOgEgHQgHgLgTAAQgOgBgNALQgNAKAAAaIAABJIgZAAIAAi+IAZAAIAABIQAJgLAHgEQAMgIARAAQAhAAALAWQAHALAAATIAABZg");
	this.shape_144.setTransform(-110.625,-214.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgtA1QgSgTAAgeQAAgkATgUQATgUAdAAQAZAAAQALQAQALADAcIgZAAQgBgNgJgIQgHgJgSAAQgXAAgKAWQgHAOAAAUQAAAVAKAOQAJAOATAAQAQAAAJgJQAJgIADgQIAZAAQgFAcgQANQgRAMgaAAQgcAAgRgUg");
	this.shape_145.setTransform(-125.6,-211.925);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgvBhIgHgBIAAgVIAKACIAFAAQAHAAADgCIAGgFIAFgLIAGgOIg3iOIAcAAIAnBwIAohwIAcAAIgXA9IgXA5QgWA1gIAMQgJAMgWAAg");
	this.shape_146.setTransform(-139.925,-209.075);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgvA8QgOgPAAgUIAYAAQABALAFAHQAKALAXAAQAOAAALgGQAKgFABgMQAAgJgJgFQgGgDgQgDIgTgFQgUgEgJgFQgQgJAAgRQAAgUAPgMQAQgMAaAAQAhAAAPASQAJAMAAAOIgYAAQAAgIgFgHQgKgJgUAAQgPAAgHAFQgHAFgBAIQAAAJAKAGQAGADALADIAQADQAbAGAJAFQAQAJAAATQAAATgQANQgQAOgeAAQghAAgPgOg");
	this.shape_147.setTransform(-154.15,-211.825);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AhLBfIAAi9IBbAAQAbAAAQAOQARAOAAAbQAAAVgPARQgPAQgeAAIhAAAIAABQgAgwgGIA3AAQASAAAMgHQALgIAAgSQAAgVgRgIQgJgEgPAAIg3AAg");
	this.shape_148.setTransform(-170.25,-214.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AA9BfIgVg5IhQAAIgWA5IgcAAIBNi9IAeAAIBKC9gAAfARIgfhTIggBTIA/AAg");
	this.shape_149.setTransform(104.575,-243.95);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("Ag6BSQgVgSABgfIAaAAQABARAGAKQAOATAgAAQAPAAANgFQAXgIAAgUQAAgQgKgGQgKgHgWgFIgagGQgagFgLgGQgTgMAAgYQAAgZATgRQATgQAhAAQAfAAAWAOQAWAPAAAfIgbAAQgBgPgHgIQgMgPgcAAQgYAAgKAKQgKAJAAANQAAAOAMAGQAIAFAbAGIAcAGQAUAEALAHQASANAAAaQAAAfgYAOQgYANgfAAQglAAgVgSg");
	this.shape_150.setTransform(85.3744,-243.925);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AA9BfIgVg5IhQAAIgWA5IgcAAIBNi9IAeAAIBKC9gAAfARIgfhTIggBTIA/AAg");
	this.shape_151.setTransform(66.525,-243.95);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAxBfIhmiZIAACZIgbAAIAAi9IAhAAIBlCYIAAiYIAbAAIAAC9g");
	this.shape_152.setTransform(46.725,-243.95);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAfAAQAPAAAPAHQAPAGAHALQAIALADAOQACAJAAAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAZAAQgCAHgFAKQgGAJgGAGQgMAKgQAEQgJACgLAAQgbAAgTgTgAAqgLQgCgPgFgJQgKgRgYAAQgQAAgMAMQgMALAAASIBRAAIAAAAg");
	this.shape_153.setTransform(20.5,-241.275);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAjBfIAAhXQAAgOgEgHQgHgMgTABQgOAAgNAKQgNAJAAAbIAABJIgZAAIAAi9IAZAAIAABHQAJgLAHgEQAMgIARAAQAhAAALAWQAHALAAATIAABZg");
	this.shape_154.setTransform(4.825,-244);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_155.setTransform(-7.225,-243.225);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_156.setTransform(-26.825,-241.525);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgyA2QgSgTAAghQAAghATgVQATgVAfAAQAdAAATASQAUASAAAjQAAAggRAWQgSAWgjAAQgfAAgSgUgAgggkQgKAQAAAWQAAAWAKAPQALAPAVAAQAYAAAKgSQAJgRAAgVQAAgTgGgMQgLgUgZAAQgXAAgKARg");
	this.shape_157.setTransform(-42.9,-241.325);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgvA8QgOgPAAgUIAYAAQABALAFAHQAKALAXAAQAOAAALgGQAKgFABgMQAAgJgJgFQgFgDgRgDIgTgFQgUgEgJgFQgQgJAAgRQAAgUAQgMQAPgMAaAAQAhAAAPASQAJAMAAAOIgYAAQAAgIgFgHQgKgJgUAAQgPAAgHAFQgHAFAAAIQgBAJAKAGQAGADALADIAQADQAbAGAKAFQAPAJAAATQgBATgPANQgQAOgeAAQghAAgPgOg");
	this.shape_158.setTransform(-65.6,-241.275);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_159.setTransform(-76.925,-243.225);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AguA8QgOgPgCgUIAZAAQABALAFAHQAKALAWAAQAPAAALgGQALgFgBgMQAAgJgIgFQgGgDgQgDIgTgFQgTgEgKgFQgQgJAAgRQAAgUAPgMQAQgMAaAAQAhAAAPASQAJAMAAAOIgXAAQgBgIgGgHQgJgJgUAAQgPAAgHAFQgIAFAAAIQAAAJAKAGQAGADALADIAQADQAcAGAIAFQAPAJABATQAAATgQANQgPAOggAAQggAAgOgOg");
	this.shape_160.setTransform(-87.8,-241.275);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhEIAAgaIAZAAIAAAag");
	this.shape_161.setTransform(-98.075,-243.95);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgHBSQgGgJAAgNIAAhbIgVAAIAAgTIAVAAIAAgnIAYAAIAAAnIAYAAIAAATIgYAAIAABaQAAAHAFACQADACAHAAIAEAAIAFgBIAAATIgJABIgKABQgRAAgGgIg");
	this.shape_162.setTransform(-105.325,-243.225);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAjBHIAAhXQAAgMgEgIQgHgNgRAAQgIAAgGACQgKADgIAIQgGAHgCAHQgCAIAAANIAABIIgZAAIAAiKIAYAAIAAAUQALgMALgGQAMgFAOAAQAfAAAMAVQAGALAAAVIAABYg");
	this.shape_163.setTransform(-117.025,-241.525);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgvA2QgUgSABgiQgBghAUgVQATgUAeAAQAQAAAPAHQAPAGAHALQAIALACAOQADAJAAAUIhsAAQABAVAKANQAKANATAAQAUAAAMgMQAHgHACgJIAYAAQAAAHgGAKQgGAJgGAGQgMAKgQAEQgJACgKAAQgcAAgTgTgAAqgLQgCgPgFgJQgKgRgYAAQgRAAgLAMQgMALAAASIBRAAIAAAAg");
	this.shape_164.setTransform(-133.05,-241.275);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgMBfIAAiJIAZAAIAACJgAgMhEIAAgaIAZAAIAAAag");
	this.shape_165.setTransform(-143.925,-243.95);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AguA1QgRgTAAgeQAAgkATgUQAUgUAcAAQAZAAAQALQAQALADAcIgYAAQgCgNgIgIQgIgJgSAAQgXAAgKAWQgHAOAAAUQAAAVAJAOQAKAOATAAQAQAAAJgJQAJgIAEgQIAYAAQgEAcgRANQgRAMgaAAQgcAAgSgUg");
	this.shape_166.setTransform(-154.1,-241.375);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("Ag6BSQgVgSABgfIAaAAQABARAGAKQAOATAgAAQAPAAANgFQAXgIAAgUQAAgQgKgGQgKgHgWgFIgagGQgagFgLgGQgTgMAAgYQAAgZATgRQATgQAhAAQAfAAAWAOQAWAPAAAfIgbAAQgBgPgHgIQgMgPgcAAQgYAAgKAKQgKAJAAANQAAAOAMAGQAIAFAbAGIAcAGQAUAEALAHQASANAAAaQAAAfgYAOQgYANgfAAQglAAgVgSg");
	this.shape_167.setTransform(-170.9756,-243.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.4,-257.8,366.9,254.8);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYCbIAAgrIAsAAIAAArgAgXBNQAAgeAIgSQAHgSAagXIASgQQAIgHAFgIQAKgNAAgPQAAgUgOgPQgNgPgfAAQglAAgPAZQgIAPgBAbIgoAAQAAgtAcgbQAbgcAwAAQAsAAAbAYQAbAXAAAkQAAAWgKAOQgKAOgeAaQgWATgGAOQgHANAAAag");
	this.shape.setTransform(149.325,-7.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAFAWQADAQAAAhIiuAAQACAiAPAUQARAVAgAAQAgAAASgUQAKgLAFgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgOADgRAAQgtAAgfgegABDgSQgCgZgJgOQgRgbglAAQgbAAgTASQgTATgBAdICDAAIAAAAg");
	this.shape_1.setTransform(122.7,-2.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwCZIhLhxIghAdIAABUIgnAAIAAkxIAnAAIAACxIBnheIAzAAIhcBSIBiCMg");
	this.shape_2.setTransform(100.075,-7.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUCZIAAjdIApAAIAADdgAgUhuIAAgqIApAAIAAAqg");
	this.shape_3.setTransform(82.1,-7.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTCZIAAkxIAnAAIAAExg");
	this.shape_4.setTransform(72.025,-7.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAwCZIhLhxIghAdIAABUIgnAAIAAkxIAnAAIAACxIBnheIAzAAIhcBSIBiCMg");
	this.shape_5.setTransform(44.075,-7.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA1gcAjQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAlQAAAjARAYQARAYAjAAQAnAAAPgcQAPgdAAghQAAgggKgTQgSgfgpAAQgjAAgRAag");
	this.shape_6.setTransform(18.175,-2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA1gcAjQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAlQAAAjARAYQARAYAjAAQAnAAAPgcQAPgdAAghQAAgggKgTQgSgfgpAAQgjAAgRAag");
	this.shape_7.setTransform(-7.325,-2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTCZIAAkxIAnAAIAAExg");
	this.shape_8.setTransform(-24.775,-7.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhMB+QgdgfAAg0QAAgwAbgkQAbgkAxAAQAaAAATALQALAHAOAPIAAhxIAmAAIAAEzIgkAAIAAgfQgOAUgTAJQgTAKgYAAQgoAAgegggAgrgWQgUAWAAApQABAkAQAYQAQAYAjAAQAcAAASgWQASgXAAgqQAAgpgTgUQgSgVgcAAQgcAAgTAWg");
	this.shape_9.setTransform(-56.25,-6.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTCZIAAkxIAnAAIAAExg");
	this.shape_10.setTransform(-73.175,-7.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhUBTQgKgRAAgdIAAiXIApAAIAACUQAAARAGALQAKAUAdAAQAoAAAPgjQAIgTAAggIAAhuIAoAAIAADfIgmAAIABghQgIANgLAIQgXASggAAQgyAAgSggg");
	this.shape_11.setTransform(-91.375,-2.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA1gcAjQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAlQAAAjARAYQARAYAjAAQAnAAAPgcQAPgdAAghQAAgggKgTQgSgfgpAAQgjAAgRAag");
	this.shape_12.setTransform(-116.825,-2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAvBwIgvisIgwCsIgpAAIhGjfIAsAAIAuCvIAvivIAtAAIAvCuIAxiuIApAAIhGDfg");
	this.shape_13.setTransform(-145.95,-2.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAFAWQADAQAAAhIiuAAQABAiAQAUQAQAVAhAAQAgAAASgUQAKgLAFgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgOADgRAAQgtAAgfgegABDgSQgCgZgJgOQgRgbgmAAQgaAAgTASQgTATgBAdICDAAIAAAAg");
	this.shape_14.setTransform(67.9,-48.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag5ByIAAjeIAmAAIAAAnQAFgMARgQQATgQAYAAIAEAAIAJABIAAAoIgHgBIgGAAQgfAAgQASQgQASAAAYIAAB/g");
	this.shape_15.setTransform(49.05,-48.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AegiQAfghAyAAQAvAAAfAdQAgAdAAA3QAAA1gcAkQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAkQAAAkARAYQARAYAjgBQAnAAAPgcQAPgcAAgiQAAgfgKgTQgSgfgpAAQgjAAgRAag");
	this.shape_16.setTransform(27.075,-48.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhKBWQgcggAAgwQAAg6AfggQAeghAvAAQApAAAaASQAZATAFAsIgnAAQgEgUgMgOQgNgNgdAAQglAAgRAjQgLAWAAAgQABAiAPAXQAPAXAgAAQAYAAAPgOQAPgOAGgZIAnAAQgHAsgbAVQgaAUgqAAQgvAAgcggg");
	this.shape_17.setTransform(3.25,-48.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhLBgQgXgWgBgiIAmAAQACATAJAKQAPASAmAAQAXAAARgJQARgJAAgTQAAgOgOgIQgJgEgagHIgfgHQgfgHgPgIQgbgPAAgbQAAggAZgTQAZgUAqAAQA2AAAYAeQAQASgBAWIgmAAQgBgNgJgKQgOgPgiAAQgYAAgMAJQgMAIAAANQAAAOAQAJQAJAFASAEIAaAGQAtAKAPAIQAXAPAAAfQAAAdgYAWQgZAWgyAAQg2AAgWgXg");
	this.shape_18.setTransform(-32.525,-48.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMA+IgHh6IAnAAIgHB6g");
	this.shape_19.setTransform(-47.2,-61.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA4CaIAAiNQABgYgIgLQgLgSgdAAQgYAAgVAQQgUAQgBArIAAB3IgoAAIAAkzIAoAAIAABzQAPgRALgHQAUgMAcAAQA0AAATAiQAKATAAAgIAACPg");
	this.shape_20.setTransform(-65.5,-52.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMCDQgLgOABgVIAAiSIghAAIAAggIAhAAIAAg+IAnAAIAAA+IAnAAIAAAgIgnAAIAACQQAAAMAJADQAEADAMAAIAGAAIAIgBIAAAeIgOACIgRABQgbAAgKgNg");
	this.shape_21.setTransform(-84.9,-51.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag5ByIAAjeIAmAAIAAAnQAFgMARgQQATgQAXAAIAFAAIAJABIAAAoIgHgBIgHAAQgeAAgQASQgQASAAAYIAAB/g");
	this.shape_22.setTransform(-97.4,-48.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhcBjQgUgSgBgdQAAgfAVgRQAVgQAigEIBAgIQANgBAFgKQACgEAAgKQAAgTgOgJQgPgJgaABQgfAAgNAPQgIAKgCAQIgmAAQABgpAcgQQAcgQAkAAQApAAAaAPQAbAPAAAgIAAB/QAAAGADADQACAEAJAAIAGAAIAGgBIAAAcIgOADIgOAAQgUAAgJgOQgFgHgDgNQgMAPgXALQgWALgcAAQghAAgWgTgAAcAFIgYADIgWADQgWADgLAGQgUAKABAVQgBARANAJQANAJASAAQAVAAATgJQAhgQABgiIAAgdQgIADgLAEg");
	this.shape_23.setTransform(-118.6,-48.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ah4CZIAAkxIDuAAIAAAlIjDAAIAABdIC0AAIAAAjIi0AAIAABoIDGAAIAAAkg");
	this.shape_24.setTransform(-146.325,-52.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMCDQgLgNAAgWIAAiTIggAAIAAgeIAgAAIAAg/IApAAIAAA/IAmAAIAAAeIgmAAIAACRQgBAMAJADQAFADAKAAIAHAAIAIgBIAAAeIgPACIgQABQgbAAgKgNg");
	this.shape_25.setTransform(141.95,-97.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhbBjQgWgTABgcQAAgfAUgRQAVgQAigEIA/gIQAOgBAFgKQADgEAAgKQAAgTgPgJQgPgJgaAAQggAAgNAQQgHAKgDAQIglAAQABgpAbgQQAcgQAlAAQApAAAbAPQAaAPAAAgIAAB/QAAAGACADQADAEAIAAIAGAAIAIgBIAAAbIgPAEIgNABQgVgBgKgOQgEgHgCgNQgNAPgXALQgWALgcAAQghAAgVgTgAAbAEIgWAFIgYACQgWADgLAGQgTAKAAAVQAAARAOAIQAMAKARAAQAWAAATgJQAigPgBgjIAAgdQgHADgMADg");
	this.shape_26.setTransform(123.55,-94.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AA4CaIAAiNQABgYgIgLQgKgSgeAAQgYAAgVAQQgUAQAAArIAAB3IgpAAIAAkzIApAAIAABzQAOgRALgHQAUgMAcAAQA0AAATAiQAKATAAAgIAACPg");
	this.shape_27.setTransform(97.6,-98.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAwBwIgwisIgwCsIgpAAIhFjfIAsAAIAuCvIAuivIAtAAIAvCuIAxiuIAoAAIhFDfg");
	this.shape_28.setTransform(68.15,-94.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhLB+QgegfAAg0QAAgwAagkQAcgkAxAAQAaAAATALQALAHAOAPIAAhxIAmAAIAAEzIgkAAIAAgfQgOAUgUAJQgSAKgZAAQgoAAgcgggAgsgWQgSAWgBApQAAAkARAYQAQAYAjAAQAcAAASgWQASgXAAgqQAAgpgSgUQgTgVgbAAQgeAAgTAWg");
	this.shape_29.setTransform(25.35,-98.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALAMASQAMARAFAWQADAQAAAhIiuAAQABAiAQAUQAQAVAhAAQAgAAASgUQALgLAEgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgPADgQAAQgtAAgfgegABEgSQgDgZgJgOQgQgbgnAAQgbAAgSASQgTATgBAdICEAAIAAAAg");
	this.shape_30.setTransform(0.5,-94.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag6ByIAAjeIAnAAIAAAnQAFgMARgQQATgQAYAAIADAAIAJABIAAAoIgGgBIgGAAQgfAAgQASQgQASAAAYIAAB/g");
	this.shape_31.setTransform(-18.35,-94.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAfgiAyAAQAZAAAYALQAYALAMASQANARADAWQAEAQAAAhIiuAAQACAiAPAUQARAVAgAAQAfAAATgUQALgLAEgPIAnAAQgBAMgJAQQgJAPgKAJQgTARgbAGQgPADgRAAQgsAAgfgegABEgSQgDgZgJgOQgQgbgnAAQgbAAgSASQgTATgBAdICEAAIAAAAg");
	this.shape_32.setTransform(-40.25,-94.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhMB+QgdgfAAg0QAAgwAbgkQAagkAyAAQAbAAASALQALAHANAPIAAhxIAnAAIAAEzIgkAAIAAgfQgPAUgSAJQgUAKgXAAQgpAAgdgggAgrgWQgUAWABApQAAAkAQAYQAQAYAjAAQAcAAASgWQASgXAAgqQAAgpgTgUQgSgVgcAAQgdAAgSAWg");
	this.shape_33.setTransform(-66.4,-98.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AA5ByIAAiLQAAgVgHgMQgLgVgbAAQgOAAgJACQgRAFgMAOQgKALgEAMQgDALAAAWIAAB0IgoAAIAAjeIAnAAIAAAgQAQgUAUgJQASgIAXAAQAzAAASAhQAKASAAAiIAACOg");
	this.shape_34.setTransform(-91,-94.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA0gcAkQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAlQAAAjARAYQARAYAjAAQAngBAPgbQAPgdAAghQAAgfgKgUQgSgfgpAAQgjAAgRAag");
	this.shape_35.setTransform(-116.825,-94.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAvBwIgvisIgwCsIgpAAIhGjfIAsAAIAuCvIAvivIAtAAIAvCuIAxiuIApAAIhGDfg");
	this.shape_36.setTransform(-145.95,-94.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag5ByIAAjeIAmAAIAAAnQAFgMARgQQASgQAYAAIAFAAIAJABIAAAoIgHgBIgHAAQgeAAgPASQgRASAAAYIAAB/g");
	this.shape_37.setTransform(127.05,-140.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAFAWQADAQAAAhIiuAAQACAiAPAUQARAVAgAAQAgAAASgUQAKgLAFgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgOADgRAAQgtAAgfgegABDgSQgCgZgJgOQgRgbglAAQgbAAgTASQgTATgBAdICDAAIAAAAg");
	this.shape_38.setTransform(105.15,-139.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgVBwIhZjfIAvAAIA/C1IBDi1IAsAAIhaDfg");
	this.shape_39.setTransform(81,-139.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAFAWQADAQAAAhIiuAAQABAiAQAUQAQAVAhAAQAgAAASgUQAKgLAFgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgOADgRAAQgtAAgfgegABDgSQgCgZgJgOQgRgbgmAAQgaAAgTASQgTATgBAdICDAAIAAAAg");
	this.shape_40.setTransform(56.65,-139.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhUBTQgKgRAAgdIAAiXIApAAIAACUQAAARAGALQAKAUAdAAQAoAAAPgjQAIgTAAggIAAhuIAoAAIAADfIgmAAIABghQgIANgLAIQgXASggAAQgyAAgSggg");
	this.shape_41.setTransform(18.275,-139.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhRBYQgdgfAAg1QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA1gcAiQgcAkg6AAQgxAAgdgfgAg0g7QgRAbAAAkQAAAjARAYQARAXAjABQAnAAAPgcQAPgdAAghQAAgggKgTQgSgfgpAAQgjAAgRAag");
	this.shape_42.setTransform(-7.175,-139.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhMCdIgLgDIAAghIAPADIAIAAQAMAAAFgDIAJgIIAIgRIAKgYIhZjkIAuAAIA/C1IBBi1IAtAAIgmBiIglBcQgjBWgNATQgPASgjABg");
	this.shape_43.setTransform(-31.075,-135.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAEAWQAEAQAAAhIiuAAQACAiAPAUQARAVAgAAQAgAAASgUQALgLAEgPIAnAAQgBAMgJAQQgJAPgLAJQgSARgbAGQgOADgSAAQgsAAgfgegABDgSQgCgZgJgOQgQgbgmAAQgcAAgSASQgTATgBAdICDAAIAAAAg");
	this.shape_44.setTransform(-68.3,-139.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVBwIhZjfIAvAAIA/C1IBDi1IAsAAIhbDfg");
	this.shape_45.setTransform(-92.4,-139.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhbBjQgWgSAAgdQABgfAUgRQAVgQAigEIA/gHQAOgDAFgIQACgGAAgJQAAgTgOgJQgPgJgaAAQggABgNAQQgHAJgDARIglAAQABgqAbgQQAcgQAlAAQApAAAbAPQAaAPAAAfIAACAQAAAGACAEQADADAIAAIAHAAIAHgBIAAAbIgPADIgNACQgVAAgKgPQgEgHgDgNQgMAPgXALQgWALgcAAQghAAgVgTgAAbAEIgWAFIgXACQgXADgLAGQgSAKgBAVQABARANAIQAMAKASAAQAVAAATgJQAhgPAAgjIAAgdQgHADgMADg");
	this.shape_46.setTransform(-116.05,-139.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABVCZIAAiPIipAAIAACPIgtAAIAAkxIAtAAIAAB/ICpAAIAAh/IAtAAIAAExg");
	this.shape_47.setTransform(-145.775,-144.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.5,-164.6,331,185.6);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYCbIAAgrIAsAAIAAArgAgXBNQAAgeAIgSQAHgSAagXIASgQQAIgHAFgIQAKgNAAgPQAAgUgOgPQgNgPgfAAQglAAgPAZQgIAPgBAbIgoAAQAAgtAcgbQAbgcAwAAQAsAAAbAYQAbAXAAAkQAAAWgKAOQgKAOgeAaQgWATgGAOQgHANAAAag");
	this.shape.setTransform(149.325,-7.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAFAWQADAQAAAhIiuAAQACAiAPAUQARAVAgAAQAgAAASgUQAKgLAFgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgOADgRAAQgtAAgfgegABDgSQgCgZgJgOQgRgbglAAQgbAAgTASQgTATgBAdICDAAIAAAAg");
	this.shape_1.setTransform(122.7,-2.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAwCZIhLhxIghAdIAABUIgnAAIAAkxIAnAAIAACxIBnheIAzAAIhcBSIBiCMg");
	this.shape_2.setTransform(100.075,-7.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUCZIAAjdIApAAIAADdgAgUhuIAAgqIApAAIAAAqg");
	this.shape_3.setTransform(82.1,-7.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTCZIAAkxIAnAAIAAExg");
	this.shape_4.setTransform(72.025,-7.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAwCZIhLhxIghAdIAABUIgnAAIAAkxIAnAAIAACxIBnheIAzAAIhcBSIBiCMg");
	this.shape_5.setTransform(44.075,-7.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA1gcAjQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAlQAAAjARAYQARAYAjAAQAnAAAPgcQAPgdAAghQAAgggKgTQgSgfgpAAQgjAAgRAag");
	this.shape_6.setTransform(18.175,-2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA1gcAjQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAlQAAAjARAYQARAYAjAAQAnAAAPgcQAPgdAAghQAAgggKgTQgSgfgpAAQgjAAgRAag");
	this.shape_7.setTransform(-7.325,-2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTCZIAAkxIAnAAIAAExg");
	this.shape_8.setTransform(-24.775,-7.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhMB+QgdgfAAg0QAAgwAbgkQAbgkAxAAQAaAAATALQALAHAOAPIAAhxIAmAAIAAEzIgkAAIAAgfQgOAUgTAJQgTAKgYAAQgoAAgegggAgrgWQgUAWAAApQABAkAQAYQAQAYAjAAQAcAAASgWQASgXAAgqQAAgpgTgUQgSgVgcAAQgcAAgTAWg");
	this.shape_9.setTransform(-56.25,-6.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTCZIAAkxIAnAAIAAExg");
	this.shape_10.setTransform(-73.175,-7.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhUBTQgKgRAAgdIAAiXIApAAIAACUQAAARAGALQAKAUAdAAQAoAAAPgjQAIgTAAggIAAhuIAoAAIAADfIgmAAIABghQgIANgLAIQgXASggAAQgyAAgSggg");
	this.shape_11.setTransform(-91.375,-2.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA1gcAjQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAlQAAAjARAYQARAYAjAAQAnAAAPgcQAPgdAAghQAAgggKgTQgSgfgpAAQgjAAgRAag");
	this.shape_12.setTransform(-116.825,-2.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAvBwIgvisIgwCsIgpAAIhGjfIAsAAIAuCvIAvivIAtAAIAvCuIAxiuIApAAIhGDfg");
	this.shape_13.setTransform(-145.95,-2.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAFAWQADAQAAAhIiuAAQABAiAQAUQAQAVAhAAQAgAAASgUQAKgLAFgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgOADgRAAQgtAAgfgegABDgSQgCgZgJgOQgRgbgmAAQgaAAgTASQgTATgBAdICDAAIAAAAg");
	this.shape_14.setTransform(67.9,-48.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag5ByIAAjeIAmAAIAAAnQAFgMARgQQATgQAYAAIAEAAIAJABIAAAoIgHgBIgGAAQgfAAgQASQgQASAAAYIAAB/g");
	this.shape_15.setTransform(49.05,-48.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AegiQAfghAyAAQAvAAAfAdQAgAdAAA3QAAA1gcAkQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAkQAAAkARAYQARAYAjgBQAnAAAPgcQAPgcAAgiQAAgfgKgTQgSgfgpAAQgjAAgRAag");
	this.shape_16.setTransform(27.075,-48.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhKBWQgcggAAgwQAAg6AfggQAeghAvAAQApAAAaASQAZATAFAsIgnAAQgEgUgMgOQgNgNgdAAQglAAgRAjQgLAWAAAgQABAiAPAXQAPAXAgAAQAYAAAPgOQAPgOAGgZIAnAAQgHAsgbAVQgaAUgqAAQgvAAgcggg");
	this.shape_17.setTransform(3.25,-48.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhLBgQgXgWgBgiIAmAAQACATAJAKQAPASAmAAQAXAAARgJQARgJAAgTQAAgOgOgIQgJgEgagHIgfgHQgfgHgPgIQgbgPAAgbQAAggAZgTQAZgUAqAAQA2AAAYAeQAQASgBAWIgmAAQgBgNgJgKQgOgPgiAAQgYAAgMAJQgMAIAAANQAAAOAQAJQAJAFASAEIAaAGQAtAKAPAIQAXAPAAAfQAAAdgYAWQgZAWgyAAQg2AAgWgXg");
	this.shape_18.setTransform(-32.525,-48.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMA+IgHh6IAnAAIgHB6g");
	this.shape_19.setTransform(-47.2,-61.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA4CaIAAiNQABgYgIgLQgLgSgdAAQgYAAgVAQQgUAQgBArIAAB3IgoAAIAAkzIAoAAIAABzQAPgRALgHQAUgMAcAAQA0AAATAiQAKATAAAgIAACPg");
	this.shape_20.setTransform(-65.5,-52.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMCDQgLgOABgVIAAiSIghAAIAAggIAhAAIAAg+IAnAAIAAA+IAnAAIAAAgIgnAAIAACQQAAAMAJADQAEADAMAAIAGAAIAIgBIAAAeIgOACIgRABQgbAAgKgNg");
	this.shape_21.setTransform(-84.9,-51.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag5ByIAAjeIAmAAIAAAnQAFgMARgQQATgQAXAAIAFAAIAJABIAAAoIgHgBIgHAAQgeAAgQASQgQASAAAYIAAB/g");
	this.shape_22.setTransform(-97.4,-48.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhcBjQgUgSgBgdQAAgfAVgRQAVgQAigEIBAgIQANgBAFgKQACgEAAgKQAAgTgOgJQgPgJgaABQgfAAgNAPQgIAKgCAQIgmAAQABgpAcgQQAcgQAkAAQApAAAaAPQAbAPAAAgIAAB/QAAAGADADQACAEAJAAIAGAAIAGgBIAAAcIgOADIgOAAQgUAAgJgOQgFgHgDgNQgMAPgXALQgWALgcAAQghAAgWgTgAAcAFIgYADIgWADQgWADgLAGQgUAKABAVQgBARANAJQANAJASAAQAVAAATgJQAhgQABgiIAAgdQgIADgLAEg");
	this.shape_23.setTransform(-118.6,-48.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ah4CZIAAkxIDuAAIAAAlIjDAAIAABdIC0AAIAAAjIi0AAIAABoIDGAAIAAAkg");
	this.shape_24.setTransform(-146.325,-52.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMCDQgLgNAAgWIAAiTIggAAIAAgeIAgAAIAAg/IApAAIAAA/IAmAAIAAAeIgmAAIAACRQgBAMAJADQAFADAKAAIAHAAIAIgBIAAAeIgPACIgQABQgbAAgKgNg");
	this.shape_25.setTransform(141.95,-97.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhbBjQgWgTABgcQAAgfAUgRQAVgQAigEIA/gIQAOgBAFgKQADgEAAgKQAAgTgPgJQgPgJgaAAQggAAgNAQQgHAKgDAQIglAAQABgpAbgQQAcgQAlAAQApAAAbAPQAaAPAAAgIAAB/QAAAGACADQADAEAIAAIAGAAIAIgBIAAAbIgPAEIgNABQgVgBgKgOQgEgHgCgNQgNAPgXALQgWALgcAAQghAAgVgTgAAbAEIgWAFIgYACQgWADgLAGQgTAKAAAVQAAARAOAIQAMAKARAAQAWAAATgJQAigPgBgjIAAgdQgHADgMADg");
	this.shape_26.setTransform(123.55,-94.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AA4CaIAAiNQABgYgIgLQgKgSgeAAQgYAAgVAQQgUAQAAArIAAB3IgpAAIAAkzIApAAIAABzQAOgRALgHQAUgMAcAAQA0AAATAiQAKATAAAgIAACPg");
	this.shape_27.setTransform(97.6,-98.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAwBwIgwisIgwCsIgpAAIhFjfIAsAAIAuCvIAuivIAtAAIAvCuIAxiuIAoAAIhFDfg");
	this.shape_28.setTransform(68.15,-94.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhLB+QgegfAAg0QAAgwAagkQAcgkAxAAQAaAAATALQALAHAOAPIAAhxIAmAAIAAEzIgkAAIAAgfQgOAUgUAJQgSAKgZAAQgoAAgcgggAgsgWQgSAWgBApQAAAkARAYQAQAYAjAAQAcAAASgWQASgXAAgqQAAgpgSgUQgTgVgbAAQgeAAgTAWg");
	this.shape_29.setTransform(25.35,-98.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALAMASQAMARAFAWQADAQAAAhIiuAAQABAiAQAUQAQAVAhAAQAgAAASgUQALgLAEgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgPADgQAAQgtAAgfgegABEgSQgDgZgJgOQgQgbgnAAQgbAAgSASQgTATgBAdICEAAIAAAAg");
	this.shape_30.setTransform(0.5,-94.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag6ByIAAjeIAnAAIAAAnQAFgMARgQQATgQAYAAIADAAIAJABIAAAoIgGgBIgGAAQgfAAgQASQgQASAAAYIAAB/g");
	this.shape_31.setTransform(-18.35,-94.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAfgiAyAAQAZAAAYALQAYALAMASQANARADAWQAEAQAAAhIiuAAQACAiAPAUQARAVAgAAQAfAAATgUQALgLAEgPIAnAAQgBAMgJAQQgJAPgKAJQgTARgbAGQgPADgRAAQgsAAgfgegABEgSQgDgZgJgOQgQgbgnAAQgbAAgSASQgTATgBAdICEAAIAAAAg");
	this.shape_32.setTransform(-40.25,-94.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhMB+QgdgfAAg0QAAgwAbgkQAagkAyAAQAbAAASALQALAHANAPIAAhxIAnAAIAAEzIgkAAIAAgfQgPAUgSAJQgUAKgXAAQgpAAgdgggAgrgWQgUAWABApQAAAkAQAYQAQAYAjAAQAcAAASgWQASgXAAgqQAAgpgTgUQgSgVgcAAQgdAAgSAWg");
	this.shape_33.setTransform(-66.4,-98.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AA5ByIAAiLQAAgVgHgMQgLgVgbAAQgOAAgJACQgRAFgMAOQgKALgEAMQgDALAAAWIAAB0IgoAAIAAjeIAnAAIAAAgQAQgUAUgJQASgIAXAAQAzAAASAhQAKASAAAiIAACOg");
	this.shape_34.setTransform(-91,-94.475);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhRBYQgdggAAg0QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA0gcAkQgcAjg6AAQgxAAgdgfgAg0g7QgRAaAAAlQAAAjARAYQARAYAjAAQAngBAPgbQAPgdAAghQAAgfgKgUQgSgfgpAAQgjAAgRAag");
	this.shape_35.setTransform(-116.825,-94.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAvBwIgvisIgwCsIgpAAIhGjfIAsAAIAuCvIAvivIAtAAIAvCuIAxiuIApAAIhGDfg");
	this.shape_36.setTransform(-145.95,-94.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag5ByIAAjeIAmAAIAAAnQAFgMARgQQASgQAYAAIAFAAIAJABIAAAoIgHgBIgHAAQgeAAgPASQgRASAAAYIAAB/g");
	this.shape_37.setTransform(127.05,-140.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAFAWQADAQAAAhIiuAAQACAiAPAUQARAVAgAAQAgAAASgUQAKgLAFgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgOADgRAAQgtAAgfgegABDgSQgCgZgJgOQgRgbglAAQgbAAgTASQgTATgBAdICDAAIAAAAg");
	this.shape_38.setTransform(105.15,-139.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgVBwIhZjfIAvAAIA/C1IBDi1IAsAAIhaDfg");
	this.shape_39.setTransform(81,-139.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAFAWQADAQAAAhIiuAAQABAiAQAUQAQAVAhAAQAgAAASgUQAKgLAFgPIAoAAQgCAMgJAQQgJAPgLAJQgSARgbAGQgOADgRAAQgtAAgfgegABDgSQgCgZgJgOQgRgbgmAAQgaAAgTASQgTATgBAdICDAAIAAAAg");
	this.shape_40.setTransform(56.65,-139.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhUBTQgKgRAAgdIAAiXIApAAIAACUQAAARAGALQAKAUAdAAQAoAAAPgjQAIgTAAggIAAhuIAoAAIAADfIgmAAIABghQgIANgLAIQgXASggAAQgyAAgSggg");
	this.shape_41.setTransform(18.275,-139.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhRBYQgdgfAAg1QAAg3AeghQAfgiAyAAQAvAAAfAdQAgAdAAA4QAAA1gcAiQgcAkg6AAQgxAAgdgfgAg0g7QgRAbAAAkQAAAjARAYQARAXAjABQAnAAAPgcQAPgdAAghQAAgggKgTQgSgfgpAAQgjAAgRAag");
	this.shape_42.setTransform(-7.175,-139.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhMCdIgLgDIAAghIAPADIAIAAQAMAAAFgDIAJgIIAIgRIAKgYIhZjkIAuAAIA/C1IBBi1IAtAAIgmBiIglBcQgjBWgNATQgPASgjABg");
	this.shape_43.setTransform(-31.075,-135.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhNBYQgfgfAAg2QAAg1AfghQAggiAwAAQAaAAAYALQAYALANASQALARAEAWQAEAQAAAhIiuAAQACAiAPAUQARAVAgAAQAgAAASgUQALgLAEgPIAnAAQgBAMgJAQQgJAPgLAJQgSARgbAGQgOADgSAAQgsAAgfgegABDgSQgCgZgJgOQgQgbgmAAQgcAAgSASQgTATgBAdICDAAIAAAAg");
	this.shape_44.setTransform(-68.3,-139.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVBwIhZjfIAvAAIA/C1IBDi1IAsAAIhbDfg");
	this.shape_45.setTransform(-92.4,-139.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhbBjQgWgSAAgdQABgfAUgRQAVgQAigEIA/gHQAOgDAFgIQACgGAAgJQAAgTgOgJQgPgJgaAAQggABgNAQQgHAJgDARIglAAQABgqAbgQQAcgQAlAAQApAAAbAPQAaAPAAAfIAACAQAAAGACAEQADADAIAAIAHAAIAHgBIAAAbIgPADIgNACQgVAAgKgPQgEgHgDgNQgMAPgXALQgWALgcAAQghAAgVgTgAAbAEIgWAFIgXACQgXADgLAGQgSAKgBAVQABARANAIQAMAKASAAQAVAAATgJQAhgPAAgjIAAgdQgHADgMADg");
	this.shape_46.setTransform(-116.05,-139.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABVCZIAAiPIipAAIAACPIgtAAIAAkxIAtAAIAAB/ICpAAIAAh/IAtAAIAAExg");
	this.shape_47.setTransform(-145.775,-144.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.5,-164.6,331,185.6);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jupmars();
	this.instance.setTransform(-455,-476.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455,-476.5,910,953);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.psychecraft1();
	this.instance.setTransform(-111,-104.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-104.5,222,209);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.spacecraft1();
	this.instance.setTransform(-68.5,-206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.5,-206,137,412);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.earth31();
	this.instance.setTransform(-107.5,-110,1.2011,1.2643);

	this.instance_1 = new lib.earth21();
	this.instance_1.setTransform(-107.5,-110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-110,215,220);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.earth21();
	this.instance.setTransform(-94,-95);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-95,188,190);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.earth11();
	this.instance.setTransform(-93.5,-86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-86,187,172);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.backgroundpngcopy();
	this.instance.setTransform(-480,-629.5,0.9134,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-629.5,960,1259);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.backgroundpngcopy();
	this.instance.setTransform(-480,-629.5,0.9134,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-629.5,960,1259);


(lib.Hit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Egx/AlgMAAAhK/MBj/AAAMAAABK/g");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-240,640,480);


(lib.Tween39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAMIAAgXIAVAAIAAAXg");
	this.shape.setTransform(-33.975,558.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgJAIQgKAIAAAWIAAA9IgUAAIAAidIAUAAIAAA7QAGgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_1.setTransform(-43.1,552.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABKQAAAGAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_2.setTransform(-52.375,552.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAJgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJgBANIAABBg");
	this.shape_3.setTransform(-58.35,554.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFACQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_4.setTransform(-68.475,554.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag5BPIAAidIBxAAIAAAUIhdAAIAAAvIBWAAIAAARIhWAAIAAA2IBfAAIAAATg");
	this.shape_5.setTransform(-81.75,552.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_6.setTransform(-101.775,554.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABKQAAAGAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_7.setTransform(-110.925,552.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXBPIgkg6IgPAPIAAArIgTAAIAAidIATAAIAABbIAxgwIAYAAIgsApIAvBJg");
	this.shape_8.setTransform(96.05,528.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAAQQAAARAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAXgNAKQgNALgUAAQgWAAgNgQg");
	this.shape_9.setTransform(84.475,530.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPAAgHAIQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_10.setTransform(73.025,530.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBLQgGgEgGgIIAAAPIgSAAIAAieIATAAIAAA6QAGgJAJgEQAJgEAJAAQAWgBAOAQQANAOAAAcQAAAbgNASQgOASgXAAQgMAAgJgGgAgWgMQgKAKAAAUQAAARAEAKQAIATAUAAQAPAAAIgNQAIgMAAgVQAAgRgIgMQgIgMgPABQgMAAgKAKg");
	this.shape_11.setTransform(60.825,528.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPAAgHAIQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_12.setTransform(42.525,530.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_13.setTransform(33.025,528.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPAAgHAIQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_14.setTransform(24.225,530.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_15.setTransform(11.375,528.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_16.setTransform(-6.625,530.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgJAIQgKAIAAAWIAAA9IgUAAIAAidIAUAAIAAA7QAGgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_17.setTransform(-18.7,528.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_18.setTransform(-27.975,528.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfBLQgNgJgCgRIAUAAQABAHAFAEQAGAHAOAAQAVAAAHgQQAEgJAAgYQgGAJgIAEQgIAFgNAAQgSAAgOgOQgOgNAAgeQAAgcAOgRQAOgQAUAAQAMAAAKAHQAGAEAGAHIAAgPIARAAIAABoQAAAWgGAMQgMAYggAAQgTAAgMgIgAgZguQgEALAAAQQAAATAIAKQAHAKAOAAQATAAAJgTQAFgKAAgOQAAgVgJgKQgJgLgOAAQgTAAgHATg");
	this.shape_19.setTransform(-43.525,532.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgIACgFAHQgFAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_20.setTransform(-55.3,530.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_21.setTransform(-63.85,528.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_22.setTransform(-72.775,528.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgIACgFAHQgFAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_23.setTransform(-84.55,530.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_24.setTransform(-96.875,530.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAaAAAMAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgaAAgKgLg");
	this.shape_25.setTransform(-108.35,530.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLASQAHgBAEgJQABgGAAgDIAAgBIgBgCIgLAAIAAgXIAXAAIAAAWQgBALgFAKQgFAKgMACg");
	this.shape_26.setTransform(46.55,512.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQAAAJAFAFQAHAKARAAQALAAAJgFQAIgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_27.setTransform(38.05,506.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_28.setTransform(26.325,506.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_29.setTransform(17.3,506.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgoAqQgEgIgBgPIAAhNIAUAAIAABMQAAAIACAFQAGALAOAAQASAAAHgSQAEgJAAgRIAAg4IATAAIAAByIgSAAIAAgRQgDAGgGAFQgLAJgOAAQgYAAgJgRg");
	this.shape_30.setTransform(6.8,506.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFBEQgFgHAAgLIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_31.setTransform(-2.325,504.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_32.setTransform(-11.125,506.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_33.setTransform(-23.675,506.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKBQIAAhiIgQAAIAAgQIAQAAIAAgSQAAgMAEgFQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDAAQgJgBgBAGQgCAEAAASIATAAIAAAQIgTAAIAABig");
	this.shape_34.setTransform(-32.725,503.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_35.setTransform(-48.075,506.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_36.setTransform(-59.475,506.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_37.setTransform(-70.925,506.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKBQIAAhiIgQAAIAAgQIAQAAIAAgSQAAgMAEgFQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDAAQgJgBgBAGQgCAEAAASIATAAIAAAQIgTAAIAABig");
	this.shape_38.setTransform(-80.325,503.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbA7IAAhyIASAAIAAAUQADgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJAAANIAABBg");
	this.shape_39.setTransform(-86.4,506.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgoAqQgFgIABgPIAAhNIATAAIAABMQAAAIACAFQAGALANAAQATAAAHgSQAEgJAAgRIAAg4IAUAAIAAByIgTAAIABgRQgEAGgFAFQgLAJgPAAQgYAAgJgRg");
	this.shape_40.setTransform(-96.9,506.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAaAAAMAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgaAAgKgLg");
	this.shape_41.setTransform(-108.35,506.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_42.setTransform(63.775,480.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_43.setTransform(52,482.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_44.setTransform(40.025,482.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgLASQAHgBAEgJQABgFAAgEIAAgBIgBgBIgLAAIAAgYIAXAAIAAAWQgBAMgFAJQgFAKgMACg");
	this.shape_45.setTransform(24.5,488.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_46.setTransform(14.975,480.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_47.setTransform(6.875,480.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_48.setTransform(-1.775,482.275);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_49.setTransform(-10.2,480.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKBQIAAhjIgQAAIAAgPIAQAAIAAgSQAAgLAEgGQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDgBQgJABgBAFQgCAEAAASIATAAIAAAPIgTAAIAABjg");
	this.shape_50.setTransform(-15.675,479.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNgBQgSAAgIASQgFAMAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_51.setTransform(-30.225,482.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_52.setTransform(-38.25,480.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_53.setTransform(-43.825,480.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_54.setTransform(-52.975,482.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgGAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_55.setTransform(-65.05,482.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfBLQgNgJgCgRIAUAAQABAHAFAEQAGAHAOAAQAVAAAHgQQAEgJAAgYQgGAJgIAEQgIAFgNAAQgSAAgOgOQgOgNAAgeQAAgcAOgRQAOgQAUAAQAMAAAKAHQAGAEAGAHIAAgPIARAAIAABoQAAAWgGAMQgMAYggAAQgTAAgMgIgAgZguQgEALAAAQQAAATAIAKQAHAKAOAAQATAAAJgTQAFgKAAgOQAAgVgJgKQgJgLgOAAQgTAAgHATg");
	this.shape_56.setTransform(-77.675,484.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_57.setTransform(-89.225,482.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AA6A7IAAhPQgBgMgFgEQgGgEgJAAQgLAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQAOAAAIAHQAEAEAEAHQAGgJAJgEQAJgFALAAQAWAAAJARQAEAJABAPIAABMg");
	this.shape_58.setTransform(-104.7,482.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgKASQAGgBAEgKQABgFAAgDIAAgBIgBgBIgKAAIAAgYIAVAAIAAAWQAAALgFAKQgFAKgLACg");
	this.shape_59.setTransform(105.6,464.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgGAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_60.setTransform(96.5,458.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_61.setTransform(84.175,458.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_62.setTransform(75.75,456.05);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_63.setTransform(70.175,456.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_64.setTransform(64.8,456.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_65.setTransform(56.9,458.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_66.setTransform(45.175,458.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgyBSIAAifIATAAIAAAOQAGgHAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAlgUAQQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_67.setTransform(33.325,460.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AA5A7IAAhPQAAgMgFgEQgGgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgDgFQgEgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgUAAIAAhyIAUAAIAAAQQAGgIAHgEQAJgHAMAAQANAAAJAHQAEAEAEAHQAGgJAJgEQAJgFAKAAQAYAAAIARQAFAJgBAPIAABMg");
	this.shape_68.setTransform(17.85,458.075);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_69.setTransform(2.475,458.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAWgNALQgNALgUAAQgWAAgNgQg");
	this.shape_70.setTransform(-8.925,458.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQgBgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQgBgHgDgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAIAFQAEACAIACIAMADQAWAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgZAAgMgLg");
	this.shape_71.setTransform(-26.1,458.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFAgIgEg/IATAAIgEA/g");
	this.shape_72.setTransform(-33.125,451.325);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_73.setTransform(-42.325,456.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_74.setTransform(-50.45,456.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_75.setTransform(-59.075,458.225);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_76.setTransform(-68.1,458.075);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_77.setTransform(-78.575,458.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_78.setTransform(-87.725,456.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQAAAJAEAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgPAAQgMAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_79.setTransform(-96.15,458.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_80.setTransform(-107.525,458.25);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_81.setTransform(28.675,434.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgFgJgPAAQgLAAgJAIQgLAIABAWIAAA9IgUAAIAAidIAUAAIAAA7QAGgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_82.setTransform(16.6,432.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgFBEQgFgHAAgLIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_83.setTransform(7.325,432.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_84.setTransform(-7.925,434.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgvA5IAAgPIBDhSIg+AAIAAgQIBYAAIAAAPIhDBRIBFAAIAAARg");
	this.shape_85.setTransform(-19.525,434.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgkBRIgFgBIAAgSIAHACIAEAAQAFAAADgBIAEgFIAEgJIAFgMIgqh1IAVAAIAeBcIAfhcIAWAAIgSAzIgSAvQgRAsgGAKQgGAJgSAAg");
	this.shape_86.setTransform(-30.4,436.55);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_87.setTransform(-38.325,432.05);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_88.setTransform(-46.625,434.25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgOAAIgKABQgHACgHAHQgEAGgCAGQgCAGAAALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_89.setTransform(-59.05,434.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_90.setTransform(-71.025,434.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_91.setTransform(-85.875,432.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_92.setTransform(-90.725,432.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_93.setTransform(-95.6,432.05);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAXA5IgXhYIgWBYIgUAAIgihxIAWAAIAWBZIAXhZIAUAAIAWBZIAYhZIATAAIghBxg");
	this.shape_94.setTransform(-106,434.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAJACIAMADQAVAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgYAAgLgLg");
	this.shape_95.setTransform(106.25,410.275);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_96.setTransform(97.575,408.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgOAAIgKABQgHACgHAHQgEAGgCAGQgCAGAAALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_97.setTransform(88.55,410.075);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_98.setTransform(76.225,410.275);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AA6A7IAAhPQAAgMgHgEQgFgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAIgFAMAAQAWAAAJARQAEAJAAAPIAABMg");
	this.shape_99.setTransform(61.1,410.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgoArQgEgJgBgPIAAhNIAUAAIAABMQAAAIADAFQAFALAOAAQASAAAHgSQAEgKAAgPIAAg5IATAAIAAByIgSAAIAAgRQgDAHgGAEQgKAJgPAAQgYAAgJgQg");
	this.shape_100.setTransform(45.7,410.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAJgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJgBANIAABBg");
	this.shape_101.setTransform(36.7,410.075);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_102.setTransform(29.275,408.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQAAAJAEAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgPAAQgMAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_103.setTransform(20.85,410.275);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_104.setTransform(9.25,410.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_105.setTransform(0.7,408.05);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_106.setTransform(-10.85,410.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_107.setTransform(-21.325,410.275);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_108.setTransform(-33.4,408.025);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_109.setTransform(-42.675,408.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_110.setTransform(-51.825,410.225);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_111.setTransform(-70.125,410.275);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_112.setTransform(-78.525,408.05);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_113.setTransform(-83.4,408.05);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_114.setTransform(-91.9,408.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAXA6IgXhYIgWBYIgUAAIgihyIAWAAIAWBZIAXhZIAUAAIAWBZIAYhZIATAAIghByg");
	this.shape_115.setTransform(-106,410.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgLASQAIgBACgKQACgFAAgDIAAgBIgBgBIgLAAIAAgYIAXAAIAAAWQgBALgFAKQgFAKgMACg");
	this.shape_116.setTransform(75.7,392.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgPAAQgMAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_117.setTransform(67.2,386.275);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_118.setTransform(55.475,386.275);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgfBLQgNgJgCgRIAUAAQABAHAFAEQAGAHAOAAQAVAAAHgQQAEgJAAgYQgGAJgIAEQgIAFgNAAQgSAAgOgOQgOgNAAgeQAAgcAOgRQAOgQAUAAQAMAAAKAHQAGAEAGAHIAAgPIARAAIAABoQAAAWgGAMQgMAYggAAQgTAAgMgIgAgZguQgEALAAAQQAAATAIAKQAHAKAOAAQATAAAJgTQAFgKAAgOQAAgVgJgKQgJgLgOAAQgTAAgHATg");
	this.shape_119.setTransform(42.975,388.525);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_120.setTransform(31.425,386.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AA5A7IAAhPQABgMgHgEQgFgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgDgFQgEgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgUAAIAAhyIAUAAIAAAQQAGgIAHgEQAJgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAJgFAKAAQAYAAAIARQAFAJgBAPIAABMg");
	this.shape_121.setTransform(15.95,386.075);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_122.setTransform(4.35,384.05);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_123.setTransform(-10.375,386.275);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJAAANIAABBg");
	this.shape_124.setTransform(-19.4,386.075);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgoArQgEgJgBgPIAAhNIAUAAIAABLQAAAJADAGQAFAKAOAAQASAAAHgSQAEgJAAgQIAAg5IATAAIAAByIgSAAIAAgRQgDAHgGAEQgKAJgPAAQgYAAgJgQg");
	this.shape_125.setTransform(-29.9,386.35);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_126.setTransform(-39.025,384.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgyBSIAAifIATAAIAAAOQAGgHAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAlgUAQQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_127.setTransform(-47.825,388.35);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_128.setTransform(-60.025,386.25);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAWgNALQgNALgUAAQgWAAgNgQg");
	this.shape_129.setTransform(-71.775,386.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_130.setTransform(-85.875,384.05);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_131.setTransform(-90.725,384.05);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_132.setTransform(-95.6,384.05);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAXA6IgXhZIgWBZIgUAAIgihzIAWAAIAWBaIAXhaIAUAAIAWBZIAYhZIATAAIghBzg");
	this.shape_133.setTransform(-106,386.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgFBEQgFgHAAgLIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_134.setTransform(99.025,360.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgKBQIAAhiIgQAAIAAgQIAQAAIAAgSQAAgMAEgFQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDAAQgJgBgBAGQgCAEAAASIATAAIAAAQIgTAAIAABig");
	this.shape_135.setTransform(93.025,359.95);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_136.setTransform(84.125,362.25);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJAAANIAABBg");
	this.shape_137.setTransform(74.75,362.075);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_138.setTransform(65.075,362.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_139.setTransform(53.275,362.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_140.setTransform(41.875,362.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_141.setTransform(30.425,362.25);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgyBSIAAigIATAAIAAAQQAGgIAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAkgUAQQgMALgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgMQAJgKAAgWQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_142.setTransform(18.225,364.35);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAaAAAMAPQAGAKABALIgTAAQgBgHgDgFQgHgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgaAAgKgLg");
	this.shape_143.setTransform(6.4,362.275);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_144.setTransform(-11.425,362.275);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_145.setTransform(-23.5,360.025);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_146.setTransform(-35.025,362.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgkBRIgFgBIAAgSIAHACIAEAAQAGAAACgBIAEgFIAEgJIAFgMIgrh1IAXAAIAdBcIAfhcIAVAAIgSAzIgRAvQgRAsgGAKQgGAJgRAAg");
	this.shape_147.setTransform(-46.1,364.55);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKgBALIgSAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgYAAgMgLg");
	this.shape_148.setTransform(-57.1,362.275);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("Ag5BPIAAidIBFAAQAVAAAMAMQANAMABAVQAAATgMAOQgLAMgYAAIgxAAIAABDgAglgFIAqAAQAOAAAJgGQAJgGAAgQQAAgRgNgGQgHgEgMAAIgqAAg");
	this.shape_149.setTransform(-69.5,360.05);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_150.setTransform(-89.575,362.275);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgFgJgPAAQgLAAgKAIQgKAIAAAWIAAA9IgTAAIAAidIATAAIAAA7QAHgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_151.setTransform(-101.65,360.025);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgFBEQgFgHAAgLIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_152.setTransform(-110.925,360.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAcA7IAAhIQAAgKgEgHQgFgKgOAAIgKABQgHACgHAHQgFAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIASAAIAAAQQAIgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_153.setTransform(92.35,338.075);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_154.setTransform(80.025,338.225);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgGgEIgSgFIgOgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgLALgZAAQgYAAgMgLg");
	this.shape_155.setTransform(62.45,338.275);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_156.setTransform(51.075,338.25);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_157.setTransform(41.7,338.075);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_158.setTransform(31.225,338.275);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AA6A7IAAhPQAAgMgHgEQgFgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAIgFALAAQAXAAAJARQAEAJABAPIAABMg");
	this.shape_159.setTransform(16.1,338.075);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_160.setTransform(1.075,338.25);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNgBQgSAAgIASQgFAMAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_161.setTransform(-10.675,338.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_162.setTransform(-28.575,338.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgFgJgPAAQgLAAgJAIQgLAIABAWIAAA9IgUAAIAAidIAUAAIAAA7QAGgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_163.setTransform(-40.65,336.025);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_164.setTransform(-49.925,336.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgKASQAGgBAEgKQAAgEAAgEIAAgBIAAgBIgKAAIAAgYIAVAAIAAAWQABAMgGAJQgFAKgLACg");
	this.shape_165.setTransform(-62.05,344.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AglBDQgMgMgBgRIAUAAQABAQAMAGQAFADAIAAQANAAAKgLQAKgMADgkQgGALgJAEQgKAEgKAAQgXAAgMgNQgNgNAAgWQAAgVAMgQQANgQAaAAQAgAAANAeQAHARAAAZQAAAbgIAWQgOAkgiAAQgWAAgLgMgAgXgzQgIAJAAARQAAAOAHAKQAHAHARAAQAKAAAJgGQAKgIAAgTQAAgRgJgIQgIgIgMAAQgOAAgJAJg");
	this.shape_166.setTransform(-71.25,336.45);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("Ag0BNQABgUAHgOQAHgPAVgMIAUgMQAOgHAFgGQAJgJAAgLQAAgOgIgIQgIgHgNAAQgTAAgIAPQgEAIgBAOIgTAAQAAgUAHgNQAMgWAgAAQAaAAAMAOQAMAOAAASQAAASgNANQgHAHgTALIgPAIQgKAGgGAFQgLAKgCALIBSAAIAAASg");
	this.shape_167.setTransform(-83.45,336.225);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgpA3QgLgUAAgiQAAgZAHgTQANgjAgAAQAdAAANAZQALATAAAhQAAAegJAVQgOAdgeAAQgbAAgOgYgAgYgsQgIAPAAAfQABAXAFAPQAIAVASABQAPAAAIgOQAJgNAAgjQAAgbgGgQQgHgRgSAAQgQAAgJAQg");
	this.shape_168.setTransform(-95.65,336.45);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("Ag0BNQABgUAHgOQAHgPAVgMIAUgMQAOgHAFgGQAJgJAAgLQAAgOgIgIQgIgHgOAAQgTAAgHAPQgEAIAAAOIgUAAQAAgUAHgNQANgWAeAAQAbAAAMAOQAMAOAAASQAAASgNANQgHAHgTALIgPAIQgKAGgGAFQgLAKgCALIBSAAIAAASg");
	this.shape_169.setTransform(-107.85,336.225);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_170.setTransform(68.475,312.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_171.setTransform(60.05,314.275);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgoArQgEgJgBgPIAAhNIAUAAIAABLQAAAJADAGQAFAKAOAAQASAAAHgSQAEgJAAgQIAAg5IATAAIAAByIgSAAIAAgRQgDAHgGAEQgLAJgOAAQgYAAgJgQg");
	this.shape_172.setTransform(48.3,314.35);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgfBLQgNgJgCgRIAUAAQABAHAFAEQAGAHAOAAQAVAAAHgQQAEgJAAgYQgGAJgIAEQgIAFgNAAQgSAAgOgOQgOgNAAgeQAAgcAOgRQAOgQAUAAQAMAAAKAHQAGAEAGAHIAAgPIARAAIAABoQAAAWgGAMQgMAYggAAQgTAAgMgIgAgZguQgEALAAAQQAAATAIAKQAHAKAOAAQATAAAJgTQAFgKAAgOQAAgVgJgKQgJgLgOAAQgTAAgHATg");
	this.shape_173.setTransform(35.825,316.525);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgoArQgEgJAAgPIAAhNIATAAIAABLQAAAJACAGQAGAKAOAAQASAAAHgSQAEgJAAgQIAAg5IATAAIAAByIgSAAIAAgRQgDAHgGAEQgLAJgOAAQgYAAgJgQg");
	this.shape_174.setTransform(23.9,314.35);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAvBPIgQgwIg+AAIgRAwIgVAAIA7idIAXAAIA6CdgAAZAOIgYhEIgZBEIAxAAg");
	this.shape_175.setTransform(10.65,312.05);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgIACgFAHQgGAGgBAGQgCAGABALIAAA8IgUAAIAAhyIATAAIAAAQQAIgKAJgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_176.setTransform(-7.7,314.075);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_177.setTransform(-16.25,312.05);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_178.setTransform(-31.275,312.225);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_179.setTransform(-43.175,314.275);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_180.setTransform(-52.325,312.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAWgNALQgNALgUAAQgWAAgNgQg");
	this.shape_181.setTransform(-60.675,314.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_182.setTransform(-72.475,314.275);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgyBSIAAifIATAAIAAAOQAGgHAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAlgUAQQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_183.setTransform(-84.325,316.35);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAcA6IgcgsIgbAsIgZAAIApg7Igng4IAaAAIAZApIAbgpIAXABIgnA3IApA7g");
	this.shape_184.setTransform(-96.275,314.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_185.setTransform(-107.875,314.275);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQALAAAIgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAaAAAMAPQAGAKABALIgTAAQgBgHgDgFQgHgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgaAAgKgLg");
	this.shape_186.setTransform(22.15,290.275);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_187.setTransform(10.775,290.25);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgLASQAHgBAEgJQABgGAAgDIAAgBIgBgCIgLAAIAAgXIAWAAIAAAWQAAALgFAKQgFAKgMACg");
	this.shape_188.setTransform(-4.75,296.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAcA7IAAhIQAAgKgEgHQgFgKgOAAIgKABQgHACgHAHQgFAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIASAAIAAAQQAIgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_189.setTransform(-13.85,290.075);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_190.setTransform(-26.175,290.225);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_191.setTransform(-34.6,288.05);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgFBEQgFgIAAgKIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_192.setTransform(-40.175,288.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_193.setTransform(-48.975,290.25);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_194.setTransform(-61.4,290.075);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_195.setTransform(-69.95,288.05);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgFBEQgFgIAAgKIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_196.setTransform(-75.525,288.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJADAFQAIAKASAAQAKAAAIgFQAJgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_197.setTransform(-83.95,290.275);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_198.setTransform(-95.675,290.275);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_199.setTransform(-108.175,288.225);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgGgEIgSgFIgOgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgLALgZAAQgYAAgMgLg");
	this.shape_200.setTransform(62.45,266.275);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_201.setTransform(53.775,264.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_202.setTransform(48.4,264.05);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_203.setTransform(34.4,266.275);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_204.setTransform(22.675,266.275);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_205.setTransform(10.6,264.025);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNgBQgSAAgIASQgFAMAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_206.setTransform(-0.925,266.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_207.setTransform(-12.375,266.25);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_208.setTransform(-24.925,266.275);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAJgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJgBANIAABBg");
	this.shape_209.setTransform(-33.95,266.075);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_210.setTransform(-47.475,264.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_211.setTransform(-52.85,264.05);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_212.setTransform(-67.575,266.275);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNgBQgSAAgIASQgFAMAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_213.setTransform(-78.975,266.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_214.setTransform(-90.65,266.075);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("Ag6A7QgSgXAAgjQAAgfAQgXQAUgdAoAAQApAAAUAbQAQAUAAAhQAAAigSAYQgVAbgmAAQgkAAgWgYgAgnguQgPAQAAAgQAAAaAOASQANASAdAAQAcAAAMgUQANgUAAgaQAAgbgPgRQgOgRgZAAQgYAAgQARg");
	this.shape_215.setTransform(-105.3,264.075);

	this.instance = new lib.Tween36("synched",0);
	this.instance.setTransform(0,-595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-744,231.7,1311);


(lib.Tween38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAMIAAgXIAVAAIAAAXg");
	this.shape.setTransform(-33.975,558.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgJAIQgKAIAAAWIAAA9IgUAAIAAidIAUAAIAAA7QAGgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_1.setTransform(-43.1,552.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABKQAAAGAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_2.setTransform(-52.375,552.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAJgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJgBANIAABBg");
	this.shape_3.setTransform(-58.35,554.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFACQgJAFAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_4.setTransform(-68.475,554.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag5BPIAAidIBxAAIAAAUIhdAAIAAAvIBWAAIAAARIhWAAIAAA2IBfAAIAAATg");
	this.shape_5.setTransform(-81.75,552.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_6.setTransform(-101.775,554.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABKQAAAGAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_7.setTransform(-110.925,552.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXBPIgkg6IgPAPIAAArIgTAAIAAidIATAAIAABbIAxgwIAYAAIgsApIAvBJg");
	this.shape_8.setTransform(96.05,528.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAAQQAAARAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAXgNAKQgNALgUAAQgWAAgNgQg");
	this.shape_9.setTransform(84.475,530.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPAAgHAIQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_10.setTransform(73.025,530.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBLQgGgEgGgIIAAAPIgSAAIAAieIATAAIAAA6QAGgJAJgEQAJgEAJAAQAWgBAOAQQANAOAAAcQAAAbgNASQgOASgXAAQgMAAgJgGgAgWgMQgKAKAAAUQAAARAEAKQAIATAUAAQAPAAAIgNQAIgMAAgVQAAgRgIgMQgIgMgPABQgMAAgKAKg");
	this.shape_11.setTransform(60.825,528.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPAAgHAIQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_12.setTransform(42.525,530.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_13.setTransform(33.025,528.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPAAgHAIQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_14.setTransform(24.225,530.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_15.setTransform(11.375,528.225);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_16.setTransform(-6.625,530.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgJAIQgKAIAAAWIAAA9IgUAAIAAidIAUAAIAAA7QAGgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_17.setTransform(-18.7,528.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_18.setTransform(-27.975,528.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgfBLQgNgJgCgRIAUAAQABAHAFAEQAGAHAOAAQAVAAAHgQQAEgJAAgYQgGAJgIAEQgIAFgNAAQgSAAgOgOQgOgNAAgeQAAgcAOgRQAOgQAUAAQAMAAAKAHQAGAEAGAHIAAgPIARAAIAABoQAAAWgGAMQgMAYggAAQgTAAgMgIgAgZguQgEALAAAQQAAATAIAKQAHAKAOAAQATAAAJgTQAFgKAAgOQAAgVgJgKQgJgLgOAAQgTAAgHATg");
	this.shape_19.setTransform(-43.525,532.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgIACgFAHQgFAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_20.setTransform(-55.3,530.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_21.setTransform(-63.85,528.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_22.setTransform(-72.775,528.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgIACgFAHQgFAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_23.setTransform(-84.55,530.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_24.setTransform(-96.875,530.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAaAAAMAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgaAAgKgLg");
	this.shape_25.setTransform(-108.35,530.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLASQAHgBAEgJQABgGAAgDIAAgBIgBgCIgLAAIAAgXIAXAAIAAAWQgBALgFAKQgFAKgMACg");
	this.shape_26.setTransform(46.55,512.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQAAAJAFAFQAHAKARAAQALAAAJgFQAIgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_27.setTransform(38.05,506.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_28.setTransform(26.325,506.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_29.setTransform(17.3,506.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgoAqQgEgIgBgPIAAhNIAUAAIAABMQAAAIACAFQAGALAOAAQASAAAHgSQAEgJAAgRIAAg4IATAAIAAByIgSAAIAAgRQgDAGgGAFQgLAJgOAAQgYAAgJgRg");
	this.shape_30.setTransform(6.8,506.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFBEQgFgHAAgLIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_31.setTransform(-2.325,504.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_32.setTransform(-11.125,506.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_33.setTransform(-23.675,506.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKBQIAAhiIgQAAIAAgQIAQAAIAAgSQAAgMAEgFQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDAAQgJgBgBAGQgCAEAAASIATAAIAAAQIgTAAIAABig");
	this.shape_34.setTransform(-32.725,503.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_35.setTransform(-48.075,506.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_36.setTransform(-59.475,506.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_37.setTransform(-70.925,506.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgKBQIAAhiIgQAAIAAgQIAQAAIAAgSQAAgMAEgFQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDAAQgJgBgBAGQgCAEAAASIATAAIAAAQIgTAAIAABig");
	this.shape_38.setTransform(-80.325,503.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbA7IAAhyIASAAIAAAUQADgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJAAANIAABBg");
	this.shape_39.setTransform(-86.4,506.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgoAqQgFgIABgPIAAhNIATAAIAABMQAAAIACAFQAGALANAAQATAAAHgSQAEgJAAgRIAAg4IAUAAIAAByIgTAAIABgRQgEAGgFAFQgLAJgPAAQgYAAgJgRg");
	this.shape_40.setTransform(-96.9,506.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAaAAAMAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgaAAgKgLg");
	this.shape_41.setTransform(-108.35,506.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_42.setTransform(63.775,480.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_43.setTransform(52,482.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_44.setTransform(40.025,482.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgLASQAHgBAEgJQABgFAAgEIAAgBIgBgBIgLAAIAAgYIAXAAIAAAWQgBAMgFAJQgFAKgMACg");
	this.shape_45.setTransform(24.5,488.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_46.setTransform(14.975,480.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_47.setTransform(6.875,480.05);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_48.setTransform(-1.775,482.275);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_49.setTransform(-10.2,480.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKBQIAAhjIgQAAIAAgPIAQAAIAAgSQAAgLAEgGQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDgBQgJABgBAFQgCAEAAASIATAAIAAAPIgTAAIAABjg");
	this.shape_50.setTransform(-15.675,479.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNgBQgSAAgIASQgFAMAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_51.setTransform(-30.225,482.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_52.setTransform(-38.25,480.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_53.setTransform(-43.825,480.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_54.setTransform(-52.975,482.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgGAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_55.setTransform(-65.05,482.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfBLQgNgJgCgRIAUAAQABAHAFAEQAGAHAOAAQAVAAAHgQQAEgJAAgYQgGAJgIAEQgIAFgNAAQgSAAgOgOQgOgNAAgeQAAgcAOgRQAOgQAUAAQAMAAAKAHQAGAEAGAHIAAgPIARAAIAABoQAAAWgGAMQgMAYggAAQgTAAgMgIgAgZguQgEALAAAQQAAATAIAKQAHAKAOAAQATAAAJgTQAFgKAAgOQAAgVgJgKQgJgLgOAAQgTAAgHATg");
	this.shape_56.setTransform(-77.675,484.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_57.setTransform(-89.225,482.25);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AA6A7IAAhPQgBgMgFgEQgGgEgJAAQgLAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQAOAAAIAHQAEAEAEAHQAGgJAJgEQAJgFALAAQAWAAAJARQAEAJABAPIAABMg");
	this.shape_58.setTransform(-104.7,482.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgKASQAGgBAEgKQABgFAAgDIAAgBIgBgBIgKAAIAAgYIAVAAIAAAWQAAALgFAKQgFAKgLACg");
	this.shape_59.setTransform(105.6,464.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAcA7IAAhIQgBgKgDgHQgFgKgOAAIgKABQgIACgFAHQgGAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIATAAIAAAQQAHgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_60.setTransform(96.5,458.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_61.setTransform(84.175,458.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_62.setTransform(75.75,456.05);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_63.setTransform(70.175,456.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_64.setTransform(64.8,456.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_65.setTransform(56.9,458.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_66.setTransform(45.175,458.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgyBSIAAifIATAAIAAAOQAGgHAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAlgUAQQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_67.setTransform(33.325,460.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AA5A7IAAhPQAAgMgFgEQgGgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgDgFQgEgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgUAAIAAhyIAUAAIAAAQQAGgIAHgEQAJgHAMAAQANAAAJAHQAEAEAEAHQAGgJAJgEQAJgFAKAAQAYAAAIARQAFAJgBAPIAABMg");
	this.shape_68.setTransform(17.85,458.075);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_69.setTransform(2.475,458.225);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAWgNALQgNALgUAAQgWAAgNgQg");
	this.shape_70.setTransform(-8.925,458.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQgBgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQgBgHgDgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAIAFQAEACAIACIAMADQAWAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgZAAgMgLg");
	this.shape_71.setTransform(-26.1,458.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgFAgIgEg/IATAAIgEA/g");
	this.shape_72.setTransform(-33.125,451.325);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_73.setTransform(-42.325,456.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_74.setTransform(-50.45,456.05);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_75.setTransform(-59.075,458.225);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_76.setTransform(-68.1,458.075);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_77.setTransform(-78.575,458.275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_78.setTransform(-87.725,456.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQAAAJAEAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgPAAQgMAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_79.setTransform(-96.15,458.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_80.setTransform(-107.525,458.25);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_81.setTransform(28.675,434.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgFgJgPAAQgLAAgJAIQgLAIABAWIAAA9IgUAAIAAidIAUAAIAAA7QAGgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_82.setTransform(16.6,432.025);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgFBEQgFgHAAgLIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_83.setTransform(7.325,432.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_84.setTransform(-7.925,434.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgvA5IAAgPIBDhSIg+AAIAAgQIBYAAIAAAPIhDBRIBFAAIAAARg");
	this.shape_85.setTransform(-19.525,434.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgkBRIgFgBIAAgSIAHACIAEAAQAFAAADgBIAEgFIAEgJIAFgMIgqh1IAVAAIAeBcIAfhcIAWAAIgSAzIgSAvQgRAsgGAKQgGAJgSAAg");
	this.shape_86.setTransform(-30.4,436.55);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_87.setTransform(-38.325,432.05);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_88.setTransform(-46.625,434.25);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgOAAIgKABQgHACgHAHQgEAGgCAGQgCAGAAALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_89.setTransform(-59.05,434.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_90.setTransform(-71.025,434.25);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_91.setTransform(-85.875,432.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_92.setTransform(-90.725,432.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_93.setTransform(-95.6,432.05);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAXA5IgXhYIgWBYIgUAAIgihxIAWAAIAWBZIAXhZIAUAAIAWBZIAYhZIATAAIghBxg");
	this.shape_94.setTransform(-106,434.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKAAALIgTAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAJACIAMADQAVAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgYAAgLgLg");
	this.shape_95.setTransform(106.25,410.275);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_96.setTransform(97.575,408.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgOAAIgKABQgHACgHAHQgEAGgCAGQgCAGAAALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_97.setTransform(88.55,410.075);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_98.setTransform(76.225,410.275);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AA6A7IAAhPQAAgMgHgEQgFgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAIgFAMAAQAWAAAJARQAEAJAAAPIAABMg");
	this.shape_99.setTransform(61.1,410.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgoArQgEgJgBgPIAAhNIAUAAIAABMQAAAIADAFQAFALAOAAQASAAAHgSQAEgKAAgPIAAg5IATAAIAAByIgSAAIAAgRQgDAHgGAEQgKAJgPAAQgYAAgJgQg");
	this.shape_100.setTransform(45.7,410.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAJgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJgBANIAABBg");
	this.shape_101.setTransform(36.7,410.075);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_102.setTransform(29.275,408.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQAAAJAEAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgPAAQgMAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_103.setTransform(20.85,410.275);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_104.setTransform(9.25,410.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_105.setTransform(0.7,408.05);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_106.setTransform(-10.85,410.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_107.setTransform(-21.325,410.275);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_108.setTransform(-33.4,408.025);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_109.setTransform(-42.675,408.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_110.setTransform(-51.825,410.225);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_111.setTransform(-70.125,410.275);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_112.setTransform(-78.525,408.05);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_113.setTransform(-83.4,408.05);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_114.setTransform(-91.9,408.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAXA6IgXhYIgWBYIgUAAIgihyIAWAAIAWBZIAXhZIAUAAIAWBZIAYhZIATAAIghByg");
	this.shape_115.setTransform(-106,410.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgLASQAIgBACgKQACgFAAgDIAAgBIgBgBIgLAAIAAgYIAXAAIAAAWQgBALgFAKQgFAKgMACg");
	this.shape_116.setTransform(75.7,392.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAALAPQAIAKgBALIgSAAQAAgHgEgFQgIgIgPAAQgMAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgZAAgLgLg");
	this.shape_117.setTransform(67.2,386.275);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_118.setTransform(55.475,386.275);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgfBLQgNgJgCgRIAUAAQABAHAFAEQAGAHAOAAQAVAAAHgQQAEgJAAgYQgGAJgIAEQgIAFgNAAQgSAAgOgOQgOgNAAgeQAAgcAOgRQAOgQAUAAQAMAAAKAHQAGAEAGAHIAAgPIARAAIAABoQAAAWgGAMQgMAYggAAQgTAAgMgIgAgZguQgEALAAAQQAAATAIAKQAHAKAOAAQATAAAJgTQAFgKAAgOQAAgVgJgKQgJgLgOAAQgTAAgHATg");
	this.shape_119.setTransform(42.975,388.525);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_120.setTransform(31.425,386.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AA5A7IAAhPQABgMgHgEQgFgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgDgFQgEgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgUAAIAAhyIAUAAIAAAQQAGgIAHgEQAJgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAJgFAKAAQAYAAAIARQAFAJgBAPIAABMg");
	this.shape_121.setTransform(15.95,386.075);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_122.setTransform(4.35,384.05);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_123.setTransform(-10.375,386.275);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJAAANIAABBg");
	this.shape_124.setTransform(-19.4,386.075);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgoArQgEgJgBgPIAAhNIAUAAIAABLQAAAJADAGQAFAKAOAAQASAAAHgSQAEgJAAgQIAAg5IATAAIAAByIgSAAIAAgRQgDAHgGAEQgKAJgPAAQgYAAgJgQg");
	this.shape_125.setTransform(-29.9,386.35);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_126.setTransform(-39.025,384.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgyBSIAAifIATAAIAAAOQAGgHAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAlgUAQQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_127.setTransform(-47.825,388.35);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgrAzQgKgJAAgPQAAgQAKgJQAKgIAQgCIAegDQAGgBADgFIABgIQAAgJgHgFQgHgEgMgBQgPABgHAHQgDAFgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAHAAARIAABBIABAFQABACAEAAIADAAIADAAIAAAOIgGABIgHABQgKAAgEgHQgDgFgBgGQgGAHgLAGQgKAGgNAAQgQAAgKgKgAANACIgLADIgKABQgLABgFADQgJAGAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgOQgDABgGABg");
	this.shape_128.setTransform(-60.025,386.25);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAWgNALQgNALgUAAQgWAAgNgQg");
	this.shape_129.setTransform(-71.775,386.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_130.setTransform(-85.875,384.05);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_131.setTransform(-90.725,384.05);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_132.setTransform(-95.6,384.05);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AAXA6IgXhZIgWBZIgUAAIgihzIAWAAIAWBaIAXhaIAUAAIAWBZIAYhZIATAAIghBzg");
	this.shape_133.setTransform(-106,386.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgFBEQgFgHAAgLIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_134.setTransform(99.025,360.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgKBQIAAhiIgQAAIAAgQIAQAAIAAgSQAAgMAEgFQAGgKATAAIAEAAIAEAAIAAASIgEAAIgDAAQgJgBgBAGQgCAEAAASIATAAIAAAQIgTAAIAABig");
	this.shape_135.setTransform(93.025,359.95);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_136.setTransform(84.125,362.25);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAHgIQAKgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJAAANIAABBg");
	this.shape_137.setTransform(74.75,362.075);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_138.setTransform(65.075,362.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_139.setTransform(53.275,362.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_140.setTransform(41.875,362.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_141.setTransform(30.425,362.25);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgyBSIAAigIATAAIAAAQQAGgIAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAkgUAQQgMALgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgMQAJgKAAgWQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_142.setTransform(18.225,364.35);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAaAAAMAPQAGAKABALIgTAAQgBgHgDgFQgHgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgaAAgKgLg");
	this.shape_143.setTransform(6.4,362.275);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_144.setTransform(-11.425,362.275);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_145.setTransform(-23.5,360.025);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAJQANAKACAXIgTAAQgBgKgHgHQgGgIgNAAQgSABgIARQgFAMAAAQQAAASAIAMQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAXgNALQgNAKgUAAQgWAAgNgQg");
	this.shape_146.setTransform(-35.025,362.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgkBRIgFgBIAAgSIAHACIAEAAQAGAAACgBIAEgFIAEgJIAFgMIgrh1IAXAAIAdBcIAfhcIAVAAIgSAzIgRAvQgRAsgGAKQgGAJgRAAg");
	this.shape_147.setTransform(-46.1,364.55);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIATAAQABAJADAFQAIAKARAAQAMAAAHgFQAJgFAAgJQAAgIgGgEIgRgFIgPgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAZAAAMAPQAIAKgBALIgSAAQAAgHgFgFQgGgIgQAAQgLAAgGAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgMALgYAAQgYAAgMgLg");
	this.shape_148.setTransform(-57.1,362.275);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("Ag5BPIAAidIBFAAQAVAAAMAMQANAMABAVQAAATgMAOQgLAMgYAAIgxAAIAABDgAglgFIAqAAQAOAAAJgGQAJgGAAgQQAAgRgNgGQgHgEgMAAIgqAAg");
	this.shape_149.setTransform(-69.5,360.05);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_150.setTransform(-89.575,362.275);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgFgJgPAAQgLAAgKAIQgKAIAAAWIAAA9IgTAAIAAidIATAAIAAA7QAHgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_151.setTransform(-101.65,360.025);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgFBEQgFgHAAgLIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_152.setTransform(-110.925,360.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAcA7IAAhIQAAgKgEgHQgFgKgOAAIgKABQgHACgHAHQgFAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIASAAIAAAQQAIgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_153.setTransform(92.35,338.075);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_154.setTransform(80.025,338.225);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgGgEIgSgFIgOgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgLALgZAAQgYAAgMgLg");
	this.shape_155.setTransform(62.45,338.275);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_156.setTransform(51.075,338.25);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgbA7IAAhyIATAAIAAAUQACgGAIgIQAJgJALAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgIAJABANIAABBg");
	this.shape_157.setTransform(41.7,338.075);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_158.setTransform(31.225,338.275);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AA6A7IAAhPQAAgMgHgEQgFgEgIAAQgMAAgIAHQgIAIAAASIAABCIgTAAIAAhKQAAgMgCgFQgFgIgMAAQgLAAgJAIQgJAIAAAXIAAA8IgTAAIAAhyIATAAIAAAQQAHgIAFgEQAKgHAMAAQANAAAJAHQAEAEADAHQAHgJAJgEQAIgFALAAQAXAAAJARQAEAJABAPIAABMg");
	this.shape_159.setTransform(16.1,338.075);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_160.setTransform(1.075,338.25);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNgBQgSAAgIASQgFAMAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_161.setTransform(-10.675,338.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_162.setTransform(-28.575,338.275);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgFgJgPAAQgLAAgJAIQgLAIABAWIAAA9IgUAAIAAidIAUAAIAAA7QAGgJAGgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_163.setTransform(-40.65,336.025);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_164.setTransform(-49.925,336.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgKASQAGgBAEgKQAAgEAAgEIAAgBIAAgBIgKAAIAAgYIAVAAIAAAWQABAMgGAJQgFAKgLACg");
	this.shape_165.setTransform(-62.05,344.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AglBDQgMgMgBgRIAUAAQABAQAMAGQAFADAIAAQANAAAKgLQAKgMADgkQgGALgJAEQgKAEgKAAQgXAAgMgNQgNgNAAgWQAAgVAMgQQANgQAaAAQAgAAANAeQAHARAAAZQAAAbgIAWQgOAkgiAAQgWAAgLgMgAgXgzQgIAJAAARQAAAOAHAKQAHAHARAAQAKAAAJgGQAKgIAAgTQAAgRgJgIQgIgIgMAAQgOAAgJAJg");
	this.shape_166.setTransform(-71.25,336.45);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("Ag0BNQABgUAHgOQAHgPAVgMIAUgMQAOgHAFgGQAJgJAAgLQAAgOgIgIQgIgHgNAAQgTAAgIAPQgEAIgBAOIgTAAQAAgUAHgNQAMgWAgAAQAaAAAMAOQAMAOAAASQAAASgNANQgHAHgTALIgPAIQgKAGgGAFQgLAKgCALIBSAAIAAASg");
	this.shape_167.setTransform(-83.45,336.225);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgpA3QgLgUAAgiQAAgZAHgTQANgjAgAAQAdAAANAZQALATAAAhQAAAegJAVQgOAdgeAAQgbAAgOgYgAgYgsQgIAPAAAfQABAXAFAPQAIAVASABQAPAAAIgOQAJgNAAgjQAAgbgGgQQgHgRgSAAQgQAAgJAQg");
	this.shape_168.setTransform(-95.65,336.45);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("Ag0BNQABgUAHgOQAHgPAVgMIAUgMQAOgHAFgGQAJgJAAgLQAAgOgIgIQgIgHgOAAQgTAAgHAPQgEAIAAAOIgUAAQAAgUAHgNQANgWAeAAQAbAAAMAOQAMAOAAASQAAASgNANQgHAHgTALIgPAIQgKAGgGAFQgLAKgCALIBSAAIAAASg");
	this.shape_169.setTransform(-107.85,336.225);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_170.setTransform(68.475,312.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_171.setTransform(60.05,314.275);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgoArQgEgJgBgPIAAhNIAUAAIAABLQAAAJADAGQAFAKAOAAQASAAAHgSQAEgJAAgQIAAg5IATAAIAAByIgSAAIAAgRQgDAHgGAEQgLAJgOAAQgYAAgJgQg");
	this.shape_172.setTransform(48.3,314.35);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgfBLQgNgJgCgRIAUAAQABAHAFAEQAGAHAOAAQAVAAAHgQQAEgJAAgYQgGAJgIAEQgIAFgNAAQgSAAgOgOQgOgNAAgeQAAgcAOgRQAOgQAUAAQAMAAAKAHQAGAEAGAHIAAgPIARAAIAABoQAAAWgGAMQgMAYggAAQgTAAgMgIgAgZguQgEALAAAQQAAATAIAKQAHAKAOAAQATAAAJgTQAFgKAAgOQAAgVgJgKQgJgLgOAAQgTAAgHATg");
	this.shape_173.setTransform(35.825,316.525);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgoArQgEgJAAgPIAAhNIATAAIAABLQAAAJACAGQAGAKAOAAQASAAAHgSQAEgJAAgQIAAg5IATAAIAAByIgSAAIAAgRQgDAHgGAEQgLAJgOAAQgYAAgJgQg");
	this.shape_174.setTransform(23.9,314.35);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAvBPIgQgwIg+AAIgRAwIgVAAIA7idIAXAAIA6CdgAAZAOIgYhEIgZBEIAxAAg");
	this.shape_175.setTransform(10.65,312.05);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAbA7IAAhIQAAgKgDgHQgFgKgNAAIgLABQgIACgFAHQgGAGgBAGQgCAGABALIAAA8IgUAAIAAhyIATAAIAAAQQAIgKAJgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_176.setTransform(-7.7,314.075);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgJBPIAAhxIATAAIAABxgAgJg4IAAgWIATAAIAAAWg");
	this.shape_177.setTransform(-16.25,312.05);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_178.setTransform(-31.275,312.225);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_179.setTransform(-43.175,314.275);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgQIAQAAIAAgfIASAAIAAAfIATAAIAAAQIgTAAIAABKQAAAHAEABIAIABIADAAIAEAAIAAAQIgHABIgIAAQgNABgEgIg");
	this.shape_180.setTransform(-52.325,312.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgjAtQgNgRAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgLgHgGQgGgIgNABQgSgBgIATQgFALAAARQAAAQAIAMQAHAMAPAAQAMAAAHgHQAHgHACgNIATAAQgDAWgNALQgNALgUAAQgWAAgNgQg");
	this.shape_181.setTransform(-60.675,314.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_182.setTransform(-72.475,314.275);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgyBSIAAifIATAAIAAAOQAGgHAHgFQAKgGAMAAQAUAAANAPQAOAPAAAcQAAAlgUAQQgMAKgRAAQgMAAgJgGQgFgDgGgIIAAA7gAgbgsQgEALAAARQAAANAEAIQAHASAUAAQANAAAJgLQAJgMAAgVQAAgOgEgKQgHgTgUAAQgUAAgHAUg");
	this.shape_183.setTransform(-84.325,316.35);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAcA6IgcgsIgbAsIgZAAIApg7Igng4IAaAAIAZApIAbgpIAXABIgnA3IApA7g");
	this.shape_184.setTransform(-96.275,314.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_185.setTransform(-107.875,314.275);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQALAAAIgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAaAAAMAPQAGAKABALIgTAAQgBgHgDgFQgHgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgNALgXAAQgaAAgKgLg");
	this.shape_186.setTransform(22.15,290.275);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_187.setTransform(10.775,290.25);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgLASQAHgBAEgJQABgGAAgDIAAgBIgBgCIgLAAIAAgXIAWAAIAAAWQAAALgFAKQgFAKgMACg");
	this.shape_188.setTransform(-4.75,296.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAcA7IAAhIQAAgKgEgHQgFgKgOAAIgKABQgHACgHAHQgFAGgBAGQgBAGAAALIAAA8IgUAAIAAhyIASAAIAAAQQAIgKAKgEQAJgFAKAAQAYAAAJARQAFAKAAARIAABJg");
	this.shape_189.setTransform(-13.85,290.075);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgnAtQgNgQAAgbQAAgcAOgRQAPgRAXAAQAXAAAPAPQAPAPAAAcQAAAbgNASQgOASgbAAQgYAAgOgQgAgZgeQgIAOAAASQAAASAIAMQAIANARAAQATAAAHgPQAHgOAAgRQAAgQgFgKQgIgQgUAAQgRAAgIANg");
	this.shape_190.setTransform(-26.175,290.225);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_191.setTransform(-34.6,288.05);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgFBEQgFgIAAgKIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_192.setTransform(-40.175,288.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgHAQgCIAegFQAGgBADgEIABgHQAAgLgHgEQgHgFgMABQgPAAgHAHQgDAGgBAIIgSAAQAAgVANgIQAOgJARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADgBIAAAPIgGABIgHAAQgKABgEgIQgDgDgBgIQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANADIgLACIgKABQgLABgFAEQgJAFAAAKQAAAJAGAFQAGAEAIAAQALAAAIgEQAQgIAAgSIAAgPQgDACgGACg");
	this.shape_193.setTransform(-48.975,290.25);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_194.setTransform(-61.4,290.075);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_195.setTransform(-69.95,288.05);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgFBEQgFgIAAgKIAAhMIgQAAIAAgPIAQAAIAAggIASAAIAAAgIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAPIgHACIgIABQgNgBgEgGg");
	this.shape_196.setTransform(-75.525,288.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJADAFQAIAKASAAQAKAAAIgFQAJgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_197.setTransform(-83.95,290.275);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_198.setTransform(-95.675,290.275);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgkBBQgOgQAAgbQAAgYANgSQANgTAYAAQAMAAAJAGQAFADAGAIIAAg6IATAAIAACdIgSAAIAAgQQgGALgJAFQgKAEgLAAQgTAAgOgQgAgUgLQgJALAAAVQAAATAIAMQAHAMAQAAQAOAAAIgLQAJgMAAgVQAAgVgJgKQgJgLgNAAQgNAAgJALg");
	this.shape_199.setTransform(-108.175,288.225);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgkAyQgKgMgBgRIASAAQABAJAFAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgGgEIgSgFIgOgEQgPgEgHgDQgNgIAAgOQAAgQAMgKQAMgKAUAAQAaAAAMAPQAGAKAAALIgSAAQAAgHgEgFQgIgIgQAAQgLAAgFAFQgGAEAAAGQAAAIAHAFQAFACAJACIALADQAWAFAHAEQALAIAAAPQAAAQgMALQgLALgZAAQgYAAgMgLg");
	this.shape_200.setTransform(62.45,266.275);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_201.setTransform(53.775,264.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_202.setTransform(48.4,264.05);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgjAyQgLgMgBgRIASAAQACAJAEAFQAHAKASAAQAKAAAJgFQAIgFAAgJQAAgIgHgEIgRgFIgOgEQgPgEgHgDQgMgIAAgOQAAgQALgKQAMgKAUAAQAZAAANAPQAGAKABALIgTAAQgBgHgEgFQgGgIgRAAQgKAAgGAFQgGAEAAAGQAAAIAIAFQAEACAIACIANADQAVAFAHAEQALAIAAAPQAAAQgLALQgMALgYAAQgaAAgKgLg");
	this.shape_203.setTransform(34.4,266.275);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_204.setTransform(22.675,266.275);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAbBPIAAhIQAAgMgDgGQgGgJgOAAQgLAAgKAIQgJAIgBAWIAAA9IgTAAIAAidIATAAIAAA7QAIgJAFgDQAJgHANAAQAZAAAJASQAFAJAAAQIAABKg");
	this.shape_205.setTransform(10.6,264.025);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNgBQgSAAgIASQgFAMAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_206.setTransform(-0.925,266.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgrAzQgKgKAAgOQAAgQAKgJQAKgIAQgBIAegFQAGAAADgFIABgHQAAgLgHgEQgHgEgMAAQgPgBgHAJQgDAEgBAJIgSAAQAAgVANgJQAOgIARAAQATAAANAIQANAIAAAQIAABBIABAFQABACAEAAIADAAIADAAIAAANIgGACIgHAAQgKAAgEgGQgDgFgBgHQgGAJgLAFQgKAGgNAAQgQAAgKgKgAANACIgLACIgKACQgLACgFADQgJAEAAAMQAAAIAGAEQAGAGAIAAQALAAAIgGQAQgHAAgSIAAgOQgDABgGABg");
	this.shape_207.setTransform(-12.375,266.25);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_208.setTransform(-24.925,266.275);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgbA7IAAhyIASAAIAAAUQADgGAHgIQAJgJAMAAIACAAIAEABIAAAUIgDAAIgDAAQgPAAgHAJQgHAJgBANIAABBg");
	this.shape_209.setTransform(-33.95,266.075);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgFBDQgFgGAAgMIAAhLIgQAAIAAgPIAQAAIAAghIASAAIAAAhIATAAIAAAPIgTAAIAABLQAAAFAEADIAIABIADAAIAEgBIAAAQIgHABIgIABQgNAAgEgIg");
	this.shape_210.setTransform(-47.475,264.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgJBPIAAhyIATAAIAABygAgJg4IAAgWIATAAIAAAWg");
	this.shape_211.setTransform(-52.85,264.05);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgkAtQgPgPAAgdQAAgaAPgSQAPgRAXAAQAMAAAMAGQALAGAGAJQAGAIACAMQABAIAAAQIhSAAQAAASAIALQAIAKAPAAQAPAAAJgKQAFgGACgHIATAAQgBAGgEAIQgFAIgFAFQgJAIgMADQgHACgIAAQgVAAgPgQgAAggJQgBgNgEgHQgIgOgSAAQgMAAgKAKQgIAJgBAPIA+AAIAAAAg");
	this.shape_212.setTransform(-67.575,266.275);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgjAsQgNgQAAgZQAAgdAOgRQAPgRAWAAQATAAAMAKQANAJACAXIgTAAQgBgKgHgIQgGgGgNgBQgSAAgIASQgFAMAAARQAAAQAIANQAHALAPAAQAMAAAHgHQAHgIACgMIATAAQgDAWgNAMQgNAKgUAAQgWAAgNgRg");
	this.shape_213.setTransform(-78.975,266.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AAbA7IAAhIQABgKgEgHQgFgKgNAAIgLABQgHACgHAHQgEAGgCAGQgBAGgBALIAAA8IgTAAIAAhyIASAAIAAAQQAJgKAJgEQAJgFAKAAQAZAAAIARQAFAKAAARIAABJg");
	this.shape_214.setTransform(-90.65,266.075);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("Ag6A7QgSgXAAgjQAAgfAQgXQAUgdAoAAQApAAAUAbQAQAUAAAhQAAAigSAYQgVAbgmAAQgkAAgWgYgAgnguQgPAQAAAgQAAAaAOASQANASAdAAQAcAAAMgUQANgUAAgaQAAgbgPgRQgOgRgZAAQgYAAgQARg");
	this.shape_215.setTransform(-105.3,264.075);

	this.instance = new lib.Tween36("synched",0);
	this.instance.setTransform(0,-595);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.8,-744,231.7,1311);


// stage content:
(lib.Psycheproject3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,346];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		root.targetTimeline = this;
		root.targetTimeline.loop = true;
		root.targetTimeline.force = 1;
		root.targetTimeline.friction = 0.8;
		root.targetTimeline.direction = -1; // scroll direction
		root.targetTimeline.minFrame = 0; // set the start range value here
		root.targetTimeline.maxFrame = root.targetTimeline.totalFrames - 1; // set the end range value here
		root.targetTimeline.speed = 0;
		root.targetTimeline.pressed = false;
		
		root.start = function ()
		{
			createjs.Touch.enable(stage);
			root.hit.cursor = "default";
			root.gotoAndStop(root.targetTimeline.minFrame);
			canvas.addEventListener('mousewheel', root.onMouseWheel.bind(root));
			canvas.addEventListener('DOMMouseScroll', root.onMouseWheel.bind(root));
			stage.on("stagemousedown", root.onStageMouseDown.bind(root));
			createjs.Ticker.on("tick", root.tickHandler);
		};
		
		root.onMouseWheel = function (e)
		{
			e.preventDefault();
		
			var evt = window.event || e;
			var delta = Math.max(-1, Math.min(1, evt.wheelDelta || -evt.detail));
		
			root.targetTimeline.speed += delta * root.force * root.direction;
		};
		
		root.onStageMouseDown = function (e)
		{
			root.targetTimeline.pressedY = e.stageY / stage.scaleY;
			root.targetTimeline.pressed = true;
			root.targetTimeline.stageMouseUp = stage.on("stagemouseup", root.onStageMouseUp.bind(root));
		};
		
		root.tickHandler = function (e)
		{
			var clamp = root.targetTimeline.loop ? "loopClamp" : "clamp";
			var mouseY = stage.mouseY / stage.scaleY;
			
			if (root.targetTimeline.pressed && mouseY !== root.targetTimeline.pressedY)
			{
				root.targetTimeline.speed = (mouseY > root.targetTimeline.pressedY ? 1 : -1) * root.direction * root.force;
				root.targetTimeline.pressedY = mouseY;
			}
			
			root.targetTimeline.speed *= root.targetTimeline.friction;
			root.targetTimeline.gotoAndStop(root[clamp](root.targetTimeline.currentFrame + root.targetTimeline.speed, root.targetTimeline.minFrame, root.targetTimeline.maxFrame));
		};
		
		root.onStageMouseUp = function (e)
		{
			root.targetTimeline.pressed = false;
			stage.off("stagemouseup", root.targetTimeline.stageMouseUp);
		};
		
		root.loopClamp = function(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
				
			return value;
		};
		
		root.clamp = function(value, min, max)
		{
			if (value < min)
				return max;
			
			if (value > max)
				return min;
				
			return value;
		};
		
		if (!root.hasStarted)
		{
			root.start();
			root.hasStarted = true;
		}
	}
	this.frame_346 = function() {
		var root = this;
		
		root.targetTimeline = this;
		root.targetTimeline.loop = true;
		root.targetTimeline.force = 1;
		root.targetTimeline.friction = 0.8;
		root.targetTimeline.direction = -1; // scroll direction
		root.targetTimeline.minFrame = 0; // set the start range value here
		root.targetTimeline.maxFrame = root.targetTimeline.totalFrames - 1; // set the end range value here
		root.targetTimeline.speed = 0;
		root.targetTimeline.pressed = false;
		
		root.start = function ()
		{
			createjs.Touch.enable(stage);
			root.hit.cursor = "default";
			root.gotoAndStop(root.targetTimeline.minFrame);
			canvas.addEventListener('mousewheel', root.onMouseWheel.bind(root));
			canvas.addEventListener('DOMMouseScroll', root.onMouseWheel.bind(root));
			stage.on("stagemousedown", root.onStageMouseDown.bind(root));
			createjs.Ticker.on("tick", root.tickHandler);
		};
		
		root.onMouseWheel = function (e)
		{
			e.preventDefault();
		
			var evt = window.event || e;
			var delta = Math.max(-1, Math.min(1, evt.wheelDelta || -evt.detail));
		
			root.targetTimeline.speed += delta * root.force * root.direction;
		};
		
		root.onStageMouseDown = function (e)
		{
			root.targetTimeline.pressedY = e.stageY / stage.scaleY;
			root.targetTimeline.pressed = true;
			root.targetTimeline.stageMouseUp = stage.on("stagemouseup", root.onStageMouseUp.bind(root));
		};
		
		root.tickHandler = function (e)
		{
			var clamp = root.targetTimeline.loop ? "loopClamp" : "clamp";
			var mouseY = stage.mouseY / stage.scaleY;
			
			if (root.targetTimeline.pressed && mouseY !== root.targetTimeline.pressedY)
			{
				root.targetTimeline.speed = (mouseY > root.targetTimeline.pressedY ? 1 : -1) * root.direction * root.force;
				root.targetTimeline.pressedY = mouseY;
			}
			
			root.targetTimeline.speed *= root.targetTimeline.friction;
			root.targetTimeline.gotoAndStop(root[clamp](root.targetTimeline.currentFrame + root.targetTimeline.speed, root.targetTimeline.minFrame, root.targetTimeline.maxFrame));
		};
		
		root.onStageMouseUp = function (e)
		{
			root.targetTimeline.pressed = false;
			stage.off("stagemouseup", root.targetTimeline.stageMouseUp);
		};
		
		root.loopClamp = function(value, min, max)
		{
			if (value < min)
				return min;
			
			if (value > max)
				return max;
				
			return value;
		};
		
		root.clamp = function(value, min, max)
		{
			if (value < min)
				return max;
			
			if (value > max)
				return min;
				
			return value;
		};
		
		if (!root.hasStarted)
		{
			root.start();
			root.hasStarted = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(346).call(this.frame_346).wait(1));

	// hit
	this.hit = new lib.Hit();
	this.hit.name = "hit";
	this.hit.setTransform(361.1,538.2,1.125,2.2499,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.Hit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(346).to({regX:0,regY:0,scaleX:1.5,scaleY:1.3333,x:480,y:320},0).wait(1));

	// text
	this.instance = new lib.Tween26("synched",0);
	this.instance.setTransform(198.55,812);

	this.instance_1 = new lib.Tween27("synched",0);
	this.instance_1.setTransform(198.55,-200.4);

	this.instance_2 = new lib.Tween28("synched",0);
	this.instance_2.setTransform(210.45,1345);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween34("synched",0);
	this.instance_3.setTransform(145.85,1246);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween35("synched",0);
	this.instance_4.setTransform(145.85,228);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween36("synched",0);
	this.instance_5.setTransform(144,1240);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween38("synched",0);
	this.instance_6.setTransform(144,855);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween39("synched",0);
	this.instance_7.setTransform(144,-166);

	this.text = new cjs.Text("", "18px 'Times-Roman'", "#0066CC");
	this.text.lineHeight = 20;
	this.text.parent = this;
	this.text.setTransform(128.9,695.2);

	this.instance_8 = new lib.Tween37("synched",0);
	this.instance_8.setTransform(144,824);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween40("synched",0);
	this.instance_9.setTransform(423,266.85);

	this.instance_10 = new lib.Tween42("synched",0);
	this.instance_10.setTransform(369,333.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},59).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},45).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_2}]},26).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},24).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},8).to({state:[{t:this.instance_5}]},12).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},13).to({state:[{t:this.instance_8},{t:this.text}]},24).to({state:[{t:this.instance_8}]},15).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_8}]},9).to({state:[{t:this.instance_9}]},1).to({state:[]},30).to({state:[{t:this.instance_10}]},8).to({state:[]},10).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-200.4},59).wait(288));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({y:286},45).wait(12).to({y:324},0).to({y:-267},26).to({_off:true},1).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({_off:false},0).to({_off:true,y:228},24).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144).to({_off:false},24).wait(13).to({startPosition:0},0).to({y:-161},7).wait(1).to({y:-165},0).to({_off:true},1).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(190).to({_off:false},0).to({y:162},8).wait(12).to({startPosition:0},0).to({_off:true},9).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(219).to({_off:false},0).to({_off:true,y:-166},13).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(256).to({_off:false},0).wait(15).to({y:216},0).wait(10).to({startPosition:0},0).to({y:-236},9).to({_off:true},1).wait(56));

	// _6
	this.instance_11 = new lib.Tween45("synched",0);
	this.instance_11.setTransform(573,-183.35);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween46("synched",0);
	this.instance_12.setTransform(1253.4,318.55);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween47("synched",0);
	this.instance_13.setTransform(821.4,318.55);

	this.instance_14 = new lib.asteroidpngcopy();
	this.instance_14.setTransform(485,141,0.1307,0.1307);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},60).to({state:[{t:this.instance_11}]},83).to({state:[]},1).to({state:[{t:this.instance_12}]},90).to({state:[{t:this.instance_13}]},15).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_14}]},34).to({state:[{t:this.instance_14}]},39).to({state:[{t:this.instance_14}]},16).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60).to({_off:false},0).to({y:754.6},83).to({_off:true},1).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(234).to({_off:false},0).to({_off:true,x:821.4},15).wait(98));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(256).to({_off:false},0).to({scaleX:0.1468,scaleY:0.1468,x:162,y:114},34).to({y:1004},39).to({x:267,y:1090},16).to({_off:true},1).wait(1));

	// spacecraft
	this.instance_15 = new lib.Tween17("synched",0);
	this.instance_15.setTransform(544.1,718.1,0.6359,0.6359,0,0,0,0.1,0.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(196).to({_off:false},0).to({regX:0.2,regY:0.2,scaleX:0.2814,scaleY:0.2814,x:494.15,y:183.15},23).to({regX:0.5,regY:0.5,scaleX:1.3634,scaleY:1.3634,x:494.55,y:183.55},13).wait(16).to({startPosition:0},0).to({y:-165.4},7).to({_off:true},1).wait(91));

	// Layer_8
	this.instance_16 = new lib.Tween18("synched",0);
	this.instance_16.setTransform(758.25,-468.05,1.0558,1.0558);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(196).to({_off:false},0).to({y:343.9},20).to({_off:true},1).wait(130));

	// spacex
	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.setTransform(368,1286);

	this.instance_18 = new lib.Tween48("synched",0);
	this.instance_18.setTransform(802.8,918);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},60).to({state:[]},34).to({state:[{t:this.instance_18}]},74).to({state:[{t:this.instance_18}]},32).to({state:[]},1).to({state:[]},30).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(168).to({_off:false},0).to({y:-318.9},32).to({_off:true},1).wait(146));

	// earth
	this.instance_19 = new lib.Tween7("synched",0);
	this.instance_19.setTransform(366,493);

	this.instance_20 = new lib.Tween8("synched",0);
	this.instance_20.setTransform(366,493);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween9("synched",0);
	this.instance_21.setTransform(366,493);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},19).wait(328));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:false},19).to({_off:true},20).wait(308));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(19).to({_off:false},20).to({startPosition:0},21).to({_off:true},1).wait(286));

	// Layer_2
	this.instance_22 = new lib.Tween5("synched",0);
	this.instance_22.setTransform(361,627,0.75,1.0008);

	this.instance_23 = new lib.Tween6("synched",0);
	this.instance_23.setTransform(480,454);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).to({state:[{t:this.instance_23}]},346).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({_off:true,scaleX:1,scaleY:1,x:480,y:454},346).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(210,-431.1,1395.5,1965);
// library properties:
lib.properties = {
	id: 'B2C34A8A5C84924FB2AD8C9EC65F245D',
	width: 720,
	height: 1080,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/asteroid.png", id:"asteroid"},
		{src:"images/asteroidpngcopy.png", id:"asteroidpngcopy"},
		{src:"images/backgroundpngcopy.png", id:"backgroundpngcopy"},
		{src:"images/earth11.png", id:"earth11"},
		{src:"images/earth21.png", id:"earth21"},
		{src:"images/earth31.png", id:"earth31"},
		{src:"images/jupmars.png", id:"jupmars"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/psychecraft1.png", id:"psychecraft1"},
		{src:"images/spacecraft1.png", id:"spacecraft1"},
		{src:"images/sxpngcopy.png", id:"sxpngcopy"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B2C34A8A5C84924FB2AD8C9EC65F245D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;