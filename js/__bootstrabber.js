$.fn.bootstrabber = function(sID, oTabs) {
    return this.each( function() {

        init(sID, this);
        printCode(this);

        function init( sID, elm ){
            ctx = $(elm);
            $(ctx).append(_getTabUL(sID));
            $(ctx).append(_getTabDIV(sID));

            $.each(oTabs, function(key, val){
                addTab(sID, key, val);
            });
        }

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

        function printCode(that){
            console.log($(that).html());
        }
    });
};