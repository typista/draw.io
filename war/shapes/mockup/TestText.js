(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('text=Text');
		mxResources.parse(mxShapeMockupLink.prototype.cst.SHAPE_LINK + '=Link');
		mxResources.parse(mxShapeMockupLinkBar.prototype.cst.SHAPE_LINK_BAR + '=Link Bar');
		mxResources.parse(mxShapeMockupCallout.prototype.cst.SHAPE_CALLOUT + '=Callout');
		mxResources.parse(mxShapeMockupStickyNote.prototype.cst.SHAPE_STICKY_NOTE + '=Sticky Note');
		mxResources.parse(mxShapeMockupBulletedList.prototype.cst.SHAPE_BULLETED_LIST + '=Bulleted List');
		mxResources.parse(mxShapeMockupTextBox.prototype.cst.SHAPE_TEXT_BOX + '=Text Box');
		mxResources.parse(mxShapeMockupCaptcha.prototype.cst.SHAPE_CAPTCHA + '=Captcha');
		mxResources.parse(mxShapeMockupAlphanumeric.prototype.cst.SHAPE_ALPHANUMERIC + '=Alphanumeric');
			
		this.addPalette('text', 'Mockup Text (Test)', false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupLink.prototype.cst.SHAPE_LINK + ';' + mxShapeMockupLink.prototype.cst.LINK_TEXT + '=Link;' + mxShapeMockupLink.prototype.cst.TEXT_SIZE + '=17;' + mxShapeMockupLink.prototype.cst.TEXT_COLOR + '=#0000ff;', 150, 30, '', 'Link', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupLinkBar.prototype.cst.SHAPE_LINK_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxShapeMockupLinkBar.prototype.cst.STROKE_COLOR2 + '=#c4c4c4;' + mxShapeMockupLinkBar.prototype.cst.TEXT_COLOR + '=#0000ff;' + mxShapeMockupLinkBar.prototype.cst.TEXT_COLOR2 + '=#ffffff;' + mxShapeMockupLinkBar.prototype.cst.MAIN_TEXT + '=+Button 1,Button 2,Button 3,Button 4;' + mxShapeMockupLinkBar.prototype.cst.TEXT_SIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxShapeMockupLinkBar.prototype.cst.FILL_COLOR2 + '=#008cff', 500, 25, '', 'Link Bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupCallout.prototype.cst.SHAPE_CALLOUT + ';' + mxShapeMockupCallout.prototype.cst.CALLOUT_TEXT + '=Callout;' + mxShapeMockupCallout.prototype.cst.TEXT_SIZE + '=17;' + mxShapeMockupCallout.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupCallout.prototype.cst.CALLOUT_DIR + '=' + mxShapeMockupCallout.prototype.cst.DIR_NW + ';' + mxShapeMockupCallout.prototype.cst.CALLOUT_STYLE + '=' + mxShapeMockupCallout.prototype.cst.STYLE_LINE + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;', 200, 100, '', 'Callout', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupStickyNote.prototype.cst.SHAPE_STICKY_NOTE + ';' + mxShapeMockupStickyNote.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupStickyNote.prototype.cst.MAIN_TEXT + '=Note line 1,Note line 2,Note line 3;' + mxShapeMockupStickyNote.prototype.cst.TEXT_SIZE + '=17;', 200, 200, '', 'Sticky Note', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupBulletedList.prototype.cst.SHAPE_BULLETED_LIST + ';' + mxShapeMockupBulletedList.prototype.cst.TEXT_COLOR + '=#666666;' + mxShapeMockupBulletedList.prototype.cst.MAIN_TEXT + '=Line 1,Line 2,Line 3,Line 4,Line 5;' + mxShapeMockupBulletedList.prototype.cst.TEXT_SIZE + '=17;' + mxShapeMockupBulletedList.prototype.cst.BULLET_STYLE + '=' + mxShapeMockupBulletedList.prototype.cst.STYLE_HYPHEN + ';' + mxConstants.STYLE_STROKECOLOR + '=none;' + mxConstants.STYLE_FILLCOLOR + '=none;', 150, 135, '', 'Bulleted List', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupTextBox.prototype.cst.SHAPE_TEXT_BOX + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxShapeMockupTextBox.prototype.cst.MAIN_TEXT + '=Line 1', 150, 30, '', 'Text Box', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupCaptcha.prototype.cst.SHAPE_CAPTCHA + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxShapeMockupTextBox.prototype.cst.MAIN_TEXT + '=fG2yQ23', 150, 50, '', 'Captcha', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxShapeMockupAlphanumeric.prototype.cst.SHAPE_ALPHANUMERIC + ';' + mxShapeMockupAlphanumeric.prototype.cst.MAIN_TEXT + '=0-9 A B C D E F G H I J K L M N O P Q R S T U V X Y Z', 450, 50, '', 'Alphanumeric', false));
			
			var loremText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
			content.appendChild(this.createVertexTemplate('text;spacingTop=-5;whiteSpace=wrap', 250, 470, loremText, 'Paragraph of Text', true));
			
		    var classCell = new mxCell('<table border="1"><tr><th>Header 1</th><th>Header 2</th></tr>' +
		    		'<tr><td>row 1, cell 1</td><td>row 1, cell 2</td></tr><tr><td>row 2, cell 1</td>' + 
		    		'<td>row 2, cell 2</td></tr></table> ', new mxGeometry(0, 0, 145, 65),
					'verticalAlign=top;align=left;overflow=fill;fontSize=12;fontFamily=Helvetica;html=1');
	    	classCell.vertex = true;
	    	content.appendChild(this.createVertexTemplateFromCells([classCell], 145, 65, 'Table', true));
		}));
	};
})();
