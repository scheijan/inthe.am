export default {
    name: 'raven',
    initialize: function(application) {
        Raven.config(
            'https://9b0ea040d8414b2180548e304cac5018@inthe.am/sentry/2',
            {
                whitelistUrls: [/inthe\.am/]
            }
        ).addPlugin(Raven.Plugins.Ember).install();
    }
};
