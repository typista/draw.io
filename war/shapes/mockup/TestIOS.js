(function()
{
	//Adds custom shape library
	var SidebarInit = Sidebar.prototype.init;
	Sidebar.prototype.init = function()
	{
		SidebarInit.apply(this, arguments);

		mxResources.parse('ios=iOS');
		mxResources.parse(mxMockupC.SHAPE_IADD_ICON + '=Add Icon');
		mxResources.parse(mxMockupC.SHAPE_IALERT_BOX + '=Alert Box');
		mxResources.parse(mxMockupC.SHAPE_IALPHA_LIST + '=Alpha List');
		mxResources.parse(mxMockupC.SHAPE_IAPP_BAR + '=App Bar');
		mxResources.parse(mxMockupC.SHAPE_IARROW_ICON + '=Arrow Icon');
		mxResources.parse(mxMockupC.SHAPE_IBG_FLAT + '=Flat Colored Background');
		mxResources.parse(mxMockupC.SHAPE_IBG_MAP + '=Map Background');
		mxResources.parse(mxMockupC.SHAPE_IBG_STRIPED + '=Striped Background');
		mxResources.parse(mxMockupC.SHAPE_IBUTTON + '=Button');
		mxResources.parse(mxMockupC.SHAPE_IBUTTON_BACK + '=Back Button');
		mxResources.parse(mxMockupC.SHAPE_IBUTTON_FORWARD + '=Forward Button');
		mxResources.parse(mxMockupC.SHAPE_IBUTTON_BAR + '=Button Bar');
		mxResources.parse(mxMockupC.SHAPE_ICALL_BUTTONS + '=Call Buttons');
		mxResources.parse(mxMockupC.SHAPE_ICALL_DIALOG + '=Call Dialog');
		mxResources.parse(mxMockupC.SHAPE_ICHECKBOX_GROUP + '=Checkbox Group');
		mxResources.parse(mxMockupC.SHAPE_ICHECK_ICON + '=Check Icon');
		mxResources.parse(mxMockupC.SHAPE_ICLOUD_PROGRESS_BAR + '=Cloud Progress Bar');
		mxResources.parse(mxMockupC.SHAPE_ICOMBO_BOX + '=Combo Box');
		mxResources.parse(mxMockupC.SHAPE_ICOPY + '=Copy');
		mxResources.parse(mxMockupC.SHAPE_ICOPY_AREA + '=Copy Area');
		mxResources.parse(mxMockupC.SHAPE_IICON_GRID + '=Icon Grid');
		mxResources.parse(mxMockupC.SHAPE_IDELETE_APP + '=Delete App');
		mxResources.parse(mxMockupC.SHAPE_IDELETE_ICON + '=Delete Icon');
		mxResources.parse(mxMockupC.SHAPE_IDOWNLOAD_BAR + '=Download Bar');
		mxResources.parse(mxMockupC.SHAPE_IDIALOG_BOX + '=Dialog Box');
		mxResources.parse(mxMockupC.SHAPE_IDIRECTION + '=Direction');
		mxResources.parse(mxMockupC.SHAPE_IHOME_PAGE_CONTROL + '=Home Page Control');
		mxResources.parse(mxMockupC.SHAPE_IKEYB_LETTERS + '=Keyboard (letters)');
		mxResources.parse(mxMockupC.SHAPE_IKEYB_NUMBERS + '=Keyboard (numbers)');
		mxResources.parse(mxMockupC.SHAPE_IKEYB_SYMBOLS + '=Keyboard (symbols)');
		mxResources.parse(mxMockupC.SHAPE_ILOCATION_BAR + '=Location Bar');
		mxResources.parse(mxMockupC.SHAPE_ILOCK_BUTTON + '=Lock Button');
		mxResources.parse(mxMockupC.SHAPE_IHOR_BUTTON_BAR + '=Horizontal Button Bar');
		mxResources.parse(mxMockupC.SHAPE_IINFO_ICON + '=Info Icon');
		mxResources.parse(mxMockupC.SHAPE_ION_OFF_BUTTON + '=On/Off Button');
		mxResources.parse(mxMockupC.SHAPE_IOPTION + '=Option');
		mxResources.parse(mxMockupC.SHAPE_IPAGE_CONTROL + '=Page Control');
		mxResources.parse(mxMockupC.SHAPE_IPAD + '=iPad');
		mxResources.parse(mxMockupC.SHAPE_IPHONE + '=iPhone');
		mxResources.parse(mxMockupC.SHAPE_IPIN + '=Pin');
		mxResources.parse(mxMockupC.SHAPE_IPREV_NEXT + '=Prev/Next');
		mxResources.parse(mxMockupC.SHAPE_IPROGRESS_BAR + '=Progress Bar');
		mxResources.parse(mxMockupC.SHAPE_IRADIO_GROUP + '=Radio Group');
		mxResources.parse(mxMockupC.SHAPE_ISLIDER + '=Slider');
		mxResources.parse(mxMockupC.SHAPE_ISORT_FIND_ICON + '=Sort/Find Icon');
		mxResources.parse(mxMockupC.SHAPE_ITEXT_INPUT + '=Text Input');
		mxResources.parse(mxMockupC.SHAPE_ITOP_BAR + '=Top Bar');
		mxResources.parse(mxMockupC.SHAPE_ITOP_BAR_LOCKED + '=Top Bar Locked');
		mxResources.parse(mxMockupC.SHAPE_IURL_BAR + '=URL Bar');
		mxResources.parse(mxMockupC.SHAPE_IVIDEO_CONTROLS + '=Video Controls');
			
		this.addPalette('ios', 'Mockup iOS (Test)', false, mxUtils.bind(this, function(content)
		{
			var sizeX = 200; //reference size for iPhone and all other iOS shapes
			
			var sizeY = 2 * sizeX; //change only sizeX, to avoid changing aspect ratio
			
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPHONE + ';' + mxMockupC.BG_STYLE + '=' + mxMockupC.BG_FLAT_GREEN + ';' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeX, sizeY, '', 'iPhone (portrait)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPHONE + ';' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';' + mxMockupC.BG_STYLE + '=' + mxMockupC.BG_FLAT_GREEN + ';' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeY, sizeX, '', 'iPhone (landscape)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPAD + ';' + mxMockupC.BG_STYLE + '=' + mxMockupC.BG_FLAT_GREEN + ';' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeX * 2.425, sizeY * 1.5625, '', 'iPad (portrait)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPAD + ';' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';' + mxMockupC.BG_STYLE + '=' + mxMockupC.BG_FLAT_GREEN + ';' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeY * 1.5625, sizeX * 2.425, '', 'iPad (landscape)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IBG_FLAT + ';' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (white)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IBG_FLAT + ';' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#1f2923', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (green)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IBG_FLAT + ';' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (gray)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IBG_STRIPED + ';' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#5D7585;'+ mxMockupC.STYLE_STROKECOLOR2 + '=#657E8F;', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (striped)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IBG_MAP + ';' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxMockupC.STYLE_STROKECOLOR2 + '=#008cff;' + mxMockupC.STYLE_FILLCOLOR2 + '=#96D1FF;', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (map)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IBUTTON_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxMockupC.STYLE_STROKECOLOR2 + '=#c4c4c4;' + mxConstants.STYLE_FONTCOLOR + '=#666666;' + mxMockupC.STYLE_FONTCOLOR2 + '=#ffffff;' + mxMockupC.BUTTON_TEXT + '=+Item 1,+Item 2,Item 3,Item 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.825, sizeY * 0.125, '', 'Button bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IAPP_BAR + ';', sizeX * 0.87, sizeY * 0.0375, '', 'App bar (portrait)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IAPP_BAR + ';', sizeX * 1.395, sizeY * 0.0375, '', 'App bar (landscape)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ITOP_BAR + ';', sizeX * 0.87, sizeY * 0.0375, '', 'Top bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ITOP_BAR_LOCKED + ';', sizeX * 0.87, sizeY * 0.0375, '', 'Top bar locked', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IBUTTON + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxMockupC.STYLE_TEXTCOLOR2 + '=#ffffff;' + mxMockupC.BUTTON_TEXT + '=Button;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;' + mxMockupC.STYLE_FILLCOLOR2 + '=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IBUTTON_BACK + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxMockupC.STYLE_TEXTCOLOR2 + '=#ffffff;' + mxMockupC.BUTTON_TEXT + '=Button;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;' + mxMockupC.STYLE_FILLCOLOR2 + '=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Back button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IBUTTON_FORWARD + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxMockupC.STYLE_TEXTCOLOR2 + '=#ffffff;' + mxMockupC.BUTTON_TEXT + '=Button;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;' + mxMockupC.STYLE_FILLCOLOR2 + '=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Forward button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPREV_NEXT + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;' + mxMockupC.STYLE_FILLCOLOR2 + '=#3D5565;' + mxMockupC.STYLE_FILLCOLOR3 + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Prev/next button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ITEXT_INPUT + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxMockupC.STYLE_TEXTCOLOR2 + '=#000000;' + mxMockupC.BUTTON_TEXT + '=Default text;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Text input', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IRADIO_GROUP + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxMockupC.STYLE_TEXTCOLOR2 + '=#666666;' + mxMockupC.BUTTON_TEXT + '=Option 1,Option 2,+Option 3,Option 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.825, sizeY * 0.125, '', 'Radiobuttons', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ICHECKBOX_GROUP + ';' + mxConstants.STYLE_STROKECOLOR + '=#666666;' + mxMockupC.STYLE_TEXTCOLOR2 + '=#666666;' + mxMockupC.BUTTON_TEXT + '=Setting 1,Setting 2,+Setting 3,Setting 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.825, sizeY * 0.125, '', 'Checkboxes', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ICOMBO_BOX + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxMockupC.STYLE_TEXTCOLOR2 + '=#666666;' + mxMockupC.BUTTON_TEXT + '=Option 1;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;' + mxMockupC.STYLE_FILLCOLOR2 + '=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.29, sizeY * 0.0375, '', 'Combobox', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ION_OFF_BUTTON + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;' + mxMockupC.BUTTON_STATE + '=' + mxMockupC.STATE_ON, sizeX * 0.2175, sizeY * 0.0375, '', 'On-off button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ITEXT_INPUT + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxMockupC.STYLE_TEXTCOLOR2 + '=#000000;' + mxMockupC.BUTTON_TEXT + '=********;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Password field', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IALERT_BOX + ';' + mxMockupC.BUTTON_TEXT + '=Something happened,Button text,Alert description text,description text second line;', sizeX * 0.75, sizeY * 0.25, '', 'Alert box', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IDIALOG_BOX + ';' + mxMockupC.BUTTON_TEXT + '=Something happened,Cancel,OK,Alert description text,description text second line;', sizeX * 0.75, sizeY * 0.25, '', 'Dialog box', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ILOCK_BUTTON + ';', sizeX * 0.87, sizeY * 0.125, '', 'Lock button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IARROW_ICON + ';' + mxConstants.STYLE_FILLCOLOR + '=#8BbEff;' + mxMockupC.STYLE_FILLCOLOR2 + '=#135Ec8;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Arrow', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IDELETE_ICON + ';' + mxConstants.STYLE_FILLCOLOR + '=#e8878E;' + mxMockupC.STYLE_FILLCOLOR2 + '=#BD1421;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Delete', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IADD_ICON + ';' + mxConstants.STYLE_FILLCOLOR + '=#7AdF78;' + mxMockupC.STYLE_FILLCOLOR2 + '=#1A9917;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Add', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IINFO_ICON + ';' + mxConstants.STYLE_FILLCOLOR + '=#8BbEff;' + mxMockupC.STYLE_FILLCOLOR2 + '=#135Ec8;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Info', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ISORT_FIND_ICON + ';' + mxConstants.STYLE_FILLCOLOR + '=#8BbEff;' + mxMockupC.STYLE_FILLCOLOR2 + '=#135Ec8;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Sort/find', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ICHECK_ICON + ';' + mxConstants.STYLE_FILLCOLOR + '=#e8878E;' + mxMockupC.STYLE_FILLCOLOR2 + '=#BD1421;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Check', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IKEYB_LETTERS + ';', sizeX * 0.87, sizeY * 0.25, '', 'Keyboard (letters)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IKEYB_NUMBERS + ';', sizeX * 0.87, sizeY * 0.25, '', 'Keyboard (numbers)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IKEYB_SYMBOLS + ';', sizeX * 0.87, sizeY * 0.25, '', 'Keyboard (symbols)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IDELETE_APP + ';' + mxConstants.STYLE_FILLCOLOR + '=#cccccc;' + mxMockupC.STYLE_FILLCOLOR2 + '=#000000;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Delete app', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IDIRECTION + ';', sizeX * 0.5, sizeY * 0.25, '', 'Direction', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ILOCATION_BAR + ';' + mxMockupC.BAR_POS + '=80;' + mxMockupC.POINTER_POS + '=' + mxMockupC.POINTER_BOTTOM + ';' + mxMockupC.BUTTON_TEXT + '=' + '5th Street Music Store', sizeX * 0.775, sizeY * 0.08125, '', 'Location bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ICALL_DIALOG + ';', sizeX * 0.75, sizeY * 0.3125, '', 'Call Dialog', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ICALL_BUTTONS + ';', sizeX * 0.87, sizeY * 0.575, '', 'Call buttons', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IOPTION + ';' + mxMockupC.BAR_POS + '=80;' + mxMockupC.POINTER_POS + '=' + mxMockupC.POINTER_BOTTOM + ';' + mxMockupC.BUTTON_TEXT + '=' + 'Option', sizeX * 0.375, sizeY * 0.06875, '', 'Option', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IALPHA_LIST + ';' + mxConstants.STYLE_FONTSIZE + '=7.5;'+ mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.075, sizeY * 0.5625, '', 'Alphabet list', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IHOR_BUTTON_BAR + ';' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxMockupC.STYLE_STROKECOLOR2 + '=#c4c4c4;' + mxConstants.STYLE_FONTCOLOR + '=#666666;' + mxMockupC.STYLE_FONTCOLOR2 + '=#ffffff;' + mxMockupC.BUTTON_TEXT + '=+Item 1,+Item 2,Item 3,Item 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxMockupC.STYLE_FILLCOLOR2 + '=#008cff', sizeX * 0.825, sizeY * 0.03125, '', 'Horizontal button bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPIN + ';' + mxMockupC.STYLE_FILLCOLOR2 + '=#00dd00;' + mxMockupC.STYLE_FILLCOLOR3 + '=#004400;' + mxConstants.STYLE_STROKECOLOR + '=#006600;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPIN + ';' + mxMockupC.STYLE_FILLCOLOR2 + '=#dd0000;' + mxMockupC.STYLE_FILLCOLOR3 + '=#440000;' + mxConstants.STYLE_STROKECOLOR + '=#660000;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPIN + ';' + mxMockupC.STYLE_FILLCOLOR2 + '=#ccccff;' + mxMockupC.STYLE_FILLCOLOR3 + '=#0000ff;' + mxConstants.STYLE_STROKECOLOR + '=#000066;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPIN + ';' + mxMockupC.STYLE_FILLCOLOR2 + '=#ffff00;' + mxMockupC.STYLE_FILLCOLOR3 + '=#888800;' + mxConstants.STYLE_STROKECOLOR + '=#999900;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPIN + ';' + mxMockupC.STYLE_FILLCOLOR2 + '=#ffa500;' + mxMockupC.STYLE_FILLCOLOR3 + '=#885000;' + mxConstants.STYLE_STROKECOLOR + '=#997000;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IVIDEO_CONTROLS + ';' + mxMockupC.BAR_POS + '=10;', sizeX * 0.87, sizeY * 0.125, '', 'Video controls', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IURL_BAR + ';' + mxMockupC.BUTTON_TEXT + '=Page title,http://www.draw.io,Cancel;', sizeX * 0.87, sizeY * 0.075, '', 'URL bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ISLIDER + ';' + mxMockupC.BAR_POS + '=20;', sizeX * 0.75, sizeY * 0.025, '', 'Slider', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPROGRESS_BAR + ';' + mxMockupC.BAR_POS + '=40;', sizeX * 0.75, sizeY * 0.025, '', 'Progress bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ICLOUD_PROGRESS_BAR + ';' + mxMockupC.BAR_POS + '=20;', sizeX * 0.75, sizeY * 0.025, '', 'Cloud progress bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IDOWNLOAD_BAR + ';' + mxMockupC.BUTTON_TEXT + '=Downloading 4 of 6' + ';' + mxMockupC.BAR_POS + '=30;', sizeX * 0.87, sizeY * 0.075, '', 'Download bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ISCREEN_NAME_BAR + ';' + mxMockupC.STYLE_FILLCOLOR2 + '=#000000;' + mxMockupC.STYLE_FILLCOLOR3 + '=#ffffff;' + mxMockupC.BUTTON_TEXT + '=Screen Name;' + mxMockupC.STYLE_TEXTCOLOR + '=#ffffff', sizeX * 0.87, sizeY * 0.0625, '', 'Screen name bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IICON_GRID + ';' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKECOLOR + '=#000000;' + mxMockupC.GRID_SIZE + '=3,3;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.75, sizeY * 0.375, '', 'Icon grid', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ICOPY + ';' + mxConstants.STYLE_FILLCOLOR + '=#000000;' + mxConstants.STYLE_STROKECOLOR + '=#000000;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;' + mxMockupC.BUTTON_TEXT + '=Copy;' + mxMockupC.STYLE_TEXTCOLOR + '=#ffffff;' + mxMockupC.STYLE_FILLCOLOR2 + '=#000000;' + mxMockupC.STYLE_FILLCOLOR3 + '=#ffffff;', sizeX * 0.2, sizeY * 0.06875, '', 'Copy', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_ICOPY_AREA + ';' + mxConstants.STYLE_STROKECOLOR + '=#000000;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;' + mxMockupC.BUTTON_TEXT + '=Copy;' + mxMockupC.STYLE_TEXTCOLOR + '=#ffffff;' + mxMockupC.STYLE_FILLCOLOR2 + '=#000000;' + mxMockupC.STYLE_FILLCOLOR3 + '=#ffffff;', sizeX * 0.3, sizeY * 0.2, '', 'Copy area', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IHOME_PAGE_CONTROL + ';' + mxConstants.STYLE_FILLCOLOR + '=#666666;' + mxConstants.STYLE_STROKECOLOR + '=#cccccc;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.25, sizeY * 0.0125, '', 'Home page control', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=' + mxMockupC.SHAPE_IPAGE_CONTROL + ';' + mxConstants.STYLE_FILLCOLOR + '=#666666;' + mxConstants.STYLE_STROKECOLOR + '=#cccccc;', sizeX * 0.25, sizeY * 0.0125, '', 'Page control', false));
		}));
	};
})();
