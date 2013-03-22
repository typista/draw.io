(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('mockupButtons=Mockup / Buttons');
		mxResources.parse(mxShapeMockupButton.prototype.cst.SHAPE_BUTTON + '=Button');
		mxResources.parse(mxShapeMockupMultiButton.prototype.cst.SHAPE_MULTILINE_BUTTON + '=Button');
		mxResources.parse(mxShapeMockupHorButtonBar.prototype.cst.SHAPE_HOR_BUTTON_BAR + '=Horizontal Button Bar');
		mxResources.parse(mxShapeMockupVerButtonBar.prototype.cst.SHAPE_VER_BUTTON_BAR + '=Vertical Button Bar');
		mxResources.parse(mxShapeMockupOnOffButton.prototype.cst.SHAPE_ON_OFF_BUTTON + '=On-Off Button');
			
		this.addPalette('mockupButtons', 'Mockup Buttons (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupButton.prototype.cst.SHAPE_BUTTON + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxShapeMockupButton.prototype.cst.TEXT_COLOR + '=#ffffff;' + mxShapeMockupButton.prototype.cst.MAIN_TEXT + '=Button Text;' + mxShapeMockupButton.prototype.cst.BUTTON_STYLE + '=' + mxShapeMockupButton.prototype.cst.ROUND + ';' + mxShapeMockupButton.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=#008cff', 150, 50, '', 'Button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupMultiButton.prototype.cst.SHAPE_MULTILINE_BUTTON + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxShapeMockupMultiButton.prototype.cst.TEXT_COLOR + '=#ffffff;' + mxShapeMockupMultiButton.prototype.cst.MAIN_TEXT + '=Main Text;' + mxShapeMockupMultiButton.prototype.cst.SUB_TEXT + '=Sub Text;' + mxShapeMockupMultiButton.prototype.cst.BUTTON_STYLE + '=' + mxShapeMockupMultiButton.prototype.cst.ROUND + ';' + mxShapeMockupMultiButton.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=#008cff', 150, 50, '', 'Multiline Button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupHorButtonBar.prototype.cst.SHAPE_HOR_BUTTON_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxShapeMockupHorButtonBar.prototype.cst.STROKE_COLOR2 + '=#c4c4c4;' + mxShapeMockupHorButtonBar.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupHorButtonBar.prototype.cst.TEXT_COLOR2 + '=#ffffff;' + mxShapeMockupHorButtonBar.prototype.cst.MAIN_TEXT + '=+Button 1,Button 2,Button 3,Button 4;' + mxShapeMockupHorButtonBar.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxShapeMockupHorButtonBar.prototype.cst.FILL_COLOR2 + '=#008cff', 500, 50, '', 'Horizontal Button Bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupVerButtonBar.prototype.cst.SHAPE_VER_BUTTON_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxShapeMockupVerButtonBar.prototype.cst.STROKE_COLOR2 + '=#c4c4c4;' + mxShapeMockupVerButtonBar.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupVerButtonBar.prototype.cst.TEXT_COLOR2 + '=#ffffff;' + mxShapeMockupVerButtonBar.prototype.cst.MAIN_TEXT + '=+Button 1,Button 2,Button 3,Button 4;' + mxShapeMockupVerButtonBar.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxShapeMockupVerButtonBar.prototype.cst.FILL_COLOR2 + '=#008cff', 120, 200, '', 'Vertical Button Bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupOnOffButton.prototype.cst.SHAPE_ON_OFF_BUTTON + ';' + mxConstants.STYLE_STROKECOLOR + '=#999999;' + mxShapeMockupOnOffButton.prototype.cst.BUTTON_STATE + '=' + mxShapeMockupOnOffButton.prototype.cst.STATE_ON + ';' + mxShapeMockupOnOffButton.prototype.cst.FILL_COLOR2 + '=#008cff;' + mxShapeMockupOnOffButton.prototype.cst.TEXT_COLOR + '=#ffffff,#999999;' + mxShapeMockupOnOffButton.prototype.cst.TEXT_SIZE + '=17;', 150, 50, '', 'On-off button', false));
		}));
	};
})();
