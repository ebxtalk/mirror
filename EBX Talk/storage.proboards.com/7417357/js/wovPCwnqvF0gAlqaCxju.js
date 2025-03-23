$('div#navigation-menu').ready(function () { 
    var settings = proboards.plugin.get('drop_down_nav').settings.drop_nav_settings;
    for(i=0;i<settings.length;i++) {
        var lText = settings[i].main_link_text;
        var lUrl = settings[i].main_link_url;
        var lTarget = settings[i].main_link_target;
        var sLinks = settings[i].subnav_links;
        var pName = settings[i].placement_name;
        var pPlace = settings[i].placement;
        var wView = settings[i].who_sees_it;
        if((proboards.data('user').is_staff == 1 && wView == 'staff') || (proboards.data('user').is_logged_in == 1 && wView == 'members') || (proboards.data('user').is_logged_in == 0 && wView == 'guests') || wView == 'all') {
        	var splitlinks = sLinks.split('\n');
            var sublinks = '';
            for(p=0;p<splitlinks.length;p++) {
                var links = splitlinks[p].split('|');
                if(links[3] == undefined) {
                	sublinks += '<li class="sub-menu-li"><a href="'+links[1]+'" target="'+links[2]+'" class="sub-menu-link">'+links[0]+'</a></li>';
                }
                else if(links[3] != undefined) {
                    var splitsublinks = links[3].split('{');
                    var subsublinks = '';
                    for(t=1;t<splitsublinks.length;t++) {
                        var subLinks = splitsublinks[t].split('}')[0].split(',');
                        subsublinks += '<li class="sub-menu-li"><a href="'+subLinks[1]+'" target="'+links[2]+'" class="sub-menu-link">'+subLinks[0]+'</a></li>';
                    }
                    sublinks += '<li class="sub-menu-li"><a href="'+links[1]+'" target="'+links[2]+'" class="sub-menu-link">'+links[0]+'</a><ul class="sub-menu-ul">'+subsublinks+'</ul></li>';
                }
            }
            if($('div#navigation-menu > ul > li > a:contains('+lText+')').length > 0) {
                $('div#navigation-menu > ul > li > a:contains('+lText+')').parent().addClass('dropDown '+wView+'');
                $('div#navigation-menu > ul > li > a:contains('+lText+')').attr('target',''+lTarget+'');
                $('div#navigation-menu > ul > li > a:contains('+lText+')').parent().append('<ul class="sub-menu-ul">'+sublinks+'</ul>');
            }
           	else if(pName.length) {
                if(pPlace == 'after') {
                	$('div#navigation-menu > ul > li > a:contains('+pName+')').parent().after('<li class="dropDown '+wView+'"><a href="'+lUrl+'" target="'+lTarget+'">'+lText+'</a><ul class="sub-menu-ul">'+sublinks+'</ul></li>');
                }
                else if(pPlace == 'before') {
                	$('div#navigation-menu > ul > li > a:contains('+pName+')').parent().before('<li class="dropDown '+wView+'"><a href="'+lUrl+'" target="'+lTarget+'">'+lText+'</a><ul class="sub-menu-ul">'+sublinks+'</ul></li>');
                }
           	}
            else if(!pName.length) {
                $('div#navigation-menu > ul').append('<li class="dropDown '+wView+'"><a href="'+lUrl+'" target="'+lTarget+'">'+lText+'</a><ul class="sub-menu-ul">'+sublinks+'</ul></li>');
            }
            $('div#navigation-menu a[href*="$[user.id]"]').each(function() {$(this).attr('href',$(this).attr('href').replace("$[user.id]",proboards.data('user').id));});
        }
    }
    var styles = pb.plugin.get('drop_down_nav').settings.styling;
    for(s=0;s<styles.length;s++) {
        var themes = styles[s].themes;
        for(z=0;z<themes.length;z++) {
            if(pb.data('user').theme_id == themes[z]) {
                var lcolor = styles[s].list_item_text_color;
                var lbcolor = styles[s].list_item_background_color;
                var lhcolor = styles[s].list_item_hover_text_color || lcolor;
                var lhbcolor = styles[s].list_item_hover_background_color || lbcolor;
                var alcss = styles[s].additional_list_item_css;
                var alhcss = styles[s].additional_list_item_hover_css;
                var amcss = styles[s].additional_menu_css;
                var amhcss = styles[s].additional_menu_hover_css;
            }
        }
    }
    if(lcolor || lbcolor || lhcolor || lhbcolor || alcss || alhcss || amcss || amhcss) {
        if(lcolor || lbcolor || alcss) {
        	var lcss = '';
            if(lcolor) lcss += 'color: #'+lcolor+' !important;';
            if(lbcolor) lcss += 'background-color: #'+lbcolor+' !important;';
            if(alcss) lcss += ''+alcss+'';
            $('a.sub-menu-link').attr('style', ''+lcss+'');
        }
        if(lhcolor || lhbcolor || alhcss) {
        	var lhcss = '';
            if(lhcolor) lhcss += 'color: #'+lhcolor+' !important;';
            if(lhbcolor) lhcss += 'background-color: #'+lhbcolor+' !important;';
            if(alhcss) lhcss += ''+alhcss+'';
            $('a.sub-menu-link').hover(function() {$(this).attr('style', ''+lhcss+'');}, function() {$(this).attr('style', ''+lcss+'');});
        }
        if(amcss) $('ul.sub-menu-ul').attr('style', ''+amcss+'');
        if(amhcss) $('ul.sub-menu-ul').hover(function() {$(this).attr('style', ''+amhcss+'');}, function() {$(this).attr('style', ''+amcss+'');});
    }
});