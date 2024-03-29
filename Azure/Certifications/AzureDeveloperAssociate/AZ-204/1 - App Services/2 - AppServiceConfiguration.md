- configuration settings within the App Service portal override those in web.config and appsettings.config, and are encrypted-at-rest, so
are safe for things like production passwords
- connection strings are really only intended for .NET apps
- handlers allow you to add custom script processors when the app serves certain types of files (e.g. run a script everytime a \*.php file
is accessed)
- different types of diagnostic logging:
- application logging (Windows/Linux) - logs messages generated by your application's code
- web server logs (Windows) - raw HTTP request data
- detailed error logging - copies of the .htm error pages that would have been sent to clients' browsers
- failed request tracing (Windows)
- deployment logging (Windows/Linux)
- configuration settings can be used to enable/disable feature flags
- feature flags are made up of a the name of the flag and one or more filters
