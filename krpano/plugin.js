/*
    krpano HTML5 Javascript Plugin Example
*/

function krpanoplugin()
{
    var local = this;   // save the 'this' pointer from the current plugin object

    var krpano = null;  // the krpano and plugin interface objects
    var plugin = null;

    var pano;
    var xml_value = 100.0;   // the value for a custom xml attribute

    // registerplugin - startup point for the plugin (required)
    // - krpanointerface = krpano interface object
    // - pluginpath = the fully qualified plugin name (e.g. "plugin[name]")
    // - pluginobject = the xml plugin object itself
    local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
    {
        // get the krpano interface and the plugin object
        krpano = krpanointerface;
        plugin = pluginobject;

        pano = krpanointerface.pano;
        pano.krpano = krpanointerface;
        pano.plugin = pluginobject;

        console.log("-----++++------");
    }

    // unloadplugin - exit point for the plugin (optionally)
    // - will be called from krpano when the plugin will be removed
    // - everything that was added by the plugin should be removed here
    local.unloadplugin = function()
    {
        plugin = null;
        krpano = null;
    }

    // onresize (optionally)
    // - width,height = the new size for the plugin
    // - when not defined then only the krpano plugin html element will be sized
    local.onresize = function(width,height)
    {
        // not used in this example
        // the plugin content will resize automatically because
        // of the width=100%, height=100% CSS style
        return false;
    }

}