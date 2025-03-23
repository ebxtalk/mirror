(function($, pb, undefined){

    var module = {}

    // module configuartion object
    // that holds most of the meta data 
    // about the plugin as well as some other stuffs
    module.config = {
        name : 'PBMetaDescription',
        version: '1.0.0',
        route: null,
        user : null,
        settings: null
    };

    // initialize the module
    // and call the _start method
    module.init = function(){
        this.plugin = pb && pb.plugin.get(this.config.name);

        if(!this.plugin){
            return console.error(
                new Error(this.config.name + ' could not attach to the proboards API')
            );
        }
        
        $.extend(this.config, this.plugin, {
            user: pb.data('user').id || 0,
            route: pb.data('route') || null
        });

        this.plugin = null

        this._start();
    };
    // let the games begin
    //
    module._start = function(){
        var config = this.config;

        var where = config.route.name;
        var param = config.route.params; 
        
        // if on the boards route
        // just render the descriptions
        // and don't do anything else
        if(where === 'board'){
            return this.reload();
        }

        if(where === 'new_thread' || where === 'edit_thread'){
            return this._generate(where);
        }
    }
    // generate the form component
    //
    module._generate = function(location){
        
        // if the board is not in the list, bail
        if(this._isInvalidBoard(pb.data('page').board.id)){
            return;
        }

        var uid = this.config.user

    	// if editing,
    	// the author must be the thread creator
        if(location === 'edit_thread' && pb.data('page').thread.created_by !== uid){
            return;
        }

        // if the description field is aready on the page
        // we don't need to do work
        if($('#pbdescription').length > 0){
            return;
        }

        var val = "";

        // if editing,
        // grab the old description and use 
        // that as the form fields initial value
        if(location === 'edit_thread'){
            val = pb.plugin.key('PBMetaDescription').get(
              this.config.route.params.thread_id  
            );
        }

        // generate form
        var placeholder = this.config.settings.placeholder;

        var field = "<tr id='pbdescription'>"
        + "<td class='subject'>"
        + "<label>Description</label>"
        + "</td>"
        + "<td><div class='subject_input'>"
        + "<input required type='text' name='mdescription' value='"+val+"' placeholder='"+placeholder+"'/>"
        + "</div></td></tr>";

        $('.subject_line tbody').append(field);
        
        // attach click handler on the form        
        this._bindFormActions();
    };
    //
    //
    module._bindFormActions = function(){
        var form = $('#'+proboards.dataHash.form_id);
        var _self = this;

        // listen for a click on the submit button
        form.find('input[type="submit"]')
            .on('click', function(e){
            
            e.preventDefault();

            var description = form.find('input[name="mdescription"]');
            
            // if description field is empty and HTML "required" tag fails
            // add a red border to the field and stop further execution
            if(!description.val()){
                $(description).css({ "border-color" : "red"});
                return;
            }
            // store/update the description
            //
            _self._store(description.val());
            // manually call the form submission
            // as that was the users initial intention
            form.submit();
        })
    };
    //
    //
    module._store = function(description){
        var route = this.config.route;

        var threadId = 0;
        // if editing,
        // grab the thread Id as that will be the key 
        // we need to override the key/object
        if(route.name === 'edit_thread'){
            threadId = pb.data('page').thread.id || 0;

            pb.plugin
              .key('PBMetaDescription')
              .set({objectId : threadId, value: description});

        // otherwise set the description
        // on the 'thread_new event
        // the objectId will get set to the thread Id
         }else{
           pb.plugin
             .key('PBMetaDescription')
             .set_on('thread_new', description);
        }
    };
    //
    //
    module._isInvalidBoard = function(id){
      var boards = this.config.settings.boards;
        
      return boards.indexOf(""+id) === -1;  
    };
    // (re)render anything you have for that route
    // including all meta descriptions
    module.reload = function(){
        var board = this.config.route && this.config.route.params.board_id
        
        if(this._isInvalidBoard(board)){
            return;
        }

        var threads = $('[id^=thread-]');
       
        var _self = this;
        
        $.each(threads, function(thread){
            var id = $(this).attr('id').split('-')[1];
            
            var description = $('<p/>', {
                class: 'description',
                text : pb.plugin.key('PBMetaDescription').get(id)
            });

            var selector = $('#thread-'+id).find(_self.config.settings.selector);
             
            selector.length > 0
                ? $('#thread-'+id).find(selector).append(description)
                : $('#thread-'+id).find('.main .link').append(description);

        });


    };
    // expose selected modules
    // to the window namespace
    window.MetaDescriptions = {
        init : module.init,
        reload : module.reload
    };

    // bind the module to itself and
    // call the init method on document ready
    $(module.init.bind(module));

}(jQuery, pb))
