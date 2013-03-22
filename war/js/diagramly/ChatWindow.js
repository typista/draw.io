function ChatWindow(title, content, x, y, width, height, rtDoc, chatMap)
{
	this.doc = rtDoc;
	this.rtModel = rtDoc.getModel();
	this.chatMap = chatMap;

	this.collabColor = this.getMyCollaboratorColor();

	var mainDiv = document.createElement('div');
	mainDiv.id = 'mainDiv';
	var chatDiv = document.createElement('div');
	chatDiv.style.padding = '3px';
	mainDiv.appendChild(chatDiv);
	var chatLineDiv = document.createElement('div');
	chatLineDiv.style.paddingLeft = '3px';
	chatLineDiv.style.paddingRight = '15px';
	mainDiv.appendChild(chatLineDiv);

	this.chatArea = document.createElement('div');
	this.chatArea.style.backgroundColor = 'white';

	this.chatArea.style.overflowX = 'hidden';
	this.chatArea.style.overflowY = 'auto';
	this.chatArea.style.width = '98%';
	this.chatArea.style.resize = 'none';
	chatDiv.appendChild(this.chatArea);

	this.chatLineArea = document.createElement('textarea');
	this.chatLineArea.style.resize = 'none';
	this.chatLineArea.rows = 1;
	this.chatLineArea.onkeydown = mxUtils.bind(this, function(evt)
	{
		var key = evt.keyCode || window.event.keyCode;
		if (key == 13 && this.chatLineArea.value != '')
		{
			this.sendMessage();
		}
	});

	this.sendBtn = document.createElement('button');
	this.sendBtn.style.cssFloat = 'right';
	mxUtils.write(this.sendBtn, mxResources.get('sendMessage'));
	mxEvent.addListener(this.sendBtn, 'click', mxUtils.bind(this, function(evt)
	{
		if (this.chatLineArea.value != '')
		{
			this.sendMessage();
		}
	}));
	chatLineDiv.appendChild(this.chatLineArea);
	chatLineDiv.appendChild(this.sendBtn);

	this.window = new mxWindow(title, mainDiv, x, y, width, height, true, true);
	this.window.setMaximizable(true);
	this.window.setScrollable(true);
	this.window.setResizable(true);
	this.window.setVisible(true);

	this.handleResize();

	this.window.addListener(mxEvent.RESIZE_END, mxUtils.bind(this, this.handleResize));
	this.window.addListener(mxEvent.MAXIMIZE, mxUtils.bind(this.handleResize));
	this.window.addListener(mxEvent.NORMALIZE, mxUtils.bind(this.handleResize));

	this.doc.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_JOINED, mxUtils.bind(this, this.collaboratorListener));
	this.doc.addEventListener(gapi.drive.realtime.EventType.COLLABORATOR_LEFT, mxUtils.bind(this, this.collaboratorListener));

	this.chatMap.addEventListener(gapi.drive.realtime.EventType.VALUE_CHANGED, mxUtils.bind(this, function(evt)
	{
		this.updateChatArea(evt);
	}));
}

ChatWindow.prototype.window = null;
ChatWindow.prototype.doc = null;

ChatWindow.prototype.chatMap = null;

ChatWindow.prototype.setChatMap = function(chatMap)
{
	this.chatMap = chatMap;
}

ChatWindow.prototype.sendMessage = function()
{
	this.rtModel.beginCompoundOperation();
	
	var msgObj = {collaboratorColor : this.collabColor, collaboratorName : mxIntegration.getDisplayName(), text : this.chatLineArea.value, version : 1};
	this.chatMap.set(mxIntegration.userId, msgObj);
	this.rtModel.endCompoundOperation();

	this.chatLineArea.value = '';
	this.chatLineArea.selectionStart = 0;
}

ChatWindow.prototype.updateChatArea = function(evt)
{
	var map = evt.target;
	var newMsgObj = map.get(evt.property);
	
	var headingElt = '<span style="color : ' + newMsgObj.collaboratorColor + ';">&#x25BA;</span>' + '<b>' + newMsgObj.collaboratorName + '</b>' + ': ';
	var newChatLine = headingElt + this.htmlEscape(newMsgObj.text) + '<br>';
	
	this.chatArea.innerHTML += newChatLine;
	this.chatArea.scrollTop = this.chatArea.scrollHeight;
}

ChatWindow.prototype.handleResize = function()
{
	var elt = this.window.getElement();
	this.chatArea.style.height = Math.max(0, elt.offsetHeight - 70) + 'px';
	this.chatLineArea.style.width = elt.offsetWidth - this.sendBtn.offsetWidth - 30 + 'px';

}

ChatWindow.prototype.collaboratorListener = function(evt)
{
	var msg = null;

	if(evt.collaborator.isMe) 
	{
		return;
	}
	
	if (evt.type == gapi.drive.realtime.EventType.COLLABORATOR_JOINED)
	{
		msg = '<span style="color : ' + evt.collaborator.color + ';">&#x25B2</span>' + '<i>' + mxResources.get('chatJoined', [evt.collaborator.displayName]) + '</i>';
	} else if (evt.type == gapi.drive.realtime.EventType.COLLABORATOR_LEFT)
	{
		msg = '<span style="color : ' + evt.collaborator.color + ';">&#x25BC</span>' + '<i>' + mxResources.get('chatLeft', [evt.collaborator.displayName]) + '</i>';
	} else
	{
		return;
	}

	this.chatArea.innerHTML = this.chatArea.innerHTML + msg + '<br>';
	this.chatArea.scrollTop = this.chatArea.scrollHeight;
}

ChatWindow.prototype.getMyCollaboratorColor = function()
{
	var collaboratorsList = this.doc.getCollaborators();
	for ( var i = 0; i < collaboratorsList.length; i++)
	{
		var collaborator = collaboratorsList[i];
		if (collaborator.isMe)
		{
			return collaborator.color;
		}
	}

	return '';
}

ChatWindow.prototype.destroy = function() 
{
	this.window.destroy();
}

ChatWindow.prototype.htmlEscape = function(string) 
{
	return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}