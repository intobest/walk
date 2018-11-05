define("jquery/tablesorter/2.13.3/widgets",["$"],function(a){var b=a("$");!function(a){"use strict";var b=a.tablesorter=a.tablesorter||{};b.themes={bootstrap:{table:"table table-bordered table-striped",caption:"caption",header:"bootstrap-header",footerRow:"",footerCells:"",icons:"",sortNone:"bootstrap-icon-unsorted",sortAsc:"icon-chevron-up glyphicon glyphicon-chevron-up",sortDesc:"icon-chevron-down glyphicon glyphicon-chevron-down",active:"",hover:"",filterRow:"",even:"",odd:""},jui:{table:"ui-widget ui-widget-content ui-corner-all",caption:"ui-widget-content ui-corner-all",header:"ui-widget-header ui-corner-all ui-state-default",footerRow:"",footerCells:"",icons:"ui-icon",sortNone:"ui-icon-carat-2-n-s",sortAsc:"ui-icon-carat-1-n",sortDesc:"ui-icon-carat-1-s",active:"ui-state-active",hover:"ui-state-hover",filterRow:"",even:"ui-widget-content",odd:"ui-state-default"}},b.storage=function(b,c,d,e){var f,g,h=!1,i={},j=b.config,k=e&&e.id||a(b).attr(e&&e.group||"data-table-group")||b.id||a(".tablesorter").index(a(b)),l=e&&e.url||a(b).attr(e&&e.page||"data-table-page")||j&&j.fixedUrl||window.location.pathname;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","temp"),h=!0,window.localStorage.removeItem("_tmptest")}catch(m){}return a.parseJSON&&(h?i=a.parseJSON(localStorage[c]||"{}"):(g=document.cookie.split(/[;\s|=]/),f=a.inArray(c,g)+1,i=0!==f?a.parseJSON(g[f]||"{}"):{})),(d||""===d)&&window.JSON&&JSON.hasOwnProperty("stringify")?(i[l]||(i[l]={}),i[l][k]=d,h?localStorage[c]=JSON.stringify(i):(f=new Date,f.setTime(f.getTime()+31536e6),document.cookie=c+"="+JSON.stringify(i).replace(/\"/g,'"')+"; expires="+f.toGMTString()+"; path=/"),void 0):i&&i[l]?i[l][k]:{}},b.addHeaderResizeEvent=function(b,c,d){var e,f={timer:250},g=a.extend({},f,d),h=b.config,i=h.widgetOptions,j=function(){i.resize_flag=!0,e=[],h.$headers.each(function(){var b=a.data(this,"savedSizes")||[0,0],c=this.offsetWidth,d=this.offsetHeight;(c!==b[0]||d!==b[1])&&(a.data(this,"savedSizes",[c,d]),e.push(this))}),e.length&&h.$table.trigger("resize",[e]),i.resize_flag=!1};return h.$headers.each(function(){a.data(this,"savedSizes",[this.offsetWidth,this.offsetHeight])}),clearInterval(i.resize_timer),c?(i.resize_flag=!1,!1):(i.resize_timer=setInterval(function(){i.resize_flag||j()},g.timer),void 0)},b.addWidget({id:"uitheme",priority:10,options:{uitheme:"jui"},format:function(c,d,e){var f,g,h,i,j=b.themes,k=d.$table,l="default"!==d.theme?d.theme:e.uitheme||"jui",m=j[j[l]?l:j[e.uitheme]?e.uitheme:"jui"],n=d.$headers,o="tr."+(e.stickyHeaders||"tablesorter-stickyHeader"),p=m.sortNone+" "+m.sortDesc+" "+m.sortAsc;d.debug&&(f=new Date),k.hasClass("tablesorter-"+l)&&d.theme!==l&&c.hasInitialized||(""!==m.even&&(e.zebra[0]+=" "+m.even),""!==m.odd&&(e.zebra[1]+=" "+m.odd),k.find("caption").addClass(m.caption),j=k.removeClass(""===d.theme?"":"tablesorter-"+d.theme).addClass("tablesorter-"+l+" "+m.table).find("tfoot"),j.length&&j.find("tr").addClass(m.footerRow).children("th, td").addClass(m.footerCells),n.addClass(m.header).filter(":not(.sorter-false)").bind("mouseenter.tsuitheme mouseleave.tsuitheme",function(b){a(this)["mouseenter"===b.type?"addClass":"removeClass"](m.hover)}),n.find(".tablesorter-wrapper").length||n.wrapInner('<div class="tablesorter-wrapper" style="position:relative;height:100%;width:100%"></div>'),d.cssIcon&&n.find("."+b.css.icon).addClass(m.icons),k.hasClass("hasFilters")&&n.find(".tablesorter-filter-row").addClass(m.filterRow)),a.each(n,function(c){h=a(this),i=b.css.icon?h.find("."+b.css.icon):h,this.sortDisabled?(h.removeClass(p),i.removeClass(p+" tablesorter-icon "+m.icons)):(j=k.hasClass("hasStickyHeaders")?k.find(o).find("th").eq(c).add(h):h,g=h.hasClass(b.css.sortAsc)?m.sortAsc:h.hasClass(b.css.sortDesc)?m.sortDesc:h.hasClass(b.css.header)?m.sortNone:"",h[g===m.sortNone?"removeClass":"addClass"](m.active),i.removeClass(p).addClass(g))}),d.debug&&b.benchmark("Applying "+l+" theme",f)},remove:function(a,c,d){var e=c.$table,f="object"==typeof d.uitheme?"jui":d.uitheme||"jui",g="object"==typeof d.uitheme?d.uitheme:b.themes[b.themes.hasOwnProperty(f)?f:"jui"],h=e.children("thead").children(),i=g.sortNone+" "+g.sortDesc+" "+g.sortAsc;e.removeClass("tablesorter-"+f+" "+g.table).find(b.css.header).removeClass(g.header),h.unbind("mouseenter.tsuitheme mouseleave.tsuitheme").removeClass(g.hover+" "+i+" "+g.active).find(".tablesorter-filter-row").removeClass(g.filterRow),h.find(".tablesorter-icon").removeClass(g.icons)}}),b.addWidget({id:"columns",priority:30,options:{columns:["primary","secondary","tertiary"]},format:function(c,d,e){var f,g,h,i,j,k,l,m,n,o,p=d.$table,q=d.$tbodies,r=d.sortList,s=r.length,t=d.widgetColumns&&d.widgetColumns.hasOwnProperty("css")?d.widgetColumns.css||t:e&&e.hasOwnProperty("columns")?e.columns||t:t;for(k=t.length-1,l=t.join(" "),d.debug&&(j=new Date),n=0;n<q.length;n++)f=b.processTbody(c,q.eq(n),!0),g=f.children("tr"),o=g.length,g.each(function(){if(i=a(this),"none"!==this.style.display&&(h=i.children().removeClass(l),r&&r[0]&&(h.eq(r[0][0]).addClass(t[0]),s>1)))for(m=1;s>m;m++)h.eq(r[m][0]).addClass(t[m]||t[k])}),b.processTbody(c,f,!1);if(g=e.columns_thead!==!1?["thead tr"]:[],e.columns_tfoot!==!1&&g.push("tfoot tr"),g.length&&(i=p.find(g.join(",")).children().removeClass(l),s))for(m=0;s>m;m++)i.filter('[data-column="'+r[m][0]+'"]').addClass(t[m]||t[k]);d.debug&&b.benchmark("Applying Columns widget",j)},remove:function(c,d,e){var f,g,h=d.$tbodies,i=(e.columns||["primary","secondary","tertiary"]).join(" ");for(d.$headers.removeClass(i),d.$table.children("tfoot").children("tr").children("th, td").removeClass(i),f=0;f<h.length;f++)g=b.processTbody(c,h.eq(f),!0),g.children("tr").each(function(){a(this).children().removeClass(i)}),b.processTbody(c,g,!1)}}),b.addWidget({id:"filter",priority:50,options:{filter_anyMatch:!1,filter_childRows:!1,filter_columnFilters:!0,filter_cssFilter:"",filter_filteredRow:"filtered",filter_formatter:null,filter_functions:null,filter_hideFilters:!1,filter_ignoreCase:!0,filter_liveSearch:!0,filter_onlyAvail:"filter-onlyAvail",filter_reset:null,filter_searchDelay:300,filter_startsWith:!1,filter_useParsedData:!1,filter_serversideFiltering:!1,filter_defaultAttrib:"data-value"},format:function(a,c,d){c.$table.hasClass("hasFilters")||(c.parsers||!c.parsers&&d.filter_serversideFiltering)&&b.filter.init(a,c,d)},remove:function(c,d,e){var f,g,h=d.$table,i=d.$tbodies;for(h.removeClass("hasFilters").unbind("addRows updateCell update updateComplete appendCache search filterStart filterEnd ".split(" ").join(".tsfilter ")).find(".tablesorter-filter-row").remove(),f=0;f<i.length;f++)g=b.processTbody(c,i.eq(f),!0),g.children().removeClass(e.filter_filteredRow).show(),b.processTbody(c,g,!1);e.filter_reset&&a(document).undelegate(e.filter_reset,"click.tsfilter")}}),b.filter={regex:{regex:/^\/((?:\\\/|[^\/])+)\/([mig]{0,3})?$/,child:/tablesorter-childRow/,filtered:/filtered/,type:/undefined|number/,exact:/(^[\"|\'|=]+)|([\"|\'|=]+$)/g,nondigit:/[^\w,. \-()]/g,operators:/[<>=]/g},types:{regex:function(a,c,d,e){if(b.filter.regex.regex.test(c)){var f,g=b.filter.regex.regex.exec(c);try{f=new RegExp(g[1],g[2]).test(e)}catch(h){f=!1}return f}return null},exact:function(a,c,d,e){return c.replace(b.filter.regex.exact,"")==e?!0:null},notMatch:function(b,c,d,e,f,g,h,i){if(/^\!/.test(c)){c=c.replace("!","");var j=e.search(a.trim(c));return""===c?!0:!(i.filter_startsWith?0===j:j>=0)}return null},operators:function(a,c,d,e,f,g,h,i,j){if(/^[<>]=?/.test(c)){var k,l,m=h.config,n=b.formatFloat(c.replace(b.filter.regex.operators,""),h),o=m.parsers[g],p=n;return(j[g]||"numeric"===o.type)&&(k=o.format(""+c.replace(b.filter.regex.operators,""),h,m.$headers.eq(g),g),n="number"!=typeof n||""===k||isNaN(k)?n:k),k=!j[g]&&"numeric"!==o.type||isNaN(n)||!f?isNaN(e)?b.formatFloat(e.replace(b.filter.regex.nondigit,""),h):b.formatFloat(e,h):f,/>/.test(c)&&(l=/>=/.test(c)?k>=n:k>n),/</.test(c)&&(l=/<=/.test(c)?n>=k:n>k),l||""!==p||(l=!0),l}return null},and:function(b,c,d,e){if(/\s+(AND|&&)\s+/g.test(b)){for(var f=c.split(/(?:\s+(?:and|&&)\s+)/g),g=e.search(a.trim(f[0]))>=0,h=f.length-1;g&&h;)g=g&&e.search(a.trim(f[h]))>=0,h--;return g}return null},range:function(a,c,d,e,f,g,h,i,j){if(/\s+(-|to)\s+/.test(c)){var k,l=h.config,m=c.split(/(?: - | to )/),n=b.formatFloat(m[0].replace(b.filter.regex.nondigit,""),h),o=b.formatFloat(m[1].replace(b.filter.regex.nondigit,""),h);return(j[g]||"numeric"===l.parsers[g].type)&&(k=l.parsers[g].format(""+m[0],h,l.$headers.eq(g),g),n=""===k||isNaN(k)?n:k,k=l.parsers[g].format(""+m[1],h,l.$headers.eq(g),g),o=""===k||isNaN(k)?o:k),k=!j[g]&&"numeric"!==l.parsers[g].type||isNaN(n)||isNaN(o)?isNaN(e)?b.formatFloat(e.replace(b.filter.regex.nondigit,""),h):b.formatFloat(e,h):f,n>o&&(k=n,n=o,o=k),k>=n&&o>=k||""===n||""===o}return null},wild:function(a,b,c,d,e,f,g){if(/[\?|\*]/.test(b)||/\s+OR\s+/.test(a)){var h=g.config,i=b.replace(/\s+OR\s+/gi,"|");return!h.$headers.filter('[data-column="'+f+'"]:last').hasClass("filter-match")&&/\|/.test(i)&&(i="^("+i+")$"),new RegExp(i.replace(/\?/g,"\\S{1}").replace(/\*/g,"\\S*")).test(d)}return null},fuzzy:function(a,b,c,d){if(/^~/.test(b)){var e,f=0,g=d.length,h=b.slice(1);for(e=0;g>e;e++)d[e]===h[f]&&(f+=1);return f===h.length?!0:!1}return null}},init:function(c,d,e){var f,g,h,i,j,k;if(d.debug&&(k=new Date),d.$table.addClass("hasFilters"),b.filter.regex.child=new RegExp(d.cssChildRow),b.filter.regex.filtered=new RegExp(e.filter_filteredRow),e.filter_columnFilters!==!1&&d.$headers.filter(".filter-false").length!==d.$headers.length&&b.filter.buildRow(c,d,e),d.$table.bind("addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search ".split(" ").join(".tsfilter "),function(a,e){return/(search|filterReset|filterEnd)/.test(a.type)||(a.stopPropagation(),b.filter.buildDefault(c,!0)),"filterReset"===a.type&&b.filter.searching(c,[]),"filterEnd"===a.type?b.filter.buildDefault(c,!0):(e="search"===a.type?e:"updateComplete"===a.type?d.$table.data("lastSearch"):"",b.filter.searching(c,e)),!1}),b.filter.bindSearch(c,d.$table.find("input.tablesorter-filter")),e.filter_reset&&a(document).delegate(e.filter_reset,"click.tsfilter",function(){b.filter.searching(c,[])}),e.filter_functions)for(i in e.filter_functions)if(e.filter_functions.hasOwnProperty(i)&&"string"==typeof i)if(h=d.$headers.filter('[data-column="'+i+'"]:last'),f="",e.filter_functions[i]!==!0||h.hasClass("filter-false")){if("string"==typeof i&&!h.hasClass("filter-false")){for(g in e.filter_functions[i])"string"==typeof g&&(f+=""===f?'<option value="">'+(h.data("placeholder")||h.attr("data-placeholder")||"")+"</option>":"",f+='<option value="'+g+'">'+g+"</option>");d.$table.find("thead").find('select.tablesorter-filter[data-column="'+i+'"]').append(f)}}else b.filter.buildSelect(i);b.filter.buildDefault(c,!0),d.$table.find("select.tablesorter-filter").bind("change search",function(a,d){b.filter.checkFilters(c,d)}),e.filter_hideFilters&&b.filter.hideFilters(c,d,e),d.showProcessing&&d.$table.bind("filterStart.tsfilter filterEnd.tsfilter",function(e,f){h=f?d.$table.find("."+b.css.header).filter("[data-column]").filter(function(){return""!==f[a(this).data("column")]}):"",b.isProcessing(c,"filterStart"===e.type,f?h:"")}),d.debug&&b.benchmark("Applying Filter widget",k),d.$table.bind("tablesorter-initialized pagerInitialized",function(){j=b.filter.setDefaults(c,d,e)||[],j.length&&b.setFilters(c,j,!0)}),e.filter_Initialized=!0,d.$table.trigger("filterInit"),b.filter.checkFilters(c)},setDefaults:function(b,c,d){var e,f=[],g=c.columns;for(e=0;g>e;e++)f[e]=c.$headers.filter('[data-column="'+e+'"]:last').attr(d.filter_defaultAttrib)||f[e];return a(b).data("lastSearch",f),f},buildRow:function(c,d,e){var f,g,h,i,j=d.columns,k='<tr class="tablesorter-filter-row">';for(f=0;j>f;f++)k+="<td></td>";for(d.$filters=a(k+="</tr>").appendTo(d.$table.find("thead").eq(0)).find("td"),f=0;j>f;f++)i=!1,g=d.$headers.filter('[data-column="'+f+'"]:last'),h=e.filter_functions&&e.filter_functions[f]&&"function"!=typeof e.filter_functions[f]||g.hasClass("filter-select"),i=b.getData?"false"===b.getData(g[0],d.headers[f],"filter"):d.headers[f]&&d.headers[f].hasOwnProperty("filter")&&d.headers[f].filter===!1||g.hasClass("filter-false"),h?k=a("<select>").appendTo(d.$filters.eq(f)):(e.filter_formatter&&a.isFunction(e.filter_formatter[f])?(k=e.filter_formatter[f](d.$filters.eq(f),f),k&&0===k.length&&(k=d.$filters.eq(f).children("input")),k&&(0===k.parent().length||k.parent().length&&k.parent()[0]!==d.$filters[f])&&d.$filters.eq(f).append(k)):k=a('<input type="search">').appendTo(d.$filters.eq(f)),k&&k.attr("placeholder",g.data("placeholder")||g.attr("data-placeholder")||"")),k&&(k.addClass("tablesorter-filter "+e.filter_cssFilter).attr("data-column",f),i&&(k.addClass("disabled")[0].disabled=!0))},bindSearch:function(c,d){c=a(c)[0];var e,f=c.config.widgetOptions;d.bind("keyup search",function(d,g){if(27===d.which)this.value="";else if("number"==typeof f.filter_liveSearch&&this.value.length<f.filter_liveSearch&&""!==this.value||"keyup"===d.type&&(d.which<32&&8!==d.which&&f.filter_liveSearch===!0&&13!==d.which||d.which>=37&&d.which<=40||13!==d.which&&f.filter_liveSearch===!1))return;e=a(this).hasClass("tablesorter-filter")?g:[a(this).val()],b.filter.searching(c,g,e)})},checkFilters:function(c,d){var e=c.config,f=e.widgetOptions,g=a.isArray(d),h=g?d:b.getFilters(c),i=(h||[]).join("");return g&&b.setFilters(c,h),f.filter_hideFilters&&e.$table.find(".tablesorter-filter-row").trigger(""===i?"mouseleave":"mouseenter"),e.lastCombinedFilter!==i||d===!1?(e.$table.trigger("filterStart",[h]),e.showProcessing?(setTimeout(function(){return b.filter.findRows(c,h,i),!1},30),void 0):(b.filter.findRows(c,h,i),!1)):void 0},hideFilters:function(c,d){var e,f,g;d.$table.find(".tablesorter-filter-row").addClass("hideme").bind("mouseenter mouseleave",function(d){var f=d;e=a(this),clearTimeout(g),g=setTimeout(function(){/enter|over/.test(f.type)?e.removeClass("hideme"):a(document.activeElement).closest("tr")[0]!==e[0]&&""===b.getFilters(c).join("")&&e.addClass("hideme")},200)}).find("input, select").bind("focus blur",function(d){f=a(this).closest("tr"),clearTimeout(g);var e=d;g=setTimeout(function(){""===b.getFilters(c).join("")&&f["focus"===e.type?"removeClass":"addClass"]("hideme")},200)})},findRows:function(c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z=c.config,A=z.widgetOptions,B=z.columns,C=z.$tbodies,D=["range","operators"],E=z.$headers.map(function(c){return b.getData?"parsed"===b.getData(z.$headers.filter('[data-column="'+c+'"]:last'),z.headers[c],"filter"):a(this).hasClass("filter-parsed")}).get();for(z.debug&&(y=new Date),j=0;j<C.length;j++)if(!C.eq(j).hasClass(b.css.info)){if(k=b.processTbody(c,C.eq(j),!0),h=k.children("tr").not("."+z.cssChildRow),g=h.length,""===e||A.filter_serversideFiltering)k.children().show().removeClass(A.filter_filteredRow);else for(v=!0,s=z.lastSearch||z.$table.data("lastSearch")||[],a.each(d,function(a,b){v=0===(b||"").indexOf(s[a]||"")&&v&&!/(\s+or\s+|\|)/g.test(b||"")}),v&&0===h.filter(":visible").length&&(v=!1),i=0;g>i;i++)if(n=h[i].className,!(b.filter.regex.child.test(n)||v&&b.filter.regex.filtered.test(n))){for(x=!0,n=h.eq(i).nextUntil("tr:not(."+z.cssChildRow+")"),o=n.length&&A.filter_childRows?n.text():"",o=A.filter_ignoreCase?o.toLocaleLowerCase():o,l=h.eq(i).children("td"),m=0;B>m;m++)if(d[m]||A.filter_anyMatch)if(f=z.cache[j].normalized[i][m],A.filter_useParsedData||E[m]?p=f:(p=a.trim(l.eq(m).text()),p=z.sortLocaleCompare?b.replaceAccents(p):p),q=!b.filter.regex.type.test(typeof p)&&A.filter_ignoreCase?p.toLocaleLowerCase():p,u=x,("undefined"==typeof d[m]||null===d[m])&&(d[m]=A.filter_anyMatch?e:d[m]),d[m]=z.sortLocaleCompare?b.replaceAccents(d[m]):d[m],r=A.filter_ignoreCase?d[m].toLocaleLowerCase():d[m],A.filter_functions&&A.filter_functions[m]?A.filter_functions[m]===!0?u=z.$headers.filter('[data-column="'+m+'"]:last').hasClass("filter-match")?q.search(r)>=0:d[m]===p:"function"==typeof A.filter_functions[m]?u=A.filter_functions[m](p,f,d[m],m,h.eq(i)):"function"==typeof A.filter_functions[m][d[m]]&&(u=A.filter_functions[m][d[m]](p,f,d[m],m,h.eq(i))):(w=null,a.each(b.filter.types,function(a,b){return(!A.filter_anyMatch||A.filter_anyMatch&&D.indexOf(a)<0)&&(t=b(d[m],r,p,q,f,m,c,A,E),null!==t)?(w=t,!1):void 0}),null!==w?u=w:(p=(q+o).indexOf(r),u=!A.filter_startsWith&&p>=0||A.filter_startsWith&&0===p)),A.filter_anyMatch){if(x=u)break}else x=u?x:!1;h[i].style.display=x?"":"none",h.eq(i)[x?"removeClass":"addClass"](A.filter_filteredRow),n.length&&((z.pager&&z.pager.countChildRows||A.pager_countChildRows)&&n[x?"removeClass":"addClass"](A.filter_filteredRow),n.toggle(x))}b.processTbody(c,k,!1)}z.lastCombinedFilter=e,z.lastSearch=d,z.$table.data("lastSearch",d),z.debug&&b.benchmark("Completed filter widget search",y),z.$table.trigger("applyWidgets"),z.$table.trigger("filterEnd")},buildSelect:function(c,d,e,f){d=parseInt(d,10);var g,h,i,j,k,l,m=c.config,n=m.widgetOptions,o=m.$tbodies,p=[],q=m.$headers.filter('[data-column="'+d+'"]:last'),r='<option value="">'+(q.data("placeholder")||q.attr("data-placeholder")||"")+"</option>";for(i=0;i<o.length;i++)for(j=m.cache[i].row.length,h=0;j>h;h++)f&&m.cache[i].row[h][0].className.match(n.filter_filteredRow)||(n.filter_useParsedData?p.push(""+m.cache[i].normalized[h][d]):(q=m.cache[i].row[h][0].cells[d],q&&p.push(a.trim(q.textContent||q.innerText||a(q).text()))));for(p=a.grep(p,function(b,c){return a.inArray(b,p)===c}),p=b.sortNatural?p.sort(function(a,c){return b.sortNatural(a,c)}):p.sort(!0),k=m.$table.find("thead").find('select.tablesorter-filter[data-column="'+d+'"]').val(),g=0;g<p.length;g++)l=p[g].replace(/\"/g,"&quot;"),r+=""!==p[g]?'<option value="'+l+'"'+(k===l?' selected="selected"':"")+">"+p[g]+"</option>":"";m.$table.find("thead").find('select.tablesorter-filter[data-column="'+d+'"]')[e?"html":"append"](r)},buildDefault:function(a,c){var d,e,f=a.config,g=f.widgetOptions,h=f.columns;for(d=0;h>d;d++)e=f.$headers.filter('[data-column="'+d+'"]:last'),(e.hasClass("filter-select")||g.filter_functions&&g.filter_functions[d]===!0)&&!e.hasClass("filter-false")&&(g.filter_functions||(g.filter_functions={}),g.filter_functions[d]=!0,b.filter.buildSelect(a,d,c,e.hasClass(g.filter_onlyAvail)))},searching:function(a,c,d){if("undefined"==typeof c||c===!0||d){var e=a.config.widgetOptions;clearTimeout(e.searchTimer),e.searchTimer=setTimeout(function(){b.filter.checkFilters(a,d||c)},e.filter_liveSearch?e.filter_searchDelay:10)}else b.filter.checkFilters(a,c)}},b.getFilters=function(b){var c=b?a(b)[0].config:{};return c&&c.widgetOptions&&!c.widgetOptions.filter_columnFilters?a(b).data("lastSearch"):c&&c.$filters?c.$filters.map(function(b,c){return a(c).find(".tablesorter-filter").val()||""}).get()||[]:!1},b.setFilters=function(b,c,d){var e=a(b),f=e.length?e[0].config:{},g=f&&f.$filters?f.$filters.each(function(b,d){a(d).find(".tablesorter-filter").val(c[b]||"")}).trigger("change.tsfilter")||!1:!1;return d&&e.trigger("search",[c,!1]),!!g},b.addWidget({id:"stickyHeaders",priority:60,options:{stickyHeaders:"",stickyHeaders_offset:0,stickyHeaders_cloneId:"-sticky",stickyHeaders_addResizeEvent:!0,stickyHeaders_includeCaption:!0,stickyHeaders_zIndex:2},format:function(c,d,e){if(!d.$table.hasClass("hasStickyHeaders")){var f,g=d.$table,h=a(window),i=g.children("thead:first"),j=i.children("tr:not(.sticky-false)").children(),k=".tablesorter-header-inner",l=g.find("tfoot"),m=".tablesorter-filter",n=isNaN(e.stickyHeaders_offset)?a(e.stickyHeaders_offset):"",o=n.length?n.height()||0:parseInt(e.stickyHeaders_offset,10)||0,p=e.stickyHeaders_zIndex?e.stickyHeaders_zIndex:2,q=e.$sticky=g.clone().addClass("containsStickyHeaders").css({position:"fixed",margin:0,top:o,visibility:"hidden",zIndex:p}),r=q.children("thead:first").addClass("tablesorter-stickyHeader "+e.stickyHeaders),s="",t=0,u=!1,v=function(){o=n.length?n.height()||0:parseInt(e.stickyHeaders_offset,10)||0;var b=navigator.userAgent;t=0,"collapse"===g.css("border-collapse")||/(webkit|msie)/i.test(b)||(t=2*parseInt(j.eq(0).css("border-left-width"),10)),q.css({left:i.offset().left-h.scrollLeft()-t,width:g.width()}),f.filter(":visible").each(function(b){var c=j.filter(":visible").eq(b);a(this).css({width:c.width()-t,height:c.height()}).find(k).width(c.find(k).width())})};q.attr("id")&&(q[0].id+=e.stickyHeaders_cloneId),q.find("thead:gt(0), tr.sticky-false, tbody, tfoot").remove(),e.stickyHeaders_includeCaption||q.find("caption").remove(),f=r.children().children(),q.css({height:0,width:0,padding:0,margin:0,border:0}),f.find(".tablesorter-resizer").remove(),g.addClass("hasStickyHeaders").bind("sortEnd.tsSticky",function(){j.filter(":visible").each(function(c){var e=f.filter(":visible").eq(c);e.attr("class",a(this).attr("class")).removeClass(b.css.processing+" "+d.cssProcessing),d.cssIcon&&e.find("."+b.css.icon).attr("class",a(this).find("."+b.css.icon).attr("class"))})}).bind("pagerComplete.tsSticky",function(){v()}),j.find(d.selectorSort).add(d.$headers.filter(d.selectorSort)).each(function(b){var c=a(this),e=r.children("tr.tablesorter-headerRow").children().eq(b).bind("mouseup",function(a){c.trigger(a,!0)});d.cancelSelection&&e.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})}),g.after(q),h.bind("scroll.tsSticky resize.tsSticky",function(a){if(g.is(":visible")){var b="tablesorter-sticky-",c=g.offset(),d=e.stickyHeaders_includeCaption?0:g.find("caption").outerHeight(!0),f=h.scrollTop()+o-d,j=g.height()-(q.height()+(l.height()||0)),k=f>c.top&&f<c.top+j?"visible":"hidden";q.removeClass(b+"visible "+b+"hidden").addClass(b+k).css({left:i.offset().left-h.scrollLeft()-t,visibility:k}),(k!==s||"resize"===a.type)&&(v(),s=k)}}),e.stickyHeaders_addResizeEvent&&b.addHeaderResizeEvent(c),g.bind("filterEnd",function(){u||r.find(".tablesorter-filter-row").children().each(function(b){a(this).find(m).val(d.$filters.find(m).eq(b).val())})}),f.find(m).bind("keyup search change",function(b){if(!(b.which<32&&8!==b.which||b.which>=37&&b.which<=40)){u=!0;var c=a(this),f=c.attr("data-column");d.$filters.find(m).eq(f).val(c.val()).trigger("search"),setTimeout(function(){u=!1},e.filter_searchDelay)}}),g.trigger("stickyHeadersInit")}},remove:function(c,d,e){d.$table.removeClass("hasStickyHeaders").unbind("sortEnd.tsSticky pagerComplete.tsSticky").find(".tablesorter-stickyHeader").remove(),e.$sticky&&e.$sticky.length&&e.$sticky.remove(),a(".hasStickyHeaders").length||a(window).unbind("scroll.tsSticky resize.tsSticky"),b.addHeaderResizeEvent(c,!1)}}),b.addWidget({id:"resizable",priority:40,options:{resizable:!0,resizable_addLastColumn:!1},format:function(c,d,e){if(!d.$table.hasClass("hasResizable")){d.$table.addClass("hasResizable");var f,g,h,i,j,k,l,m,n={},o=d.$table,p=0,q=null,r=null,s=Math.abs(o.parent().width()-o.width())<20,t=function(){b.storage&&q&&(n[q.index()]=q.width(),n[r.index()]=r.width(),q.width(n[q.index()]),r.width(n[r.index()]),e.resizable!==!1&&b.storage(c,"tablesorter-resizable",n)),p=0,q=r=null,a(window).trigger("resize")};if(n=b.storage&&e.resizable!==!1?b.storage(c,"tablesorter-resizable"):{})for(i in n)!isNaN(i)&&i<d.$headers.length&&d.$headers.eq(i).width(n[i]);f=o.children("thead:first").children("tr"),f.children().each(function(){g=a(this),h=g.attr("data-column"),i="false"===b.getData(g,d.headers[h],"resizable"),f.children().filter('[data-column="'+h+'"]').toggleClass("resizable-false",i)}),f.each(function(){j=a(this).children(":not(.resizable-false)"),a(this).find(".tablesorter-wrapper").length||j.wrapInner('<div class="tablesorter-wrapper" style="position:relative;height:100%;width:100%"></div>'),e.resizable_addLastColumn||(j=j.slice(0,-1)),k=k?k.add(j):j}),k.each(function(){f=a(this),i=parseInt(f.css("padding-right"),10)+10,g='<div class="tablesorter-resizer" style="cursor:w-resize;position:absolute;z-index:1;right:-'+i+'px;top:0;height:100%;width:20px;"></div>',f.find(".tablesorter-wrapper").append(g)}).bind("mousemove.tsresize",function(a){0!==p&&q&&(l=a.pageX-p,m=q.width(),q.width(m+l),q.width()!==m&&s&&r.width(r.width()-l),p=a.pageX)}).bind("mouseup.tsresize",function(){t()}).find(".tablesorter-resizer,.tablesorter-resizer-grip").bind("mousedown",function(b){q=a(b.target).closest("th"),g=d.$headers.filter('[data-column="'+q.attr("data-column")+'"]'),g.length>1&&(q=q.add(g)),r=b.shiftKey?q.parent().find("th:not(.resizable-false)").filter(":last"):q.nextAll(":not(.resizable-false)").eq(0),p=b.pageX}),o.find("thead:first").bind("mouseup.tsresize mouseleave.tsresize",function(){t()}).bind("contextmenu.tsresize",function(){b.resizableReset(c);var d=a.isEmptyObject?a.isEmptyObject(n):n==={};return n={},d})}},remove:function(a,c){c.$table.removeClass("hasResizable").find("thead").unbind("mouseup.tsresize mouseleave.tsresize contextmenu.tsresize").find("tr").children().unbind("mousemove.tsresize mouseup.tsresize").find(".tablesorter-resizer,.tablesorter-resizer-grip").remove(),b.resizableReset(a)}}),b.resizableReset=function(a){a.config.$headers.filter(":not(.resizable-false)").css("width",""),b.storage&&b.storage(a,"tablesorter-resizable",{})},b.addWidget({id:"saveSort",priority:20,options:{saveSort:!0},init:function(a,b,c,d){b.format(a,c,d,!0)},format:function(c,d,e,f){var g,h,i=d.$table,j=e.saveSort!==!1,k={sortList:d.sortList};d.debug&&(h=new Date),i.hasClass("hasSaveSort")?j&&c.hasInitialized&&b.storage&&(b.storage(c,"tablesorter-savesort",k),d.debug&&b.benchmark("saveSort widget: Saving last sort: "+d.sortList,h)):(i.addClass("hasSaveSort"),k="",b.storage&&(g=b.storage(c,"tablesorter-savesort"),k=g&&g.hasOwnProperty("sortList")&&a.isArray(g.sortList)?g.sortList:"",d.debug&&b.benchmark('saveSort: Last sort loaded: "'+k+'"',h),i.bind("saveSortReset",function(a){a.stopPropagation(),b.storage(c,"tablesorter-savesort","")})),f&&k&&k.length>0?d.sortList=k:c.hasInitialized&&k&&k.length>0&&i.trigger("sorton",[k]))},remove:function(a){b.storage&&b.storage(a,"tablesorter-savesort","")}})}(b)});
