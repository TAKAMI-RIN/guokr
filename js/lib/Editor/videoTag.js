/**
 * videoTag plugin
 * @author  mzhou
 * @version 0.1
 * @log 0.1
 *
 */

/*jshint undef:true, browser:true, noarg:true, curly:true, regexp:true, newcap:true, trailing:false, noempty:true, regexp:false, strict:true, evil:true, funcscope:true, iterator:true, loopfunc:true, multistr    :true, boss:true, eqnull:true, eqeqeq:false, undef:true */
/*global G:false, $:false */

G.def('Editor/videoTag', {
	name: 'video',
	barHtml: '<a class="gui-ubb-video" href="javascript:void 0;" title="加粗">加粗</a>',
	keyBind: 'V',
	action: function(editor, mod) {
		'use strict';
		editor.viewApi.execCommand('bold', false, '');
		editor.textApi.surroundSelectedText('[bold]', '[/bold]');
	}
	/*
	beforeSetup: function(editor) {

	},
	afterSetup: function(editor) {

	}*/
});