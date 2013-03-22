(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('misc=Misc');
		mxResources.parse(mxShapeMockupPlaybackControls.prototype.cst.SHAPE_PLAYBACK_CONTROLS + '=Playback Controls');
		mxResources.parse(mxShapeMockupProgressBar.prototype.cst.SHAPE_PROGRESS_BAR + '=Progress Bar');
		mxResources.parse(mxShapeMockupShoppingCart.prototype.cst.SHAPE_SHOPPING_CART + '=Shopping Cart');
		mxResources.parse(mxShapeMockupRating.prototype.cst.SHAPE_RATING + '=Rating');
		mxResources.parse(mxShapeMockupMail.prototype.cst.SHAPE_MAIL + '=Mail');
		mxResources.parse(mxShapeMockupVolumeSlider.prototype.cst.SHAPE_VOLUME_SLIDER + '=Volume Slider');
		mxResources.parse(mxShapeMockupEdit.prototype.cst.SHAPE_EDIT + '=Edit Icon');
		mxResources.parse(mxShapeMockupPrint.prototype.cst.SHAPE_PRINT + '=Print Icon');
		mxResources.parse(mxShapeMockupShare.prototype.cst.SHAPE_SHARE + '=Share Icon');
		mxResources.parse(mxShapeMockupTrashcan.prototype.cst.SHAPE_TRASHCAN + '=Trashcan Icon');
		mxResources.parse(mxShapeMockupCopyright.prototype.cst.SHAPE_COPYRIGHT + '=Copyright');
		mxResources.parse(mxShapeMockupRegistered.prototype.cst.SHAPE_REGISTERED + '=Registered');
		mxResources.parse(mxShapeMockupVolume.prototype.cst.SHAPE_VOLUME + '=Volume');
		mxResources.parse(mxShapeMockupRuler.prototype.cst.SHAPE_RULER + '=Ruler');
		mxResources.parse(mxShapeMockupRevisionTable.prototype.cst.SHAPE_REVISION_TABLE + '=Revision Table');
		mxResources.parse(mxShapeMockupStatusBar.prototype.cst.SHAPE_STATUS_BAR + '=Status Bar');
		mxResources.parse(mxShapeMockupPin.prototype.cst.SHAPE_PIN + '=Pin');
					
		this.addPalette('misc', 'Mockup Misc (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.help_icon;', 32, 32, '', 'Help Icon', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPlaybackControls.prototype.cst.SHAPE_PLAYBACK_CONTROLS + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupPlaybackControls.prototype.cst.FILL_COLOR2 + '=#99ddff;' + mxShapeMockupPlaybackControls.prototype.cst.STROKE_COLOR2 + '=none;' + mxShapeMockupPlaybackControls.prototype.cst.FILL_COLOR3 + '=#ffffff;' + mxShapeMockupPlaybackControls.prototype.cst.STROKE_COLOR3 + '=none;', 250, 30, '', 'Playback Controls', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupProgressBar.prototype.cst.SHAPE_PROGRESS_BAR + ';' + mxConstants.STYLE_FILLCOLOR + '=#cccccc;' + mxConstants.STYLE_STROKECOLOR + '=none;' + mxShapeMockupProgressBar.prototype.cst.FILL_COLOR2 + '=#99ddff;' + mxShapeMockupProgressBar.prototype.cst.BAR_POS + '=80;', 200, 20, '', 'Progress Bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupShoppingCart.prototype.cst.SHAPE_SHOPPING_CART + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;', 50, 50, '', 'Shopping Cart', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupRating.prototype.cst.SHAPE_RATING + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_FILLCOLOR + '=#ffff00;' + mxShapeMockupRating.prototype.cst.EMPTY_FILL_COLOR + '=#ffffff;' + mxShapeMockupRating.prototype.cst.GRADE + '=4;' + mxShapeMockupRating.prototype.cst.RATING_SCALE + '=5;' + mxShapeMockupRating.prototype.cst.RATING_STYLE + '=star;', 225, 30, '', 'Rating', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupMail.prototype.cst.SHAPE_MAIL + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;', 100, 60, '', 'Mail', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupVolumeSlider.prototype.cst.SHAPE_VOLUME_SLIDER + ';' + mxShapeMockupVolumeSlider.prototype.cst.BAR_POS + '=80;' + mxConstants.STYLE_FILLCOLOR + '=#cccccc;' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupVolumeSlider.prototype.cst.FILL_COLOR2 + '=#ddeeff;', 250, 30, '', 'Volume Slider', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=' + mxShapeMockupEdit.prototype.cst.SHAPE_EDIT + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;', 50, 50, '', 'Edit Icon', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPrint.prototype.cst.SHAPE_PRINT + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;', 50, 50, '', 'Print Icon', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=' + mxShapeMockupShare.prototype.cst.SHAPE_SHARE + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;', 50, 50, '', 'Share Icon', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=' + mxShapeMockupTrashcan.prototype.cst.SHAPE_TRASHCAN + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;', 50, 50, '', 'Trashcan Icon', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=' + mxShapeMockupCopyright.prototype.cst.SHAPE_COPYRIGHT + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;', 25, 25, '', 'Copyright', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=' + mxShapeMockupRegistered.prototype.cst.SHAPE_REGISTERED + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;', 25, 25, '', 'Registered', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=' + mxShapeMockupVolume.prototype.cst.SHAPE_VOLUME + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;', 25, 25, '', 'Volume', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupRuler.prototype.cst.SHAPE_RULER + ';' + mxShapeMockupRuler.prototype.cst.ORIENTATION + '=' + mxShapeMockupRuler.prototype.cst.FACE_DOWN + ';' + mxShapeMockupRuler.prototype.cst.UNIT_SIZE + '=10;' + mxConstants.STYLE_STROKECOLOR + '=#999999;', 350, 20, '', 'Horizontal Ruler', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupRuler.prototype.cst.SHAPE_RULER + ';' + mxShapeMockupRuler.prototype.cst.ORIENTATION + '=' + mxShapeMockupRuler.prototype.cst.FACE_DOWN + ';' + mxShapeMockupRuler.prototype.cst.UNIT_SIZE + '=10;' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';', 20, 350, '', 'Vertical Ruler', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupRevisionTable.prototype.cst.SHAPE_REVISION_TABLE + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupRevisionTable.prototype.cst.TEXT_COLOR + '=#999999;' + mxShapeMockupRevisionTable.prototype.cst.TEXT_SIZE + '=17;' + mxShapeMockupRevisionTable.prototype.cst.MAIN_TEXT + '=REVISION HISTORY,REV,DATE,DESCRIPTION,A,5/17/2013,Design modified;', 400, 75, '', 'Revision Table', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=' + mxShapeMockupStatusBar.prototype.cst.SHAPE_STATUS_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupStatusBar.prototype.cst.FILL_COLOR2 + '=#ddeeff;' + mxShapeMockupStatusBar.prototype.cst.MAIN_TEXT + '=Status text,Text 2,Text 3;' + mxShapeMockupStatusBar.prototype.cst.TEXT_COLOR + '=#999999;' + mxShapeMockupStatusBar.prototype.cst.TEXT_SIZE + '=15;' + mxShapeMockupStatusBar.prototype.cst.STROKE_COLOR2 + '=#008cff;', 500, 30, '', 'Status Bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPin.prototype.cst.SHAPE_PIN + ';' + mxShapeMockupPin.prototype.cst.FILL_COLOR2 + '=#00dd00;' + mxShapeMockupPin.prototype.cst.FILL_COLOR3 + '=#004400;' + mxConstants.STYLE_STROKECOLOR + '=#006600;', 10, 25, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPin.prototype.cst.SHAPE_PIN + ';' + mxShapeMockupPin.prototype.cst.FILL_COLOR2 + '=#dd0000;' + mxShapeMockupPin.prototype.cst.FILL_COLOR3 + '=#440000;' + mxConstants.STYLE_STROKECOLOR + '=#660000;', 10, 25, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPin.prototype.cst.SHAPE_PIN + ';' + mxShapeMockupPin.prototype.cst.FILL_COLOR2 + '=#ccccff;' + mxShapeMockupPin.prototype.cst.FILL_COLOR3 + '=#0000ff;' + mxConstants.STYLE_STROKECOLOR + '=#000066;', 10, 25, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPin.prototype.cst.SHAPE_PIN + ';' + mxShapeMockupPin.prototype.cst.FILL_COLOR2 + '=#ffff00;' + mxShapeMockupPin.prototype.cst.FILL_COLOR3 + '=#888800;' + mxConstants.STYLE_STROKECOLOR + '=#999900;', 10, 25, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupPin.prototype.cst.SHAPE_PIN + ';' + mxShapeMockupPin.prototype.cst.FILL_COLOR2 + '=#ffa500;' + mxShapeMockupPin.prototype.cst.FILL_COLOR3 + '=#885000;' + mxConstants.STYLE_STROKECOLOR + '=#997000;', 10, 25, '', 'Pin', false));
		}));
	};
})();
