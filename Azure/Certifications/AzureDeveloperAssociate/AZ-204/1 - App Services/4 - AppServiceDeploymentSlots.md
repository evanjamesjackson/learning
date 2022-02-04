- when deploying an app, you can use a separate slot than the default production slot. App content/configuration elements can then be swapped
between two deployment slots
- benefits of using non-production deployment slots:
    - app changes can be validated in the staging slot before swapping with production
    - deploying to a slot "warms up" all instances of the slot, eliminating app downtime
    - if the changes swapped into production aren't what you expect, you can immediately swap back to the "last known good site"
- the number of slots available is dictated by your ASP
- when swapping two slots, the "target" slots settings are applied to the "source" slot first. This ensure the "target" (usually the "live" slot) remains up-and-running. 
Once that is done, the same operations are performed on the "target" slot. 
- the WEBSITE_OVERRIDE_PRESERVER_DEFAULT_STICKY_SLOT_SETTINGS app service setting (set to false) is required in every slot to make the settings of that slot swappable. This is an "all or nothing" setting
    - to make a setting slot-specific, you can select "Deployment slot setting" when adding the setting. These types of settings will not be swapped.
- auto-swap enables the ability to automatically swap an app into production when you push to a specific slot
- custom warm-up behavior can be added to an app's web.config file
- a proportion of your site's traffic can be automatically routed to a non-production slot
    - "Traffic %" setting in deployment slot
    - you can add a link to bring users back to the prod version of the site using the x-ms-routing-name parameter. This will set a cookie in users' browsers that will ensure
    they're routed to the prod site
