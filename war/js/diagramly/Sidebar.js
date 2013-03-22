(function()
{
	/**
	 * Overrides gear image URL.
	 */
	Sidebar.prototype.gearImage = GRAPH_IMAGE_PATH + '/clipart/Gear_128x128.png';
	
	/**
	 * Specifies special libraries that are loaded via dynamic JS.
	 */
	mxStencilRegistry.libraries['bpmn'] = [SHAPES_PATH + '/bpmn/mxBpmnShape2.js', STENCIL_PATH + '/bpmn.xml'];
	mxStencilRegistry.libraries['er'] = [SHAPES_PATH + '/er/mxER.js'];
	mxStencilRegistry.libraries['ios'] = [SHAPES_PATH + '/mockup/mxMockupiOS.js'];
	mxStencilRegistry.libraries['mockup/buttons'] = [SHAPES_PATH + '/mockup/mxMockupButtons.js'];
	mxStencilRegistry.libraries['mockup/containers'] = [SHAPES_PATH + '/mockup/mxMockupContainers.js'];
	mxStencilRegistry.libraries['mockup/forms'] = [SHAPES_PATH + '/mockup/mxMockupForms.js'];
	mxStencilRegistry.libraries['mockup/graphics'] = [SHAPES_PATH + '/mockup/mxMockupGraphics.js', STENCIL_PATH + '/mockup/misc.xml'];
	mxStencilRegistry.libraries['mockup/markup'] = [SHAPES_PATH + '/mockup/mxMockupMarkup.js'];
	mxStencilRegistry.libraries['mockup/misc'] = [SHAPES_PATH + '/mockup/mxMockupMisc.js', STENCIL_PATH + '/mockup/misc.xml'];
	mxStencilRegistry.libraries['mockup/navigation'] = [SHAPES_PATH + '/mockup/mxMockupNavigation.js', STENCIL_PATH + '/mockup/misc.xml'];
	mxStencilRegistry.libraries['mockup/text'] = [SHAPES_PATH + '/mockup/mxMockupText.js'];
	
	/**
	 * Toggle palette.
	 */
	Sidebar.prototype.togglePalettes = function(prefix, ids)
	{
		for (var i = 0; i < ids.length; i++)
		{
			this.togglePalette(prefix + ids[i]);
		}
	};

	/**
	 * Toggle palette.
	 */
	Sidebar.prototype.togglePalette = function(id)
	{
		var elts = this.palettes[id];
		
		if (elts != null)
		{
			var vis = (elts[0].style.display == 'none') ? 'block' : 'none';
			
			for (var i = 0; i < elts.length; i++)
			{
				elts[i].style.display = vis;
			}
		}
	};

	// Replaces the sidebar
	Sidebar.prototype.init = function()
	{
		var imgDir = GRAPH_IMAGE_PATH;
		var dir = STENCIL_PATH;
		var signs = this.signs;
		var mockups = this.mockups;
		var ee = this.ee;
		var pids = this.pids;
		var cisco = this.cisco;

		this.addGeneralPalette(true);
		this.addIconfinder();
		this.addMoreShapes();
		this.addUmlPalette(false);
		this.addErPalette();
		this.addIosPalette();
		this.addStencilPalette('flowchart', 'Flowchart', dir + '/flowchart.xml',
		';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
		this.addMockups();
		this.addBpmnPalette(dir, false);
		this.addStencilPalette('basic', mxResources.get('basic'), dir + '/basic.xml',
			';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
		this.addStencilPalette('arrows', mxResources.get('arrows'), dir + '/arrows.xml',
			';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
		this.addImagePalette('computer', 'Clipart / Computer', imgDir
				+ '/lib/clip_art/computers/', '_128x128.png', [ 'Antivirus',
				'Data_Filtering', 'Database', 'Database_Add', 'Database_Minus',
				'Database_Move_Stack', 'Database_Remove', 'Fujitsu_Tablet',
				'Harddrive', 'IBM_Tablet', 'iMac', 'iPad', 'Laptop', 'MacBook',
				'Mainframe', 'Monitor', 'Monitor_Tower',
				'Monitor_Tower_Behind', 'Netbook', 'Network', 'Network_2',
				'Printer', 'Printer_Commercial', 'Secure_System', 'Server',
				'Server_Rack', 'Server_Rack_Empty', 'Server_Rack_Partial',
				'Server_Tower', 'Software', 'Stylus', 'Touch', 'USB_Hub',
				'Virtual_Application', 'Virtual_Machine', 'Virus',
				'Workstation' ], [ 'Antivirus', 'Data Filtering', 'Database',
	            'Database Add', 'Database Minus', 'Database Move Stack',
	            'Database Remove', 'Fujitsu Tablet', 'Harddrive', 'IBMTablet',
	            'iMac', 'iPad', 'Laptop', 'MacBook', 'Mainframe', 'Monitor',
	            'Monitor Tower', 'Monitor Tower Behind', 'Netbook', 'Network',
	            'Network 2', 'Printer', 'Printer Commercial', 'Secure System',
	            'Server', 'Server Rack', 'Server Rack Empty', 'Server Rack Partial',
	            'Server Tower', 'Software', 'Stylus', 'Touch', 'USB Hub',
	            'Virtual Application', 'Virtual Machine', 'Virus', 'Workstation' ]);
		this.addImagePalette('finance', 'Clipart / Finance', imgDir
				+ '/lib/clip_art/finance/', '_128x128.png', [ 'Arrow_Down',
				'Arrow_Up', 'Coins', 'Credit_Card', 'Dollar', 'Graph',
				'Pie_Chart', 'Piggy_Bank', 'Safe', 'Shopping_Cart',
				'Stock_Down', 'Stock_Up' ], [ 'Arrow_Down', 'Arrow Up',
	            'Coins', 'Credit Card', 'Dollar', 'Graph', 'Pie Chart',
	            'Piggy Bank', 'Safe', 'Shopping Basket', 'Stock Down', 'Stock Up' ]);
		this.addImagePalette('clipart', 'Clipart / Various', imgDir
				+ '/lib/clip_art/general/', '_128x128.png', [ 'Battery_0',
				'Battery_100', 'Battery_50', 'Battery_75', 'Battery_allstates',
				'Bluetooth', 'Earth_globe', 'Empty_Folder', 'Full_Folder',
				'Gear', 'Keys', 'Lock', 'Mouse_Pointer', 'Plug', 'Ships_Wheel',
				'Star', 'Tire' ], [ 'Battery 0%', 'Battery 100%', 'Battery 50%',
	            'Battery 75%', 'Battery', 'Bluetooth', 'Globe',
	            'Empty Folder', 'Full Folder', 'Gear', 'Keys', 'Lock', 'Mousepointer',
	            'Plug', 'Ships Wheel', 'Star', 'Tire' ] );
		this.addImagePalette('networking', 'Clipart / Networking', imgDir
				+ '/lib/clip_art/networking/', '_128x128.png', [ 'Bridge',
				'Certificate', 'Certificate_Off', 'Cloud', 'Cloud_Computer',
				'Cloud_Computer_Private', 'Cloud_Rack', 'Cloud_Rack_Private',
				'Cloud_Server', 'Cloud_Server_Private', 'Cloud_Storage',
				'Concentrator', 'Email', 'Firewall_02', 'Firewall',
				'Firewall-page1', 'Ip_Camera', 'Modem',
				'power_distribution_unit', 'Print_Server',
				'Print_Server_Wireless', 'Repeater', 'Router', 'Router_Icon',
				'Switch', 'UPS', 'Wireless_Router', 'Wireless_Router_N' ],
				[ 'Bridge', 'Certificate', 'Certificate Off', 'Cloud', 'Cloud Computer',
				'Cloud Computer Private', 'Cloud Rack', 'Cloud Rack Private',
				'Cloud Server', 'Cloud Server Private', 'Cloud Storage',
				'Concentrator', 'Email', 'Firewall 1', 'Firewall 2',
				'Firewall', 'Camera', 'Modem',
				'Power Distribution Unit', 'Print Server',
				'Print Server Wireless', 'Repeater', 'Router', 'Router Icon',
				'Switch', 'UPS', 'Wireless Router', 'Wireless Router N' ]);
		this.addImagePalette('people', 'Clipart / People', imgDir
				+ '/lib/clip_art/people/', '_128x128.png', [ 'Suit_Man',
				'Suit_Man_Black', 'Suit_Man_Blue', 'Suit_Man_Green',
				'Suit_Man_Green_Black', 'Suit_Woman', 'Suit_Woman_Black',
				'Suit_Woman_Blue', 'Suit_Woman_Green',
				'Suit_Woman_Green_Black', 'Construction_Worker_Man',
				'Construction_Worker_Man_Black', 'Construction_Worker_Woman',
				'Construction_Worker_Woman_Black', 'Doctor_Man',
				'Doctor_Man_Black', 'Doctor_Woman', 'Doctor_Woman_Black',
				'Farmer_Man', 'Farmer_Man_Black', 'Farmer_Woman',
				'Farmer_Woman_Black', 'Nurse_Man', 'Nurse_Man_Black',
				'Nurse_Man_Green', 'Nurse_Man_Red', 'Nurse_Woman',
				'Nurse_Woman_Black', 'Nurse_Woman_Green', 'Nurse_Woman_Red',
				'Military_Officer', 'Military_Officer_Black',
				'Military_Officer_Woman', 'Military_Officer_Woman_Black',
				'Pilot_Man', 'Pilot_Man_Black', 'Pilot_Woman',
				'Pilot_Woman_Black', 'Scientist_Man', 'Scientist_Man_Black',
				'Scientist_Woman', 'Scientist_Woman_Black', 'Security_Man',
				'Security_Man_Black', 'Security_Woman', 'Security_Woman_Black',
				'Soldier', 'Soldier_Black', 'Tech_Man', 'Tech_Man_Black',
				'Telesales_Man', 'Telesales_Man_Black', 'Telesales_Woman',
				'Telesales_Woman_Black', 'Waiter', 'Waiter_Black',
				'Waiter_Woman', 'Waiter_Woman_Black', 'Worker_Black',
				'Worker_Man', 'Worker_Woman', 'Worker_Woman_Black' ]);
		this.addImagePalette('telco', 'Clipart / Telecommunication', imgDir
				+ '/lib/clip_art/telecommunication/', '_128x128.png', [
				'BlackBerry', 'Cellphone', 'HTC_smartphone', 'iPhone',
				'Palm_Treo', 'Signal_tower_off', 'Signal_tower_on' ],
				[ 'BlackBerry', 'Cellphone', 'HTC smartphone', 'iPhone',
				  'Palm Treo', 'Signaltower off', 'Signaltower on' ]);

		for (var i = 0; i < signs.length; i++)
		{
			this.addStencilPalette('signs' + signs[i], 'Signs / ' + signs[i],
				dir + '/signs/' + signs[i].toLowerCase() + '.xml',
				';fillColor=#000000;strokeColor=none');
		}
		
		for (var i = 0; i < ee.length; i++)
		{
			this.addStencilPalette('electrical' + ee[i], 'Electrical / ' + ee[i],
				dir + '/electrical/' + ee[i].toLowerCase().replace(/ /g, '_') + '.xml',
				';fillColor=white;strokeColor=black');
		}

		// Adds AWS stencils
		this.addStencilPalette('awsCompute', 'AWS / Compute', dir + '/aws/compute.xml', ';fillColor=#FF9800;strokeColor=none');
		this.addStencilPalette('awsContentDelivery', 'AWS / Content Delivery', dir + '/aws/content_delivery.xml', ';fillColor=#1EA4DD;strokeColor=none');
		this.addStencilPalette('awsDatabase', 'AWS / Database', dir + '/aws/database.xml', ';fillColor=#6F2D6E;strokeColor=none');
		this.addStencilPalette('awsDeploymentManagement', 'AWS / Deployment Management', dir + '/aws/deployment_management.xml', ';fillColor=#296934;strokeColor=none');
		this.addStencilPalette('awsGroups', 'AWS / Groups', dir + '/aws/groups.xml');
		this.addStencilPalette('awsMessaging', 'AWS / Messaging', dir + '/aws/messaging.xml', ';fillColor=#B8B58A;strokeColor=none');
		this.addStencilPalette('awsMisc', 'AWS / Misc', dir + '/aws/misc.xml', ';fillColor=#F7981F;strokeColor=none');
		this.addStencilPalette('awsNetworking', 'AWS / Networking', dir + '/aws/networking.xml', ';fillColor=#262261;strokeColor=none');
		this.addStencilPalette('awsNonServiceSpecific', 'AWS / Non Service Specific', dir + '/aws/non_service_specific.xml', ';fillColor=#C5C7C9;strokeColor=none');
		this.addStencilPalette('awsOnDemandWorkforce', 'AWS / On Demand Workforce', dir + '/aws/on_demand_workforce.xml', ';fillColor=#C5C7C9;strokeColor=none');
		this.addStencilPalette('awsStorage', 'AWS / Storage', dir + '/aws/storage.xml', ';fillColor=#146EB4;strokeColor=none');

		for (var i = 0; i < pids.length; i++)
		{
			this.addStencilPalette('pid' + pids[i], 'P&ID / ' + pids[i],
				dir + '/pid/' + pids[i].toLowerCase().replace(' ', '_') + '.xml',
				';fillColor=#ffffff;strokeColor=#000000');
		}
		
		this.addStencilPalette('leanMapping', 'Lean Mapping', dir + '/lean_mapping.xml',
			';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');
			
		for (var i = 0; i < cisco.length; i++)
		{
			this.addStencilPalette('cisco' + cisco[i], 'Cisco / ' + cisco[i],
				dir + '/cisco/' + cisco[i].toLowerCase().replace(/ /g, '_') + '.xml',
				';fillColor=#036897;strokeColor=#ffffff;strokeWidth=2', null, null, 1.6);
		}
	};
	
	// Adds the more shapes entry
	Sidebar.prototype.addMoreShapes = function()
	{
		var elt = this.createTitle(mxResources.get('moreShapes') + '...');
		this.container.appendChild(elt);
		
		// Block handling as link in IE
		mxEvent.addListener(elt, 'click', function(evt)
		{
			mxEvent.consume(evt);
		});
		
		this.moreShapes = elt;
 	};
 	
	// Adds the iconfinder library
	Sidebar.prototype.addIconfinder = function()
	{
		// TODO: Fix delayed typing, occasional error in library creation in
		// quirks mode
		var elt = this.createTitle(mxResources.get('images'));
		this.container.appendChild(elt);
		
		var div = document.createElement('div');
		div.className = 'geSidebar';
	    div.style.display = 'none';
		div.style.overflow = 'hidden';
		div.style.width = '100%';
		div.style.padding = '0px';
		
		var inner = document.createElement('div');
		inner.className = 'geTitle';
		inner.style.backgroundColor = 'transparent';
		inner.style.borderColor = 'transparent';
		inner.style.padding = '4px';
		inner.style.textOverflow = 'clip';
		inner.style.cursor = 'default';
		
		if (!mxClient.IS_VML)
		{
			inner.style.paddingRight = '20px';
		}

		var searchResource = mxResources.get('search');
		
		var input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.value = searchResource;
		input.style.border = 'solid 1px #d5d5d5';
		input.style.width = '100%';
		input.style.backgroundImage = 'url(' + IMAGE_PATH + '/clear.gif)';
		input.style.backgroundRepeat = 'no-repeat';
		input.style.backgroundPosition = '100% 50%';
		input.style.paddingRight = '14px';
		inner.appendChild(input);

		var cross = document.createElement('div');
		cross.setAttribute('title', mxResources.get('reset'));
		cross.style.position = 'relative';
		cross.style.left = '-16px';
		cross.style.width = '12px';
		cross.style.height = '14px';
		cross.style.cursor = 'pointer';

		// Workaround for inline-block not supported in IE
		cross.style.display = (mxClient.IS_VML) ? 'inline' : 'inline-block';
		cross.style.top = ((mxClient.IS_VML) ? 0 : 3) + 'px';
		
		// Needed to block event transparency in IE
		cross.style.background = 'url(' + IMAGE_PATH + '/transparent.gif)';
		
		var find;

		mxEvent.addListener(cross, 'click', function()
		{
			input.value = '';
			find();
			input.focus();
		});
		
		inner.appendChild(cross);
		div.appendChild(inner);

		var center = document.createElement('center');
		var button = mxUtils.button(searchResource, function()
		{
			find();
		});
		button.setAttribute('disabled', 'true');
		// Workaround for inherited line-height in quirks mode
		button.style.lineHeight = 'normal';
		center.style.paddingTop = '4px';
		center.style.marginBottom = '12px';
		
		center.appendChild(button);
		div.appendChild(center);
		
		var searchTerm = '';
		var modified = false;
		var active = false;
		var complete = false;
		var page = 0;
		var count = 25;
		
		function clearDiv()
		{
			var child = div.firstChild;
			
			while (child != null)
			{
				var next = child.nextSibling;
				
				if (child != inner && child != center)
				{
					child.parentNode.removeChild(child);
				}
				
				child = next;
			}
		};
		
		find = mxUtils.bind(this, function(callback)
		{
			if (input.value != '' || (!modified && input.value == searchResource))
			{
				if (button.getAttribute('disabled') != 'true')
				{
					if (center.parentNode != null)
					{
						if (searchTerm != input.value)
						{
							clearDiv();
							searchTerm = input.value;
							complete = false;
							page = 0;
						}
						
						if (!active)
						{
							button.style.cursor = 'wait';
							button.innerHTML = mxResources.get('loading') + '...';
							active = true;
							mxUtils.get(ICONFINDER_PATH + '?q=' + encodeURIComponent(searchTerm) + '&c=' + count +
									'&p=' + page, mxUtils.bind(this, function(req)
							{
								active = false;
								page++;
								center.parentNode.removeChild(center);
								var icons = req.getXml().getElementsByTagName('icon');
								
								for (var i = 0; i < icons.length; i++)
								{
									var size = null;
									var url = null;
									var child = icons[i].firstChild;
									
									while (child != null && (size == null || url == null))
									{
										if (child.nodeName == 'size')
										{
											size = parseInt(mxUtils.getTextContent(child));
										}
										else if (child.nodeName == 'image')
										{
											url = mxUtils.getTextContent(child);
										}
		
										child = child.nextSibling;
									}
									
									if (size != null && url != null)
									{
										div.appendChild(this.createVertexTemplate('shape=image;image=' + url, size, size, ''));
									}
								}
								
								if (icons.length < count)
								{
									button.setAttribute('disabled', 'true');
									button.innerHTML = mxResources.get('noMoreResults');
									complete = true;
								}
								else
								{
									button.innerHTML = mxResources.get('moreResults');
								}
								
								button.style.cursor = '';
								
								if (icons.length == 0 && page == 1)
								{
									var err = document.createElement('div');
									err.className = 'geTitle';
									err.style.backgroundColor = 'transparent';
									err.style.borderColor = 'transparent';
									err.style.padding = '4px';
									err.style.textAlign = 'center';
									err.style.cursor = 'default';
									
									mxUtils.write(err, mxResources.get('noResultsFor', [searchTerm]));
									div.appendChild(err);
								}
								
								div.appendChild(center);
							},
							function()
							{
								button.style.cursor = '';
							}));
						}
					}
				}
			}
			else
			{
				clearDiv();
				searchTerm = '';
				button.innerHTML = searchResource;
				button.setAttribute('disabled', 'true');
			}
		});
		
		mxEvent.addListener(input, 'keydown', mxUtils.bind(this, function(evt)
		{
			if (evt.keyCode == 13 /* Enter */)
			{
				find();
			}
		}));
		
		mxEvent.addListener(input, 'keyup', mxUtils.bind(this, function(evt)
		{
			modified = true;
			
			if (input.value == '' || (!modified && input.value == searchResource))
			{
				button.setAttribute('disabled', 'true');
			}
			else if (input.value != searchTerm)
			{
				button.removeAttribute('disabled');
				button.innerHTML = searchResource;
			}
			else if (!active)
			{
				if (complete)
				{
					button.setAttribute('disabled', 'true');
					button.innerHTML = mxResources.get('noMoreResults');
				}
				else
				{
					button.removeAttribute('disabled');
					button.innerHTML = mxResources.get('moreResults');
				}
			}
		}));
		
		mxEvent.addListener(input, 'focus', mxUtils.bind(this, function(evt)
		{
			if (input.value == searchResource && !modified)
			{
				input.value = '';
			}
		}));
		
		mxEvent.addListener(input, 'blur', mxUtils.bind(this, function(evt)
		{
			if (input.value == '')
			{
				input.value = searchResource;
				modified = false;
			}
		}));
	    
	    // Workaround for blocked text selection in Editor
	    mxEvent.addListener(input, 'mousedown', function(evt)
	    {
	    	if (evt.stopPropagation)
	    	{
	    		evt.stopPropagation();
	    	}
	    	
	    	evt.cancelBubble = true;
	    });
	    
	    // Workaround for blocked text selection in Editor
	    mxEvent.addListener(input, 'selectstart', function(evt)
	    {
	    	if (evt.stopPropagation)
	    	{
	    		evt.stopPropagation();
	    	}
	    	
	    	evt.cancelBubble = true;
	    });
	    
		this.addFoldingHandler(elt, div, function()
		{
			// not lazy
		}, false);
	    
		var outer = document.createElement('div');
	    outer.appendChild(div);
	    this.container.appendChild(outer);
		
	    // Keeps references to the DOM nodes
    	this.palettes['images'] = [elt, outer];
 	};
 	
	// Adds BPMN shapes
	var sidebarAddBpmnPalette = Sidebar.prototype.addBpmnPalette;
	
	Sidebar.prototype.addBpmnPalette = function(dir, expand)
	{
		sidebarAddBpmnPalette.apply(this, arguments);

		var w = 50;
		var h = 50;

		this.addPalette('bpmnGateways', 'BPMN Gateways', false, mxUtils.bind(this, function(content)
		{
			var s = 'shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=rhombusPerimeter;background=gateway;';
			
			content.appendChild(this.createVertexTemplate(s + 'outline=none;symbol=exclusiveGw;', w, h, '', 'Exclusive Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=none;symbol=parallelGw;', w, h, '', 'Parallel Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=general;', w, h, '', 'Inclusive Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=none;symbol=complexGw;', w, h, '', 'Complex Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=general;', w, h, '', 'General Start Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=general;', w, h, '', 'General Intermediate Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=general;', w, h, '', 'General End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=message;', w, h, '', 'Message Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=message;', w, h, '', 'Message Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=message;', w, h, '', 'Message Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=message;', w, h, '', 'Message Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=message;', w, h, '', 'Message Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=message;', w, h, '', 'Message Boundary Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=message;', w, h, '', 'Message Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=message;', w, h, '', 'Message End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=timer;', w, h, '', 'Timer Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=timer;', w, h, '', 'Timer Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=timer;', w, h, '', 'Timer Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=timer;', w, h, '', 'Timer Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=timer;', w, h, '', 'Timer Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=timer;', w, h, '', 'Timer Boundary Non-Interrupting Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=escalation;', w, h, '', 'Escalation Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=escalation;', w, h, '', 'Escalation Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=escalation;', w, h, '', 'Escalation Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=escalation;', w, h, '', 'Escalation Boundary Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=escalation;', w, h, '', 'Escalation Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=escalation;', w, h, '', 'Escalation End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=conditional;', w, h, '', 'Conditional Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=conditional;', w, h, '', 'Conditional Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=conditional;', w, h, '', 'Conditional Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=conditional;', w, h, '', 'Conditional Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=conditional;', w, h, '', 'Conditional Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=conditional;', w, h, '', 'Conditional Boundary Non-Interrupting Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=link;', w, h, '', 'Link Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=link;', w, h, '', 'Link Throwing Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=error;', w, h, '', 'Error Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=error;', w, h, '', 'Error Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=error;', w, h, '', 'Error End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=cancel;', w, h, '', 'Cancel Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=cancel;', w, h, '', 'Cancel End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=compensation;', w, h, '', 'Compensation Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=compensation;', w, h, '', 'Compensation Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=compensation;', w, h, '', 'Compensation Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=compensation;', w, h, '', 'Compensation End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=signal;', w, h, '', 'Signal Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=signal;', w, h, '', 'Signal Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=signal;', w, h, '', 'Signal Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=signal;', w, h, '', 'Signal Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=signal;', w, h, '', 'Signal Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=signal;', w, h, '', 'Signal Boundary Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=signal;', w, h, '', 'Signal Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=signal;', w, h, '', 'Signal End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=multiple;', w, h, '', 'Multiple Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=multiple;', w, h, '', 'Multiple Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=multiple;', w, h, '', 'Multiple Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=multiple;', w, h, '', 'Multiple Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=multiple;', w, h, '', 'Multiple Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=multiple;', w, h, '', 'Multiple Boundary Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=multiple;', w, h, '', 'Multiple Throwing Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=multiple;', w, h, '', 'Multiple End Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Standard Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Non-Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Catching Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Boundary Interrupting Gateway', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Boundary Non-Interrupting Gateway', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=terminate;', w, h, '', 'Terminate Gateway', false));
		}));
		
		this.addPalette('bpmnEvents', 'BPMN Events', false, mxUtils.bind(this, function(content)
		{
			var s = 'shape=mxgraph.bpmn.shape;verticalLabelPosition=bottom;verticalAlign=top;perimeter=ellipsePerimeter;';

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=general;', w, h, '', 'General Start', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=general;', w, h, '', 'General Intermediate', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=general;', w, h, '', 'General End', false));
			
			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=message;', w, h, '', 'Message Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=message;', w, h, '', 'Message Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=message;', w, h, '', 'Message Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=message;', w, h, '', 'Message Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=message;', w, h, '', 'Message Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=message;', w, h, '', 'Message Boundary Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=message;', w, h, '', 'Message Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=message;', w, h, '', 'Message End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=timer;', w, h, '', 'Timer Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=timer;', w, h, '', 'Timer Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=timer;', w, h, '', 'Timer Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=timer;', w, h, '', 'Timer Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=timer;', w, h, '', 'Timer Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=timer;', w, h, '', 'Timer Boundary Non-Interrupting', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=escalation;', w, h, '', 'Escalation Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=escalation;', w, h, '', 'Escalation Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=escalation;', w, h, '', 'Escalation Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=escalation;', w, h, '', 'Escalation Boundary Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=escalation;', w, h, '', 'Escalation Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=escalation;', w, h, '', 'Escalation End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=conditional;', w, h, '', 'Conditional Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=conditional;', w, h, '', 'Conditional Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=conditional;', w, h, '', 'Conditional Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=conditional;', w, h, '', 'Conditional Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=conditional;', w, h, '', 'Conditional Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=conditional;', w, h, '', 'Conditional Boundary Non-Interrupting', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=link;', w, h, '', 'Link Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=link;', w, h, '', 'Link Throwing', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=error;', w, h, '', 'Error Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=error;', w, h, '', 'Error Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=error;', w, h, '', 'Error End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=cancel;', w, h, '', 'Cancel Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=cancel;', w, h, '', 'Cancel End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=compensation;', w, h, '', 'Compensation Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=compensation;', w, h, '', 'Compensation Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=compensation;', w, h, '', 'Compensation Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=compensation;', w, h, '', 'Compensation End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=signal;', w, h, '', 'Signal Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=signal;', w, h, '', 'Signal Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=signal;', w, h, '', 'Signal Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=signal;', w, h, '', 'Signal Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=signal;', w, h, '', 'Signal Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=signal;', w, h, '', 'Signal Boundary Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=signal;', w, h, '', 'Signal Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=signal;', w, h, '', 'Signal End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=multiple;', w, h, '', 'Multiple Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=multiple;', w, h, '', 'Multiple Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=multiple;', w, h, '', 'Multiple Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=multiple;', w, h, '', 'Multiple Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=multiple;', w, h, '', 'Multiple Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=multiple;', w, h, '', 'Multiple Boundary Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=throwing;symbol=multiple;', w, h, '', 'Multiple Throwing', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=multiple;', w, h, '', 'Multiple End', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=standard;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Standard', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventInt;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=eventNonint;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Non-Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=catching;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Catching', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundInt;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Boundary Interrupting', false));
			content.appendChild(this.createVertexTemplate(s + 'outline=boundNonint;symbol=parallelMultiple;', w, h, '', 'Parallel Multiple Boundary Non-Interrupting', false));

			content.appendChild(this.createVertexTemplate(s + 'outline=end;symbol=terminate;', w, h, '', 'Terminate', false));
		}));
	};
	
	// Adds ER shapes
	Sidebar.prototype.addErPalette = function()
	{
		var w = 100;
		var h = 100;

		this.addPalette('er', mxResources.get('entityRelation'), false, mxUtils.bind(this, function(content)
		{
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;';
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.attribute;buttonText=Attribute;textColor=#000000;fontSize=17;buttonStyle=dblFrame;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;', w, h, '', 'Attribute', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.bachmans;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;', w * 3, h * 2, '', 'ERD Bachman\'s Notation', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.chens;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;', w * 3, h, '', 'ERD Chen\'s Notation', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.cloud;buttonText=Cloud;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;', w, h, '', 'Cloud', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.entity;buttonStyle=round;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;buttonText=Entity1;', w, h, '', 'Entity', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.entity;buttonStyle=rect;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;buttonText=Entity1;', w, h, '', 'Entity', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.entity;buttonStyle=dblFrame;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;buttonText=Entity1;', w, h, '', 'Entity', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.entityExt;buttonText=Entity;' + mxConstants.STYLE_FILLCOLOR + '=#008cff;fillColor2=#ffffff;' + mxConstants.STYLE_FONTSIZE + '=17;subText=+ attribute 1,+ attribute 2,+ attribute 3;', w, h, '', 'Entity Extended', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.ie;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;', w * 3.5, h * 1.2, '', 'ERD Information Engineering Notation', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.has;buttonText=Has;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;buttonStyle=rhombus;', w, h, '', 'Has', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.hierarchy;buttonText=main;subText=sub;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;buttonStyle=round;', w, h, '', 'Hierarchy', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.er.note;buttonText=Note;textColor=#000000;' + mxConstants.STYLE_FONTSIZE + '=17;fillColor2=#ffffff;', w, h, '', 'Note', false));

			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERzeroToMany;endFill=1;', w, h, '', '0 to many optional', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', '1 to many', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERmandOne;', w, h, '', '1 mandatory', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERmandOne;' + mxConstants.STYLE_ENDARROW + '=ERmandOne;', w, h, '', '1 to 1', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERone;endFill=1;', w, h, '', '1', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERzeroToOne;endFill=1;', w, h, '', '0 to 1', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_ENDARROW + '=ERmany;endFill=1;', w, h, '', 'Many', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERmany;' + mxConstants.STYLE_ENDARROW + '=ERmany;', w, h, '', 'Many to many', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERzeroToOne;' + mxConstants.STYLE_ENDARROW + '=ERzeroToMany;', w, h, '', '1 optional to many optional', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERmandOne;' + mxConstants.STYLE_ENDARROW + '=ERzeroToMany;', w, h, '', '1 mandatory to many optional', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERmandOne;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', '1 mandatory to many mandatory', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERzeroToOne;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', '1 optional to many mandatory', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERoneToMany;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', 'Many mandatory to many mandatory', false));
			content.appendChild(this.createEdgeTemplate('edgeStyle=none;' + mxConstants.STYLE_STARTARROW + '=ERzeroToMany;' + mxConstants.STYLE_ENDARROW + '=ERoneToMany;', w, h, '', 'Many optional to many mandatory', false));
		}));
	};
	
	// Adds iOS shapes
	Sidebar.prototype.addIosPalette = function()
	{
		mxResources.parse('ios=iOS');
		mxResources.parse('mxgraph.ios.iAddIcon=Add Icon');
		mxResources.parse('mxgraph.ios.iAlertBox=Alert Box');
		mxResources.parse('mxgraph.ios.iAlphaList=Alpha List');
		mxResources.parse('mxgraph.ios.iAppBar=App Bar');
		mxResources.parse('mxgraph.ios.iArrowIcon=Arrow Icon');
		mxResources.parse('mxgraph.ios.iBgFlat=Flat Colored Background');
		mxResources.parse('mxgraph.ios.iBgMap=Map Background');
		mxResources.parse('mxgraph.ios.iBgStriped=Striped Background');
		mxResources.parse('mxgraph.ios.iButton=Button');
		mxResources.parse('mxgraph.ios.iButtonBack=Back Button');
		mxResources.parse('mxgraph.ios.iButtonFw=Forward Button');
		mxResources.parse('mxgraph.ios.iButtonBar=Button Bar');
		mxResources.parse('mxgraph.ios.iCallButtons=Call Buttons');
		mxResources.parse('mxgraph.ios.iCallDialog=Call Dialog');
		mxResources.parse('mxgraph.ios.iCheckboxGroup=Checkbox Group');
		mxResources.parse('mxgraph.ios.iCheckIcon=Check Icon');
		mxResources.parse('mxgraph.ios.iCloudProgressBar=Cloud Progress Bar');
		mxResources.parse('mxgraph.ios.iComboBox=Combo Box');
		mxResources.parse('mxgraph.ios.iCopy=Copy');
		mxResources.parse('mxgraph.ios.iCopyArea=Copy Area');
		mxResources.parse('mxgraph.ios.iIconGrid=Icon Grid');
		mxResources.parse('mxgraph.ios.iDeleteApp=Delete App');
		mxResources.parse('mxgraph.ios.iDeleteIcon=Delete Icon');
		mxResources.parse('mxgraph.ios.iDownloadBar=Download Bar');
		mxResources.parse('mxgraph.ios.iDialogBox=Dialog Box');
		mxResources.parse('mxgraph.ios.iDir=Direction');
		mxResources.parse('mxgraph.ios.iHomePageControl=Home Page Control');
		mxResources.parse('mxgraph.ios.iKeybLett=Keyboard (letters)');
		mxResources.parse('mxgraph.ios.iKeybNumb=Keyboard (numbers)');
		mxResources.parse('mxgraph.ios.iKeybSymb=Keyboard (symbols)');
		mxResources.parse('mxgraph.ios.iLocBar=Location Bar');
		mxResources.parse('mxgraph.ios.iLockButton=Lock Button');
		mxResources.parse('mxgraph.ios.iHorButtonBar=Horizontal Button Bar');
		mxResources.parse('mxgraph.ios.iInfoIcon=Info Icon');
		mxResources.parse('mxgraph.ios.iOnOffButton=On/Off Button');
		mxResources.parse('mxgraph.ios.iOption=Option');
		mxResources.parse('mxgraph.ios.iPageControl=Page Control');
		mxResources.parse('mxgraph.ios.iPad=iPad');
		mxResources.parse('mxgraph.ios.iPhone=iPhone');
		mxResources.parse('mxgraph.ios.iPin=Pin');
		mxResources.parse('mxgraph.ios.iPrevNext=Prev/Next');
		mxResources.parse('mxgraph.ios.iProgressBar=Progress Bar');
		mxResources.parse('mxgraph.ios.iRadioGroup=Radio Group');
		mxResources.parse('mxgraph.ios.iSlider=Slider');
		mxResources.parse('mxgraph.ios.iSortFindIcon=Sort/Find Icon');
		mxResources.parse('mxgraph.ios.iTextInput=Text Input');
		mxResources.parse('mxgraph.ios.iTopBar=Top Bar');
		mxResources.parse('mxgraph.ios.iTopBarLocked=Top Bar Locked');
		mxResources.parse('mxgraph.ios.iURLBar=URL Bar');
		mxResources.parse('mxgraph.ios.iVideoControls=Video Controls');
			
		this.addPalette('ios', 'iOS', false, mxUtils.bind(this, function(content)
		{
			var sizeX = 200; //reference size for iPhone and all other iOS shapes
			
			var sizeY = 2 * sizeX; //change only sizeX, to avoid changing aspect ratio
			
			var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;';

			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPhone;bgStyle=bgGreen;' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeX, sizeY, '', 'iPhone (portrait)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPhone;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';bgStyle=bgGreen;' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeY, sizeX, '', 'iPhone (landscape)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPad;bgStyle=bgGreen;' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeX * 2.425, sizeY * 1.5625, '', 'iPad (portrait)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPad;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';bgStyle=bgGreen;' + mxConstants.STYLE_FILLCOLOR + '=#aaaaaa;', sizeY * 1.5625, sizeX * 2.425, '', 'iPad (landscape)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgFlat;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (white)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgFlat;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#1f2923', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (green)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgFlat;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (gray)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgStriped;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#5D7585;strokeColor2=#657E8F;', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (striped)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iBgMap;' + mxConstants.STYLE_STROKECOLOR + '=#18211b;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;strokeColor2=#008cff;fillColor2=#96D1FF;', sizeX * 0.875, sizeY * 0.7, '', 'iPad background (map)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iButtonBar;' + mxConstants.STYLE_STROKECOLOR + '=#444444;strokeColor2=#c4c4c4;' + mxConstants.STYLE_FONTCOLOR + '=#666666;fillColor2=#ffffff;buttonText=+Item 1,+Item 2,Item 3,Item 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.825, sizeY * 0.125, '', 'Button bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAppBar;', sizeX * 0.87, sizeY * 0.0375, '', 'App bar (portrait)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAppBar;', sizeX * 1.395, sizeY * 0.0375, '', 'App bar (landscape)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iTopBar;', sizeX * 0.87, sizeY * 0.0375, '', 'Top bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iTopBarLocked;', sizeX * 0.87, sizeY * 0.0375, '', 'Top bar locked', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iButton;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#ffffff;buttonText=Button;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iButtonBack;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#ffffff;buttonText=Button;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Back button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iButtonFw;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#ffffff;buttonText=Button;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Forward button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPrevNext;' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;fillColor3=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Prev/next button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iTextInput;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#000000;buttonText=Default text;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Text input', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iRadioGroup;' + mxConstants.STYLE_STROKECOLOR + '=#666666;textColor2=#666666;buttonText=Option 1,Option 2,+Option 3,Option 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.825, sizeY * 0.125, '', 'Radiobuttons', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCheckboxGroup;' + mxConstants.STYLE_STROKECOLOR + '=#666666;textColor2=#666666;buttonText=Setting 1,Setting 2,+Setting 3,Setting 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.825, sizeY * 0.125, '', 'Checkboxes', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iComboBox;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#666666;buttonText=Option 1;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#dddddd;fillColor2=#3D5565;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.29, sizeY * 0.0375, '', 'Combobox', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iOnOffButton;' + mxConstants.STYLE_STROKECOLOR + '=#444444;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;buttonState=on', sizeX * 0.2175, sizeY * 0.0375, '', 'On-off button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iTextInput;' + mxConstants.STYLE_STROKECOLOR + '=#444444;textColor2=#000000;buttonText=********;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.2175, sizeY * 0.0375, '', 'Password field', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAlertBox;buttonText=Something happened,Button text,Alert description text,description text second line;', sizeX * 0.75, sizeY * 0.25, '', 'Alert box', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDialogBox;buttonText=Something happened,Cancel,OK,Alert description text,description text second line;', sizeX * 0.75, sizeY * 0.25, '', 'Dialog box', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iLockButton;', sizeX * 0.87, sizeY * 0.125, '', 'Lock button', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iArrowIcon;' + mxConstants.STYLE_FILLCOLOR + '=#8BbEff;fillColor2=#135Ec8;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Arrow', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDeleteIcon;' + mxConstants.STYLE_FILLCOLOR + '=#e8878E;fillColor2=#BD1421;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Delete', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAddIcon;' + mxConstants.STYLE_FILLCOLOR + '=#7AdF78;fillColor2=#1A9917;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Add', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iInfoIcon;' + mxConstants.STYLE_FILLCOLOR + '=#8BbEff;fillColor2=#135Ec8;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Info', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iSortFindIcon;' + mxConstants.STYLE_FILLCOLOR + '=#8BbEff;fillColor2=#135Ec8;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Sort/find', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCheckIcon;' + mxConstants.STYLE_FILLCOLOR + '=#e8878E;fillColor2=#BD1421;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Check', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iKeybLett;', sizeX * 0.87, sizeY * 0.25, '', 'Keyboard (letters)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iKeybNumb;', sizeX * 0.87, sizeY * 0.25, '', 'Keyboard (numbers)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iKeybSymb;', sizeX * 0.87, sizeY * 0.25, '', 'Keyboard (symbols)', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDeleteApp;' + mxConstants.STYLE_FILLCOLOR + '=#cccccc;fillColor2=#000000;' + mxConstants.STYLE_STROKECOLOR + '=#ffffff;', sizeX * 0.075, sizeY * 0.0375, '', 'Delete app', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDir;', sizeX * 0.5, sizeY * 0.25, '', 'Direction', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iLocBar;barPos=80;pointerPos=bottom;buttonText=' + '5th Street Music Store', sizeX * 0.775, sizeY * 0.08125, '', 'Location bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCallDialog;', sizeX * 0.75, sizeY * 0.3125, '', 'Call Dialog', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCallButtons;', sizeX * 0.87, sizeY * 0.575, '', 'Call buttons', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iOption;barPos=80;pointerPos=bottom;buttonText=' + 'Option', sizeX * 0.375, sizeY * 0.06875, '', 'Option', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iAlphaList;' + mxConstants.STYLE_FONTSIZE + '=7.5;'+ mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.075, sizeY * 0.5625, '', 'Alphabet list', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iHorButtonBar;' + mxConstants.STYLE_STROKECOLOR + '=#444444;strokeColor2=#c4c4c4;' + mxConstants.STYLE_FONTCOLOR + '=#666666;fillColor2=#ffffff;buttonText=+Item 1,+Item 2,Item 3,Item 4;' + mxConstants.STYLE_FONTSIZE + '=8;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;fillColor2=#008cff', sizeX * 0.825, sizeY * 0.03125, '', 'Horizontal button bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#00dd00;fillColor3=#004400;' + mxConstants.STYLE_STROKECOLOR + '=#006600;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#dd0000;fillColor3=#440000;' + mxConstants.STYLE_STROKECOLOR + '=#660000;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#ccccff;fillColor3=#0000ff;' + mxConstants.STYLE_STROKECOLOR + '=#000066;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#ffff00;fillColor3=#888800;' + mxConstants.STYLE_STROKECOLOR + '=#999900;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPin;fillColor2=#ffa500;fillColor3=#885000;' + mxConstants.STYLE_STROKECOLOR + '=#997000;', sizeX * 0.05, sizeY * 0.0625, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iVideoControls;barPos=10;', sizeX * 0.87, sizeY * 0.125, '', 'Video controls', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iURLBar;buttonText=Page title,http://www.draw.io,Cancel;', sizeX * 0.87, sizeY * 0.075, '', 'URL bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iSlider;barPos=20;', sizeX * 0.75, sizeY * 0.025, '', 'Slider', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iProgressBar;barPos=40;', sizeX * 0.75, sizeY * 0.025, '', 'Progress bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCloudProgressBar;barPos=20;', sizeX * 0.75, sizeY * 0.025, '', 'Cloud progress bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iDownloadBar;buttonText=Downloading 4 of 6' + ';barPos=30;', sizeX * 0.87, sizeY * 0.075, '', 'Download bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iScreenNameBar;fillColor2=#000000;fillColor3=#ffffff;buttonText=Screen Name;textColor=#ffffff', sizeX * 0.87, sizeY * 0.0625, '', 'Screen name bar', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iIconGrid;' + mxConstants.STYLE_FILLCOLOR + '=#ffffff;' + mxConstants.STYLE_STROKECOLOR + '=#000000;gridSize=3,3;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.75, sizeY * 0.375, '', 'Icon grid', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCopy;' + mxConstants.STYLE_FILLCOLOR + '=#000000;' + mxConstants.STYLE_STROKECOLOR + '=#000000;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;buttonText=Copy;textColor=#ffffff;fillColor2=#000000;fillColor3=#ffffff;', sizeX * 0.2, sizeY * 0.06875, '', 'Copy', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iCopyArea;' + mxConstants.STYLE_STROKECOLOR + '=#000000;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;buttonText=Copy;textColor=#ffffff;fillColor2=#000000;fillColor3=#ffffff;', sizeX * 0.3, sizeY * 0.2, '', 'Copy area', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iHomePageControl;' + mxConstants.STYLE_FILLCOLOR + '=#666666;' + mxConstants.STYLE_STROKECOLOR + '=#cccccc;' + mxConstants.STYLE_STROKEWIDTH + '=0.5;', sizeX * 0.25, sizeY * 0.0125, '', 'Home page control', false));
			content.appendChild(this.createVertexTemplate(s + mxConstants.STYLE_SHAPE + '=mxgraph.ios.iPageControl;' + mxConstants.STYLE_FILLCOLOR + '=#666666;' + mxConstants.STYLE_STROKECOLOR + '=#cccccc;', sizeX * 0.25, sizeY * 0.0125, '', 'Page control', false));
		}));
	};
	
	// Adds mockup shapes
	Sidebar.prototype.addMockups = function()
	{
		mxResources.parse('mockupbuttons=mockupButtons');
		mxResources.parse('mxgraph.mockup.buttons.button=Button');
		mxResources.parse('mxgraph.mockup.buttons.multiButton=Button');
		mxResources.parse('mxgraph.mockup.buttons.horButtonBar=Horizontal Button Bar');
		mxResources.parse('mxgraph.mockup.buttons.verButtonBar=Vertical Button Bar');
		mxResources.parse('mxgraph.mockup.buttons.onOffButton=On-Off Button');
		
		mxResources.parse('mockupcontainers=mockupContainers');
		mxResources.parse('mxgraph.mockup.containers.videoPlayer=Video Player');
		mxResources.parse('mxgraph.mockup.containers.accordion=Accordion');
		mxResources.parse('mxgraph.mockup.containers.browserWindow=Browser Window');
		mxResources.parse('mxgraph.mockup.containers.userMale=User, Male');
		mxResources.parse('mxgraph.mockup.containers.userFemale=User, Female');
		mxResources.parse('mxgraph.mockup.containers.group=Group');
		mxResources.parse('mxgraph.mockup.containers.window=Window');
		mxResources.parse('mxgraph.mockup.containers.horTabBar=Horizontal Tab Bar');
		mxResources.parse('mxgraph.mockup.containers.verTabBar=Vertical Tab Bar');
		mxResources.parse('mxgraph.mockup.containers.alertBox=Alert Box');
		
		mxResources.parse('mockupforms=mockupForms');
		mxResources.parse('mxgraph.mockup.forms.checkboxGroup=Checkbox Group');
		mxResources.parse('mxgraph.mockup.forms.radioGroup=Radiobutton Group');
		mxResources.parse('mxgraph.mockup.forms.colorPicker=Color Picker');
		mxResources.parse('mxgraph.mockup.forms.comboBox=Combo Box');
		mxResources.parse('mxgraph.mockup.forms.spinner=Spinner');
		mxResources.parse('mxgraph.mockup.forms.menuBar=Menu Bar');
		mxResources.parse('mxgraph.mockup.forms.horSlider=Horizontal Slider');
		mxResources.parse('mxgraph.mockup.forms.listBox=List Box');
		mxResources.parse('mxgraph.mockup.forms.pwField=Password Field');
		mxResources.parse('mxgraph.mockup.forms.splitter=Splitter');
		mxResources.parse('mxgraph.mockup.forms.wedgeBar=Wedge Bar');
		mxResources.parse('mxgraph.mockup.forms.searchBox=Search Box');
		mxResources.parse('mxgraph.mockup.forms.signIn=Sign In');
		mxResources.parse('mxgraph.mockup.forms.calendar=Calendar');

		mxResources.parse('mockupgraphics=mockupGraphics');
		mxResources.parse('mxgraph.mockup.graphics.barChart=Bar Chart');
		mxResources.parse('mxgraph.mockup.graphics.columnChart=Column Chart');
		mxResources.parse('mxgraph.mockup.graphics.lineChart=Line Chart');
		mxResources.parse('mxgraph.mockup.graphics.pieChart=Pie Chart');
		mxResources.parse('mxgraph.mockup.graphics.iconGrid=Icon Grid');
		mxResources.parse('mxgraph.mockup.graphics.bubbleChart=Bubble Chart');
		mxResources.parse('mxgraph.mockup.graphics.gauge=Gauge');
		mxResources.parse('mxgraph.mockup.graphics.plotChart=Plot Chart');
		mxResources.parse('mxgraph.mockup.graphics.ganttChart=Gantt Chart');

		mxResources.parse('mockupmarkup=mockupMarkup');
		mxResources.parse('mxgraph.mockup.markup.curlyBrace=Curly Brace');
		mxResources.parse('mxgraph.mockup.markup.line=Line');
		mxResources.parse('mxgraph.mockup.markup.scratchOut=Scratch Out');
		mxResources.parse('mxgraph.mockup.markup.redX=Red X');
		
		mxResources.parse('mockupmisc=mockupMisc');
		mxResources.parse('mxgraph.mockup.misc.playbackControls=Playback Controls');
		mxResources.parse('mxgraph.mockup.misc.progressBar=Progress Bar');
		mxResources.parse('mxgraph.mockup.misc.shoppingCart=Shopping Cart');
		mxResources.parse('mxgraph.mockup.misc.rating=Rating');
		mxResources.parse('mxgraph.mockup.misc.mail2=Mail');
		mxResources.parse('mxgraph.mockup.misc.volumeSlider=Volume Slider');
		mxResources.parse('mxgraph.mockup.misc.editIcon=Edit Icon');
		mxResources.parse('mxgraph.mockup.misc.printIcon=Print Icon');
		mxResources.parse('mxgraph.mockup.misc.shareIcon=Share Icon');
		mxResources.parse('mxgraph.mockup.misc.trashcanIcon=Trashcan Icon');
		mxResources.parse('mxgraph.mockup.misc.copyrightIcon=Copyright');
		mxResources.parse('mxgraph.mockup.misc.registeredIcon=Registered');
		mxResources.parse('mxgraph.mockup.misc.volumeIcon=Volume');
		mxResources.parse('mxgraph.mockup.misc.ruler=Ruler');
		mxResources.parse('mxgraph.mockup.misc.revisionTable=Revision Table');
		mxResources.parse('mxgraph.mockup.misc.statusBar=Status Bar');
		mxResources.parse('mxgraph.mockup.misc.pin=Pin');
		
		mxResources.parse('mockupnavigation=mockupNavigation');
		mxResources.parse('mxgraph.mockup.navigation.breadcrumb=Breadcrumb');
		mxResources.parse('mxgraph.mockup.navigation.stepBar=Step Bar');
		mxResources.parse('mxgraph.mockup.navigation.coverFlow=Cover Flow');
		mxResources.parse('mxgraph.mockup.navigation.scrollBar=Scroll Bar');
		mxResources.parse('mxgraph.mockup.navigation.pagination=Pagination');
		mxResources.parse('mxgraph.mockup.navigation.pageControl=Page Control');
		mxResources.parse('mxgraph.mockup.navigation.mapNavigator=Map Navigator');
		
		mxResources.parse('mockuptext=mockupText');
		mxResources.parse('mxgraph.mockup.text.link=Link');
		mxResources.parse('mxgraph.mockup.text.linkBar=Link Bar');
		mxResources.parse('mxgraph.mockup.text.callout=Callout');
		mxResources.parse('mxgraph.mockup.text.stickyNote=Sticky Note');
		mxResources.parse('mxgraph.mockup.text.bulletedList=Bulleted List');
		mxResources.parse('mxgraph.mockup.text.textBox=Text Box');
		mxResources.parse('mxgraph.mockup.text.captcha=Captcha');
		mxResources.parse('mxgraph.mockup.text.alphanumeric=Alphanumeric');

		var s = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=1;' + mxConstants.STYLE_SHAPE;
		// Space savers
		var skcl6 = mxConstants.STYLE_STROKECOLOR + '=#666666;';
		var skcl9 = mxConstants.STYLE_STROKECOLOR + '=#999999;';
		var flclf = mxConstants.STYLE_FILLCOLOR + '=#ffffff;';
		var skclN = mxConstants.STYLE_STROKECOLOR + '=none;';

		this.addPalette('mockupButtons', 'Mockup Buttons', false, mxUtils.bind(this, function(content)
		{
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.buttons.button;' + skcl6 + 'textColor=#ffffff;mainText=Button Text;buttonStyle=round;textSize=17;' + mxConstants.STYLE_FILLCOLOR + '=#008cff',
										150, 50, '', 'Button', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.buttons.multiButton;' + skcl6 + 'textColor=#ffffff;mainText=Main Text;subText=Sub Text;buttonStyle=round;textSize=17;' + mxConstants.STYLE_FILLCOLOR + '=#008cff',
										150, 50, '', 'Multiline Button', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.buttons.horButtonBar;' + skcl6 + 'strokeColor2=#c4c4c4;textColor=#666666;textColor2=#ffffff;mainText=+Button 1,Button 2,Button 3,Button 4;textSize=17;' + flclf + 'fillColor2=#008cff',
										500, 50, '', 'Horizontal Button Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.buttons.verButtonBar;' + skcl6 + 'strokeColor2=#c4c4c4;textColor=#666666;textColor2=#ffffff;mainText=+Button 1,Button 2,Button 3,Button 4;textSize=17;' + flclf + 'fillColor2=#008cff',
										120, 200, '', 'Vertical Button Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.buttons.onOffButton;' + skcl9 + 'buttonState=on;fillColor2=#008cff;textColor=#ffffff,#999999;textSize=17;',
										150, 50, '', 'On-off button', false));
		}));
		
		this.addPalette('mockupContainers', 'Mockup Containers', false, mxUtils.bind(this, function(content)
		{
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.containers.videoPlayer;' + skcl6 + 'strokeColor2=#008cff;strokeColor3=#c4c4c4;textColor=#666666;' + flclf + 'fillColor2=#008cff;barHeight=30;barPos=20;',
										300, 200, '', 'Video Player', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.containers.accordion;' + skcl6 + 'strokeColor2=#c4c4c4;textColor=#666666;textColor2=#ffffff;mainText=Group 1,Group 2,+Group 3,Group 4;textSize=17;' + flclf + 'fillColor2=#008cff',
										100, 220, '', 'Accordion', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.containers.browserWindow;' + skcl6 + 'strokeColor2=#008cff;strokeColor3=#c4c4c4;textColor=#666666;' + flclf,
										550, 380, '', 'Browser Window', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.containers.userMale;' + skcl6 + 'strokeColor2=#008cff;' + flclf,
										100, 100, '', 'User, Male', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.containers.userFemale;' + skcl6 + 'strokeColor2=#008cff;' + flclf,
										100, 100, '', 'User, Female', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.containers.group;' + skcl6 + flclf + 'fillColor2=#008cff;textSize=17;mainText=Group;textColor=#ffffff;',
										150, 200, '', 'Group', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.containers.window;strokeColor2=#008cff;strokeColor3=#c4c4c4;textColor=#666666;' + flclf + 'mainText=Window Title;textSize=17;',
										550, 380, '', 'Window', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.containers.horTabBar;' + skcl6 + 'fillColor2=#008cff;textColor=#666666;textColor2=#ffffff;' + flclf + 'tabs=Tab 1,+Tab 2,Tab 3;textSize=17;tabStyle=block;',
										400, 200, '', 'Horizontal Tab Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.containers.verTabBar;' + skcl6 + 'fillColor2=#008cff;textColor=#666666;textColor2=#ffffff;' + flclf + 'tabs=Tab 1,+Tab 2,Tab 3;textSize=17;tabStyle=block;',
										400, 200, '', 'Vertical Tab Bar', false));
			
			var alertCommon = s + '=mxgraph.mockup.containers.alertBox;' + skcl6 + 'strokeColor2=#008cff;strokeColor3=#c4c4c4;textColor=#666666;' + flclf + 'mainText';
			content.appendChild(this.createVertexTemplate(alertCommon + '=Dialog Title;subText=Dialog text line 1,Dialog text line 2;buttonText=Cancel,OK;textSize=17;',
										250, 140, '', 'Dialog Box', false));
			content.appendChild(this.createVertexTemplate(alertCommon + '=Message Title;subText=Message text line 1,Message text line 2,Message text line 3;buttonText=OK;textSize=17;',
										250, 160, '', 'Message Box', false));
		}));
		
		this.addPalette('mockupForms', 'Mockup Forms', false, mxUtils.bind(this, function(content)
		{
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.checkboxGroup;' + skclN + 'textColor=#666666,#008cff;mainText=Option 1;' + mxConstants.STYLE_FONTSIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=none;',
										150, 30, '', 'Checkbox', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.checkboxGroup;' + skcl9 + 'textColor=#666666,#008cff;mainText=Setting 1,Setting 2,+Setting 3,Setting 4;' + mxConstants.STYLE_FONTSIZE + '=17;' + flclf,
										150, 120, '', 'Checkbox Group', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.radioGroup;' + skclN + 'textColor=#666666,#008cff;mainText=Option 1;' + mxConstants.STYLE_FONTSIZE + '=17;' + mxConstants.STYLE_FILLCOLOR + '=none;',
										150, 30, '', 'Radiobutton', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.radioGroup;' + skcl9 + 'textColor=#666666,#008cff;mainText=Setting 1,Setting 2,+Setting 3,Setting 4;' + mxConstants.STYLE_FONTSIZE + '=17;' + flclf,
										150, 120, '', 'Radiobutton Group', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.colorPicker;chosenColor=#aaddff;', 40, 40, '', 'Color Picker', false));

			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.comboBox;' + skcl9 + mxConstants.STYLE_FILLCOLOR + '=#ddeeff;fillColor2=#aaddff;mainText=Option 1;textColor=#666666;textSize=17;',
										150, 30, '', 'Combo Box', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.spinner;' + skcl9 + 'spinLayout=right;spinStyle=normal;adjStyle=triangle;' + mxConstants.STYLE_FILLCOLOR + '=#aaddff;textSize=17;textColor=#666666;',
										150, 60, '', 'Spinner', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.menuBar;' + skcl9 + 'strokeColor2=#c4c4c4;textColor=#666666;textColor2=#ffffff;mainText=File,Edit,Options,Tools,Window,Help;textSize=17;' + flclf + 'fillColor2=#008cff',
										500, 30, '', 'Menu Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.horSlider;' + skcl9 + flclf + 'sliderStyle=basic;sliderPos=20;handleStyle=circle;fillColor2=#ddeeff;',
										150, 30, '', 'Horizontal Slider', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.horSlider;' + skcl9 + flclf + 'sliderStyle=basic;sliderPos=20;handleStyle=circle;fillColor2=#ddeeff;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';',
										30, 150, '', 'Vertical Slider', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.listBox;' + skcl9 + 'textColor=#666666,#008cff;' + flclf + 'mainText=Title;subText=Item 1,Item 2,+Item 3,Item 4;textSize=17;selectedColor=#ddeeff;',
										150, 200, '', 'List Box', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.pwField;' + skcl9 + 'mainText=********', 150, 30, '', 'Password Field', false));

			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.splitter;' + skcl9, 350, 10, '', 'Horizontal Splitter', false));

			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.splitter;' + skcl9 + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';', 10, 350, '', 'Vertical Splitter', false));

			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.wedgeBar;' + skcl6 + 'fillColor2=#008cff;textColor=#666666;textColor2=#ffffff;' + flclf + 'tabs=Tab 1,+Tab 2,Tab 3;' + 'textSize=17;tabStyle=block;',
										400, 30, '', 'Wedge Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.menus_and_buttons.font_style_selector_1;', 136, 31, '', 'Formatting Toolbar 1', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.menus_and_buttons.font_style_selector_2;', 235, 31, '', 'Formatting Toolbar 2', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.menus_and_buttons.font_style_selector_3;', 176, 38, '', 'Formatting Toolbar 3', false));

			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.searchBox;' + skcl9 + 'mainText=Search;strokeColor2=#008cff;' + 'textColor=#666666;textSize=17;',
										150, 30, '', 'Search Box', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.signIn;' + skcl9 + 'strokeColor2=#ddeeff;textColor=#666666;mainText=Sign In,User Name:,johndoe,Password:,********,Forgot Password?,New User,SIGN IN,SIGN UP;textColor2=#ffffff;textSize=12;textSize2=15;fillColor2=#66bbff;',
										200, 300, '', 'Sign In', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.forms.calendar;' + skcl9 + 'strokeColor2=#008cff;mainText=April 2013;textSize=12;textColor=#999999;firstDay=0;startOn=0;days=30;prevDays=31;dayNames=Mo,Tu,We,Th,Fr,Sa,Su;selDay=24;textColor2=#ffffff;',
										160, 175, '', 'Calendar', false));
		}));

		this.addPalette('mockupGraphics', 'Mockup Graphics', false, mxUtils.bind(this, function(content)
		{
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.barChart;' + flclf +  skclN + 'strokeColor2=none;strokeColor3=#666666;fillColor2=#008cff;fillColor3=#dddddd;',
										400, 200, '', 'Bar Chart', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.columnChart;' + flclf +  skclN + 'strokeColor2=none;strokeColor3=#666666;fillColor2=#008cff;fillColor3=#dddddd;',
										400, 200, '', 'Column Chart', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.lineChart;' + flclf +  skclN + 'strokeColor2=#666666;strokeColor3=#008cff;strokeColor4=#dddddd;',
										400, 200, '', 'Line Chart', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.pieChart;' +  mxConstants.STYLE_STROKECOLOR + '=#008cff;parts=10,20,35;partColors=#e0e0e0,#d0d0d0,#c0c0c0,#b0b0b0,#a0a0a0;'+ mxConstants.STYLE_STROKEWIDTH + '=2;',
										200, 200, '', 'Pie Chart', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.iconGrid;' +  skcl9 + 'gridSize=1,1;', 50, 50, '', 'Icon Placeholder', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.iconGrid;' +  skcl9 + 'gridSize=3,3;', 200, 200, '', 'Icon Grid', false));

			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.bubbleChart;' + flclf +  skclN + 'strokeColor2=none;strokeColor3=#666666;fillColor2=#008cff;fillColor3=#dddddd;',
										400, 200, '', 'Bubble Chart', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.gauge;' + skcl9 + 'gaugePos=25;scaleColors=#bbddff,#ddeeff,#99ccff;gaugeLabels=CPU[%],0,100;needleColor=#008cff;' + flclf + 'textColor=#666666;textSize=12;',
										100, 100, '', 'Gauge', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.plotChart;' + flclf +  mxConstants.STYLE_STROKECOLOR + '=#none;strokeColor2=#aaaaaa;strokeColor3=#666666;fillColor2=#99aaff,#0022ff,#008cff;',
										400, 200, '', 'Plot Chart', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.graphics.ganttChart;' + flclf +  skcl9 + 'textColor=#666666;textSize=12;fillColor2=#99ccff,#dddddd;',
										600, 300, '', 'Gantt Chart', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.map;', 250, 250, '', 'Map', false));
		}));

		this.addPalette('mockupMarkup', 'Mockup Markup', false, mxUtils.bind(this, function(content)
		{
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.markup.curlyBrace;' + skcl9, 100, 20, '', 'Horizontal Curly Brace', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.markup.curlyBrace;' + skcl9 + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';', 20, 100, '', 'Vertical Curly Brace', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.markup.line;' + skcl9, 100, 20, '', 'Horizontal Line', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.markup.line;' + skcl9 + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';', 20, 100, '', 'Vertical Line', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=mxgraph.mockup.markup.scratchOut;' + skcl9 + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=4;',
										200, 100, '', 'Scratch Out', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.markup.redX;' + mxConstants.STYLE_FILLCOLOR + '=#ff0000;' + skclN, 200, 100, '', 'Red X', false));
		}));

		this.addPalette('mockupMisc', 'Mockup Misc', false, mxUtils.bind(this, function(content)
		{
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.help_icon;', 32, 32, '', 'Help Icon', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.playbackControls;' + skcl9 + 'fillColor2=#99ddff;strokeColor2=none;fillColor3=#ffffff;strokeColor3=none;',
										250, 30, '', 'Playback Controls', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.progressBar;' + mxConstants.STYLE_FILLCOLOR + '=#cccccc;' + skclN + 'fillColor2=#99ddff;barPos=80;', 200, 20, '', 'Progress Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.shoppingCart;' + skcl9, 50, 50, '', 'Shopping Cart', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.rating;' + skcl9 + mxConstants.STYLE_FILLCOLOR + '=#ffff00;emptyFillColor=#ffffff;grade=4;ratingScale=5;ratingStyle=star;',
										225, 30, '', 'Rating', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.mail2;' + skcl9, 100, 60, '', 'Mail', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.volumeSlider;barPos=80;' + mxConstants.STYLE_FILLCOLOR + '=#cccccc;' + skcl9 + 'fillColor2=#ddeeff;', 250, 30, '', 'Volume Slider', false));
			
			var miscCommon = skcl9 + mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;' + mxConstants.STYLE_STROKEWIDTH + '=2;';
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.editIcon;' + miscCommon, 50, 50, '', 'Edit Icon', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.printIcon;' + miscCommon, 50, 50, '', 'Print Icon', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.shareIcon;' + miscCommon, 50, 50, '', 'Share Icon', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.trashcanIcon;' + miscCommon, 50, 50, '', 'Trashcan Icon', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.copyrightIcon;' + miscCommon, 25, 25, '', 'Copyright', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.registeredIcon;' + miscCommon, 25, 25, '', 'Registered', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.volumeIcon;' + miscCommon, 25, 25, '', 'Volume', false));

			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.ruler;rulerOrient=down;unitSize=10;' + skcl9, 350, 20, '', 'Horizontal Ruler', false));

			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.ruler;rulerOrient=down;unitSize=10;' + skcl9 + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';',
										20, 350, '', 'Vertical Ruler', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.revisionTable;' + skcl9 + 'textColor=#999999;textSize=17;mainText=REVISION HISTORY,REV,DATE,DESCRIPTION,A,5/17/2013,Design modified;',
										400, 75, '', 'Revision Table', false));
			content.appendChild(this.createVertexTemplate(mxConstants.STYLE_SHAPE + '=mxgraph.mockup.misc.statusBar;' + skcl9 + 'fillColor2=#ddeeff;mainText=Status text,Text 2,Text 3;textColor=#999999;textSize=15;strokeColor2=#008cff;',
										500, 30, '', 'Status Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.pin;fillColor2=#00dd00;fillColor3=#004400;' + mxConstants.STYLE_STROKECOLOR + '=#006600;',
										10, 25, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.pin;fillColor2=#dd0000;fillColor3=#440000;' + mxConstants.STYLE_STROKECOLOR + '=#660000;',
										10, 25, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.pin;fillColor2=#ccccff;fillColor3=#0000ff;' + mxConstants.STYLE_STROKECOLOR + '=#000066;',
										10, 25, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.pin;fillColor2=#ffff00;fillColor3=#888800;' + mxConstants.STYLE_STROKECOLOR + '=#999900;',
										10, 25, '', 'Pin', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.pin;fillColor2=#ffa500;fillColor3=#885000;' + mxConstants.STYLE_STROKECOLOR + '=#997000;',
										10, 25, '', 'Pin', false));
		}));

		this.addPalette('mockupNavigation', 'Mockup Navigation', false, mxUtils.bind(this, function(content)
		{
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.navigation.breadcrumb;' + mxConstants.STYLE_STROKECOLOR + '=#c4c4c4;textColor=#666666;textColor2=#008cff;mainText=Layer 1,L2,Layer 3,Layer 4;textSize=17;' + mxConstants.STYLE_STROKEWIDTH + '=4;',
										300, 30, '', 'Breadcrumb', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.navigation.stepBar;' + mxConstants.STYLE_STROKECOLOR + '=#c4c4c4;textColor=#666666;textColor2=#008cff;mainText=Step 1,Step 2,+Step 3,Step 4;textSize=17;' + mxConstants.STYLE_FILLCOLOR + '=#666666;',
										300, 50, '', 'Step Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.navigation.coverFlow;' + mxConstants.STYLE_STROKECOLOR + '=#999999',
										400, 200, '', 'Cover Flow', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.navigation.scrollBar;' + skcl9 + 'barPos=20;fillColor2=#99ddff;strokeColor2=none;',
										200, 20, '', 'Horizontal Scroll Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.navigation.scrollBar;' + skcl9 + 'barPos=20;fillColor2=#99ddff;strokeColor2=none;' + mxConstants.STYLE_DIRECTION + '=' + mxConstants.DIRECTION_NORTH + ';',
										20, 200, '', 'Vertical Scroll Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.navigation.pagination;linkText=<< Prev 1 2 3 4 5 6 7 8 9 10 Next >>;',
										350, 30, '', 'Pagination', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.navigation.pageControl;' + mxConstants.STYLE_FILLCOLOR + '=#999999;' + mxConstants.STYLE_STROKECOLOR + '=#ddeeff;',
										100, 30, '', 'Page Control', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.navigation.mapNavigator;fillColor2=#99ddff;strokeColor2=none;strokeColor3=#ffffff;' + skcl9,
										60, 100, '', 'Map Navigator', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.loading_circle_1;', 90, 90, '', 'Wheel Throbber 1', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.misc.loading_circle_2;', 90, 90, '', 'Wheel Throbber 2', false));
		}));
		
		this.addPalette('mockupText', 'Mockup Text', false, mxUtils.bind(this, function(content)
		{
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.text.link;linkText=Link;textSize=17;textColor=#0000ff;', 150, 30, '', 'Link', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.text.linkBar;' + skcl6 + 'strokeColor2=#c4c4c4;textColor=#0000ff;textColor2=#ffffff;mainText=+Button 1,Button 2,Button 3,Button 4;textSize=17;' + flclf + 'fillColor2=#008cff',
										500, 25, '', 'Link Bar', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.text.callout;linkText=Callout;textSize=17;textColor=#666666;callDir=NW;callStyle=line;' + skcl6,
										200, 100, '', 'Callout', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.text.stickyNote;textColor=#666666;mainText=Note line 1,Note line 2,Note line 3;textSize=17;',
										200, 200, '', 'Sticky Note', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.text.bulletedList;textColor=#666666;mainText=Line 1,Line 2,Line 3,Line 4,Line 5;textSize=17;bulletStyle=hyphen;' + skclN + mxConstants.STYLE_FILLCOLOR + '=none;',
										150, 135, '', 'Bulleted List', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.text.textBox;' + skcl6 + 'mainText=Line 1',
										150, 30, '', 'Text Box', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.text.captcha;' + skcl6 + 'mainText=fG2yQ23',
										150, 50, '', 'Captcha', false));
			content.appendChild(this.createVertexTemplate(s + '=mxgraph.mockup.text.alphanumeric;linkText=0-9 A B C D E F G H I J K L M N O P Q R S T U V X Y Z',
										450, 50, '', 'Alphanumeric', false));
			
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