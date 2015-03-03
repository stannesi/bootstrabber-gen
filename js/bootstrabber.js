// JavaScript Document
$.fn.bootstrabber = function(sID, oTabs) {
    return this.each( function() {

        init(sID, this);

        function init( sID, elm ){
            ctx = $(elm);
            divMain = $('<div/>')
			.attr("id", "div" + sID);
			
            divMainTab = $('<div/>')
			.attr("id", "divTab" + sID);

						
			divMainTab.append(_getTabUL(sID))
            .append(_getTabDIV(sID))			
			
			divMain.append($formActn.clone().show());
			
			ctx.append(divMain)
			.append(divMainTab);
			
			_genBtnActions(sID);								
		}
		
		function _genBtnActions(id) {
			txtCont = $("#div"+ id + " form textarea");
			txtTitle = $("#div"+ id + " form div input");
			addBtn = $("#div"+ id + " form div button.add");
			genBtn = $("#div"+ id + " form button.generate");
			spnInfo = $("#div"+ id + " form label span");
			
			addBtn.click( function() {
				if (txtTitle.val().length) {			
					addTab(id, txtTitle.val(), txtCont.val());
					changeInfo(spnInfo, "Tab Added Successfully", "success");
				} else {
					changeInfo(spnInfo, "Tab Title Empty", "important");
				}
			});

			genBtn.click( function() {
				$("#GenCodes textarea").text($('#divTab'+ id).html());
			});
		}
		/*
            $.each(oTabs, function(key, val){
                addTab(sID, key, val);
            });
        }*/

        function addTab( id, title, content ){

           iID  = _autoGenID(id);
           sID  = id + '-' + iID;

            var elmLI = $('<li/>');                //.addClass('active')

                elmA = $('<a/>')
                .attr('href', '#'+ sID)
                .attr('data-toggle', "tab")
                .text(title);

                elmLI.append(elmA);
                $('ul#'+ id).append(elmLI);

                elmDIV = $('<div/>')
                .addClass('tab-pane')
                .attr('id', sID)
                .html(content);

                if (iID == 1) {
                    elmLI.addClass('active');
                    elmDIV.addClass('active');
                }

                $('div#'+ id +'content').append(elmDIV);
        }

        function _autoGenID(id){
            var i = $('#' + id + ' li').length + 1;
            return i;
        }

        function _getTabUL(sID){
            var elmUL = $('<ul/>')
                .addClass('nav nav-tabs IDPTabs')
                .attr('id', sID);
            return elmUL;
        }

        function _getTabDIV(id){
            var $divCont = $('<div/>')
                .addClass('tab-content')
                .attr('id', id + 'content');
            return $divCont;
        }
    });
};


$(document).ready( function() {
	$formActn = $('form.actionForm');
	$formActn.hide();
	
	$("#createTab").click( function() {
		
		sId = $("#tabId").val();
		
		if (sId.length) {
			if (!$('#' + sId).length) {
				$('#tabHolder').bootstrabber(sId, {});
			} else {
				changeInfo("#tabIdSpan", "Insert a unique ID", "important");
			}
		} else {
			changeInfo("#tabIdSpan", "Insert a tab ID", "important");
		}
	});
});

function changeInfo( sel, txt, cls) {
	$(sel).addClass("label-" + cls)
	.text(txt);	
}