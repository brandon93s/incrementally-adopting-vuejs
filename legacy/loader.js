// Sample Microsite Loader
window.microsite = {

    // public entry point to load microsites
    loadRemoteComponent: function(options) {
        this.microservices.load(options.appUrl || '', {
            success: function () {

                // invoke global mount function of component
                window.microservices[options.appName].mount[options.componentName](options.target, { props: options.props });
                
                // optional callback
                if (options.onSuccess && typeof options.onSuccess === "function") {
                    options.onSuccess();
                }
            }
        });
    },

    // microsite loading
    microservices: {

        // app cache
        $loaded: {},

        load: function (app, options) {
            options = options || {};
            app = this.trimSlashes(app);

            var me = this,
                manifest = options.manifest || 'manifest.json',
                appUrl = window.microservicesCdnUrl + "/" + app,
                manifestUrl = appUrl + "/" + manifest;

            // check cache
            if (me.$loaded[manifestUrl]) {
                return;
            }

            // load manifest of application
            $.ajax({
                url: manifestUrl,
                success: function(data) {
                    me.$loaded[manifestUrl] = true;

                    var cssRegex = /\.css+$/i,
                        jsRegex = /\.js+$/i,
                        loadTasks = [];

                    // inject `initial` assets into page
                    $.each(Object.keys(data), function(key, value) {
                        var resourceUrl = appUrl + me.trimSlashes(data[value]);
                        
                        // add css stylesheet
                        if (cssRegex.exec(value) !== null) {
                            loadTasks.push(me.getStyleSheet(resourceUrl));
                        }

                        // add script
                        else if (jsRegex.exec(value) !== null) {
                            loadTasks.push($.getScript(resourceUrl));
                        }
                    });

                    // await all
                    $.when.apply($, loadTasks).done(function() {
                        options.success();
                    });
                }
            });
        },

        // inject stylesheet
        getStyleSheet: function(href) {
            var $d = $.Deferred();
            var $link = $('<link/>',
                {
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: href
                }).appendTo('head');
            $d.resolve($link);
            return $d.promise();
        },

        trimSlashes: function (path) {
            return path.replace(/^\/+|\/+$/g, '');
        }
    }
};